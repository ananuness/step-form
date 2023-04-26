<h1 align="center">🛍 Step Form</h1>

<p align="center">
  Uma abstração de um formulário comumente usado em sites ecommerce, 
  envolvendo os passos de dados pessoais, endereço e método de 
  pagamento (envolvendo apenas pagamentos com cartão). 🛒
</p>

<p align="center">
 <a href="#books-cursos">Cursos</a> • 
 <a href="#desktop_computer-demonstração">Demonstração</a> •
 <a href="#construction_site-estrutura-do-projeto">
  Estrutura do projeto
 </a> •
 <a href="#desk-validações">Validações</a> •
 <a href="#woman_technologist-acertos-dificuldades-e-melhorias">
  Acertos, dificuldades e melhorias
 </a>
</p>

## :books: Cursos

Foram abordados conceitos apresentados nos cursos:

- [HTML5 e CSS3 Parte 3: trabalhando com formulários e tabelas](https://cursos.alura.com.br/course/html5-css3-formularios-tabelas);
- [JavaScript e HTML: desenvolva um jogo e pratique lógica de programação](https://cursos.alura.com.br/course/logica-programacao-javascript-html);
- [Curso JavaScript e HTML: pratique lógica com desenhos, animações e um jogo](https://cursos.alura.com.br/course/logica-programacao-pratica-com-desenho-animacoes-em-jogo);
- [JavaScript: tipos, variáveis e funções](https://cursos.alura.com.br/course/fundamentos-javascript-tipos-variaveis-funcoes);
- [JavaScript: Arrays](https://cursos.alura.com.br/course/fundamentos-javascript-arrays);
- [JavaScript: objetos](https://cursos.alura.com.br/course/fundamentos-javascript-objetos);
- [JavaScript para Web: Crie páginas dinâmicas](hhttps://cursos.alura.com.br/course/javascript-web-paginas-dinamicas);
- [JavaScript: manipulando o DOM](https://cursos.alura.com.br/course/javascript-manipulando-dom);
- [JavaScript na Web: validação de Formulários e HTML5](https://cursos.alura.com.br/course/javascript-web-validacao-formularios-html5);
- [JavaScript: consumindo e tratando dados de uma API](https://cursos.alura.com.br/course/javascript-consumindo-tratando-dados-api);

## :desktop_computer: Demonstração

<!-- <img src="#.gif" alt="gif (imagem que se movimenta) mostrando a aplicação do formulário">
<p>Ou acesse o <a href="#">site</a>.</p> -->

## :construction_site: Estrutura do projeto

```bash
    ├── assets
    │    ├── icons
    │    └── images
    ├── css
    │    ├── components
    │    │     ├── button.css
    │    │     ├── calendar.css
    │    │     ├── input.css
    │    │     ├── label.css
    │    │     └── stepper.css
    │    ├── form.css
    │    ├── global.css
    │    ├── payment.css
    │    └── root.css
    ├── js
    │    ├── validations
    │    │     ├── address.js
    │    │     ├── payment.js
    │    │     └── personal-data.js
    │    ├── calendar.js
    │    ├── form.js
    │    ├── input-mask.js
    │    ├── resume.js
    │    └── stepper.js
    ├── pages
    │    ├── address.html
    │    ├── payment.html
    │    └── resume.html
    ├── index.html
    ├── LICENSE
    ├── package.json
    └── README.md
```
> pra fazer quotes

## :clipboard: :mag_right: :white_check_mark: Validações

<p>
  Grande parte das validações foram feitas utilizando funções 
  personalizadas e máscaras nos inputs com regex, enquanto o usuário 
  digita (<code>onInput</code>) ou quando o input perde o foco 
  (<code>onChange</code>) para uma resposta mais imediata otimizando o
  tempo do usuário, facilitando e limitando o que é informado
  de uma maneira simples, visualmente intuitiva e agradável, além de 
  garantir maior tolerância à falhas nos campos digitados.
</p>

> Os eventos onInput e onChange são similares, mas a
> principal diferença é que o onInput ocorre imediatamente depois do 
> valor do input mudar, enquanto o onChange ocorre quando o input perde 
> o foco. Outra diferença é que o onChange funciona também em elementos
```<select>```.

<p>
  Para a maioria das máscaras, a implementação foi baseada no conceito
  de grupos de captura da regex juntamente com o método 
  <code>.replace()</code> que, a cada mudança de valor, verifica e, 
  quando necessário, adiciona os símbolos caracteríscos utilizando as
  variáveis temporárias que são criadas e enumeradas de acordo com a
  ordem de abertura de parêntenses na expressão.
</p>
<p>
  Explicando melhor, os grupos de captura são construídos colocando 
  o <i>pattern</i> a ser capturado entre parênteses. Exemplo:
</p>

```js
  const phone = value => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/-(\d{4})(\d)/, "$1");
  }
```

<p>
  A substring correspondente ao grupo é salva em uma "variável" 
  temporária, que pode ser acessada <b>dentro</b> da mesma regex 
  usando uma barra invertida e o número do grupo de captura, como
  <code>/(\d) \1/</code> ou acessando através da notação
  <code>$(número do grupo)</code>, sendo esta usada no método replace.
  Lembrando que a enumeração é de acordo posição de seus parênteses de 
  abertura (da esquerda para a direita), começando em 1: 
</p>

```js
  .replace(/(\d{2})(\d)/, "($1) $2")
```
<p>
  Isso quer dizer que queremos o primeiro alfanumérico com tamanho 
  igual a 2, que seja colocado entre parênteses e que o próximo valor
  digitado seja separado do primeiro grupo com um espaço. Chamamos 
  isso de <i>backreferences</i>.
</p>

## :woman_technologist: Acertos, dificuldades e melhorias

- ☀️ Acertos: 
  

- ⛈ Dificuldades:
  - controlar os estados de erro dos inputs;
  - criar uma boa organização para a pasta dos scripts;
  - aplicar o conceito de *Single Responsability* do SOLID;
  - aplicar regex para fazer as máscaras dos inputs e encontrar 
  conteúdo sobre como implementar com javascript puro de modo que 
  ficasse visualmente agradável nos campos;

- 🌈 O que pode melhorar:
  
<h4 align="center">🚧 Readme em construção 👷🏻‍♀️</h4>

<hr>

<p align="center">
  Feito com 💜 por
  <a align="center" href="https://www.linkedin.com/in/ana-beatriz-nunes/">
    Ana Beatriz Nunes
  </a>
</p>