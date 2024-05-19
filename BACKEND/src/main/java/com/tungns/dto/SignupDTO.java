package com.tungns.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SignupDTO {
	@NotBlank(message = "Username can not be null")
	private String username;
	
	private String password;
	
	private String email;
	
}