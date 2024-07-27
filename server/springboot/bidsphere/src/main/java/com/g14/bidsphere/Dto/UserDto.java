// Author: Vraj Sunilkumar Shah

package com.g14.bidsphere.Dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDto {
    private String name;
    private String email;
    private String phone;
    private String address;
    private String role;
    private boolean isVerified;
}
