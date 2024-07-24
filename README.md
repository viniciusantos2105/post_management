# Projeto Posts

Este projeto é uma API de controle de posts, desenvolvida em TypeScript e JavaScript, utilizando o gerenciador de pacotes npm. A API é construída com o framework Express e utiliza o Sequelize como ORM para interagir com o banco de dados MySQL.

## Padrões de Projeto

## Adapter
O padrão Adapter é um padrão de design estrutural que permite que objetos com interfaces incompatíveis trabalhem juntos. Ele envolve a criação de um objeto adaptador que traduz a interface de um objeto para outra interface que o cliente espera.

## Hateoas
O padrão Hateos é um princípio fundamental que orienta a construção de APIs RESTful. Ele sugere que uma API deve ser auto-descritiva. <br>
Nesse projeto, eu incluiu links para as ações 'self', 'update' e 'delete' nas respostas da API

### Middleware

O padrão Middleware é amplamente utilizado no Express para adicionar funcionalidades ao pipeline de processamento de solicitações HTTP. Nesse projeto, usei o middleware para lidar com a serialização JSON das solicitações e respostas, e também para lidar com erros.

### Router

O padrão Router é usado para definir as rotas da aplicação. Nesse projeto, todas as rotas são definidas em um arquivo separado (`global-route.ts`), o que torna o código mais organizado e fácil de manter.

### ORM (Object-Relational Mapping)

O Sequelize é um ORM que permite interagir com o banco de dados usando objetos e métodos em vez de SQL bruto. Isso torna o código mais fácil de escrever, ler e manter.

### Bootstrap

O padrão Bootstrap é usado para inicializar a aplicação. Nesse projeto, a função `bootstrap` é chamada quando o servidor começa a escutar na porta especificada. Esta função é responsável por inicializar o Sequelize e estabelecer a conexão com o banco de dados.

# Como executar o projeto

## Sem Docker

1. Primeiro, instale as dependências do projeto. No diretório raiz do projeto, execute o seguinte comando no terminal:

```bash
npm install
```

2. Segundo, aplique as migrations do projeto. Execute o seguinte comando no terminal:

```bash
npx sequelize-cli db:migrate
```

3. Em seguida, construa o projeto. Isso irá compilar o código TypeScript para JavaScript.

```bash
npm run build
```

4. Agora você pode executar o projeto com o seguinte comando:

```bash
npm run dev
```

## Com Docker

1. Execute o comando no power shell:

```bash
docker-compose up
```

## Tecnologias

- Javascript
- Typescript
- NodeJs
- Express
- Sequelize
- Express Validator
