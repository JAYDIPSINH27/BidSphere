// Author: Ashish Bhasin
package spring.bidsphere.Controllers;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import spring.bidsphere.DTOs.IssuerDashboardDto;
import spring.bidsphere.DTOs.TenderItemDto;
import spring.bidsphere.Models.Tender;
import spring.bidsphere.Repositories.TenderRepository;
import spring.bidsphere.Services.IIssuerService;

import java.util.List;

@RestController()
@RequestMapping("issuer")
public class IssuerController {

    IIssuerService _issuerService;
    public IssuerController(IIssuerService issuerService) {
        this._issuerService = issuerService;
    }

    @GetMapping("/tenders")
    public List<TenderItemDto> getIssuedTenders(@RequestParam String issuerId) {
        var result = this._issuerService.GetTendersByIssuer(issuerId);
        return result;
    }
}
