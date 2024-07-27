// Author: Ashish Bhasin
package spring.bidsphere.Services;

import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestParam;
import spring.bidsphere.DTOs.IssuerDashboardDto;
import spring.bidsphere.DTOs.TenderItemDto;
import spring.bidsphere.Models.Tender;

import java.util.List;

public interface IIssuerService {
    List<TenderItemDto> GetTendersByIssuer(String isuerId);
}
