// Author: Vraj Sunilkumar Shah

package com.g14.bidsphere.repository;

import com.g14.bidsphere.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    // No-operation
}
