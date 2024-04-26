package com.tungns.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tungns.entity.Accounts;
import com.tungns.responsitory.IAccountReponsitory;

@Service
public class AccountService implements IAccountService {
	@Autowired
	private IAccountReponsitory accountReponsitory;

	@Override
	public List<Accounts> getAllAccounts() {
		// TODO Auto-generated method stub
		return accountReponsitory.findAll();
	}
	
}
