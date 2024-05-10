package com.tungns.service;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import com.tungns.entity.Accounts;
import com.tungns.filter.AccountFilterForm;
import com.tungns.form.Account.AccountFormCreating;


public interface IAccountService {


	public Accounts getAccountByUsername(String username);

	public Accounts getAccountByID(int id);

	public Accounts getAccountByEmail(String email);

	Page<Accounts> getAllAccounts(Pageable pageable, String search, AccountFilterForm form);

	public void updateAccount(AccountFormCreating form);

	public void deleteAccount(int id);

	public void addNewAccount(AccountFormCreating form);

	public void changePasswordAccount(Accounts acc);

	public void activeAccount(int id);

	public boolean existsByUsername(String username);

	public boolean existsByEmail(String email);

	public void createAccount(Accounts acc);

	public void resetPassword(Accounts acc);
	


	

}