package com.tungns.controller;

import java.util.List;


import org.apache.tomcat.util.json.Token;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tungns.dto.AccountDTO;
import com.tungns.entity.Accounts;
import com.tungns.filter.AccountFilterForm;
import com.tungns.service.IAccountService;

import jakarta.validation.Valid;

import com.tungns.form.Account.AccountFormCreating;
import com.tungns.form.Account.UpdateAccountForm;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "api/v1/accounts/")
public class AccountController {
	@Autowired
	private IAccountService service;
	
	@Autowired
	private ModelMapper model;
	
	@GetMapping()
	public Page<AccountDTO> getAll(Pageable pageable,
			@RequestParam(value = "search", required = false) String search, AccountFilterForm form
			){
		Page<Accounts> accounts = service.getAll(pageable, search, form);
		
		
		//convert
		List<AccountDTO> dtos = model.map(accounts.getContent(), new TypeToken<List<AccountDTO>>() {}.getType());
		Page<AccountDTO> dtoPages = new PageImpl<>(dtos, pageable, accounts.getTotalElements());
		return dtoPages;
	}
	
	@GetMapping("/username/{username}")
	public AccountDTO getAccountByUser(@PathVariable(name = "username") String username) {
		Accounts ac = service.getAccountByUsername(username);
		
		System.out.println(ac);
		
		AccountDTO userIF = model.map(ac, AccountDTO.class);
		return userIF;
		
	}
	
	@GetMapping("/{id}")
	public AccountDTO getAccountByID(@PathVariable(name ="id") int id) {
		Accounts acc = service.getAccountByID(id);
		System.out.println(acc);
		AccountDTO userIF = model.map(acc, AccountDTO.class);
		
		return userIF;
	}
	
	@GetMapping("/email/{email}")
	public AccountDTO getAccountByEmail(@PathVariable(name = "email")String email) {
		Accounts acc = service.getAccountByEmail(email);
		
		System.out.println();
		
		AccountDTO userIF = model.map(acc, AccountDTO.class);
		return userIF;
	}
	

	
	@PutMapping(value = "/{id}")
	public ResponseEntity<?> updateByID(@RequestBody @Valid AccountFormCreating form, @PathVariable(name = "id") int id) {
		form.setId(id);
		service.updateAccount(form);
		return new ResponseEntity<>("Update successfully", HttpStatus.OK);
	}
	
	@PostMapping(value = "/delete/{id}")
	public ResponseEntity<?> deleteAccountByID(@PathVariable(name ="id") int id){
		service.deleteAccount(id);
		return new ResponseEntity<>("oke",HttpStatus.OK);
	}
	
	@PostMapping()
	public ResponseEntity<?> createAccount(@RequestBody AccountFormCreating form) {
		service.addNewAccount(form);
		
		return new ResponseEntity<>("add new successfully", HttpStatus.OK);
		
	}
	
	
	@PostMapping(value = "/change-password")
	public ResponseEntity<?> changePassword(@RequestParam(name = "username") String username, @RequestParam(name ="newPassword") String newPassword){
		Accounts acc = service.getAccountByUsername(username);
		
		
		BCryptPasswordEncoder pEndcoder = new BCryptPasswordEncoder();
		String encryptPassword = pEndcoder.encode(newPassword);
		
		
		acc.setPassword(encryptPassword);
		service.changePasswordAccount(acc);
		
		return new ResponseEntity<>("change password successfully", HttpStatus.OK);
		
	}
	
	
		
}
