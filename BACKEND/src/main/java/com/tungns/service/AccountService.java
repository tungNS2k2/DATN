package com.tungns.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;


import com.tungns.dto.AccountDTO;
import com.tungns.entity.Accounts;
import com.tungns.event.mail.OnSendRegistrationUserConfirmViaEmailEvent;
import com.tungns.event.mail.OnSendResetPassword;
import com.tungns.event.mail.OnUpdatePasswordEvent;
import com.tungns.filter.AccountFilterForm;
import com.tungns.form.Account.AccountFormCreating;
import com.tungns.form.Account.UpdateAccountForm;
import com.tungns.responsitory.IAccountReponsitory;
import com.tungns.specification.AccountSpecifications;

import jakarta.transaction.Transactional;

@Service
public class AccountService implements IAccountService {
	@Autowired
	private IAccountReponsitory accountReponsitory;
	
	@Autowired
	private ModelMapper model;
	
	@Autowired
	private ApplicationEventPublisher eventPublisher;

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
	public Page<Accounts> getAllAccounts(Pageable pageable, String search, AccountFilterForm acFF) {
		Specification<Accounts> where = AccountSpecifications.buildWhere(search, acFF);
		return accountReponsitory.findAll(where, pageable);
	}

	@Override
	@Transactional
	public void updateAccount(int id, AccountFormCreating form) {
		Accounts accFr = model.map(form, Accounts.class);

		Accounts accEntity = accountReponsitory.findById(id).get();
		if(form.getPassword() != null) {
			accEntity.setPassword(form.getPassword());
		}
		accEntity.setUsername(accFr.getUsername());
		accEntity.setEmail(accFr.getEmail());
		accEntity.setAvatarUrl(accFr.getAvatarUrl());
		
		accountReponsitory.save(accEntity);
	}
	
	@Override
	@Transactional
	public void updateAccountForAdmin(int id, AccountFormCreating form) {
		Accounts accFr = model.map(form, Accounts.class);

		Accounts accEntity = accountReponsitory.findById(id).get();
		if(form.getPassword() != null) {
			accEntity.setPassword(form.getPassword());
		}
		accEntity.setUsername(accFr.getUsername());
		accEntity.setEmail(accFr.getEmail());
		accEntity.setAvatarUrl(accFr.getAvatarUrl());
		accEntity.setRole(accFr.getRole());
		accEntity.setStatus(accFr.getStatus());		
		accountReponsitory.save(accEntity);
	}


	@Override
	public void deleteAccount(int id) {
		accountReponsitory.deleteById(id);
		
	}

	@Override
	public void addNewAccount(AccountFormCreating form) {
		Accounts acc = model.map(form, Accounts.class);
		BCryptPasswordEncoder pEndcoder = new BCryptPasswordEncoder();
		acc.setPassword(pEndcoder.encode(acc.getPassword()));
		
		Accounts accNew = accountReponsitory.save(acc);
		
	}

	@Override
	public void changePasswordAccount(Accounts acc) {
		// TODO Auto-generated method stub
		accountReponsitory.changePasswordAccount(acc.getId(), acc.getPassword());
		
		sendConfirmUpdatePasswordViaEmail(acc);
		
	}
	
	private void sendConfirmUpdatePasswordViaEmail(Accounts acc) {
		eventPublisher.publishEvent(new OnUpdatePasswordEvent(acc));
	
	}

	@Override
	public void activeAccount(int id) {
		Accounts acc = accountReponsitory.findById(id).get();
		acc.setStatus(Accounts.AccountStatus.ACTIVE);
		accountReponsitory.save(acc);
		
	}

	@Override
	public boolean existsByUsername(String username) {
		// TODO Auto-generated method stub
		return accountReponsitory.existsByUsername(username);
	}

	@Override
	public boolean existsByEmail(String email) {
		// TODO Auto-generated method stub
		return accountReponsitory.existsByEmail(email);
	}

	@Override
	public void createAccount(Accounts ac) {
		accountReponsitory.save(ac);
		//Send mail active
		sendConfirmUserRegistrationViaEmail(ac.getEmail());
	}
	
	private void sendConfirmUserRegistrationViaEmail(String email) {
		eventPublisher.publishEvent(new OnSendRegistrationUserConfirmViaEmailEvent(email));
	}

	@Override
	public void resetPassword(Accounts acc) {
		accountReponsitory.resetPassword(acc.getId(), acc.getPassword());
		
		sendConfirmResetAccountPassword(acc);
		
	}
	
	public void sendConfirmResetAccountPassword(Accounts acc) {
		eventPublisher.publishEvent(new OnSendResetPassword(acc));
	}
	
}
