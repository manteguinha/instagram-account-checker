# Instagram Account Checker

Um simples verificador de contas do Instagram que utiliza web scraping para verificar a presença de um nome de usuário na página de perfil.

## Como Funciona

O projeto é composto por uma classe chamada `VerificadorConta` que possui um método estático `verificarContaInstagram`. Este método recebe um nome de usuário do Instagram como parâmetro, realiza uma chamada à página de perfil da conta e verifica a existência do nome de usuário na página, utilizando web scraping.

## Pré-requisitos

- Node.js
- npm (Node Package Manager)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/SEU_USUARIO/instagram-account-checker.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

Você pode utilizar o Instagram Account Checker de duas maneiras: importando a classe diretamente em seu código ou utilizando o script de exemplo fornecido.

### Utilizando a Classe diretamente:

```javascript
const VerificadorConta = require('./lib/api');

async function verificarConta(nomeUsuario) {
    try {
        let status = await VerificadorConta.verificarContaInstagram(nomeUsuario);
        console.log(status);
    } catch (erro) {
        console.error(erro);
    }
}

const usuario = 'INSIRA_O_USUARIO_AQUI';
verificarConta(usuario);
```

### Utilizando o Script de Exemplo:

```bash
node index.js INSIRA_O_USUARIO_AQUI
```

Substitua `INSIRA_O_USUARIO_AQUI` pelo nome de usuário do Instagram que deseja verificar.

## Resultados

O resultado da verificação será um objeto com as seguintes propriedades:

- `usuario`: O nome de usuário formatado.
- `status`: O código de status HTTP da resposta (200 para sucesso, 404 para não encontrado, etc.).
- `encontrado`: Um valor booleano indicando se a conta foi encontrada.
- `conteudo`: O conteúdo extraído da página, que inclui o nome do usuário.
- `data`: Timestamp da verificação.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma *issue* para discussões ou enviar um *pull request* com melhorias.
