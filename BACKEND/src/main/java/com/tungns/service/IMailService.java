package com.tungns.service;

public interface IMailService {

	void sendRegistrationUserConfirm(String email);

	void sendUpdatePasswordConfirm(int id, String email);

	void sendResetPasswordComfirm(int id, String email);

}