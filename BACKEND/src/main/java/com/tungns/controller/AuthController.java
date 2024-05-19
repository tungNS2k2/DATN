package com.tungns.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.AuthenticationUserDetailsService;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tungns.config.security.JwtUtil;
import com.tungns.dto.JwtResponDTO;
import com.tungns.dto.SigninDTO;
import com.tungns.dto.SignupDTO;
import com.tungns.entity.Accounts;
import com.tungns.service.CustomAccountsDetailsService;
import com.tungns.service.IAccountService;

import jakarta.validation.Valid;



@RestController
@RequestMapping(value = "api/v1/auth")
@Validated
@CrossOrigin("*")
public class AuthController {
	
	@Autowired
	private AuthenticationManager authManager;
	
	@Autowired
	private ModelMapper model;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private IAccountService accService;
	
	@Autowired
	private CustomAccountsDetailsService customUserDetailsService;
	@GetMapping("/active_account")
	public void activeAccount(@RequestParam(name = "id") int id) {
		accService.activeAccount(id);
	}
	
	@PostMapping("/signin")
	 public ResponseEntity<?> createAuthenticationToken(@RequestBody SigninDTO signinDTO) throws Exception {
        try {
            authManager.authenticate(
                    new UsernamePasswordAuthenticationToken(signinDTO.getUsername(), signinDTO.getPassword())
            );
        } catch (BadCredentialsException e) {
        	System.out.println(signinDTO);
            throw new Exception("Incorrect username or password");
        }

        final UserDetails userDetails = customUserDetailsService
                .loadUserByUsername(signinDTO.getUsername());
        final int id = accService.getAccountByUsername(signinDTO.getUsername()).getId();
        final String jwt = jwtUtil.generateToken(userDetails);
 
        JwtResponDTO Response = new JwtResponDTO(jwt, userDetails, userDetails.getAuthorities().toString(), id);
        
        return ResponseEntity.ok(Response);
    }
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody @Valid SignupDTO signupDTO){
		System.out.println(signupDTO.toString());
		if(accService.existsByUsername(signupDTO.getUsername())) {
			return ResponseEntity.badRequest().body("Error: User is already taken!");
		}
		
		if(accService.existsByEmail(signupDTO.getEmail())) {
			return ResponseEntity.badRequest().body("Error: Email is already taken!");
		}
		
		Accounts acc = model.map(signupDTO, Accounts.class);
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		
		String enCryptPassword = passwordEncoder.encode(signupDTO.getPassword());
		
		acc.setPassword(enCryptPassword);
		acc.setRole(Accounts.AccountRole.USER);	
		acc.setStatus(Accounts.AccountStatus.NOT_ACTIVE);
			
		System.out.println("oke");
		accService.createAccount(acc);
		
		return ResponseEntity.ok().body("user register successfully!");
		
		
	}

}
