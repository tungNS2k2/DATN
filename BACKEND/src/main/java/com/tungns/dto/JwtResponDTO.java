package com.tungns.dto;

import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class JwtResponDTO {
	private final String token;
    private UserDetails userDetails;
    public JwtResponDTO(String jwt, UserDetails userDetails) {
        this.token = jwt;
        this.userDetails = userDetails;
    }
}
