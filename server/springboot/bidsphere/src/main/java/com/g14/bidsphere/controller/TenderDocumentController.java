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
    private TenderDocumentService documentService;

    @GetMapping
    public List<TenderDocument> getAllDocuments() {
        return documentService.getAllDocuments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TenderDocument> getDocumentById(@PathVariable String id) {
        return documentService.getDocumentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TenderDocument> createDocument(@RequestParam("file") MultipartFile file,
                                                         @RequestParam("userId") String userId,
                                                         @RequestParam("tenderId") String tenderId,
                                                         @RequestParam("type") String type) {
        try {
            TenderDocument document = documentService.createDocument(file, userId, tenderId, type);
            return ResponseEntity.ok(document);
        } catch (IOException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<TenderDocument> updateDocument(@PathVariable String id, @RequestBody TenderDocument document) {
        return ResponseEntity.ok(documentService.updateDocument(id, document));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDocument(@PathVariable String id) {
        documentService.deleteDocument(id);
        return ResponseEntity.noContent().build();
    }
}
