// Author: Vraj Sunilkumar Shah

package com.g14.bidsphere.service.contract;

import com.g14.bidsphere.request.ContractDto;
import com.g14.bidsphere.util.ResponseBody;

public interface ContractService {

    /**
     * Award the requested contract
     * @param contractDto Data transfer object for contract model
     * @return ResponseBody object denoting the response after awarding the contract
     */
    ResponseBody<String> awardContract(ContractDto contractDto);

    /**
     * Decline the requested contract
     * @param contractDto Data transfer object for contract model
     * @return ResponseBody object denoting the response after declining the contract
     */
    ResponseBody<String> declineContract(ContractDto contractDto);
}
