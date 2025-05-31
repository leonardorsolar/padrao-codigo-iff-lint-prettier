**tutorial completo e atualizado** para instalar e configurar um projeto **Node.js com TypeScript**, utilizando **ESLint** e **Prettier** para manter a qualidade e o estilo do código.

---

# 🛠️ Tutorial: Criar um projeto Node.js com TypeScript, ESLint e Prettier

---

"O Node.js é um container web de execução de código Javascript. Ele é usado para desenvolvermos projetos com Javascript e disponibilizarmos os mesmos na web."

## ✅ 1. Inicializar o projeto

```bash
mkdir meu-projeto-node-ts
cd meu-projeto-node-ts
npm init -y
```

O comando git init serve para inicializar um repositório Git em um diretório local, transformando-o num repositório Git que pode ser utilizado para o controlo de versões. Quando executado, cria uma pasta oculta chamada .git dentro do diretório, onde são armazenados os dados do repositório.

Um package.json é um arquivo JSON que contém metadados sobre um projeto de desenvolvimento, geralmente em JavaScript/Node.js. Este arquivo é fundamental para gerenciar dependências, scripts e versões do projeto. 

### Criar o arquivo .gitiignore
```bash
touch .gitignore
```

Adicione dentro do arquivo .gitignore :
```bash
node_modules
```
O gitignore é usado para ignorar arquivos e pastas que você não quer incluir no repositório Git, como a pasta node_modules

---

## ✅ 2. Instalar o TypeScript

```bash
npm install typescript --save-dev
```

npm install typescript é um comando que utiliza o Node Package Manager (NPM) para instalar a linguagem de programação TypeScript no seu projeto. O TypeScript é um superset de JavaScript que adiciona tipagem estática, facilitando o desenvolvimento de aplicações web e backend.

TypeScript é uma linguagem criada pela Microsoft e é um super conjunto da linguagem JavaScript, que fornece classes , interfaces e a tipagem estática opcional.

### Criar o arquivo `tsconfig.json`:

```bash
npx tsc --init
```

> Isso vai gerar um `tsconfig.json`. Você pode personalizar as opções, como:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

---

## ✅ 3. Criar a estrutura do projeto

```bash
mkdir src
echo "console.log('Hello, TypeScript!');" > src/index.ts
```

comandos:
Para transpilar o typescript:
```bash
npx tsc   
```   
e depois de trnaspilado pode rodar o javascript:
```bash
node dist/index.js 
``` 

npx tsc: Esse comando lê o tsconfig.json, compila tudo que está em src/ e gera .js em dist/.
---


##  Ferramenta para executar o código

```bash
npm i ts-node --save-dev
``` 
O comando npm i ts-node --save-dev serve para instalar a biblioteca ts-node no seu projeto Node.js, mas como uma dependência de desenvolvimento (devDependency). ts-node é uma ferramenta que permite executar código TypeScript diretamente no Node.js sem a necessidade de compilação prévia. Ele funciona como um interpretador, transpila o código TypeScript para JavaScript e executa-o no ambiente Node.js, simplificando o processo de desenvolvimento e execução de projetos com TypeScript.

comando para compilar no terminal:
npx ts-node src/index.ts ou node src/index.ts 

##  Ferramenta de monitoramento

```bash
npm i nodemon --save-dev
``` 

O Nodemon é uma ferramenta de monitoramento para desenvolvimento de aplicações Node.js. Ele acompanha as alterações nos arquivos do seu projeto e reinicia automaticamente o servidor quando detecta alguma modificação, permitindo que você teste e desenvolva de forma mais rápida e eficiente.


Script de compilação:

Adicone:
```bash
 "scripts": {
   "dev": "nodemon --watch src --exec ts-node src/index.ts -e ts",
 }
``` 
e ficará assim:
```bash
{
{
{
 "name": "setup01",
 "version": "1.0.0",
 "description": "",
 "main": "index.js",
 "scripts": {
   "dev": "nodemon --watch src --exec ts-node src/index.ts -e ts"
 },
 "keywords": [],
 "author": "",
 "license": "ISC",
 "devDependencies": {
   "@types/node": "^22.15.21",
   "nodemon": "^3.1.10",
   "ts-node": "^10.9.2",
   "typescript": "^5.8.3"
 }
}
``` 
Para compilar no código no terminal:
```bash
npm run dev
``` 

## ✅ 4. Padrão de Commits com Conventional Commits
É um padrão para nomear mensagens de commit no Git de forma consistente e significativa. Ajuda a entender o que mudou, por que e facilita automatizações como geração de changelogs e versionamento semântico (semver).

