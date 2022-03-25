const button = document.getElementById("button");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");
  const select = document.getElementById("horario");
  let validacao = email.value.split("@");

  if (nome.value === "") {
    alert("Precisa digitar um nome!");
  } else if (email.value === "") {
    alert("Digite seu email!");
  } else if (validacao.length === 1 || validacao.length > 2) {
    alert("Email inválido!");
  } else if (select.selectedIndex === 0) {
    alert("Selecione um horário!");
  } else if (mensagem.value === "") {
    alert("Erro no envio: Insira uma mensagem");
  } else {
    let user = validacao[0];
    let domainPontoCom = validacao[1];
    let regexUser = /^[a-zA-Z0-9.]*$/;
    let regexDomain = /^[a-z0-9]*$/;

    let validacaoDominio = domainPontoCom.split(".");
    let pontoCom = validacaoDominio[1];
    let domain = validacaoDominio[0];

    if (pontoCom.length > 6) {
      alert("Email inválido!");
    } else if (
      user.length < 1 ||
      user.length > 32 ||
      domain.length < 1 ||
      domain.length > 16
    ) {
      alert("Email inválido!");
    } else {
      if (regexUser.test(user) && regexDomain.test(domain)) {
        alert("Obrigada pelo contato,user!");
      } else {
        alert("Email inválido!");
      }
    }
  }
});
