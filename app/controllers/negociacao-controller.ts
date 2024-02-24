import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { mensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new mensagemView("#mensagemView");

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    this.negociacoes.lista();
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso");
    this.limparFormulario();
  }

  criaNegociacao(): Negociacao {
    const regex = /-/g;
    const data = new Date(this.inputData.value.replace(regex, ","));
    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);
    return new Negociacao(data, quantidade, valor);
  }

  limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus();
  }
}
