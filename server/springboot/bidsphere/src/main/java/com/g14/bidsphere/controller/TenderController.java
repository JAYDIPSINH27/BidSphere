// Author: Jaydipsinh Padhiyar
package com.g14.bidsphere.controller;

import com.g14.bidsphere.model.Tender;
import com.g14.bidsphere.service.TenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tenders")
public class TenderController {

    @Autowired
    private TenderService tenderService;

    @GetMapping
    public List<Tender> getAllTenders() {
        return tenderService.getAllTenders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tender> getTenderById(@PathVariable String id) {
        return tenderService.getTenderById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Tender createTender(@RequestBody Tender tender) {
        return tenderService.createTender(tender);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tender> updateTender(@PathVariable String id, @RequestBody Tender tender) {
        return ResponseEntity.ok(tenderService.updateTender(id, tender));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTender(@PathVariable String id) {
        tenderService.deleteTender(id);
        return ResponseEntity.noContent().build();
    }
}
