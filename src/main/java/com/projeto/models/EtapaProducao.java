package com.projeto.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

@Entity
public class EtapaProducao {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    private long predefinidas;
    public long getPredefinidas() {
		return predefinidas;
	}

	public void setPredefinidas(long predefinidas) {
		this.predefinidas = predefinidas;
	}

	private String etapaProducao;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "etapa_funcionarios", joinColumns = @JoinColumn(name = "etapa_id"), inverseJoinColumns = @JoinColumn(name = "funcionario_id"))
	private Set<Funcionario> funcionarios = new HashSet<>();
	
    @OneToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "etapa_producao_operacoes",
    joinColumns = @JoinColumn(name = "etapa_producao_id"),
    inverseJoinColumns = @JoinColumn(name = "operacao_id"))
	private Set<Operacao> operacoes = new HashSet<>();

    @OneToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "etapa_infosetores", joinColumns = @JoinColumn(name = "etapa_id"), inverseJoinColumns = @JoinColumn(name = "infosetor_id"))
	private Set<InfoSetor> infosetores = new HashSet<>();
    
    private char statusSYS;

    public char getStatusSYS() {
        return statusSYS;
    }

    public void setStatusSYS(char statusSYS) {
        this.statusSYS = statusSYS;
    }

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEtapaProducao() {
		return etapaProducao;
	}

	public void setEtapaProducao(String etapaProducao) {
		this.etapaProducao = etapaProducao;
	}

	public Set<Operacao> getOperacoes() {
		return operacoes;
	}

	public void setOperacoes(Set<Operacao> operacoes) {
		this.operacoes = operacoes;
	}



}
