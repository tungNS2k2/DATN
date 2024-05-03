package com.tungns.form.Account;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AccountFormCreating {
	
	private int id;
	
	@NotBlank(message = "The username mustn't be null value")
	@Length(max = 50, message = "The username's length is max 50 characters")
	private String username;
	
	@NotBlank(message = "The username mustn't be null value")
	@Length(max = 800, message = "The username's length is max 50 characters")
	private String password;
	
	
	
	@NotBlank(message = "The name mustn't be null value")
	@Length(max = 250, message = "The name's length is max 50 characters")
	private String avatarUrl;
	
	@NotBlank(message = "The name mustn't be null value")
	@Length(max = 150, message = "The name's length is max 50 characters")
	private String email;
	
	@NotBlank(message = "The name mustn't be null value")
	@Length(max = 50, message = "The name's length is max 50 characters")
	private String role;
	
	@NotBlank(message = "The username mustn't be null value")
	@Length(max = 50, message = "The username's length is max 50 characters")
	private String status;
	
	
}
