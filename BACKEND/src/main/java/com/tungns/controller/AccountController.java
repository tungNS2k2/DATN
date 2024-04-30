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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tungns.dto.AccountDTO;
import com.tungns.entity.Accounts;
import com.tungns.filter.AccountFilterForm;
import com.tungns.service.IAccountService;
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
	public List<AccountDTO> getAllAccounts(){
		List<Accounts> account = service.getAllAccounts();
		
		List<AccountDTO> acDTO = model.map(account, new TypeToken<List<AccountDTO>>() {}.getType());
		return acDTO;
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
	
	
	@GetMapping("/paging/")
	public Page<AccountDTO> getPaggingAccount(Pageable pageable,
				@RequestParam(value = "search", required = false) String search, AccountFilterForm accFF){
		System.out.println("Accounts paging: ");
		System.out.println("accFF: " + accFF.toString());
		Page<Accounts> pageAccount = service.getPagingAccounts(pageable, search, accFF);
		
		List<AccountDTO> accDTO = model.map(pageAccount.getContent(), new TypeToken<AccountDTO>() {}.getType());
		Page<AccountDTO> pageAccDTO = new PageImpl<>(accDTO,pageable, pageAccount.getTotalElements());
		return pageAccDTO;
	}
	
	@PutMapping(value = "/id")
	public ResponseEntity<?> updateByID(@RequestBody UpdateAccountForm UAForm, @PathVariable(name = "id") int id) {
		service.updateAccount(id, UAForm);
		return new ResponseEntity<>("Update successfully", HttpStatus.OK);
	}
	
	
	
		
}
