package com.tungns.form.Account;

import org.hibernate.validator.constraints.Length;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UpdateAccountForm {
	@Length(max = 150, message = "The email's length is max 50 characters")
	@Length(min = 6, message = "The email's length is min 6 characters")
	protected String email;
	
	
	@Length(max = 150, message = "The email's length is max 50 characters")
	@Length(min = 6, message = "The email's length is min 6 characters")
	protected String avarUrl;
}
