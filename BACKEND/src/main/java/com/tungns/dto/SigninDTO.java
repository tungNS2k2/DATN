package com.tungns.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SigninDTO {
	private int id;
	private String username;
	private String password;
	private String  role;
}
