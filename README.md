# Fullcycle - Docker: Desafio Nginx com Node.js

A idéia principal é que quando um usuário acessar o nginx, o mesmo fará uma chamada em nossa aplicação node.js.
Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

## Utilização

Executar o seguinte comando:

```
docker-compose up -d
```

Acessar a aplicação no endereço:

```
http://localhost:8080
```
