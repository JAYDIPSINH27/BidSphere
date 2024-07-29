// Author: Ashish Bhasin
package com.g14.bidsphere.service.Issuer;

import com.g14.bidsphere.Dto.IssuerDashboardDto;
import com.g14.bidsphere.Dto.TenderItemDto;
import com.g14.bidsphere.model.Tender;
import com.g14.bidsphere.repository.TenderRepository;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class IssuerService implements IIssuerService {
    TenderRepository _tenderRepo;
    public IssuerService(TenderRepository tenderRepo) {
        this._tenderRepo = tenderRepo;
    }

    /**
     * Get all issued tenders and related details for an issuer
     * @param isuerId Issuer Id
     * @return IssuerDashboardDto with tenders and details
     */
    public IssuerDashboardDto GetTendersByIssuer(String isuerId){
        // get all tenders for issuer
        var issuerTenders = this._tenderRepo.findAllByIssuerId(isuerId);
        // convert tender model to tender item dto
        var tenderItems = issuerTenders.stream().map(IssuerService::convertToDTO)
                .toList();
        // get tender count for each tender status
        var tenderStatusData = countItemsByStatus(tenderItems);
        // get tender count for each month of year
        var tenderCountData = countTendersByMonth(tenderItems);
        var issuerDashboardData = new IssuerDashboardDto();
        issuerDashboardData.setTenderItems(tenderItems);
        issuerDashboardData.setTenderCountDetails(tenderCountData);
        issuerDashboardData.setTenderStatusDetails(tenderStatusData);
        return issuerDashboardData;
    }

    /**
     * Convert tender document to tenderItem dto
     * @param tender Tender document
     * @return TenderItemDto
     */
    private static TenderItemDto convertToDTO(Tender tender){
        TenderItemDto dto = new TenderItemDto();
        dto.setTitle(tender.getTitle());
        dto.setStatus(tender.getStatus());
        dto.setCreatedAt(tender.getCreatedAt());
        dto.setTenderNumber(tender.getTenderNumber());
        dto.setId(tender.getId().toString());
        dto.setOrganizationId(tender.getOrganizationId());
        dto.setRepresentativeName(tender.getRepresentativeName());
        dto.setRepresentativeEmail(tender.getRepresentativeEmail());
        dto.setRepresentativeContact(tender.getRepresentativeContact());
        dto.setRepresentativeEmployeeId(tender.getRepresentativeEmployeeId());
        dto.setDocuments(tender.getDocuments());
        dto.setDescription(tender.getDescription());
        return dto;
    }

    /**
     * Get count of all tenders for each distinct tender status
     * @param items TenderItems list
     * @return Map of Status and tender count
     */
    private static Map<String, Long> countItemsByStatus(List<TenderItemDto> items) {
        return items.stream()
                .collect(Collectors.groupingBy(
                        TenderItemDto::getStatus,
                        Collectors.counting()
                ));
    }

    /**
     * Count total tenders by month
     * @param tenders list of tender items
     * @return Map of month and tender count
     */
    private static Map<String, Long> countTendersByMonth(List<TenderItemDto> tenders) {
        SimpleDateFormat monthFormat = new SimpleDateFormat("MMMM");
        Calendar calendar = Calendar.getInstance();

        return tenders.stream()
                .collect(Collectors.groupingBy(
                        tender -> {
                            calendar.setTime(tender.getCreatedAt());
                            return monthFormat.format(calendar.getTime());
                        },
                        Collectors.counting()
                ));
    }
}
