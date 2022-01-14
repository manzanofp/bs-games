package com.manzanofp.bsgames.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manzanofp.bsgames.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long>{

}
