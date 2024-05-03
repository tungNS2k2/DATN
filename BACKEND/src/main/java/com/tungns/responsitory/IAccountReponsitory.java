package com.tungns.responsitory;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.tungns.entity.Accounts;

import jakarta.transaction.Transactional;

public interface IAccountReponsitory extends JpaRepository<Accounts, Integer>, JpaSpecificationExecutor<Accounts> {

	public Optional<Accounts> findByUsername(String username);

	public Accounts findByEmail(String email);


	
	@Modifying
	@Transactional
	@Query("UPDATE Accounts ac SET ac.password = :newPassword, ac.status = 0 WHERE ac.id = :id")
	public void changePasswordAccount(@Param("id") int id, @Param("newPassword") String newPassword);
	
}
 