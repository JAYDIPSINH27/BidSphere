// Author: Vraj Sunilkumar Shah

package com.g14.bidsphere.repository;

import com.g14.bidsphere.model.Contract;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractRepository extends MongoRepository<Contract, String> {
    // No-operation
}
