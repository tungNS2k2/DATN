package com.tungns.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.tungns.entity.Accounts;
import com.tungns.filter.AccountFilterForm;
import com.tungns.form.Account.UpdateAccountForm;

public interface IAccountService {


	public Accounts getAccountByUsername(String username);

	public Accounts getAccountByID(int id);

	public Accounts getAccountByEmail(String email);

	Page<Accounts> getAll(Pageable pageable, String search, AccountFilterForm form);

	public void updateAccount(int id, UpdateAccountForm form);
	


	

}