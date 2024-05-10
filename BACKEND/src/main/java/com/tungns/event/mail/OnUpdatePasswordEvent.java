package com.tungns.event.mail;

import org.springframework.context.ApplicationEvent;

import com.tungns.entity.Accounts;

@SuppressWarnings("serial")
public class OnUpdatePasswordEvent extends ApplicationEvent{

	private int id;
	
	private String email;
	
	public OnUpdatePasswordEvent(Object source) {
		super(source);
		Accounts ac = (Accounts) source;
		this.id = ac.getId();
		this.email = ac.getEmail();
	}
	
	public int getId() {
		return id;
	}
	
	public String getEmail() {
		return email;
	}

}

 