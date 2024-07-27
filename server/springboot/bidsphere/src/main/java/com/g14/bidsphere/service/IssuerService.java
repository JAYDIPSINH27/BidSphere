// Author: Ashish Bhasin
package com.g14.bidsphere.service;

import com.g14.bidsphere.Dto.IssuerDashboardDto;
import com.g14.bidsphere.Dto.TenderItemDto;
import com.g14.bidsphere.model.Tender;
import com.g14.bidsphere.repository.TenderRepository;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
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

    public IssuerDashboardDto GetTendersByIssuer(String isuerId){
        var issuerTenders = this._tenderRepo.findAllByIssuerId(isuerId);
        var tenderItems = issuerTenders.stream().map(IssuerService::convertToDTO)
                .toList();
        var tenderStatusData = countItemsByStatus(tenderItems);
        var tenderCountData = countTendersByMonth(tenderItems);
        var issuerDashboardData = new IssuerDashboardDto();
        issuerDashboardData.setTenderItems(tenderItems);
        issuerDashboardData.setTenderCountDetails(tenderCountData);
        issuerDashboardData.setTenderStatusDetails(tenderStatusData);
        return issuerDashboardData;
    }

    private static TenderItemDto convertToDTO(Tender tender){
        TenderItemDto dto = new TenderItemDto();
        dto.setTitle(tender.getTitle());
        dto.setStatus(tender.getStatus());
        dto.setCreatedAt(tender.getCreatedAt());
        dto.setTenderNumber(tender.getTenderNumber());
        dto.setId(tender.getId().toString());
        return dto;
    }

    private static Map<String, Long> countItemsByStatus(List<TenderItemDto> items) {
        return items.stream()
                .collect(Collectors.groupingBy(
                        TenderItemDto::getStatus,
                        Collectors.counting()
                ));
    }

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
