package com.manzanofp.bsgames.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manzanofp.bsgames.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

	
	User findByEmail(String email);
	
}
