describe("Testing HTTP API", () => {
  //Test 1 (metoda GET)
  it("Test GET method", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get",
      qs: { param1: "test przeszedl" },
    }).then((response) => {
      expect(response.status).to.eq(200); //Status odpowiedzi powinien być 200
      expect(response.body.args.param1).to.eq("test przeszedl"); //treść odpowiedzi powinna zawierać wysłany parametr
    });
  });

  //Test 2 (metoda POST)
  it("Test POST method", () => {
    cy.request({
      method: "POST",
      url: "https://httpbin.org/post",
      body: { key: "value" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.json.key).to.eq("value");
    });
  });

  //Test 3 (metoda PUT)
  it("Test PUT method", () => {
    cy.request({
      method: "PUT",
      url: "https://httpbin.org/put",
      body: { key: "value" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.json.key).to.eq("value");
    });
  });

  //Test 4 (metoda DELETE)
  it("Test DELETE method", () => {
    cy.request({
      method: "DELETE",
      url: "https://httpbin.org/delete",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  //Test 5 (Test metody PATCH)
  it("Test PATCH method", () => {
    cy.request({
      method: "PATCH",
      url: "https://httpbin.org/patch",
      body: { key: "value" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.json.key).to.eq("value");
    });
  });

  //Test 6 (Test nagłówka User-Agent)
  it("Test User-Agent header", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/user-agent",
      headers: { "User-Agent": "my-app/0.0.1" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body["user-agent"]).to.eq("my-app/0.0.1");
    });
  });

  //Test 7 (Test niestandardowego nagłówka)
  it("Test custom header", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/headers",
      headers: { "X-Custom-Header": "custom-value" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.headers["X-Custom-Header"]).to.eq("custom-value");
    });
  });

  //Test 8 (Test parametrów zapytania)
  it("Test random query parameter", () => {
    const randomParam = Math.random().toString(36).substring(7);
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get",
      qs: { random_param: randomParam },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.args.random_param).to.eq(randomParam);
    });
  });

  //Test 9 (Test treści odpowiedzi)
  it("Test response content", () => {
    cy.request("https://httpbin.org/get").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("url");
    });
  });

  //Test 10 (Test czasu trwania wniosku)
  it("Test request duration", () => {
    const startTime = Date.now();
    cy.request("https://httpbin.org/get").then((response) => {
      const duration = Date.now() - startTime;
      expect(response.status).to.eq(200);
      expect(duration).to.be.lessThan(1000);
    });
  });
});
