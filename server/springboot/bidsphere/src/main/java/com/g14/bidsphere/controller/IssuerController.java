// Author: Ashish Bhasin
package com.g14.bidsphere.controller;

import com.g14.bidsphere.Dto.IssuerDashboardDto;
import com.g14.bidsphere.Dto.UserDto;
import com.g14.bidsphere.exception.UserNotFoundException;
import com.g14.bidsphere.service.Issuer.IIssuerService;
import com.g14.bidsphere.service.user.UserService;
import com.g14.bidsphere.util.ResponseBody;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import static com.g14.bidsphere.util.ResponseBody.ResultType.FAILURE;
import static com.g14.bidsphere.util.ResponseBody.ResultType.SUCCESS;

@RestController()
@RequestMapping("api/issuer")
public class IssuerController {

    IIssuerService _issuerService;
    UserService _userService;
    public IssuerController(IIssuerService issuerService, UserService userService) {
        this._issuerService = issuerService;
        this._userService = userService;
    }

    @GetMapping("/tenders")
    public ResponseEntity<ResponseBody<IssuerDashboardDto>> getIssuedTenders(@RequestParam String issuerId) {
        if(issuerId == null){
            ResponseBody<IssuerDashboardDto> body = new ResponseBody<>(FAILURE, null, "Issuer id cannot be null");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
        }
        try {
            var user = this._userService.getUser(issuerId);
            // get tenders and details issued by issuer.
            var result = this._issuerService.GetTendersByIssuer(issuerId);
            return ResponseEntity.ok(new ResponseBody<>(SUCCESS, result, null));
        } catch (UserNotFoundException exception) {
            ResponseBody<IssuerDashboardDto> body = new ResponseBody<>(FAILURE, null, "Issuer not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
        } catch (Exception exception) {
            ResponseBody<IssuerDashboardDto> body = new ResponseBody<>(FAILURE, null, "Something went wrong");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(body);
        }
    }
}
