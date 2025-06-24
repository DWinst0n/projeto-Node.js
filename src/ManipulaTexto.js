function separarlinhas(texto) {
	let linhas = texto.split("\n").filter((texto) => texto.trim().length > 0);
	return linhas;
}

function limparPalavra(p) {
	return p.replace(/[.,/#!$%&;:{}=\-_`~()]/g, "");
}

export default function verificarRedundancia(texto) {
	const linhas = separarlinhas(texto);
	let resultadoCompleto = `Texto:\n${linhas.join("\n")}\n\nPalavras repetidas em suas respectivas linhas:\n`;

	/* 	console.log("Texto:");
	console.log(linhas);
	console.log(`Palavras repetidas em suas respectivas linhas:`); */
	linhas.forEach((p, i) => {
		const resultado = {};
		/* 	objeto[propriedade] = valor
		 */
		const palavras = p
			.split(" ")
			.map((p) => limparPalavra(p.toLowerCase()))
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
			resultadoCompleto += `\nlinha ${i + 1} - "${linhas[i]}"\n`;
			resultadoCompleto += `${JSON.stringify(resultado, null, 2)}\n`;
		}
	});
	return resultadoCompleto;
}
