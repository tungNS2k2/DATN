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
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.tungns.dto.AccountDTO;
import com.tungns.entity.Accounts;
import com.tungns.event.OnSendRegistrationUserConfirmViaEmailEvent;
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
	public Page<Accounts> getAll(Pageable pageable, String search, AccountFilterForm acFF) {
		Specification<Accounts> where = AccountSpecifications.buildWhere(search, acFF);
		return accountReponsitory.findAll(where, pageable);
	}

	@Override
	public void updateAccount(AccountFormCreating form) {
		
		Accounts acc = model.map(form, Accounts.class);
		
		accountReponsitory.save(acc);
		
	}

	@Override
	public void deleteAccount(int id) {
		accountReponsitory.deleteById(id);
		
	}

	@Override
	public void addNewAccount(AccountFormCreating form) {
		Accounts acc = model.map(form, Accounts.class);
		
		Accounts accNew = accountReponsitory.save(acc);
		
	}

	@Override
	public void changePasswordAccount(Accounts acc) {
		// TODO Auto-generated method stub
		accountReponsitory.changePasswordAccount(acc.getId(), acc.getPassword());
		
		sendConfirmUpdatePasswordViaEmail(acc.getEmail());
		
		
		
	}
	
	private void sendConfirmUpdatePasswordViaEmail(String email) {
		eventPublisher.publishEvent(new OnSendRegistrationUserConfirmViaEmailEvent(email));
		
	}

	@Override
	public void activeAccount(int id) {
		Accounts acc = accountReponsitory.findById(id).get();
		acc.setStatus(Accounts.AccountStatus.ACTIVE);
		accountReponsitory.save(acc);
		
	}
	
	
}
