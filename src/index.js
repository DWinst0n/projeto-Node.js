import verificarRedundancia from "./ManipulaTexto.js";
import fs from "fs";
import path from "path";

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

function tratarErro(erro, caminho) {
	switch (erro.code) {
		case "ENOENT":
			console.log(`Arquivo não encontrado: ${caminho}`);
			break;
		case "EACCES":
			console.log(`Permissão negada: ${caminho}`);
			break;
		case "EMFILE":
			console.log("Muitos arquivos abertos ao mesmo tempo.");
			break;
		case "ENAMETOOLONG":
			console.log("Nome de caminho muito longo.");
			break;
		case "EBADF":
			console.log("Descritor de arquivo inválido.");
			break;
		default:
			console.log("Erro:", erro);
			break;
	}
}
