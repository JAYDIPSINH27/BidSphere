// Author: Ashish Bhasin
package spring.bidsphere.Models;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Document(collection = "tenders")
public class Tender {

    @Id
    private ObjectId id;

    private String tenderNumber;
    private String title;

    private String description;

    @Field("issuer_id")
    private ObjectId issuerId;

    private String status;

    @Field("created_at")
    private Date createdAt;

    @Field("updated_at")
    private Date updatedAt;

    private List<ObjectId> documents;

    private List<ObjectId> bids;

    private Statistics statistics;

    @Data
    public static class Statistics {

        @Field("bids_count")
        private int bidsCount;

        @Field("average_bid")
        private double averageBid;

        @Field("awarded_bid")
        private ObjectId awardedBid;
    }
}