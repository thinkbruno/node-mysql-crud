# Node.js CRUD API with MySQL & Docker

Este projeto é uma API REST robusta para gerenciamento de usuários, desenvolvida com **Node.js**, **Sequelize ORM** e **MySQL**. A aplicação é totalmente "dockerizada", garantindo que o ambiente de desenvolvimento seja idêntico ao de produção, e conta com testes unitários automatizados e paginação de dados.

## Tecnologias Utilizadas

- **Runtime:** Node.js v18+
- **Framework:** Express
- **Banco de Dados:** MySQL 8.0
- **ORM:** Sequelize
- **Containerização:** Docker & Docker Compose
- **Testes:** Jest & Supertest
- **Segurança:** Bcryptjs (Hash de senhas)

## Funcionalidades

- **CRUD Completo de Usuários:** Criar, Listar, Atualizar e Deletar.
- **Paginação:** Listagem de usuários otimizada (10 por página).
- **Segurança:** Armazenamento de senhas utilizando criptografia Hash.
- **Persistência:** Banco de dados MySQL integrado via Docker.
- **Qualidade:** Suíte de testes unitários para todos os endpoints.
- **Seed:** Script para povoamento em massa do banco de dados para testes de performance.

---

## Como Executar o Projeto

### Pré-requisitos

- [Docker](https://www.docker.com/get-started) instalado.
- [Docker Compose](https://docs.docker.com/compose/install/) instalado.

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone [https://github.com/thinkbruno/node-mysql-crud.git](https://github.com/thinkbruno/node-mysql-crud.git)
   cd nome-do-repo
   ```

2. **Suba os containers:**

   ```bash
   docker-compose up --build
   ```

   Este comando irá baixar as imagens, configurar o banco de dados e iniciar a API na porta 3000.

3. **Popule o banco (Opcional):**
   Para adicionar 50 usuários de teste automaticamente:
   ```bash
   docker exec -it node_app npm run seed
   ```

---

## Rodando os testes

Para garantir que tudo está funcionando corretamente:

```bash
   docker exec -it node_app npm test
```

---

## Endpoints

| **Método** | **Endpoint**    | **Descrição**                   |
| ---------- | --------------- | ------------------------------- |
| **POST**   | `/users`        | Cria um novo usuário            |
| **GET**    | `/users?page=1` | Lista usuários (paginado 10/10) |
| **PUT**    | `/users/:id`    | Atualiza um usuário existente   |
| **DELETE** | `/users/:id`    | Remove um usuário               |

---

## Estrutura

```shell
$ tree
.
├── src/
│   ├── config/      # Configuração de conexão (Sequelize)
│   ├── controllers/ # Lógica de negócio
│   ├── models/      # Definição das tabelas (Schema)
│   ├── tests/       # Testes unitários (Jest)
│   ├── app.js       # Configuração do Express
│   └── server.js    # Inicialização do servidor e DB sync
├── Dockerfile       # Definição da imagem Node
├── docker-compose.yml # Orquestração App + DB
└── .gitignore       # Arquivos ignorados pelo Git
```

---

## Autor

Bruno Ramos - [brunoramos.tec.br](https://brunoramos.tec.br/)
