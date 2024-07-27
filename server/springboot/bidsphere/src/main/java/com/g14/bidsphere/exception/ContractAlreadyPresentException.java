// Author: Vraj Sunilkumar Shah

package com.g14.bidsphere.exception;

public class ContractAlreadyPresentException extends RuntimeException {
    public ContractAlreadyPresentException(String id) {
        super("Contract already present for tender id " + id);
    }
}
