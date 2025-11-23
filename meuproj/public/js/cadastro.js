
  // Array para armazenar empresas cadastradas para validação de código de ativação 
  let listaEmpresasCadastradas = [];

  function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = nome_input.value;
    var apelidoVar = apelido_input.value;
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;

    // Verificando se há algum campo em branco
    if (
      nomeVar == "" ||
      apelidoVar == "" ||
      senhaVar == "" ||
      confirmacaoSenhaVar == ""
    ) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML = "(Preencha todos os campos)";
      setTimeout(sumirMensagem, 4000);
       // "(Mensagem de erro para todos os campos em branco)";
      return false;
    } else {
      setTimeout(sumirMensagem, 5000);
    }

    // Verificar se senhas coincidem
    if(senhaVar !== confirmacaoSenhaVar) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML = "As senhas não coincidem!";
      setTimeout(sumirMensagem, 4000);
      return false;
    }

    // Enviando o valor da nova input
    fetch("/usuario/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nomeVar,
        apelidoServer: apelidoVar,
        senhaServer: senhaVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {

          //finalizarAguardar();

          cardErro.style.display = "block";

          mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

          setTimeout(() => {
            window.location = "login.html";
          }, 2000);

        } else {

          resposta.text().then(msg => {
            //finalizarAguardar();
            cardErro.style.display = "block";
            mensagem_erro.innerHTML = msg;
          })
         // throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      //finalizarAguardar();
      });

    return false;
  }

  function sumirMensagem() {
    cardErro.style.display = "none";
  }
/*
  // Listando empresas cadastradas 
  function listar() {
    fetch("/empresas/listar", {
      method: "GET",
    })
      .then(function (resposta) {
        resposta.json().then((empresas) => {
          empresas.forEach((empresa) => {
            listaEmpresasCadastradas.push(empresa);

            console.log("listaEmpresasCadastradas")
            console.log(listaEmpresasCadastradas[0].codigo_ativacao)
          });
        });
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });
  }
      */

  function sumirMensagem() {
    cardErro.style.display = "none";
  }
/*
  nome_input.value = "";
  apelido_input.value = "";
  senha_input.value = "";
  confirmacao_senha_input.value = ""; */