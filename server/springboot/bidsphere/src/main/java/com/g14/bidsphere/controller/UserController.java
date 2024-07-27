// Author: Vraj Sunilkumar Shah

package com.g14.bidsphere.controller;

import com.g14.bidsphere.Dto.UserDto;
import com.g14.bidsphere.exception.UserNotFoundException;
import com.g14.bidsphere.service.user.UserService;
import com.g14.bidsphere.util.ResponseBody;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.g14.bidsphere.util.ResponseBody.ResultType.FAILURE;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<ResponseBody<UserDto>> getUserById(@PathVariable("id") String userId) {
        try {
            ResponseBody<UserDto> user = userService.getUser(userId);
            return ResponseEntity.ok(user);
        } catch (UserNotFoundException exception) {
            ResponseBody<UserDto> body = new ResponseBody<>(FAILURE, null, exception.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
        } catch (Exception exception) {
            ResponseBody<UserDto> body = new ResponseBody<>(FAILURE, null, exception.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
        }
    }
}
