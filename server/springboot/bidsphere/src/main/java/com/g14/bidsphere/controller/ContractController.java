// Author: Vraj Sunilkumar Shah

package com.g14.bidsphere.controller;

import com.g14.bidsphere.exception.ContractAlreadyPresentException;
import com.g14.bidsphere.exception.TenderNotFoundException;
import com.g14.bidsphere.request.ContractDto;
import com.g14.bidsphere.service.contract.ContractService;
import com.g14.bidsphere.util.ResponseBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.g14.bidsphere.util.ResponseBody.ResultType.FAILURE;

@RestController
@RequestMapping("/api/contract")
@RequiredArgsConstructor
public class ContractController {

    private final ContractService contractService;

    @PostMapping("/award-contract")
    public ResponseEntity<ResponseBody<String>> awardContract(@RequestBody ContractDto contractDto) {
        try {
            ResponseBody<String> body = contractService.awardContract(contractDto);
            return ResponseEntity.ok(body);
        } catch (TenderNotFoundException exception) {
            ResponseBody<String> body = new ResponseBody<>(FAILURE, null, exception.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
        } catch (ContractAlreadyPresentException exception) {
            ResponseBody<String> body = new ResponseBody<>(FAILURE, null, exception.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(body);
        } catch (Exception exception) {
            ResponseBody<String> body = new ResponseBody<>(FAILURE, null, exception.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
        }
    }

    @PostMapping("/decline-contract")
    public ResponseEntity<ResponseBody<String>> declineContract(@RequestBody ContractDto contractDto) {
        try {
            ResponseBody<String> body = contractService.declineContract(contractDto);
            return ResponseEntity.ok(body);
        } catch (TenderNotFoundException exception) {
            ResponseBody<String> body = new ResponseBody<>(FAILURE, null, exception.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
        } catch (Exception exception) {
            ResponseBody<String> body = new ResponseBody<>(FAILURE, null, exception.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
        }
    }
}
