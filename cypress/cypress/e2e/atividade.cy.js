describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });

  it("Validar Login Inválido", () => {
    cy.get('[data-test="username"]').type("João Victor");
    cy.get('[data-test="password"]').type("joao123");
    cy.get('[data-test="login-button"]').click();

    cy.get('h3[data-test="error"]')
      .should("be.visible")
      .and("contain.text", "Username and password do not match any user");
    cy.get('[data-test="error-button"]').click();
  });

  it("Validar Login Válido", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
  });

  it("Adicionar produto no carrinho de compras", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.get('[data-test="shopping-cart-link"]').click();
  });

  it("Finalizar compra", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.get('[data-test="shopping-cart-link"]').click();

    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type("João Victor");
    cy.get('[data-test="lastName"]').type("Olegário");
    cy.get('[data-test="postalCode"]').type("22222-333");

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="finish"]').click();

    cy.wait(2000);
    cy.get('[data-test="back-to-products"]').click();

    cy.url().should("include", "/inventory.html");
  });
});
