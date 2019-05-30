import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CadastroOperacaoService, Operacao, EtapaProducao, SubOperacao } from '../service/cadastro-operacao.service';
import { Observable, Subscription } from "rxjs";
import { Gerente, GerenteService, Peca } from '../service/gerente.service';
import { first } from "rxjs/operators";
import { List } from 'immutable';


ChangeDetectionStrategy.OnPush
@Component({
  selector: 'app-sequencia-operacional',
  templateUrl: './sequencia-operacional.component.html',
  preserveWhitespaces: false
})
export class SequenciaOperacionalComponent implements OnInit, OnDestroy {
   operacao: Operacao = new Operacao();
  @Input() gerente: Gerente;
  @Input() ope: Operacao;
  gerenteObjeto: Observable<Gerente>;
  newpeca: Peca = new Peca();
  @Input() peca: Peca;
  suboperacoesObj: Observable<SubOperacao[]>;
  @Input() suboperacoes: SubOperacao[];
  @Input() etapaproducao: EtapaProducao;
  public erro: boolean;
  public errorMessage = '';
  closeResult: string;
  public info: any;
  tipoOpe: string;
  sub: Subscription;
  ngOnInit() {
    this.etapasproducao();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      senha: this.token.getPassword()
    };
    this.datareload();
    this.naoAutenticado();

  }

  constructor(private route: ActivatedRoute, private gerenteService: GerenteService, private modalService: NgbModal, private operacaoService: CadastroOperacaoService, private token: TokenStorageService, private router: Router) {
  }
  ngOnDestroy() {
    this.sub.unsubscribe();

  }

  openCadastro(cadastro) {
    this.modalService.open(cadastro, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openInformacoes(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  private validado: boolean;
  private carregado: boolean;
  naoAutenticado() {
    if (this.info.authorities.toString() !== 'ROLE_GERENTE') {
      this.validado = false;
      this.router.navigate(['/logingerente']);
      alert('Acesso Negado! Faça o Login!');

    } else {
      this.validado = true;
    }
  }

  isReadonly = true;
  etapasproducao() { this.sub = this.route.params.subscribe(params => { const etapaProducao = params['etapaProducao']; if (etapaProducao) { this.operacaoService.getEtapaProducaoNome(etapaProducao).subscribe((etapaproducao: EtapaProducao) => { if (etapaproducao) { this.etapaproducao = etapaproducao; console.clear() } }) } }) }
  datareload() {
    this.gerenteObjeto = this.gerenteService.getGerenteLogado(this.info.username);
    this.gerenteObjeto.subscribe(data => this.gerente = data);
    this.suboperacoesObj = this.operacaoService.getSubOperacoes();
    this.suboperacoesObj.subscribe(data=>{this.suboperacoes = data});
    this.tipoOpe = this.etapaproducao.idTipoOpe.toString();
    this.carregado = true;
    console.clear();
  }
  cadastrar() {
    this.operacao.etapa_producao_id = this.etapaproducao.idTipoOpe;
    this.operacao.gerente_id = this.gerente.id;
    this.gerente.operacoesFazer.push(this.operacao);
    this.gerenteService.cadastrarOperacao(this.gerente).pipe(first()).subscribe(data => {
      alert("Operação cadastrada com sucesso!")

    }, error => { alert(error) });

  }
  cadastrarPeca() {
    this.newpeca.etapa_producao_id = this.etapaproducao.idTipoOpe;
    this.newpeca.gerente_id = this.gerente.id;
    this.gerente.pecas.push(this.newpeca);
    this.gerenteService.cadastrarOperacao(this.gerente).pipe(first()).subscribe(data => {
      alert("Peça cadastrada com sucesso!")

    }, error => { alert(error) });

  }
  trackByFn(operacao) {
    return operacao.id;
  }
  onSelect(operacao: Operacao) {
    this.ope = operacao;
  }
  selectsPeca(peca: Peca){
    this.peca = peca;
  }
  toggleReadonly() {
    this.isReadonly = !this.isReadonly;

  }
}