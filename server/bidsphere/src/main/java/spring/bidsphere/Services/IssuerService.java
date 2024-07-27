// Author: Ashish Bhasin
package spring.bidsphere.Services;

import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import spring.bidsphere.DTOs.IssuerDashboardDto;
import spring.bidsphere.DTOs.TenderItemDto;
import spring.bidsphere.Models.Tender;
import spring.bidsphere.Repositories.TenderRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class IssuerService implements IIssuerService {
    TenderRepository _tenderRepo;
    public IssuerService(TenderRepository tenderRepo) {
        this._tenderRepo = tenderRepo;
    }

    public List<TenderItemDto> GetTendersByIssuer(String isuerId){
        var issuerObjectId = new ObjectId(isuerId);
        var issuerTenders = this._tenderRepo.findAllByIssuerId(issuerObjectId);
        var tenderItems = issuerTenders.stream().map(IssuerService::convertToDTO)
                .toList();
        return tenderItems;
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
}
