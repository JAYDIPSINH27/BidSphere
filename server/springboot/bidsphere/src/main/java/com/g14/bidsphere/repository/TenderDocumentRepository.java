// Author: Jaydipsinh Padhiyar
package com.g14.bidsphere.repository;

import com.g14.bidsphere.model.TenderDocument;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TenderDocumentRepository extends MongoRepository<TenderDocument, String> {
}
