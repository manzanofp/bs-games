package com.manzanofp.bsgames.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manzanofp.bsgames.entities.Score;
import com.manzanofp.bsgames.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
