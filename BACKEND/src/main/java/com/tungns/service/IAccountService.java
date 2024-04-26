package com.tungns.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.tungns.dto.AccountDTO;
import com.tungns.entity.Accounts;

public interface IAccountService {

	public List<Accounts> getAllAccounts();

	public Accounts getAccountByUsername(String username);

	public Accounts getAccountByID(int id);

	


	

}