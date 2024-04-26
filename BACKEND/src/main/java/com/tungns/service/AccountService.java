package com.tungns.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.tungns.dto.AccountDTO;
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

	@Override
	public Accounts getAccountByUsername(String username) {
		
		return accountReponsitory.findByUsername(username).get();
	}

	@Override
	public Accounts getAccountByID(int id) {
		// TODO Auto-generated method stub
		return accountReponsitory.getById(id);
	}
	
	
}
