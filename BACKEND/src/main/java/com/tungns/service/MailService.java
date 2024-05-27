package com.tungns.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import com.tungns.entity.Accounts;

@Component
public class MailService implements IMailService {
	@Autowired
	private IAccountService accService;
	
	@Autowired
	private JavaMailSender mailSender;
	
	@Override
	public void sendRegistrationUserConfirm(String email) {
		Accounts account = accService.getAccountByEmail(email);

		String confirmationUrl = "http://localhost:8888/api/v1/auth/active_account?id=" + account.getId();

		String subject = "Xác Nhận Đăng Ký Account";
		String content = "Bạn đã đăng ký thành công. Click vào link dưới đây để kích hoạt tài khoản \n"
				+ confirmationUrl;

		sendEmail(email, subject, content);
	}
	
	@Override
	public void sendUpdatePasswordConfirm(int id, String email) {

		String confirmationUrl = "http://localhost:8888/api/v1/auth/active_account?id=" + id;

		String subject = "Xác Nhận Thay Đổi Mật Khẩu";
		String content = "Bạn đã đổi mật khẩu thành công. Click vào link dưới đây để kích hoạt tài khoản \n"
				+ confirmationUrl;

		sendEmail(email, subject, content);
	}
	
	
	private void sendEmail(final String recipientEmail, final String subject, final String content) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(recipientEmail);
		message.setSubject(subject);
		message.setText(content);
		
		
		
		mailSender.send(message);
	}

	@Override
	public void sendResetPasswordComfirm(int id, String email) {
		String confimationUrl = "http://localhost:8888/api/v1/auth/active_account?id=" + id;
		
		String subject = "Xác nhận reset mật khẩu!";
		String content = "Bạn đã đưa mật khẩu về mặc định thành 123abc. hãy click để kích hoạt lại tài khoản. \n"
			+ confimationUrl;
		sendEmail(email, subject, content);
		
	}
	
	
}
