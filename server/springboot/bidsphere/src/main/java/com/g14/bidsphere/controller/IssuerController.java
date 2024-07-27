// Author: Ashish Bhasin
package com.g14.bidsphere.controller;

import com.g14.bidsphere.Dto.IssuerDashboardDto;
import com.g14.bidsphere.Dto.TenderItemDto;
import com.g14.bidsphere.service.IIssuerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController()
@RequestMapping("api/issuer")
public class IssuerController {

    IIssuerService _issuerService;
    public IssuerController(IIssuerService issuerService) {
        this._issuerService = issuerService;
    }

    @GetMapping("/tenders")
    public IssuerDashboardDto getIssuedTenders(@RequestParam String issuerId) {
        var result = this._issuerService.GetTendersByIssuer(issuerId);
        return result;
    }
}
