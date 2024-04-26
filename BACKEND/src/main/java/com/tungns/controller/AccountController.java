package com.tungns.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tungns.dto.AccountDTO;
import com.tungns.entity.Accounts;
import com.tungns.service.IAccountService;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "api/v1/accounts/")
public class AccountController {
	@Autowired
	private IAccountService service;
	
	@Autowired
	private ModelMapper model;
	
	@GetMapping()
	public List<AccountDTO> getAllAccounts(){
		List<Accounts> account = service.getAllAccounts();
		
		List<AccountDTO> acDTO = model.map(account, new TypeToken<List<AccountDTO>>() {}.getType());
		return acDTO;
	}
	
	@GetMapping("/getByUsername/{username}")
	public AccountDTO getAccountByUser(@PathVariable(name = "username") String username) {
		Accounts ac = service.getAccountByUsername(username);
		
		System.out.println(ac);
		
		AccountDTO userIF = model.map(ac, AccountDTO.class);
		return userIF;
		
	}
	
	@GetMapping("/getByID/{id}")
	public AccountDTO getAccountByID(@PathVariable(name ="id") int id) {
		Accounts acc = service.getAccountByID(id);
		System.out.println(acc);
		AccountDTO userIF = model.map(acc, AccountDTO.class);
		
		return userIF;
	}
	
}
