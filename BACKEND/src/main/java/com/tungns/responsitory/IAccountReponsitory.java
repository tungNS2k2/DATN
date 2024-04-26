package com.tungns.responsitory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import com.tungns.entity.Accounts;

public interface IAccountReponsitory extends JpaRepository<Accounts, Integer>, JpaSpecificationExecutor<Accounts> {

	public Optional<Accounts> findByUsername(String username);

	
}
