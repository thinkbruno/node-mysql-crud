# Node.js CRUD API with MySQL, MongoDB, JWT & Docker

API REST robusta para gerenciamento de usuários, desenvolvida com **Node.js**, **Express**, **Sequelize ORM**, **MySQL** e **MongoDB**.

O projeto foi estruturado seguindo boas práticas de arquitetura backend moderna, incluindo autenticação JWT, logs de auditoria com MongoDB, testes automatizados, validação de dados, documentação Swagger e containerização completa com Docker.

---

# Tecnologias Utilizadas

## Backend

- Node.js v18+
- Express.js

## Banco de Dados

- MySQL 8
- MongoDB 7

## ORM / ODM

- Sequelize ORM
- Mongoose

## Segurança

- JWT Authentication
- bcryptjs
- Helmet
- CORS

## Testes

- Jest
- Supertest

## Documentação

- Swagger UI
- OpenAPI

## DevOps

- Docker
- Docker Compose
- Nodemon

---

# Funcionalidades

## Usuários

- CRUD completo de usuários
- Hash seguro de senhas
- Paginação
- Validação de payloads
- Tratamento global de erros

## Autenticação

- Login com JWT
- Middleware de autenticação
- Rotas protegidas

## Auditoria com MongoDB

- Registro automático de requests
- Persistência de logs
- Auditoria de endpoints
- Arquitetura híbrida SQL + NoSQL

## Qualidade

- Testes unitários
- Testes de integração
- Estrutura escalável
- Arquitetura em camadas

---

# Arquitetura do Projeto

```shell
src/
├── config/            # Configurações do banco e serviços
├── controllers/       # Controllers da aplicação
├── middlewares/       # Middlewares globais
├── models/            # Models Sequelize e Mongoose
├── repositories/      # Camada de acesso aos dados
├── routes/            # Rotas da API
├── services/          # Regras de negócio
├── tests/             # Testes unitários e integração
├── utils/             # Helpers e classes utilitárias
├── validators/        # Schemas de validação
├── app.js             # Configuração do Express
└── server.js          # Inicialização da aplicação
```

---

# Como Executar o Projeto

## Pré-requisitos

- Docker
- Docker Compose
- Node.js 18+
- MongoDB 7+
- MySQL 8+

---

# Clone o repositório

```bash
git clone https://github.com/thinkbruno/node-mysql-crud.git

cd node-mysql-crud
```

---

# Instale as dependências

```bash
npm install
```

---

# Configure as variáveis de ambiente

Crie um arquivo `.env`

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=node_mysql_crud
DB_USER=root
DB_PASSWORD=Root@123456

JWT_SECRET=supersecretkey

MONGO_URI=mongodb://127.0.0.1:27017/node_mysql_crud_logs
```

---

# Executando com Docker

## Subir containers

```bash
docker-compose up --build
```

---

# Executando localmente

## Ambiente de desenvolvimento

```bash
npm run dev
```

## Ambiente normal

```bash
npm start
```

---

# Rodando os Testes

```bash
npm test
```

---

# Documentação Swagger

Após iniciar a aplicação:

```text
http://localhost:3000/api-docs
```

---

# Endpoints

## Health Check

| Método | Endpoint | Descrição           |
| ------ | -------- | ------------------- |
| GET    | /health  | Status da aplicação |

---

## Autenticação

| Método | Endpoint           | Descrição     |
| ------ | ------------------ | ------------- |
| POST   | /api/v1/auth/login | Login com JWT |

---

## Usuários

| Método | Endpoint          | Descrição             |
| ------ | ----------------- | --------------------- |
| POST   | /api/v1/users     | Criar usuário         |
| GET    | /api/v1/users     | Listar usuários       |
| GET    | /api/v1/users/:id | Buscar usuário por ID |
| PUT    | /api/v1/users/:id | Atualizar usuário     |
| DELETE | /api/v1/users/:id | Remover usuário       |

---

# Exemplo de Login

## Request

```http
POST /api/v1/auth/login
```

```json
{
  "email": "admin@email.com",
  "password": "123456"
}
```

---

## Response

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "jwt_token_here"
  }
}
```

---

# Auditoria com MongoDB

Todas as requisições da API são registradas automaticamente no MongoDB.

Exemplo de documento salvo:

```json
{
  "action": "POST /api/v1/users",
  "method": "POST",
  "route": "/api/v1/users",
  "statusCode": 201,
  "payload": {
    "name": "Bruno"
  },
  "createdAt": "2026-05-13T12:00:00.000Z"
}
```

---

# Testes Automatizados

O projeto possui:

- Testes unitários
- Testes de integração
- Cobertura de rotas
- Testes de autenticação
- Testes de regras de negócio

---

# Melhorias Futuras

- RBAC (Admin/User)
- Refresh Token
- Redis Cache
- Upload de arquivos
- CI/CD com GitHub Actions
- Deploy em cloud
- Rate Limiting

---

# Autor

Desenvolvido por Bruno Ramos

Portfolio:

https://brunoramos.tec.br/
