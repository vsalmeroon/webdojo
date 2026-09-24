# WebDojo - Testes Automatizados com Cypress

Projeto de automação de testes desenvolvido em **Cypress** para a
aplicação **WebDojo**, utilizado para estudos e prática de automação de
testes.

A aplicação WebDojo e os testes automatizados estão disponíveis no mesmo
repositório.

## Tecnologias

-   Cypress
-   JavaScript
-   Node.js
-   NPM
-   Git e GitHub

## Estrutura do Projeto

``` text
web/
├── cypress/
│   ├── e2e/
│   │   └── Testes automatizados E2E
│   │
│   ├── fixtures/
│   │   ├── cep.json
│   │   ├── consultancy.json
│   │   └── document.pdf
│   │
│   └── support/
│       ├── actions/
│       ├── commands.js
│       ├── e2e.js
│       └── utils.js
│
├── dist/
├── node_modules/
├── .gitignore
├── cypress.config.js
├── package-lock.json
└── package.json
```

### Principais diretórios

**`cypress/e2e`**

Contém as suítes de testes automatizados E2E da aplicação WebDojo.

**`cypress/fixtures`**

Contém arquivos utilizados como massa de dados e arquivos auxiliares
durante a execução dos testes.

Exemplos:

-   `cep.json`
-   `consultancy.json`
-   `document.pdf`

**`cypress/support`**

Contém comandos customizados, configurações de suporte e funções
reutilizáveis utilizadas pelos testes.

**`cypress/support/actions`**

Contém ações reutilizáveis utilizadas na automação.

**`utils.js`**

Contém funções utilitárias compartilhadas entre diferentes partes do
projeto.

**`commands.js`**

Contém comandos customizados do Cypress utilizados para reduzir
duplicação e facilitar a reutilização de ações.

## Pré-requisitos

Para executar o projeto é necessário possuir:

-   Node.js
-   NPM

Após clonar o repositório, instale as dependências:

``` bash
npm install
```

## Executando a aplicação WebDojo

Antes de executar os testes automatizados, é necessário iniciar a
aplicação WebDojo.

Dentro do diretório `web`, execute:

``` bash
npm run dev
```

O script executado é:

``` json
"dev": "serve -s dist -p 3000"
```

A aplicação será disponibilizada localmente na porta `3000`.

Mantenha esse terminal em execução enquanto os testes forem executados.

## Executando os Testes

Os scripts de execução estão configurados no arquivo `package.json`.

### Regressão

Para executar a suíte de testes em resolução desktop:

``` bash
npm test
```

Configuração utilizada:

``` text
viewportWidth: 1440
viewportHeight: 900
```

O comando executado internamente é:

``` bash
npx cypress run --config viewportWidth=1440,viewportHeight=900
```

### Testes de Login - Desktop

Para executar somente a suíte de login:

``` bash
npm run test:login
```

O comando executado é:

``` bash
npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=1440,viewportHeight=900
```

Resolução:

``` text
1440 x 900
```

### Testes de Login - Mobile

Para executar a suíte de login simulando uma resolução mobile:

``` bash
npm run test:login:mobile
```

O comando executado é:

``` bash
npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414,viewportHeight=896
```

Resolução:

``` text
414 x 896
```

## Scripts Disponíveis

  -----------------------------------------------------------------------
  Script                              Descrição
  ----------------------------------- -----------------------------------
  `npm run dev`                       Inicia a aplicação WebDojo

  `npm test`                          Executa a suíte de testes em
                                      resolução desktop

  `npm run test:login`                Executa somente os testes de login
                                      em desktop

  `npm run test:login:mobile`         Executa os testes de login em
                                      resolução mobile
  -----------------------------------------------------------------------

## Fluxo de Execução

Em um terminal, inicie a aplicação:

``` bash
npm run dev
```

Em outro terminal, execute os testes desejados:

``` bash
npm test
```

ou:

``` bash
npm run test:login
```

ou:

``` bash
npm run test:login:mobile
```

## Conceitos Aplicados no Projeto

Durante o desenvolvimento da automação foram aplicados conceitos como:

-   Testes End-to-End (E2E)
-   Assertions
-   Custom Commands
-   Fixtures e massa de testes
-   Interceptação e mock de requisições
-   Cookies
-   LocalStorage
-   Expressões Regulares (Regex)
-   Bypass de autenticação
-   Funções utilitárias
-   Reutilização de código
-   Configuração de `baseUrl`
-   Execução via CLI
-   Execução de suítes específicas
-   Testes em diferentes resoluções
-   Organização e manutenção do projeto de automação

## Objetivo

Este projeto tem como objetivo aplicar na prática conceitos de
**Qualidade de Software e Automação de Testes com Cypress**, evoluindo
desde a criação de cenários E2E até técnicas de organização,
reutilização de código, mocks, gerenciamento de estado e execução de
regressão.

O projeto também serve como material de estudo e evolução prática em
automação de testes.
