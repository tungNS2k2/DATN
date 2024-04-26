package com.tungns.responsitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tungns.entity.Accounts;

public interface IAccountReponsitory extends JpaRepository<Accounts, Integer> {

	
}
