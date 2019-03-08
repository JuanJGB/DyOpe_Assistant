package com.projeto.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Funcionario{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idusuario;
	private String nome;

	private long idsetor;
	private char statusSYS;

	public char getStatusSYS() {
		return statusSYS;
	}

	public void setStatusSYS(char statusSYS) {
		this.statusSYS = statusSYS;
	}

	public long getIdsetor() {
		return idsetor;
	}

	public void setIdsetor(long idsetor) {
		this.idsetor = idsetor;
	}

	private String rg;
	
	private String cpf;
	
	private String email;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getIdusuario() {
		return idusuario;
	}

	public void setIdusuario(long idusuario) {
		this.idusuario = idusuario;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
