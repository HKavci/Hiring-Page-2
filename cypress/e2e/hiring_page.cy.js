describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:58681/index.html");
    cy.viewport(500, 500);
    cy.get("[data-test='query-icon']").should("be.visible").click(); // query-icon func testing
    cy.get("[data-test='announcement-headers']")
      .should("be.visible")
      .contains("Court opening hours will change!"); // h2 content testing
    cy.get("[data-test='rotate-icon']").should("be.visible").click(); // rotate-icon func testing
    cy.get("[data-test='expand-icon']").should("be.visible").click(); // expand-icon func testing
    cy.get("[data-test='button']").should("be.visible").click(); // button func testing
    cy.viewport(1900, 1200);
    cy.get("[data-test='large-button']").should("be.visible").click(); // large button func testing
  });
});
