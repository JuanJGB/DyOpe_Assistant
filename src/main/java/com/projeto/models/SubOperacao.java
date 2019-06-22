package com.projeto.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SubOperacao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String descricao, tempo;
	long idEtapa;
	public long getIdEtapa() {
		return idEtapa;
	}

	public void setIdEtapa(long idEtapa) {
		this.idEtapa = idEtapa;
	}
   
	private int tempoNesc;
	private int segundos;
	
	public String getDescricao() {
		return descricao;
	}

	public int getSegundos() {
		return segundos;
	}

	public void setSegundos(int segundos) {
		this.segundos = segundos;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public int getTempoNesc() {
		return tempoNesc;
	}

	public void setTempoNesc(int tempoNesc) {
		this.tempoNesc = tempoNesc;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}


}
