# 🎯 API Automation Cypress Masterclass

<div align="center">

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

**Projeto Acadêmico - QaZando Masterclass**

*Automação de APIs REST com Cypress para fins educacionais*

</div>

---

## 📚 Sobre o Projeto

> **🎓 Finalidade Acadêmica**: Este repositório faz parte do curso da **Qazando** e tem finalidade exclusivamente educacional. Todos os testes, scripts e exemplos são para estudo, prática e avaliação de automação de APIs.

Este projeto demonstra a implementação de testes automatizados para APIs REST utilizando **Cypress**, focando na API **Restful Booker** para gerenciamento de reservas hoteleiras.

### 🎯 Objetivos de Aprendizado

- ✅ **Automação de APIs REST** com Cypress
- ✅ **Comandos customizados** reutilizáveis
- ✅ **Geração de dados dinâmicos** com Faker.js
- ✅ **Boas práticas** de organização e estrutura
- ✅ **Validação de responses** e status codes
- ✅ **Autenticação** e gerenciamento de tokens

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|------------|
| **Cypress** | `^15.3.0` | Framework de testes E2E |
| **@faker-js/faker** | `^10.0.0` | Geração de dados fake |
| **Node.js** | `^18.0.0` | Runtime JavaScript |
| **JavaScript (ES6+)** | - | Linguagem de programação |

---

## 🚀 Configuração e Execução

### Pré-requisitos

- **Node.js** versão 18 ou superior
- **npm** ou **yarn**
- **Git**

### 📦 Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue até o diretório
cd api-automation-cypress-masterclass

# Instale as dependências
npm install
```

### ▶️ Executando os Testes

```bash
# Interface gráfica do Cypress (recomendado para desenvolvimento)
npm run cy:open
# ou
npx cypress open

# Modo headless (para CI/CD)
npm run cy:run
# ou
npx cypress run

# Executar apenas um teste específico
npx cypress run --spec "cypress/e2e/cadastrar-reserva.cy.js"

# Verificar se o Cypress está instalado corretamente
npm run cy:verify
# ou
npx cypress verify
```

---

## 📁 Estrutura do Projeto

```
api-automation-cypress-masterclass/
├── 📂 cypress/
│   ├── 📂 e2e/                          # Cenários de teste
│   │   ├── 📄 alterar-reserva.cy.js      # Testes de alteração
│   │   ├── 📄 buscar-dispositvo.cy.js    # Testes de busca
│   │   └── 📄 cadastrar-reserva.cy.js    # Testes de cadastro
│   ├── 📂 support/
│   │   ├── 📂 generators/               # Geradores de dados
│   │   │   └── 📄 bookingData.js        # Factory de reservas
│   │   ├── 📄 commands.js               # Comandos customizados
│   │   └── 📄 e2e.js                    # Configurações globais
│   └── 📂 fixtures/                     # Dados estáticos
├── 📄 cypress.config.js                 # Configurações do Cypress
├── 📄 package.json                      # Dependências e scripts
└── 📄 README.md                         # Documentação
```

---

## 🧪 Cenários de Teste

### 📋 API Testada: Restful Booker
**Base URL**: `https://restful-booker.herokuapp.com`

| Cenário | Endpoint | Método | Descrição |
|---------|----------|--------|------------|
| **Cadastrar Reserva** | `/booking` | `POST` | Cria nova reserva com dados dinâmicos |
| **Alterar Reserva** | `/booking/{id}` | `PUT` | Atualiza reserva existente |
| **Buscar Dispositivo** | `/booking/{id}` | `GET` | Busca reserva por ID |
| **Autenticação** | `/auth` | `POST` | Gera token de acesso |

---

## 🎨 Funcionalidades Implementadas

### 🔧 Comandos Customizados

```javascript
// Login e geração de token
cy.login().then((response) => {
    const token = response.body.token;
});

// Cadastrar reserva
cy.cadastrar_reserva(payload).then((response) => {
    expect(response.status).to.equal(200);
});

// Alterar reserva
cy.alterar_reserva(id, token, payload);
```

### 🎲 Geração de Dados Dinâmicos

```javascript
import { makeBooking } from '../support/generators/bookingData';

// Gera reserva com dados aleatórios
const reserva = makeBooking();

// Override de propriedades específicas
const reservaCustomizada = makeBooking({
    firstname: 'João',
    totalprice: 500
});
```

---

## 📊 Exemplo de Execução

```bash
$ npm run cy:run
# ou
$ npx cypress run

====================================================================================================

  (Run Starting)

  ┌─────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        15.3.0                                                                      │
  │ Browser:        Electron 136 (headless)                                                     │
  │ Node Version:   v22.19.0                                                                     │
  │ Specs:          3 found (alterar-reserva.cy.js, buscar-dispositvo.cy.js, cadastrar-reser… │
  └─────────────────────────────────────────────────────────────────────────────────────────────┘

  ✅  alterar-reserva.cy.js                    1 passing
  ✅  buscar-dispositvo.cy.js                  2 passing  
  ✅  cadastrar-reserva.cy.js                  1 passing

  📊  All specs passed!                        4 tests passing
```

---

## 🎯 Boas Práticas Implementadas

### ✨ **Organização**
- Separação clara entre testes, comandos e geradores
- Nomenclatura descritiva e consistente
- Modularização de funções reutilizáveis

### 🔄 **Reutilização**
- Comandos customizados para operações comuns
- Factory pattern para geração de dados
- Configuração centralizada

### 🧪 **Qualidade dos Testes**
- Dados dinâmicos para evitar dependências
- Validações abrangentes de response
- Tratamento adequado de autenticação

### 📝 **Documentação**
- JSDoc em funções importantes
- Comments explicativos
- README detalhado

---

## 🎓 Conceitos Aprendidos

- **API Testing**: Validação de endpoints REST
- **Test Automation**: Automação com Cypress
- **Data Generation**: Uso do Faker.js para dados dinâmicos
- **Custom Commands**: Criação de comandos reutilizáveis
- **Authentication**: Gerenciamento de tokens
- **Project Structure**: Organização de projeto de testes

---

## 📝 Observações para Avaliação

🔍 **Destaques do Projeto**:

- ✅ **Arquitetura limpa** com separação de responsabilidades
- ✅ **Comandos customizados** que retornam responses para encadeamento
- ✅ **Gerador de dados dinâmicos** evitando dependência de dados estáticos
- ✅ **Validações robustas** de status codes e estrutura de response
- ✅ **Reutilização de código** através de funções e comandos
- ✅ **Documentação completa** com exemplos práticos

---

<div align="center">

## 🏫 Projeto Acadêmico

**Desenvolvido para o curso QaZando Masterclass**  
*Automação de Testes de API com Cypress*

---

*📖 Este projeto serve como material de estudo e referência para automação de APIs.  
Sinta-se à vontade para usar como base em outros projetos acadêmicos!*

</div>
