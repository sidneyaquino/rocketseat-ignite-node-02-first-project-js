#### Requisitos ####

1. **Conta bancária**: 
   - Criar uma conta; 
   - Obter dados da conta do cliente;
   - Atualizar dados da conta do cliente;
   - Apagar uma conta;
2. **Depósito**:
   - Realizar um depósito;
3. **Saque**:
   - Realizar um saque;
4. **Extrato**:
   - Buscar o extrato;
   - Buscar o extrato do cliente por data;
5. **Saldo**
   - Consultar o Saldo 

.
#### Regras de Negócio #### 

1. **Conta bancária**:
   - Cadastrar uma conta com CPF já existente;
   - Excluir uma conta não existente; 
2. **Depósito**: 
   - fazer depósito em uma conta não existente;
3. **Saque**:
   - fazer saque numa conta não existente;
   - fazer saque quando o saldo é insuficiente;
4. **Extrato**:
   - Buscar extrato em uma conta não existente;

.
#### Entidades ####

**[Custumers]**
name        |type
:-----------|:-----
id          |uuidv4
document    |string
name        |string
[Statements]|array

**[Statements]**
name      |type
:---------|:-------
created_at|datetime
reference |string
value     |number