
# Projeto Acadêmico – API Automation Cypress Masterclass

> Este repositório faz parte do curso da Qazando e tem finalidade exclusivamente acadêmica. Todos os testes, scripts e exemplos aqui presentes são para estudo, prática e avaliação de automação de APIs com Cypress.

## Como executar os testes

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Para abrir o Cypress:
   ```bash
   npm run cy:open
   ```
3. Para rodar os testes em modo headless:
   ```bash
   npm run cy:run
   ```

## Estrutura do projeto
- `cypress/e2e/`: Testes automatizados
- `cypress/support/commands.js`: Comandos customizados Cypress
- `cypress/support/generators/bookingData.js`: Gerador de dados dinâmicos
- `cypress/fixtures/`: Dados estáticos para testes

## Observações para avaliação
- O projeto foi desenvolvido seguindo boas práticas de automação, organização e legibilidade.
- Os comandos customizados retornam o resultado do request para facilitar encadeamento nos testes.
- O gerador de dados permite criar reservas dinâmicas, evitando dependência de dados estáticos.
- Sinta-se à vontade para adaptar, melhorar ou usar como referência em outros projetos acadêmicos.

---

Projeto criado para fins de aprendizado e prática no curso da Qazando.
