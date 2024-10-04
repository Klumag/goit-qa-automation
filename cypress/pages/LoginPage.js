class LoginPage {
  visit() {
    cy.visit("https://www.edu.goit.global/account/login");
  }

  userEmail(email) {
    cy.get("#user_email").type(email);
  }

  userPassword(password) {
    cy.get('input[type="password"]').type(password);
  }

  submit() {
    cy.get(".eckniwg2").click();
  }
}

export default LoginPage;
