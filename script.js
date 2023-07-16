// Selecionamos o botão 'Pesquisa' do nosso documento HTML.
const btnPesquisarCEP = document.querySelector("#btnPesquisar");

// Adicionamos um ouvinte de evento de clique ao botão 'Pesquisa'.
btnPesquisarCEP.addEventListener("click", (event) => {
  // Prevenimos o comportamento padrão do formulário de submeter e recarregar a página.
  event.preventDefault();

  // Selecionamos o campo de entrada de CEP e pegamos seu valor.
  const inputDoCep = document.querySelector("#cep");
  const valorDoCep = inputDoCep.value;

  // Construímos a URL da API de CEP com o valor do CEP inserido.
  const url = `https://viacep.com.br/ws/${valorDoCep}/json/`;

  // Realizamos uma requisição à API de CEP.
  fetch(url)
    .then((response) => response.json()) // Convertendo a resposta para JSON.
    .then((data) => {
      // Lidando com os dados JSON.
      // Se houver um erro nos dados (CEP inválido), alertamos o usuário.
      if (data.erro) {
        alert("O CEP DIGITADO ESTÁ INVÁLIDO");
        return;
      }
      // Se não houver erro, preenchemos os campos com os dados recebidos.
      atribuirCampos(data);
    });
});

// Função para preencher os campos do formulário com os dados recebidos da API.
function atribuirCampos(data) {
  // Selecionamos cada campo do nosso formulário.
  const rua = document.querySelector("#rua");
  const complemento = document.querySelector("#complemento");
  const bairro = document.querySelector("#bairro");
  const cidade = document.querySelector("#cidade");
  const estado = document.querySelector("#estado");

  // Preenchemos cada campo com o respectivo valor recebido.
  rua.value = data.logradouro;
  complemento.value = data.complemento;
  bairro.value = data.bairro;
  cidade.value = data.localidade;
  estado.value = data.uf;
}
