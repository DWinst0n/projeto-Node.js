const fs = require("fs");

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

fs.readFile(link, "utf-8", (erro, texto) => {
	if (erro) {
		throw erro;
	}
	verificarRedundancia(texto);
});

function separarlinhas(texto) {
	let linhas = texto.split("\n").filter((texto) => texto.trim().length > 0);
	return linhas;
}

function verificarRedundancia(texto) {
	const linhas = separarlinhas(texto);
	console.log("Texto:");
	console.log(linhas);
	console.log(`Palavras repetidas em suas respectivas linha:`);
	linhas.forEach((p, i) => {
		const resultado = {};
		/* 	objeto[propriedade] = valor
		 */
		const palavras = p
			.split(" ")
			.map((p) => p.toLowerCase())
			.filter((p) => p.length > 1);
		palavras.forEach((palavra) => {
			resultado[palavra] = (resultado[palavra] || 0) + 1;
			/* Isso é o mesmo que:
			if (!resultado[palavra]) {
				resultado[palavra] = 0;
			}
			resultado[palavra] += 1; */
		});
		for (let palavra in resultado) {
			if (resultado[palavra] < 2) {
				delete resultado[palavra];
			}
		}
		if (Object.keys(resultado).length < 1) {
			return;
		} else {
			console.log(`linha ${i} -`);
			console.log(JSON.stringify(resultado, null, 2));
		}
	});
}
