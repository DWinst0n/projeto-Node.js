import verificarRedundancia from "./ManipulaTexto.js";
import fs from "fs";
import path from "path";
import tratarErro from "./erros.js";

const caminho = process.argv.slice(2);
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
					verificarRedundancia(texto);
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
						verificarRedundancia(texto);
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
