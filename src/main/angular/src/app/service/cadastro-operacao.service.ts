import { Injectable } from '@angular/core';
import { Gerente } from "./gerente.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export class EtapaProducao{
  public idTipoOpe: number;
  public tipoOpe: string;
  public statusSYS: 'A';
  public gerente_id: number;
  public operacoes: Operacao[];

}
export class Operacao {
  public id: number;
  public precoPecaOpe: any;
  public custosOpe: any;

  public dataInicio: Date;
  public prazo: Date;
  public loteProducao: number;
  public qtdPecasOpe: number;
  public numFuncionariosOpe: number;
  public etapa_producao_id: number;
  public gerente_id: number;
  public statusSYS: true;
}

export class SubOperacao{
  public id: number;
  public descricao: string;
  public tempoNesc: number;
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class CadastroOperacaoService {

  constructor(private httpClient: HttpClient) {
  }
  getSubOperacoes() {
    return this.httpClient.get<SubOperacao[]>('http://localhost:8080/suboperacoes', httpOptions);
  }
  getOperacoes() {
    return this.httpClient.get<Operacao[]>('http://localhost:8080/operacoes', httpOptions);
  }
  getOperacaoId(id:number): Observable<Operacao>{
    return this.httpClient.get<Operacao>('http://localhost:8080/operacoes/'+id,httpOptions);
  }
  getEtapaProducao(id: number): Observable<EtapaProducao>{
    return this.httpClient.get<EtapaProducao>('http://localhost:8080/tipoOpe/'+id, httpOptions);
  }
  getEtapaProducaoNome(etapa: string): Observable<EtapaProducao>{
    return this.httpClient.get<EtapaProducao>('http://localhost:8080/tipoOpe/getByNome/'+etapa, httpOptions);
  }

  getTiposOperacoes() {
    return this.httpClient.get<EtapaProducao[]>('http://localhost:8080/tipoOpe', httpOptions);
  }
  cadastrarOperacao(operacao: Operacao) {
    return this.httpClient.post<Operacao>('http://localhost:8080/gerentes/cadastraroperacao', operacao, httpOptions);
  }
}
