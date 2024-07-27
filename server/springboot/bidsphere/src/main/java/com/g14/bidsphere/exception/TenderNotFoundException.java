// Author: Jaydipsinh Padhiyar
package com.g14.bidsphere.exception;

public class TenderNotFoundException extends RuntimeException {
    public TenderNotFoundException(String id) {
        super("Tender not found with id " + id);
    }
}
