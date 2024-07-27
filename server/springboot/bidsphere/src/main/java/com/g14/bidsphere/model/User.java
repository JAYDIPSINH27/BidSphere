// Author: Vraj Sunilkumar Shah

package com.g14.bidsphere.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document("Users")
public class User {
    @Id
    private String id;
    private String name;
    private String email;
    private String phone;
    private String address;
    private String password;
    private String role;
    private boolean isVerified;
}
