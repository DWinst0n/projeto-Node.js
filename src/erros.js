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

export default tratarErro;
