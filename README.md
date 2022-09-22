

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

# Quais são os tipos de ataques XSS?

 Existem três tipos principais de ataques XSS. Estes são:

* XSS refletido, em que o script malicioso vem da solicitação HTTP atual.

* XSS armazenado, onde o script malicioso vem do banco de dados do site.

* XSS baseado em DOM, onde a vulnerabilidade existe no código do lado do cliente em vez de no código do lado do servidor.

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

 * Interação com os métodos( GET e POST)
 * Listagem de informações;
 * Criação de informações;
 


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

## 🌐 aplicação
<img width="900" heigth="900"  src="">

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
