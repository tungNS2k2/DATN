package com.tungns.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.tungns.dto.AccountDTO;
import com.tungns.entity.Accounts;
import com.tungns.filter.AccountFilterForm;
import com.tungns.form.Account.UpdateAccountForm;
import com.tungns.responsitory.IAccountReponsitory;

import jakarta.transaction.Transactional;

@Service
public class AccountService implements IAccountService {
	@Autowired
	private IAccountReponsitory accountReponsitory;
	
	@Autowired
	private ModelMapper model;

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
		return accountReponsitory.findById(id).get();
	}

	@Override
	public Accounts getAccountByEmail(String email) {
		// TODO Auto-generated method stub
		return accountReponsitory.findByEmail(email);
	}

	@Override
	public Page<Accounts> getPagingAccounts(Pageable pageable, String search, AccountFilterForm accFF) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public void updateAccount(int id, UpdateAccountForm form) {
		Accounts accForm = model.map(form, Accounts.class);
		
		Accounts accEntity = accountReponsitory.findById(id).get();
		
		accEntity.setEmail(accForm.getEmail());
		accEntity.setAvatarUrl(accForm.getAvatarUrl());
		
		accountReponsitory.save(accEntity);
		
		
		
	}
	
	
}
