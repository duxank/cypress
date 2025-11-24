describe('Coffee API Tests', () => {
  it('should fetch coffee list successfully', () => {
    cy.request('https://webservice.toscacloud.com/api/v1/Coffees').then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.above(0);
        // Further assertions on the response body
      }
    );
  });
});
