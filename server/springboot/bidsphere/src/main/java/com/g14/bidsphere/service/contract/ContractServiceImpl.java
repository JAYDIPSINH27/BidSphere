// Author: Vraj Sunilkumar Shah
package com.g14.bidsphere.service.contract;

import com.g14.bidsphere.exception.ContractAlreadyPresentException;
import com.g14.bidsphere.exception.TenderNotFoundException;
import com.g14.bidsphere.model.Contract;
import com.g14.bidsphere.model.Tender;
import com.g14.bidsphere.repository.ContractRepository;
import com.g14.bidsphere.repository.TenderRepository;
import com.g14.bidsphere.request.ContractDto;
import com.g14.bidsphere.util.ResponseBody;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.g14.bidsphere.util.ResponseBody.ResultType.SUCCESS;

@Service
@RequiredArgsConstructor
public class ContractServiceImpl implements ContractService {

    private final ContractRepository contractRepository;
    private final TenderRepository tenderRepository;

    @Override
    public ResponseBody<String> awardContract(ContractDto contractDto) {
        Tender tender = tenderRepository.findById(contractDto.getTenderId())
                .orElseThrow(() -> new TenderNotFoundException(contractDto.getTenderId()));
        if (contractRepository.existsById(contractDto.getTenderId()))
            throw new ContractAlreadyPresentException(contractDto.getTenderId());

        Contract contract = getContract(contractDto);
        contractRepository.save(contract);

        Tender.TenderStatistics statistics = tender.getStatistics();
        statistics.setAwardedBid(contractDto.getBidderId());
        tender.setStatistics(statistics);
        tenderRepository.save(tender);
        return new ResponseBody<>(SUCCESS, "", "Contract awarded successfully");
    }

    @Override
    public ResponseBody<String> declineContract(ContractDto contractDto) {
        Tender tender = tenderRepository.findById(contractDto.getTenderId())
                .orElseThrow(() -> new TenderNotFoundException(contractDto.getTenderId()));
        List<Tender.Bid> bids = tender.getBids().stream()
                .filter(bid -> !bid.getBidderId().equals(contractDto.getBidderId()))
                .toList();
        tender.setBids(bids);
        tenderRepository.save(tender);
        return new ResponseBody<>(SUCCESS, "", "Contract rejected successfully");
    }

    /**
     * Converts contract dto to contract model
     * @param contractDto Data transfer object to convert to model
     * @return Contract instance
     */
    private Contract getContract(ContractDto contractDto) {
        return Contract.builder()
                .tenderId(contractDto.getTenderId())
                .bidderId(contractDto.getBidderId())
                .build();
    }
}
