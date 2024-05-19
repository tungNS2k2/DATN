package com.tungns.dto;

import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class JwtResponDTO {
	private final String token;
	private final String role;
	private final int id;
    private UserDetails userDetails;
    public JwtResponDTO(String jwt, UserDetails userDetails, String role, int id) {
        this.token = jwt;
        this.userDetails = userDetails;
        this.role = role;
        this.id = id;
    }
}
