package com.tungns.responsitory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tungns.entity.Accounts;

public interface IAccountReponsitory extends JpaRepository<Accounts, Integer> {

	public Accounts findByUsername(String username);

	
}
