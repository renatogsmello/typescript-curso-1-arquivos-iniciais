import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Erro ao rodar a aplicação. Verifique se o form existe");
}
