// Author: Ashish Bhasin
package spring.bidsphere.DTOs;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.bson.types.ObjectId;

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
