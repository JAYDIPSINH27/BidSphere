// Author: Ashish Bhasin
package com.g14.bidsphere.Dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

@Data
public class TenderItemDto {
    private String tenderNumber;
    private String title;
    private String status;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;
    private String id;
}
