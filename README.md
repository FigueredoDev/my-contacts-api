# My contacts

Este é um projeto de API REST desenvolvido em Node.js e Express que gerencia uma lista de contatos, onde cada contato pode ser associado a uma categoria. O projeto utiliza o PostgreSQL como banco de dados e implementa os padrões Repository e Singleton para uma estrutura organizada e escalável.

## Visão Geral
  Esta API REST permite a criação, leitura, atualização e exclusão de contatos, bem como a atribuição de categorias a esses contatos. Ela oferece uma estrutura sólida para gerenciar informações de contato de maneira eficiente.

## Recursos-chave:
  - CRUD (Criar, Ler, Atualizar, Excluir) de contatos.
  - Associação de contatos a categorias.
  - Padrões Repository e Singleton para gerenciar o acesso ao banco de dados.

## Pré-requisitos
  Antes de começar, certifique-se de ter os seguintes requisitos instalados:

  - Node.js (v14 ou superior)
  - PostgreSQL (v10 ou superior)

## Aqui estão alguns dos principais recursos e tecnologias deste projeto:

- Node.js e Express.js para criar a API.
- PostgreSQL para armazenamento de dados.
- Knex.js para migrações e consulta ao banco de dados.
- Docker para implantação e isolamento de contêineres.
- dotenv para gerenciamento de variáveis de ambiente.
- uuidv4 para geração de identificadores exclusivos.
- Padrões de design Repository e Singleton para organização e manutenção do código.

## Funcionalidades

A API oferece as seguintes funcionalidades:

  ### Contatos:
  
  - Listar todos os contatos: GET /contacts
  - Obter um contato específico por ID: GET /contacts/:id
  - Criar um novo contato: POST /contacts
  - Atualizar um contato existente por ID: PUT /contacts/:id
  - Excluir um contato por ID: DELETE /contacts/:id
  
  ### Categorias:
  
  - Listar todas as categorias: GET /categories
  - Obter uma categoria específica por ID: GET /categories/:id
  - Criar uma nova categoria: POST /categories
  - Atualizar uma categoria existente por ID: PUT /categories/:id
  - Excluir uma categoria por ID: DELETE /categories/:id

## Configuração

### Pré-requisitos

Antes de começar, certifique-se de ter instalado o seguinte:

- Node.js: [Download Node.js](https://nodejs.org/)
- Docker: [Download Docker](https://www.docker.com/)

### Instalação

Siga os passos abaixo para configurar e executar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone https://github.com/FigueredoDev/my-contacts-api.git
   cd my-contacts-api

2.Crie um arquivo .env na raiz do projeto para configurar as variáveis de ambiente. 
Essas variáveis são usadas para configurar a conexão com o PostgreSQL e outras configurações específicas do seu projeto. Abaixo está um exemplo de como configurar as variáveis de ambiente no arquivo .env:

```
DB_HOST=seu-host-do-PostgreSQL
DB_PORT=sua-porta-do-PostgreSQL
DB_NAME=seu-nome-de-banco-de-dados
DB_USER=seu-usuário-do-PostgreSQL
DB_PASSWORD=sua-senha-do-PostgreSQL
PORT=porta-da-api
```

Certifique-se de que essas variáveis de ambiente correspondam às configurações do seu ambiente local.

3.Executar com Docker
  Se você preferir executar o projeto usando Docker, certifique-se de ter o Docker instalado no seu sistema.
  Use o Docker Compose para construir e iniciar os contêineres do projeto:

```bash
docker-compose up --build -d

```
Isso criará e executará os contêineres Docker para o Node.js e o PostgreSQL, configurados de acordo com as variáveis de ambiente definidas no arquivo .env.
Após a conclusão, você poderá acessar a API localmente. Certifique-se de que a configuração do Docker Compose corresponda às variáveis de ambiente definidas.

## Padrões de Código

Este projeto segue padrões de código definidos pelo ESLint para manter a consistência e qualidade do código-fonte. O arquivo de configuração do ESLint pode ser encontrado em [.eslintrc.js](.eslintrc.js). Certifique-se de executar o linting do código antes de enviar pull requests para manter a conformidade com os padrões do projeto.

Para verificar seu código, você pode executar o seguinte comando:

```bash
npm run lint
