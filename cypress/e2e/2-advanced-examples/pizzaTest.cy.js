/// <reference types="cypress" />

describe("Siparişi gönder butonu sayfada görünüyor mu?", () => {
  it("should be visible on the page", () => {
    cy.visit("http://localhost:3000/order-pizza");
    cy.contains("SİPARİŞİ GÖNDER").should("be.visible");
  });
});

describe("Form Gönderiliyor Mu? Testi", () => {
  it("Form hatasız doldurulunca başarılı bir şekilde gönderiliyor mu?", () => {
    cy.visit("http://localhost:3000/order-pizza");

    cy.get('select[name="pizzatype"]').select("Sucuklu Pizza");
    cy.get('[type="radio"]').check();

    cy.get('[type="checkbox"]').check();

    cy.get('input[name="namesurname"]').type("Burcu Deniz");

    cy.get('input[name="address"]').type("Armağan İlci Mahallesi");
    cy.get('input[name="email"]').type("dnzzburcu@gmail.com");
    cy.get('input[name="quantity"]');

    cy.get('input[name="ordernote"]').type("Yanında ketçap mayonez istiyorum.");

    cy.get('button[type="submit"]').click();
  });
});
