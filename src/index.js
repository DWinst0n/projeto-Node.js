import verificarRedundancia from "./ManipulaTexto.js";
import fs from "fs";

const caminhosArquivos = process.argv.slice(2);

caminhosArquivos.forEach((link) => {
	fs.readFile(link, "utf-8", (erro, texto) => {
		try {
			if (erro) throw erro;
			verificarRedundancia(texto);
		} catch (erro) {
			switch (erro.code) {
				case "ENOENT":
					console.log(`Arquivo não encontrado: ${link}`);
					break;
				case "EACCES":
					console.log(`Permissão negada para acessar o arquivo: ${link}`);
					break;
				case "EISDIR":
					console.log(`O caminho especificado é um diretório, não um arquivo: ${link}`);
					break;
				case "EMFILE":
					console.log("Muitos arquivos abertos ao mesmo tempo. Tente fechar alguns arquivos.");
					break;
				case "ENAMETOOLONG":
					console.log("O nome do arquivo ou caminho é muito longo.");
					break;
				case "EBADF":
					console.log("Arquivo ou descritor de arquivo inválido.");
					break;
				default:
					console.log("Algum erro aconteceu:", erro);
					break;
			}
		}
	});
});
