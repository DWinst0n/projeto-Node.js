import verificarRedundancia from "./ManipulaTexto.js";
import fs from "fs";
import path from "path";
import tratarErro from "./erros.js";

const caminho = process.argv.slice(2);
if (!caminho) console.log("Passe o caminho que deseja");

caminho.forEach((link) => {
	fs.stat(link, (erro, stats) => {
		if (erro) {
			console.log(`Erro ao acessar ${link}:`, erro.message);
			return;
		}
		if (stats.isFile()) {
			fs.readFile(link, "utf-8", (erro, texto) => {
				try {
					if (erro) throw erro;
					criaESalvaArquivo(verificarRedundancia(texto), link, path.parse(link).name);
				} catch (erro) {
					tratarErro(erro, link);
				}
			});
		} else if (stats.isDirectory()) {
			const arquivos = fs.readdirSync(link);
			arquivos.forEach((arquivo) => {
				const caminhoCompleto = path.join(link, arquivo);
				fs.readFile(caminhoCompleto, "utf-8", (erro, texto) => {
					try {
						if (erro) throw erro;
						criaESalvaArquivo(verificarRedundancia(texto), link, path.parse(arquivo).name);
					} catch (erro) {
						tratarErro(erro, caminhoCompleto);
					}
				});
			});
		} else {
			console.log(`${link} não é um arquivo nem um diretório.`);
		}
	});
});
async function criaESalvaArquivo(listaPalavras, endereco, nomeOriginal = "resultado") {
	const pasta = path.dirname(endereco);
	const arquivoNovo = path.join(pasta, `${nomeOriginal}_resultadoAnalise.txt`);
	try {
		await fs.promises.writeFile(arquivoNovo, listaPalavras);
		console.log(`Arquivo ${arquivoNovo} criado!`);
	} catch (erro) {
		console.log("Um erro ocorreu!", erro);
	}
}
