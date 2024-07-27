package com.g14.bidsphere.controller;

import com.g14.bidsphere.model.TenderDocument;
import com.g14.bidsphere.service.TenderDocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/documents")
public class TenderDocumentController {

    @Autowired
    private TenderDocumentService tenderDocumentService;

    @GetMapping
    public List<TenderDocument> getAllDocuments() {
        return tenderDocumentService.getAllDocuments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TenderDocument> getDocumentById(@PathVariable String id) {
        return tenderDocumentService.getDocumentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public List<TenderDocument> createDocuments(@RequestParam("files") List<MultipartFile> files,
                                                @RequestParam("userId") String userId,
                                                @RequestParam("tenderId") String tenderId,
                                                @RequestParam("type") String type) throws IOException {
        return tenderDocumentService.createDocuments(files, userId, tenderId, type);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TenderDocument> updateDocument(@PathVariable String id, @RequestBody TenderDocument document) {
        return ResponseEntity.ok(tenderDocumentService.updateDocument(id, document));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDocument(@PathVariable String id) {
        tenderDocumentService.deleteDocument(id);
        return ResponseEntity.noContent().build();
    }
}
