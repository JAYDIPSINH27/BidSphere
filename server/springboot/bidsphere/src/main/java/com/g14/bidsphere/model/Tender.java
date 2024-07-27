// Author: Jaydipsinh Padhiyar
package com.g14.bidsphere.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@Document(collection = "Tenders")
public class Tender {
    @Id
    private String id;
    private String tenderNumber;
    private String title;
    private String description;
    private String issuerId;
    private String status;
    private Date createdAt;
    private Date updatedAt;
    private String organizationId;
    private String representativeName;
    private String representativeEmail;
    private String representativeContact;
    private String representativeEmployeeId;
    private List<String> documents = new ArrayList<>();
    private List<Bid> bids;
    private TenderStatistics statistics;

    @Data
    @NoArgsConstructor
    public static class TenderStatistics {
        private int bidsCount;
        private double averageBid;
        private String awardedBid;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Bid {
        private double amount;
        private String bidderId;
    }
}
