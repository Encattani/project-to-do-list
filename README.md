
# **To Do List (Gerenciador de Tarefas)**

Projeto de API com a finalidade de realizar a gestão de tarefas vinculadas aos usuários.

## 🔗 Links
[![Link Apresentacao](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=29iFyWJV1Io)

# Funcionalidades

### Tarefas
- Adicionar uma nova tarefa
- Atualizar o status de uma tarefa (pendente/completa)
- Remover uma tarefa
- Listar todas as tarefas

### Usuários
- Criação de usuários (nome de usuário, email e senha)
- Login de usuário com token de controle de acesso

## Tecnologias Utilizadas:

Backend: Node.js, Express

Banco de Dados: MongoDB

Outras Ferramentas e depêndencias:
- **bcryptjs**: Biblioteca para criptografar senhas.
- **jsonwebtoken**: Gera e valida tokens JWT para autenticação.
- **mongoose**: ODM (Object Data Modeling) para manipular o banco de dados MongoDB.
- **dotenv**: Carrega variáveis de ambiente de um arquivo .env.
- **cors**: Middleware para lidar com CORS (Cross-Origin Resource Sharing).
- **body-parser**: Analisa o corpo das requisições HTTP (incorporado ao Express nas versões recentes, mas ainda útil em alguns casos).
- **joi:** Biblioteca para validação de dados.
## Como Rodar o Projeto:

**Pré-requisitos**:

- Node.Js instalado

- Banco de dados MongoDB configurado

- Gerenciador de pacotes (npm ou yarn)

**1 - Clone o Repositorio:**

    git clone https://github.com/Encattani/project-to-do-list.git

**2 - Na pasta do projeto, instale as dependencias com**

    npm install

**3 - Rode o projeto com:**

    npm start

ou com nodemon (atualiza em tempo real a cada alteração no código)

    npm run dev
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`PORT`=*sua_porta*

`JWT_SECRET`=*seu_token_exemplo*

`DB_URI`=*link_do_banco*


## Documentação da API

**Utilize o Insomnia ou Postman para fazer requisições.**

#### Registra um usuário

POST
```http
 https://project-to-do-list.onrender.com/auth/register  
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. |
| `email` | `string` | **Obrigatório**. |
| `password` | `string` | **Obrigatório**.


#### Faz o login do usuário
POST
```http
https://project-to-do-list.onrender.com/auth/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**.|
| `password`      | `string` | **Obrigatório**. |


#### Retorna as tarefas de acordo com o Id vinculado ao Token fornecido
GET
```http
https://project-to-do-list.onrender.com/task/getTasks
```
#### Cria a tarefa e vincula ao Id do usuário logado
POST
```http
https://project-to-do-list.onrender.com/task/
  ```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**.|
| `desccription`      | `string` | **Obrigatório**.|
| `status`      | `boolean` | **Obrigatório**.|

#### Deleta a tarefa de acordo com o parâmetro de Id e com Id de usuário vinculado ao Token fornecido
DELETE
```http
  https://project-to-do-list.onrender.com/task/delete/:id
  ```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `ObjectId` | **Obrigatório**.|

#### Altera a tarefa vinculada ao Id do usuário logado
UPDATE
```http
  https://project-to-do-list.onrender.com/task/update/:id
  ```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**.|
| `desccription`      | `string` | **Obrigatório**.|
| `status`      | `boolean` | **Obrigatório**.|





