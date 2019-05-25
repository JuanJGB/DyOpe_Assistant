import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginGerenteComponent} from './login-gerente/login-gerente.component';
import {IndexComponent} from './index-app/index.component';
import {GerenteIndexComponent} from './gerente-index/gerente-index.component';
import {EsqueceuSenhaComponent} from './esqueceu-senha/esqueceu-senha.component';
import {CadastroGerenteComponent} from './cadastro-gerente/cadastro-gerente.component';
import {LoginFuncionarioComponent} from './login-funcionario/login-funcionario.component';
import {PerfilGerenteComponent} from './perfil-gerente/perfil-gerente.component';
import {ErroComponent} from './erro/erro.component';
import {CadastroFuncionarioComponent} from './cadastro-funcionario/cadastro-funcionario.component';
import {CadastroSetorComponent} from './cadastro-setor/cadastro-setor.component';
import {ControleFuncionariosComponent} from './controle-funcionarios/controle-funcionarios.component';
import {FuncionarioIndexComponent} from './funcionario-index/funcionario-index.component';
import {InformacoesSetorComponent} from './informacoes-setor/informacoes-setor.component';
import {PerfilFuncionarioComponent} from './perfil-funcionario/perfil-funcionario.component';
import {OperacaoAcabamentoComponent} from './operacao-acabamento/operacao-acabamento.component';
import {OperacaoBeneficiamentoComponent} from './operacao-beneficiamento/operacao-beneficiamento.component';
import {OperacaoCorteComponent} from './operacao-corte/operacao-corte.component';
import {GerenteComponent} from './gerente/gerente.component';
import {NavComponent} from './nav/nav.component';
import {RedefinirSenhaComponent} from "./redefinir-senha/redefinir-senha.component";
import { OperacaoRiscoComponent } from './operacao-risco/operacao-risco.component';


const routes: Routes = [
  {path: 'logingerente', component: LoginGerenteComponent},
  {path: 'loginfuncionario', component: LoginFuncionarioComponent},
  {path: '', component: IndexComponent},
  {path: 'gerenteindex', loadChildren: './gerente-index/gerente-index.module#GerenteIndexModule'},
  {path: '404', component: ErroComponent},
  {path: 'esqueceusenha', component: EsqueceuSenhaComponent},
  {path: 'cadastrogerente', component: CadastroGerenteComponent},
  {path: 'cadastrofuncionario', component: CadastroFuncionarioComponent},
{path: 'funcionarioindex', component: FuncionarioIndexComponent},
  {path: 'informacoessetor', component: InformacoesSetorComponent},
  {path: 'perfilfuncionario', component: PerfilFuncionarioComponent},
  {path: 'testebarra', component: NavComponent},
  {path: 'redefinirsenha', component: RedefinirSenhaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponent = [LoginGerenteComponent, LoginFuncionarioComponent, IndexComponent];

export const routingComponent2 = [ErroComponent, EsqueceuSenhaComponent, CadastroGerenteComponent];

export const routingComponent3 = [CadastroFuncionarioComponent];

export const routingComponent4 = [FuncionarioIndexComponent, InformacoesSetorComponent, PerfilFuncionarioComponent];

export const routingComponent5 = [ ];

export const routingComponent6 = [GerenteComponent, NavComponent];

export const routingComponent7 = [RedefinirSenhaComponent];
