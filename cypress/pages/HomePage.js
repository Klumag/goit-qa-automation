class HomePage {
  openNavigationMenu() {
    cy.get("#open-navigation-menu-mobile").click();
  }

  selectMenuItem(index) {
    cy.get(`:nth-child(${index}) > .next-bve2vl`).click();
  }
}

export default HomePage;
