describe('Suíte de testes Tema usabilidade em jogos', () => {
    it ('Fazer pesquisa sobre usabilidade em jogos', () => {
        cy.visit('https://www.nngroup.com/articles/usability-heuristics-applied-video-games/');

        cy.contains('Usability').should('be.visible');

        cy.contains('Games').should('be.visible');

        cy.screenshot();

    });
    
});