

Bem-vindo(a).

Olá, como vai?! Meu nome é Gabriel Miranda e estou trazendo um projeto relacionado a cyber security! Onde criei um sistema que contém uma vulnerabilidade xss(`cross-site scripting`) persistente.
O objetivo desse projeto é entender como explorar essa vulnerabilidade e como prevenir.

<br>



 O que é script-site scripting?
 É uma vulnerabilidade web que permite que o invasor comprometa as interações que os usuários têm com um sistema vulnerável.
 Basicamente é fazer que o código javascript seja executado do lado do navegador da vitima. As vulnerabilidades de script entre sites normalmente permite que um   invasor se disfarce de usuário vítima, execute quaisquer ações que o usuário possa realizar e acesse qualquer um dos dados do usuário. 

# Como funciona o xss?
 O xss funciona manipulando o sistema vulneravel e fazendo que o código javascript seja executado no navegador da vitima, assim podendo comprometer a interação com o sistema.

# Prova de conceito XSS
 Na maiorias das vezes você pode confirmar os tipos de vulnerabilidade XSS injetando algum código javascript no input fazendo que o seu prório navegador execute o código que você injetou. Há muito tempo é uma prática comum usar a função alert()para esse propósito, porque é curta e inofensiva.
 
 # Impacto do XSS
Ao explorar vulnerabilidades de XSS, um invasor pode executar ações maliciosas, como:

* Redirecionar usuários para um site malicioso.
* Capturar as teclas digitadas pelos usuários.
* Acessar o histórico do navegador dos usuários e o conteúdo da área de transferência.
* Executar exploits baseados em navegador da Web (por exemplo, travar o navegador).
* Obter as informações do cookie de um usuário que está logado em um site.
* Roubar o token de sessão de login, permitindo que o invasor interaja com o aplicativo como a vítima sem saber sua senha

# Quais são os tipos de ataques XSS?

 Existem três tipos principais de ataques XSS. Estes são:

* XSS refletido, em que o script malicioso vem da solicitação HTTP atual.

* XSS armazenado, onde o script malicioso vem do banco de dados do site.

* XSS baseado em DOM, onde a vulnerabilidade existe no código do lado do cliente em vez de no código do lado do servidor.

<br>

# Nesse exemplo vamos abordar o XSS armazenado

<h2>O que é XSS armazenado/persistente?</h2>
Esse tipo de XSS é prejudicial porque, quando a informação fornecida pelo usuário é armazenada no banco de dados, e em seguida, é consumida pelo front end, o invasor vai poder está mandando scripts ou tags para ser executado no navegador! Os pontos de entrada para ocorrer um XSS Armazenado incluem fóruns de mensagens, comentários em blogs, perfis de usuário e campos de nome de usuário. Um invasor explorararia normalmente essa vulnerablidade injetando scripts nos pontos de entrada  e enviaria a url para a vitima induzindo-a a visualizar a página que contém a carga de XSS armazenada. A vítima visita a página e o script é executado no lado do cliente pelo navegador da vítima.

# Prevenção contra cross site scripting
Para minimizar a vulnerabilidade de cross-site scripting, os desenvolvedores devem:

* Garantir que qualquer página em seu site que aceite entrada do usuário filtre as entradas de código, como HTML e JavaScript.

* Faça a varredura em busca de vulnerabilidades de aplicativos da Web e conserte-as de acordo.

* Atualize seu site e software de servidor para evitar a exploração futura de vulnerabilidades que podem ser visadas por um ataque XSS.

# Exemplo

Nesse cenário que construir, vai ser um xss armazenado onde estarei explorando através de um textarea( um ponto de entrada) que irá enviar novas informações que vão está sendo guardadas no banco de dados, em seguida, estarei consumindo essas informações no front end. Com isso em mente... Estarei gravando a primeira parte do vídeo exporando essa vulnerabilidade sem filtrar as informações que chegam da requisição. Já na segunda vou está mostrando o que acontece quando a requisição filtra as informações e como são armazenadas no banco.

