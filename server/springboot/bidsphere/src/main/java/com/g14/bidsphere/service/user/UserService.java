// Author: Vraj Sunilkumar Shah

package com.g14.bidsphere.service.user;

import com.g14.bidsphere.Dto.UserDto;
import com.g14.bidsphere.util.ResponseBody;

public interface UserService {

    /**
     * Provides the user with the requested user i
     * @param userId ID of the user to get
     * @return UserDto object
     */
    ResponseBody<UserDto> getUser(String userId);
}
