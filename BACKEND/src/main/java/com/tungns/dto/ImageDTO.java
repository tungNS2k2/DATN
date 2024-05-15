package com.tungns.dto;



import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ImageDTO {
	private String imageUrl;
	
	private String createdAt;
	
	private String nameImage;
	
	private String category; 
	
	private AccountDTO account;
	
	@Data
	@NoArgsConstructor
	public static class AccountDTO{
		private String username;
	}
	
}