# 🌐 Parte 1
<img width="900" heigth="900"  src="https://github.com/Gabrielmirandaxl/projeto-web-haking/blob/master/parte1.gif">

Quando a requisição não filtra e armazena no banco de dados:
<img width="800" heigth="800"  src="https://github.com/Gabrielmirandaxl/projeto-web-haking/blob/master/foto2.PNG">


# 🌐 Parte 2
<img width="900" heigth="900"  src="https://github.com/Gabrielmirandaxl/projeto-web-haking/blob/master/parte2.gif">

Quando a requisição filtra e armazena no bando de dados:
<br>
<img width="800" heigth="800" src="https://github.com/Gabrielmirandaxl/projeto-web-haking/blob/master/foto1.PNG">

<br>

> <b>Status code:</b>  finalizado!! ✔

 ## ℹ index

   * [🧠 contexto](#-contexto)
   * [📥 download](#-download)
     * [setup](#-setup)
     * [starting](#-starting)
   * [🌐 aplicação](#-aplicação)
   * [🛠 tecnologias](#-tecnologias)
   * [✍🏼 autor](#-autor)
   * [📝 license](#-license)


 ## 🧠 contexto
> **Project Feature:**  *aplicação web* 🌐 

 Este projeto consiste em sistema de adicionar informações feito com `javascript`, `nodejs(express.js)` e `mongoDB`, onde faço as seguintes funcionalidades:

 * Interação com os métodos( GET e POST);
 * Listagem de informações;
 * Criação de informações.
 


<br>

## 📥 download

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:
[Git](https://git-scm.com) e o [Node.js](https://nodejs.org/en/).
Além disso, é bom ter um editor para trabalhar com código como [VSCode](https://code.visualstudio.com/).

### 💻 setup

```php
# clonar este repositório
$ git clone https://github.com/Gabrielmirandaxl/projeto-web-hacking

# acesse a pasta do projeto
$ cd projeto-web-hacking

# instale as dependências
$ npm install
```

### ▶ starting
```php
# executando o comando
$ npm run start

# aplicativo rodando em:
  - Local:   http://localhost:3000/ 
 
```

<br>



<br>


## 🛠 tecnologias

As seguintes ferramentas/tecnologias foram usadas na construção e teste do projeto.
<br>

| logo               | Framework                  | Version      |
| :----------------- | :------------------------- | :----------: |
| <a href="https://vuejs.org/"><img align="center" alt="vue" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg"></a>| Html  |  `5.0.0`       |
| <a href="https://www.javascript.com/" target="_blank"><img align="center" alt="js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"></a> | JavaScript  |  `4.6.3`      |
| <a href="https://vuejs.org/"><img align="center" alt="vue" height="30" width="40" src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg"></a>| Express  |  `4.18.1`       |
| <a href="https://www.postgresql.org/download/" target="_blank"><img align="center" alt="node" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg"></a> | NodeJS      |  `16.14.2`       |
| <a href="https://materializecss.com/"><img align="center" alt="mongo" height="25" width="35" src="https://github.com/devicons/devicon/blob/master/icons/mongodb/mongodb-original.svg"></a> | mongoDB | `5.0.9` |
 
<br>
                 
## ✍🏼 autor


<div align=left>

- <table>
 <p>  Developed by:</p>
  <tr align=center>
    <th><strong> Gabriel Miranda </strong></th>
  </tr>
   <td>
      <a href="https://github.com/Gabrielmirandaxl">
        <img width="168" height="140" src="https://user-images.githubusercontent.com/82064724/179410818-bc9e953b-83b1-4f23-9d05-ad702abf0f29.png" > <p align="left">
</p></a>
    </td>

</table>
</div>

<div align=left>

<br>
 
## 📝 license

Este repositório está licenciado sob **MIT LICENSE**. Para informações mais detalhadas, leia o arquivo [LICENSE](./LICENSE) contido neste repositório.
                
 <br> 
	
 [<Back](#-blue-schedule-frontend-)
