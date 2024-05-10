package com.tungns.event.mail;

import org.springframework.context.ApplicationEvent;

import com.tungns.entity.Accounts;



public class OnSendResetPassword extends ApplicationEvent {
	private static final long serialVersionUID = 1L;
	private int id;
	
	private String email;
	
	public OnSendResetPassword(Object source) {
		super(source);
		Accounts ac = (Accounts) source;
		this.id = ac.getId();
		this.email = ac.getEmail();
	}

	public String getEmail() {
		return email;
	}

	public int getId() {
		return id;
	}
}
