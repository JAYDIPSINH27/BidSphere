package com.g14.bidsphere.service;

import com.g14.bidsphere.exception.TenderNotFoundException;
import com.g14.bidsphere.model.Tender;
import com.g14.bidsphere.repository.TenderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class TenderService {

    @Autowired
    private TenderRepository tenderRepository;

    public List<Tender> getAllTenders() {
        return tenderRepository.findAll();
    }

    public Optional<Tender> getTenderById(String id) {
        return tenderRepository.findById(id);
    }

    public Tender createTender(Tender tender) {
        tender.setCreatedAt(new Date());
        tender.setUpdatedAt(new Date());
        return tenderRepository.save(tender);
    }

    public Tender updateTender(String id, Tender tender) {
        return tenderRepository.findById(id).map(existingTender -> {
            existingTender.setTitle(tender.getTitle());
            existingTender.setDescription(tender.getDescription());
            existingTender.setStatus(tender.getStatus());
            existingTender.setDocuments(tender.getDocuments());
            existingTender.setUpdatedAt(new Date());
            return tenderRepository.save(existingTender);
        }).orElseThrow(() -> new TenderNotFoundException(id));
    }

    public void deleteTender(String id) {
        if (!tenderRepository.existsById(id)) {
            throw new TenderNotFoundException(id);
        }
        tenderRepository.deleteById(id);
    }
}
