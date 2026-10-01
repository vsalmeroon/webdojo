import { faker } from '@faker-js/faker'
import _ from 'lodash'

describe('Expert', () => {

    beforeEach(() => {
        cy.start()
    })

    it('Deve manipular os atributos de elementos HTML', () => {
        cy.get('#email').invoke('val', 'papito@teste.com.br')

        cy.get('#password').invoke('attr', 'name', 'senha')

        cy.contains('button', 'Entrar')
            .invoke('hide')
            .should('not.be.visible')

        cy.contains('button', 'Entrar')
            .invoke('show')
            .should('be.visible')
    })

    it('Não deve logar com senha inválida', () => {
        cy.get('#email').type('papito@webdojo.com')
        cy.get('#password').type('asdasasd{Enter}')

        cy.get('[data-sonner-toaster=true]')
            .should('be.visible')
            .as('toast')

        cy.get('@toast')
            .find('.title')
            .should('have.text', 'Acesso negado! Tente novamente.')

        cy.wait(5000)

        cy.get('@toast')
            .should('not.exist')
    })

    it('Simulando a tecla TAB com cy.press', () => {
        cy.log('todo')

        cy.get('body').press('Tab')
        cy.focused().should('have.attr', 'id', 'email')

        cy.get('#email').press('Tab')
        cy.focused().should('have.attr', 'id', 'password')
    })

    it.only('Deve realizar uma carga de dados fakes', () => {
        cy.log('todo')

        _.times(100, () => {
            const name = faker.person.fullName()
            const email = faker.internet.email()
            const password = 'pwd123'

            cy.log(name)
            cy.log(email)
            cy.log(password)
        })
    })
})