package com.tungns.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AccountDTO {
	private String username;
	private String email;
	private String role;
	private String avatarUrl;
	private String status;
	
}
