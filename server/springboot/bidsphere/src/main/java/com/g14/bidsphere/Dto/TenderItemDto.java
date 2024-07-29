// Author: Ashish Bhasin
package com.g14.bidsphere.Dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
public class TenderItemDto {
    private String tenderNumber;
    private String title;
    private String status;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;
    private String id;
    private String organizationId;
    private String representativeName;
    private String representativeEmail;
    private String representativeContact;
    private String representativeEmployeeId;
    private List<String> documents = new ArrayList<>();
    private String description;
}
