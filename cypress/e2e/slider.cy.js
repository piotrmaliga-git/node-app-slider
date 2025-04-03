describe("Swiper Gallery Test", function () {
  this.beforeEach(() => {
    cy.visit("http://localhost:3012");
  });

  it('Checks if first slide contains "Rome"', function () {
    cy.get(".swiper-slide-active").should("contain", "Italy");
  });

  describe("next", () => {
    it('Checks if second slide contains "United Kingdom"', function () {
      cy.get(".swiper-button-next").click();
      cy.get(".swiper-slide-active").should("contain", "United Kingdom");
    });

    it('Checks if third slide contains "Paris"', function () {
      cy.get(".swiper-button-next").click();
      cy.wait(1000);
      cy.get(".swiper-button-next").click();
      cy.get(".swiper-slide-active").should("contain", "France");
    });

    it('Checks if first slide contains "Rome"', function () {
      cy.get(".swiper-button-next").click();
      cy.wait(1000);
      cy.get(".swiper-button-next").click();
      cy.wait(1000);
      cy.get(".swiper-button-next").click();
      cy.get(".swiper-slide-active").should("contain", "Italy");
    });
  });

  describe("previous", () => {
    it('Checks if fourth slide contains "Paris"', function () {
      cy.get(".swiper-button-prev").click();
      cy.get(".swiper-slide-active").should("contain", "France");
    });

    it('Checks if third slide contains "United Kingdom"', function () {
      cy.get(".swiper-button-prev").click();
      cy.wait(1000);
      cy.get(".swiper-button-prev").click();
      cy.get(".swiper-slide-active").should("contain", "United Kingdom");
    });

    it('Checks if first slide contains "Rome"', function () {
      cy.get(".swiper-button-prev").click();
      cy.wait(1000);
      cy.get(".swiper-button-prev").click();
      cy.wait(1000);
      cy.get(".swiper-button-prev").click();
      cy.get(".swiper-slide-active").should("contain", "Italy");
    });
  });
});
