package com.g14.bidsphere.repository;

import com.g14.bidsphere.model.Tender;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TenderRepository extends MongoRepository<Tender, String> {
}
