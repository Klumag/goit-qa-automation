import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

describe("User can visit GOIT page", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  beforeEach(() => {
    loginPage.visit();
  });

  // Test 1
  it("First log in and log out", () => {
    loginPage.userEmail("user888@gmail.com");
    loginPage.userPassword("1234567890");
    loginPage.submit();
    homePage.openNavigationMenu();
    homePage.selectMenuItem(12);
  });

  // Test 2
  it("Second log in and log out", () => {
    loginPage.userEmail("testowyqa@qa.team");
    loginPage.userPassword("QA!automation-1");
    loginPage.submit();
    homePage.openNavigationMenu();
    homePage.selectMenuItem(9);
  });
});
