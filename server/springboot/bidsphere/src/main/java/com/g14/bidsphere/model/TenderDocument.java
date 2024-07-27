// Author: Jaydipsinh Padhiyar
package com.g14.bidsphere.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Data
@NoArgsConstructor
@Document(collection = "documents")
public class TenderDocument {
    @Id
    private String id;
    private String userId;
    private String tenderId;
    private String url;
    private String type;
    private Date uploadedAt;
}
