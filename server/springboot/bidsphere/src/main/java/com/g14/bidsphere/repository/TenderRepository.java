// Author: Jaydipsinh Padhiyar
package com.g14.bidsphere.repository;

import com.g14.bidsphere.model.Tender;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TenderRepository extends MongoRepository<Tender, String> {
    // Find all tenders for issuer.
    List<Tender> findAllByIssuerId(String issuerId);
}
