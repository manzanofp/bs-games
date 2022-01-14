package com.manzanofp.bsgames.dto;

public class ScoreDTO {

	private Long gameid;
	private String email;
	private Double score;
	
	public ScoreDTO() {
	}

	public Long getGameid() {
		return gameid;
	}

	public void setGameid(Long gameid) {
		this.gameid = gameid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}
	
	
}
