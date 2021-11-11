# Integração API+Mongo DB + Heroku. 

Nesse projeto temos uma **API COM 3 ROTAS.**

- <u>Cidades , Estados e Países.</u>



Primeiramente hospedamos nosso projeto no **Heroku** e temos uma URL principal para nossas rotas :

```javascript
https://nodemongoatlas.herokuapp.com
```

A partir dessa rota principal conseguimos acessar nossas 3 rotas criadas :

```javascript
https://nodemongoatlas.herokuapp.com/cities/
```

```javascript
https://nodemongoatlas.herokuapp.com/states/
```

```javascript
https://nodemongoatlas.herokuapp.com/countries/
```

**Em cada uma dessas rotas temos Sub-rotas que acessam, acrescentam, editam e apagam informações em nosso banco de dados na nuvem.**

###### Vamos usar a rota ***/cities*** como exemplo , as 5 sub rotas criadas dentro de /cities são:

1. **/listall** (Método [GET] para listar todas as cidades do banco de dados) :

   ```javascript
   https://nodemongoatlas.herokuapp.com/cities/listall/
   ```

 2. **/listname/name** (Método [GET] para listar a cidade por um nome especifico) :

    ```javascript
    https://nodemongoatlas.herokuapp.com/cities/listname/INSIRA O NOME DA CIDADE
    ```

 3. **/add** (Método [POST] para acrescentar uma cidade no banco de dados.)

    ```javascript
    https://nodemongoatlas.herokuapp.com/cities/add
    ```

 4. **/update/id** (Método [PUT] para editar uma cidade que já exista no banco de dados) :

    ```javascript
    https://nodemongoatlas.herokuapp.com/cities/update/INSERIR O ID DA CIDADE
    ```

 5. **delete/id** (Método [DELETE] para apagar uma cidade que já exista no banco de dados) :

    ```javascript
    https://nodemongoatlas.herokuapp.com/cities/delete/INSERIR O ID DA CIDADE
    ```



##### 			Pronto! Agora já conseguimos usar nossa rota cidades e suas sub-rotas!

​				**O mesmo principio se aplica a nossa rota de Estados e Países!**



*Bernardo Noro*

