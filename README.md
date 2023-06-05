
<h1 align="center">Book of Contacts - API</h1>

<p align="center">Este é o backend da aplicação Book of Contacts - Um site focado para voce poder salvar seus contatos</p>


<p align="center">
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>


## **Endpoints**

Para fazer a intalação da API localmente:

<p> Se estiver usando o yarn, apenas execute o comando: <b> yarn </b> e para rodar a API use: <b> yarn dev </b> </p>

<p> Caso estiver usando o npm execute o comando <b> npm install </b> e para rodar a API use: <b> npm run dev </b> </p>


A API tem um total de 3 endpoints

O url base da API é https://contacts-book-api.onrender.com/

<h2 align ='center'> Cadastrando Usúarios </h2>

`POST /users -  FORMATO DA REQUISIÇÃO`
```json
{
	"fullName": "Nome de Teste",
	"email": "teste@mail.com",
	"password": "Teste",
	"phoneNumber": "11999999999"
}
```

Se tudo der certo essa sera a resposta:

`FORMATO DA RESPOSTA - STATUS 201`
```json
{
	"fullName": "Nome de Teste",
	"email": "teste@mail.com",
	"phoneNumber": "11999999999",
	"id": 1,
	"createdAt": "2023-05-31",
	"updatedAt": "2023-05-31",
	"deletedAt": null
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

No exemplo a requisição foi feita usando o email que ja esta cadastrado no banco de dados.

`` FORMATO DA RESPOSTA - STATUS 400``
```json
"Email already exists"
```

Nesse outro exemplo a requisição foi feita com um senha com menos que 6 caracteres.


`` FORMATO DA RESPOSTA - STATUS 400``
```json
"Password is too short"
```


<h2 align ='center'> Fazendo Login </h2>

`POST /login - FORMATO DA REQUISIÇÃO`
```json
{
	"email": "teste@mail.com",
	"password": "teste"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /login -  FORMATO DA RESPOSTA - STATUS 200`
```json

{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjg1OTAyODQ3LCJleHAiOjE2ODU5ODkyNDcsInN1YiI6IjcifQ.xqUA31cuQ0O9g0SJvqRAREJJTHU9WahcOJKGqXCcnoo"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:


Nesse outro exemplo a requisição foi feita com um senha ou um email que esta incorreta ou que não existe.


`` FORMATO DA RESPOSTA - STATUS 400``
```json
"Invalid credentials"
```

## Rotas que necessitam de autorização

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}


<h2 align ='center'> Visualizar usuários</h2>

Para mostrar o seu usuário: 

`GET /users -  FORMATO DA REQUISIÇÃO`

`FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"fullName": "Nome de Teste",
	"email": "teste@mail.com",
	"phoneNumber": "11999999999",
	"id": 1,
	"createdAt": "2023-05-31",
	"updatedAt": "2023-05-31",
	"deletedAt": null
}
```



<b>Para Editar um Usuário:</b>

Só é necessario mandar a alteração que quiser fazer, não precisa mandar todo o corpo de requisição novamente.
o email é a unico que não consegue mudar

`PATCH /users/{id do usuário} - FORMATO DA REQUISIÇÃO`
```json
{
	"fullName": "Nome de Teste2"
}
```

`FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"fullName": "Nome de Teste2",
	"email": "teste@mail.com",
	"phoneNumber": "11999999999",
	"id": 1,
	"createdAt": "2023-05-31",
	"updatedAt": "2023-05-31",
	"deletedAt": null
}
```

<b>Para Deletar o Usuário:</b>


`DELETE /users -  FORMATO DA REQUISIÇÃO`

```json
  no body
```

`FORMATO DA RESPOSTA - STATUS 203`
```json
no content
```


<h2 align ='center'> Adicionar contatos </h2>

Para criar um contato

`POST /contacts - FORMATO DA REQUISIÇÃO`
```json
{
	"fullName": "Adão",
	"email": "adao@mail.com",
	"phoneNumber": "11999999999"
}
```
  
  
`FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"fullName": "Adão",
	"email": "adao@mail.com",
	"phoneNumber": "11999999999",
	"id": 1,
	"createdAt": "2023-06-04",
	"updatedAt": "2023-06-04"
}
```
 
 Para editar um contato: 

`PATCH /contacts/{id do contato} - FORMATO DA REQUISIÇÃO`
```json
{
	"fullName": "Adão Carlos"
}
```

`FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"fullName": "Adão Carlos",
	"email": "adao@mail.com",
	"phoneNumber": "11999999999",
	"id": 1,
	"createdAt": "2023-06-04",
	"updatedAt": "2023-06-04"
}
```

Para ver todos os contatos do usuario: 

`GET /contacts -  FORMATO DA REQUISIÇÃO`

`FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"fullName": "Arthur",
		"email": "arthur@mail.com",
		"phoneNumber": "11999999999",
		"id": 2,
		"createdAt": "2023-06-04",
		"updatedAt": "2023-06-04"
	},
  {
    "fullName": "Adão Carlos",
    "email": "adao@mail.com",
    "phoneNumber": "11999999999",
    "id": 1,
    "createdAt": "2023-06-04",
    "updatedAt": "2023-06-04"
  }
]
```

Para deletar um contato: 

`DELETE /contacts/{id do contato} -  FORMATO DA REQUISIÇÃO`

```json
  no body
```

`FORMATO DA RESPOSTA - STATUS 203`
```json
no content
```