chore – Tarefas de manutenção (sem relação com código de app)
Tarefas como atualizar dependências, configs, husky, etc.
chore: setup do projeto

feat – Adição de funcionalidade nova
Usado quando você adiciona algo novo ao projeto.
feat: adicionar funcionalidade de cadastro de usuário

fix – Correção de erro/bug
Usado quando você corrige um problema que estava quebrando o sistema ou comportamento inesperado.
fix:corrigir erro de validação no formulário de login

refactor – Refatoração (sem alterar funcionalidade)
Alterações no código para torná-lo melhor, sem mudar o que ele faz.
refactor: extrair função de cálculo para outro módulo

## ✅ 5. Commits Atômicos

O que é um commit atômico?
m commit atômico, no contexto da ciência da computação, especialmente em sistemas de controlo de versão como o Git, significa que cada commit (ou alteração no código) representa uma única unidade de trabalho ou alteração lógica completa. Cada commit deve ser uma alteração independente e que, por si só, tem um propósito claro e bem definido. 

Boas práticas:
Um commit = uma responsabilidade
Evite commits do tipo "ajustes gerais"


## ✅ 6. Instalar o ESLint - Reforçar padrões de código
ESLint é uma ferramenta para analisar e corrigir problemas no seu código JavaScript/TypeScript (como erros de sintaxe, inconsistências de estilo, etc). Ajuda a manter o código limpo e padronizado.


```bash
npm install eslint --save-dev
npx eslint --init
```

> Durante a configuração interativa:

* ❓ How would you like to use ESLint? → **To check syntax, find problems, and enforce code style**
* ❓ What type of modules does your project use? → **CommonJS**
* ❓ Which framework does your project use? → **None of these**
* ❓ Does your project use TypeScript? → **Yes**
* ❓ Where does your code run? → **Node**
* ❓ How would you like to define a style for your project? → **Use a popular style guide**
* ❓ Which style guide do you want to follow? → **Airbnb** (ou outro que preferir)
* ❓ What format do you want your config file to be in? → **JSON**

O comando irá instalar as dependências automaticamente.

---

## ✅ 6. Ajustar o ESLint para TypeScript

Se não foi instalado automaticamente, adicione:

```bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin 
```

Edite o `.eslint.config.mjs` e ajuste assim:

```mjs
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: { globals: globals.node } },
  tseslint.configs.recommended,
]);
```

instalar a extensão no vscode do eslint

Adicione o seguinte código:

```js
console.log("IFF")
// Variável declarada, mas nunca usada
const mensagem = "hello world"

//Uso de variável antes da declaração (hoisting problem)
console.log(idade) // erro: 'idade' is used before it is defined
let idade = 30

// Função sem retorno explícito ou retorno inconsistente
function soma(a: number, b: number) {
   if (a > 0) {
       return a + b
   }
   // falta return aqui
}

```
Adicionar no package.json

```js
"scripts": {
    "dev": "nodemon --watch src --exec ts-node src/index.ts -e ts",
    "lint": "eslint src --ext .ts",
    "lint:fix": "eslint src --ext .ts --fix",
    "format": "prettier --write ."
  },
```

para executar:
npm rum lint

## ✅ 7. Instalar e configurar o Prettier Reforçar estilos de código


```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```


Crie um arquivo `.prettierrc` com suas preferências:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

Adicione Prettier ao ESLint em `.eslintrc.json`: ver isso aqui

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ]
}
```

---

## ✅ 7. Scripts úteis no `package.json`

```json
"scripts": {
  "build": "tsc",
  "lint": "eslint ./src --ext .ts",
  "format": "prettier --write ./src"
}
```

---

## ✅ 8. Ignorar arquivos desnecessários

Crie um `.gitignore`:

```
node_modules
dist
```

E um `.eslintignore`:

```
dist
```

---

## ✅ 9. Testar

* Lint: `npm run lint`
* Format: `npm run format`
* Build: `npm run build`
* Rodar com Node:
  Após `npm run build`, execute:

  ```bash
  node dist/index.js
  ```

---

## ✅ 10. Rodar direto com `ts-node` (opcional)

```bash
npm install ts-node --save-dev
```

Adicione um script:

```json
"dev": "ts-node src/index.ts"
```

---

Se quiser, posso gerar uma **versão em PDF ou Markdown** desse tutorial para usar com alunos ou equipe. Deseja?
