# Formulário de Cadastro com Validação em JavaScript
 
## Funcionalidades

1. **Validação de Formulário**  
   O formulário realiza a validação dos seguintes campos:
   - **Nome**: Não pode estar vazio.
   - **CPF**: Validação do formato e preenchimento obrigatório.
   - **Email**: Verifica se o campo não está vazio.
   - **Telefone**: Aceita apenas números e formata automaticamente no padrão `(XX) XXXXX-XXXX`.
   - **Senha**: Deve ter no mínimo 8 caracteres.
   - **Confirmação de Senha**: Verifica se a senha e a confirmação são iguais.

2. **Formatação de CPF**  
   Ao digitar no campo de CPF, o valor é formatado automaticamente no formato `XXX.XXX.XXX-XX`.

3. **Formatação de Telefone**  
   O campo de telefone é formatado automaticamente para incluir parênteses e um espaço após o DDD, por exemplo: `(XX) XXXXX-XXXX`.

4. **Bloqueio de Caracteres Inválidos**  
   No campo de telefone, é impedida a digitação de letras, aceitando apenas números.

5. **Exibição e Ocultação de Senha**  
   O formulário inclui um botão para alternar a exibição da senha entre texto visível e oculto (com asteriscos), aumentando a usabilidade para o usuário.

6. **Mensagens de Erro**  
   Se algum campo estiver incorreto ou vazio, uma mensagem de erro é exibida, destacando o campo com uma borda vermelha para chamar a atenção do usuário.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests. :)

Para acessá-lo você pode clicar [aqui](https://islaniagomes.github.io/formulario/)
 
