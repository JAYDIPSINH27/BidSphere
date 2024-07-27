// Author: Ashish Bhasin
package com.g14.bidsphere.Dto;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class IssuerDashboardDto {
    private List<TenderItemDto> tenderItems;
    private Map<String, Long> tenderStatusDetails;
    private Map<String, Long> tenderCountDetails;
}
