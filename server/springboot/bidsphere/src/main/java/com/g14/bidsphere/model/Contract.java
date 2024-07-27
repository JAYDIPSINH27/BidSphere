// Author: Vraj Sunilkumar Shah

package com.g14.bidsphere.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "contract")
public class Contract {
    @Id
    private String id;
    private String tenderId;
    private String bidderId;
}
