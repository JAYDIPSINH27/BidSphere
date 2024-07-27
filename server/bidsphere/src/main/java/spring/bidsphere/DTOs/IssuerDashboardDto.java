// Author: Ashish Bhasin
package spring.bidsphere.DTOs;

import lombok.Data;

import java.util.List;

@Data
public class IssuerDashboardDto {
    private long totalItems;
    private long totalPages;
    private long currentPage;
    private List<TenderItemDto> tenderItems;
}
