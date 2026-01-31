# teste-qa

## 📋 Visão geral
Este repositório contém testes end-to-end automatizados escritos com **Cypress** que exercitam o site de demonstração `https://www.saucedemo.com/`. Este projeto foi desenvolvido durante a aula da disciplina de **Qualidade de Software**.

Os testes verificam fluxos como login (válido e inválido), adicionar produtos ao carrinho e finalizar o checkout.

---

## 🚀 Pré-requisitos
- Node.js (recomendado v16+)
- npm (vem com o Node.js)

> Obs.: os comandos abaixo devem ser executados dentro da pasta `cypress` (ex.: `cd cypress`).

---

## 🔧 Instalação
1. Abra um terminal e entre na pasta do projeto:

```bash
cd cypress
```

2. Instale as dependências:

```bash
npm install
```

---

## ▶️ Como executar os testes
- Abrir o Test Runner interativo:

```bash
npx cypress open
```

- Executar em modo headless (CLI):

```bash
npx cypress run
```

- Executar um arquivo de teste específico:

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## 📁 Estrutura do projeto
- `cypress/cypress/e2e/`
  - `login.cy.js` — contém testes de login, fluxo de carrinho e checkout.
  - `atividade.cy.js` — testes de cenário com múltiplas interações (compras, checkout etc.).
- `cypress/fixtures/` — dados de exemplo (não utilizados atualmente nos testes).
- `cypress/support/commands.js` — arquivo para adicionar comandos customizados (atualmente sem comandos definidos).
- `cypress/support/e2e.js` — importa os comandos e configurações globais.
- `cypress/cypress.config.js` — configuração do Cypress.

---

## 🧪 Como os testes funcionam (resumo)
- Cada teste abre a página `https://www.saucedemo.com/` com `cy.visit()`.
- Os seletores usam atributos `data-test` para localizar elementos (ex.: `cy.get('[data-test="username"]')`).
- Fluxos implementados:
  - Login inválido (verifica mensagem de erro)
  - Login válido (verifica navegação para `/inventory.html`)
  - Adicionar itens ao carrinho
  - Checkout: preencher `firstName`, `lastName` e `postalCode`, finalizar compra e validar retorno ao inventário

---

## ✍️ Como adicionar novos testes
1. Crie um novo arquivo `*.cy.js` dentro de `cypress/cypress/e2e/`.
2. Use `describe()` e `it()` para estruturar suítes e casos de teste.
3. Reutilize seletores por `data-test` sempre que possível.

---

## 🛠️ Dicas e troubleshooting
- Evite `cy.wait()` com valores fixos; prefira esperar por elementos ou rotas.
- Se algo falhar por instabilidade, verifique se o site está acessível e se não há bloqueios de rede.
- Para rodar apenas um teste em execução interativa, use o filtro na UI do Test Runner.

---

