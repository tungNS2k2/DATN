package com.tungns.form.Image;

import java.util.Date;

import lombok.Data;

@Data
public class imageFormCreating {
	private String imageUrl;
	
	private String nameImage;
	
	private Date createdAt;
	
	private String category;
  	
	private int accountId;
//	@Data
//	public static class Accounts {
//		private int  id;
//		
//	}
}
