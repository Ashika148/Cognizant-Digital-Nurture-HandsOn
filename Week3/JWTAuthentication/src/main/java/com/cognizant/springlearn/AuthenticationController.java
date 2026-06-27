package com.cognizant.springlearn;

import java.util.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = 
        LoggerFactory.getLogger(AuthenticationController.class);

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public TokenResponse authenticate(
            @RequestHeader("Authorization") String authHeader) {
        LOGGER.info("Start");

        // Decode Basic Auth header
        String base64Credentials = authHeader.substring("Basic ".length());
        String credentials = new String(
            Base64.getDecoder().decode(base64Credentials));
        String username = credentials.split(":")[0];

        // Generate JWT token
        String token = jwtUtil.generateToken(username);
        LOGGER.info("End");
        return new TokenResponse(token);
    }
}