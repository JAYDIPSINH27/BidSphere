// Author: Vraj Sunilkumar Shah

package com.g14.bidsphere.service.user;

import com.g14.bidsphere.Dto.UserDto;
import com.g14.bidsphere.exception.UserNotFoundException;
import com.g14.bidsphere.model.User;
import com.g14.bidsphere.repository.UserRepository;
import com.g14.bidsphere.util.ResponseBody;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import static com.g14.bidsphere.util.ResponseBody.ResultType.SUCCESS;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public ResponseBody<UserDto> getUser(String userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(userId));
        UserDto userDto = getUserDto(user);
        return new ResponseBody<>(SUCCESS, userDto, "Get user success");
    }

    /**
     * Converts the user model into the user data transfer object
     * @param user User model ot convert
     * @return UserDto instance
     */
    private UserDto getUserDto(User user) {
        return UserDto.builder()
                .name(user.getName())
                .email(user.getEmail())
                .phone(user.getPhone())
                .address(user.getAddress())
                .isVerified(user.isVerified())
                .role(user.getRole())
                .build();
    }
}
