// Author: Ashish Bhasin
package com.g14.bidsphere.service.Issuer;


import com.g14.bidsphere.Dto.IssuerDashboardDto;
import com.g14.bidsphere.Dto.TenderItemDto;

import java.util.List;

public interface IIssuerService {
    IssuerDashboardDto GetTendersByIssuer(String isuerId);
}
