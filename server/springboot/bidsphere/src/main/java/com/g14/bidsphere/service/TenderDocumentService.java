package com.g14.bidsphere.service;

import com.g14.bidsphere.model.Tender;
import com.g14.bidsphere.model.TenderDocument;
import com.g14.bidsphere.repository.TenderDocumentRepository;
import com.g14.bidsphere.repository.TenderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectResponse;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TenderDocumentService {

    @Autowired
    private TenderDocumentRepository tenderDocumentRepository;

    @Autowired
    private TenderRepository tenderRepository;

    @Autowired
    private S3Client s3Client;

    @Value("${aws.s3.bucketName}")
    private String bucketName;

    @Value("${aws.s3.region}")
    private String region;

    public List<TenderDocument> getAllDocuments() {
        return tenderDocumentRepository.findAll();
    }

    public Optional<TenderDocument> getDocumentById(String id) {
        return tenderDocumentRepository.findById(id);
    }

    public TenderDocument createDocument(MultipartFile file, String userId, String tenderId, String type) throws IOException {
        String key = Paths.get("documents", userId, tenderId, file.getOriginalFilename()).toString().replace("\\", "/");

        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .build();

        PutObjectResponse putObjectResponse = s3Client.putObject(putObjectRequest, software.amazon.awssdk.core.sync.RequestBody.fromBytes(file.getBytes()));

        if (putObjectResponse.sdkHttpResponse().isSuccessful()) {
            String fileUrl = String.format("https://%s.s3.%s.amazonaws.com/%s", bucketName, region, key);

            TenderDocument document = new TenderDocument();
            document.setUserId(userId);
            document.setTenderId(tenderId);
            document.setUrl(fileUrl);
            document.setType(type);
            document.setUploadedAt(new Date());

            TenderDocument savedDocument = tenderDocumentRepository.save(document);

            // Update Tender with new document reference
            Optional<Tender> tenderOptional = tenderRepository.findById(tenderId);
            if (tenderOptional.isPresent()) {
                Tender tender = tenderOptional.get();
                tender.getDocuments().add(savedDocument.getId());
                tenderRepository.save(tender);
            }

            return savedDocument;
        } else {
            throw new RuntimeException("Failed to upload document to S3");
        }
    }

    public TenderDocument updateDocument(String id, TenderDocument document) {
        return tenderDocumentRepository.findById(id).map(existingDocument -> {
            existingDocument.setUrl(document.getUrl());
            existingDocument.setType(document.getType());
            existingDocument.setUploadedAt(new Date());
            return tenderDocumentRepository.save(existingDocument);
        }).orElseThrow(() -> new RuntimeException("Document not found with id " + id));
    }

    public void deleteDocument(String id) {
        if (!tenderDocumentRepository.existsById(id)) {
            throw new RuntimeException("Document not found with id " + id);
        }
        tenderDocumentRepository.deleteById(id);
    }
}
