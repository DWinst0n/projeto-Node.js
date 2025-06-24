# Analisador de Repetições em Textos (.txt) usando Node.js

Este projeto tem como objetivo analisar arquivos `.txt` e identificar palavras repetidas em cada linha. Ele percorre arquivos ou diretórios, realiza a verificação e gera automaticamente um novo arquivo com os resultados da análise.

## 🔍 Funcionalidades

-   Leitura de arquivos `.txt`
-   Detecção de palavras redundantes linha por linha
-   Geração automática de relatórios em arquivos separados
-   Suporte para análise de arquivos individuais ou diretórios inteiros

## ⚙️ Requisitos

-   [Node.js](https://nodejs.org/) versão 14 ou superior

## 🛠️ Tecnologias utilizadas

-   [Node.js](https://nodejs.org/)
-   Módulo `fs` (filesystem)
-   Módulo `path`

## 🚀 Como usar

1. Clone o repositório:

```bash
git clone https://github.com/DWinst0n/projeto-Node.js
cd projeto-Node.js
```

2. Execute o script passando o(s) caminho(s) do(s) arquivo(s) ou diretório(s):

```bash
node src/index.js caminho/para/arquivo.txt
node src/index.js caminho/para/uma/pasta/
```

3. O resultado será salvo no mesmo diretório com o sufixo `_resultadoAnalise.txt`.

## 📁 Estrutura do projeto

```
projeto-Node.js/
├──Arquivos
│   ├── analisesRealizadas/
│   │   ├── texto-aprendizado_resultadoAnalise.txt
│   │   ├── texto-kaban_resultadoAnalise.txt
│   │   ├── texto-web_resultadoAnalise.txt
│   │   └── textoRepetitivo_resultadoAnalise.txt
│   ├── texto-aprendizado.txt
│   ├── texto-kaban.txt
│   ├── texto-web.txt
│   └── textoRepetitivo.txt
├── src/
│   ├── erros.js
│   ├── index.js
│   └── manipulaTexto.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

## 📄 Exemplo de saída do relatório

```txt
linha 4 - "Levantar cedo logo cedo tem muitos benefícios, muitos pontos positivos, muitas vantagens. Uma das vantagens, um dos pontos positivos, um dos benefícios é a tranquilidade, a calma, a paz, o sossego. De manhã cedo tudo é mais calmo, mais sossegado, mais tranquilo.
"
{
  "cedo": 3,
  "muitos": 2,
  "benefícios": 2,
  "pontos": 2,
  "positivos": 2,
  "vantagens": 2,
  "um": 2,
  "dos": 2,
  "mais": 3
}
```

## 💡 Possíveis melhorias futuras

-   Leituras em mais formatos de arquivo (Apenas lê .txt)
-   Interface web
-   Detecção de redundâncias com base em contexto, não apenas por repetição literal

---
