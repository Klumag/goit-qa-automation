describe("User can visit GOIT page", () => {
  beforeEach(() => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  // Test 1
  it("First log in", () => {
    cy.get("#user_email").type("user888@gmail.com");
    cy.get('input[type="password"]').type("1234567890");
    cy.get(".eckniwg2").click();
    cy.get("#open-navigation-menu-mobile").click();
    cy.get(":nth-child(12) > .next-bve2vl").click();
  });

  // Test 2
  it("Second log in", () => {
    cy.get("#user_email").type("testowyqa@qa.team");
    cy.get('input[type="password"]').type("QA!automation-1");
    cy.get(".eckniwg2").click();
    cy.get("#open-navigation-menu-mobile").click();
    cy.get(":nth-child(9) > .next-bve2vl").click();
  });
});
