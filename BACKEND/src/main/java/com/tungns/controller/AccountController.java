package com.tungns.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
	
	@GetMapping(name ="/")
	public List<Accounts> getAllAccounts(){
		List<Accounts> account = service.getAllAccounts();
		return account;
	}
}
