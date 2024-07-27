// Author: Vraj Sunilkumar Shah

package com.g14.bidsphere.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String userId) {
        super("User not found with id " + userId);
    }
}
