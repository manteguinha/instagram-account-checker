const axios = require('axios')
const cheerio = require('cheerio')
const moment = require('moment')

class VerificadorConta {
    static async chamadaPrincipal(url, nomeUsuario) {
        try {
            const resposta = await axios.get(url)
            const html = resposta.data
            const $ = cheerio.load(html)

            const tagMetaSelecionada = $('meta[property="og:title"]').last()
            const usuario = '@' + nomeUsuario.toLowerCase()

            if (tagMetaSelecionada.length > 0) {
                const conteudo = tagMetaSelecionada.attr('content')
                return {
                    usuario: usuario,
                    status: 200,
                    encontrado: true,
                    conteudo: conteudo,
                    data: moment.now(),
                }
            } else {
                return {
                    usuario: usuario,
                    status: 404,
                    encontrado: false,
                    conteudo: 'Não encontrado',
                    data: moment.now(),
                }
            }
        } catch (erro) {
            console.error('Erro na chamada principal:', erro.message)
            throw erro
        }
    }

    static async verificarContaInstagram(nomeUsuario) {
        const url = `https://www.instagram.com/${nomeUsuario}`
        return this.chamadaPrincipal(url, nomeUsuario)
    }
}

module.exports = VerificadorConta
