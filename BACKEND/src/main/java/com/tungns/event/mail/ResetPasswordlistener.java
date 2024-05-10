package com.tungns.event.mail;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import com.tungns.service.IMailService;

@Component
public class ResetPasswordlistener implements ApplicationListener<OnSendResetPassword>{
	@Autowired
	private IMailService mailService;
	


	@Override
	public void onApplicationEvent(OnSendResetPassword event) {
		mailService.sendResetPasswordComfirm(event.getId(), event.getEmail());
		
	}
}
