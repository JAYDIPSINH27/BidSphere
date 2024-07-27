// Author: Jaydipsinh Padhiyar
package com.g14.bidsphere.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@Document(collection = "tenders")
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
    private List<String> documents = new ArrayList<>();
    private List<String> bids;
    private TenderStatistics statistics;

    @Data
    @NoArgsConstructor
    public static class TenderStatistics {
        private int bidsCount;
        private double averageBid;
        private String awardedBid;
    }
}
