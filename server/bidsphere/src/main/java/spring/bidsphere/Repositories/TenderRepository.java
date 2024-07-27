// Author: Ashish Bhasin
package spring.bidsphere.Repositories;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import spring.bidsphere.Models.Tender;

import java.util.List;

@Repository
public interface TenderRepository extends PagingAndSortingRepository<Tender, String> {
    List<Tender> findAllByIssuerId(ObjectId issuerId);
}
