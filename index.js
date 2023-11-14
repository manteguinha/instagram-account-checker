const VerificadorConta = require('./lib/api')

async function verificarConta(nomeUsuario) {
    try {
        let status = await VerificadorConta.verificarContaInstagram(nomeUsuario)
        console.log(status)
    } catch (erro) {
        console.error(erro)
    }
}

const usuario = 'INSIRA_O_USUARIO_AQUI'
verificarConta(usuario)
