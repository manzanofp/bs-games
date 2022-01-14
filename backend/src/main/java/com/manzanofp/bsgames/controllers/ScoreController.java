package com.manzanofp.bsgames.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manzanofp.bsgames.dto.GameDTO;
import com.manzanofp.bsgames.dto.ScoreDTO;
import com.manzanofp.bsgames.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

	@Autowired
	private ScoreService service;
	
	@PutMapping
	public GameDTO saveScore(@RequestBody ScoreDTO dto){
		GameDTO gameDTO = service.saveScore(dto);
		return gameDTO;
	}
}
