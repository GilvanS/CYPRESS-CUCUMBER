Feature: Login
    Funcionalidade para realizar variados Logins no sistema PHPTravels


    Scenario Outline: "<cenario>"
        Given eu acesse a pagina home da aplicação
        When eu inserir meu email "<email>" e senha "<senha>"
        And clicar no botão entrar
        Then tenho meu acesso "<mensagem>"

        Examples:
            | cenario           | email               | senha    | messagem                |
            | Login com sucesso | user@phptravels.com | demouser | com sucesso na alicação |