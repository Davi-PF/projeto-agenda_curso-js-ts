# 📒 Projeto Agenda

Aplicação web de **Agenda de Contatos** desenvolvida com **Node.js**, **Express**, **EJS**, **MongoDB** e **Bootstrap**, seguindo a arquitetura **MVC** como projeto prático do curso [**JavaScript e TypeScript do básico ao avançado**](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/) na **Udemy**.

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License MIT" />
</p>

---

## 🎯 Sobre o Projeto

Este repositório abriga o desenvolvimento do **Projeto Agenda**, separando-o do [repositório principal de aulas e exercícios do curso](https://github.com/Davi-PF/curso-js-ts-aulas) para manter uma organização limpa dos projetos práticos no GitHub.

### 📌 Estado Atual (Em Desenvolvimento)
- Estrutura base em **MVC** (`src/models`, `src/views`, `src/controllers`, `src/middlewares`)
- Servidor **Express** configurado com **Helmet**, proteção **CSRF** (`csurf`), sessões persistidas no MongoDB (`express-session` + `connect-mongo`) e mensagens flash (`connect-flash`)
- Front-end empacotado com **Webpack** e **Babel** (`frontend/` → `public/assets/js/bundle.js`)
- Templates **EJS** com partials (`head.ejs`, `nav.ejs`, `messages.ejs`, `footer.ejs`), página inicial da Agenda (`index.ejs`), telas de autenticação (`login.ejs`, `login-logado.ejs`), formulário de contatos (`contato.ejs`) e página de erro (`404.ejs`) estilizadas com **Bootstrap 4**
- **Autenticação e Sessões:** rotas `POST /login/register`, `POST /login/login` e `GET /login/logout`, middleware `loginRequired` para proteção de rotas autenticadas, validação de dados com `validator`, comparação de hash com `bcryptjs.compareSync`, persistência de sessão com `req.session.user` e navegação dinâmica
- **Agenda de Contatos:** rotas protegidas por `loginRequired` (`GET /contato/index`, `POST /contato/register`, `GET /contato/index/:id`), validações no model (nome obrigatório, formato de e-mail e envio obrigatório de e-mail ou telefone), busca de contato por ID (`buscaPorId`) e formulário compartilhado de criação/visualização (`contato.ejs`). Próximo passo: edição dos contatos

---

## 🛠️ Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)** & **[Express](https://expressjs.com/)** — Servidor HTTP e gerenciamento de rotas
- **[MongoDB](https://www.mongodb.com/)** & **[Mongoose](https://mongoosejs.com/)** — Banco de dados e modelagem ODM
- **[EJS](https://ejs.co/)** — Template engine para renderização das views
- **[Bootstrap 4](https://getbootstrap.com/docs/4.3/)** — Estilização e layout responsivo
- **[Webpack](https://webpack.js.org/)** & **[Babel](https://babeljs.io/)** — Empacotamento e transpilação de código front-end
- **[Helmet](https://helmetjs.github.io/)** & **csurf** — Segurança de cabeçalhos HTTP e proteção contra CSRF
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)** — Geração de salt e hash unidirecional seguro de senhas
- **[validator](https://github.com/validatorjs/validator.js)** — Validação e sanitização de dados (e-mails e campos de entrada)
- **[express-session](https://github.com/expressjs/session)**, **[connect-mongo](https://github.com/jdesboeufs/connect-mongo)** & **[connect-flash](https://github.com/jaredhanson/connect-flash)** — Gerenciamento de sessões e mensagens temporárias
- **[dotenv](https://github.com/motdotla/dotenv)** — Gerenciamento de variáveis de ambiente

---

## 📂 Estrutura de Pastas

```text
├── frontend/                  # Código fonte front-end (JS e CSS)
│   ├── assets/
│   │   ├── css/style.css
│   │   └── js/main.js
│   └── main.js
├── public/                    # Arquivos estáticos e bundle gerado pelo Webpack
│   └── assets/js/bundle.js
├── src/
│   ├── controllers/           # Controladores das rotas (homeController, loginController, contatoController)
│   ├── middlewares/           # Middlewares globais (mensagens flash, user, loginRequired) e CSRF
│   ├── models/                # Modelos do Mongoose (HomeModel, LoginModel, ContatoModel)
│   └── views/                 # Views EJS e partials (includes/head, nav, messages, footer, contato)
├── routes.js                  # Definição das rotas da aplicação
├── server.js                  # Configuração e inicialização do servidor Express
├── webpack.config.js          # Configuração do Webpack e Babel
├── package.json               # Dependências e scripts do projeto
├── LICENSE                    # Licença MIT
└── README.md                  # Documentação do projeto
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão LTS recomendada)
- Uma instância ou URI de conexão do [MongoDB](https://www.mongodb.com/) (ex.: MongoDB Atlas)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/Davi-PF/projeto-agenda_curso-js-ts.git

# 2. Acesse a pasta do projeto
cd projeto-agenda_curso-js-ts

# 3. Instale as dependências
npm install
```

Crie um arquivo `.env` na raiz do projeto contendo a string de conexão com o MongoDB:

```env
CONNECTIONSTRING=sua_string_de_conexao_mongodb
```

Em seguida, execute o servidor e o Webpack em terminais separados:

```bash
# Compilar os assets de front-end (modo watch)
npm run dev

# Iniciar o servidor Express com Nodemon
npm start
```

Acesse a aplicação em: [http://localhost:3000](http://localhost:3000)

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE). Consulte o arquivo `LICENSE` para mais detalhes.

---

<p align="center">
  Desenvolvido por <a href="https://github.com/Davi-PF"><strong>Davi Prudente Ferreira</strong></a> 🚀
</p>
