## Esse é o teste para a vaga de Desenvolvedor Fullstack na Tecsa Group

### Descrição do projeto

O projeto é uma aplicação de gerenciamento de tarefas, e utilizei as seguintes tecnologias nesse sistema:
- PHP 8.2.4 (puro, vanilla)
- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery 4.0.0
- Docker
- Apache
- Vite

### Instruções para configurar e rodar o ambiente (usando Docker).

1. Clone o projeto na aba "<> Code", em verde. Após clicar ali, há uma opção no canto inferior de "Download ZIP". Baixe o arquivo, e em seguida descompacte-o.

<img width="430" height="357" alt="image" src="https://github.com/user-attachments/assets/c61487cb-5496-4675-b963-04447bfda943" />


2. Após descompactar o arquivo, abra um terminal, e navegue até a pasta do projeto. Feito isso, execute os seguintes comandos

   ### OBS: O Node deve estar na versão node v23.7.0!!! Tome bastante cuidado nessa parte! É possível dar erros caso não esteja nessa versão ou superior.

   ```
   cd frontend
   npm install
   npm run dev
   ```
   O Front-end estará rodando na porta 5173 (localhost:5173).

4. Após isso, pare de rodar a aplicação no Front-end, e rode esses próximos comandos:
   ```
   cd ../backend
   composer install
   ```
   Além disso, renomeie o seu ".env.example" para ".env".

   # ULTRA IMPORTANTE: NUNCA COLOQUE NENHUM SECRET SEU NO .ENV.EXAMPLE, NESSE CASO FOI SOMENTE PARA FACILITAR A AVALIAÇÃO DOS GESTORES SOBRE A PROVA, NOVAMENTE, NUNCA FAÇA ISSO! EU FIZ PORQUE É UM TESTE, PARA FACILITAR A AVALIAÇÃO!
   
   Depois de ter instalado todas as bibliotecas necessárias para o backend, execute esses comandos

5. ```
   cd ..
   docker-compose up -d
   ```
   Nisso, o Docker estará rodando, e seu ambiente estará pronto.

6. A seguir, no seu terminal, volte para a pasta "frontend"
   ```
   cd frontend
   npm run dev
   ```
   Então, acesse o link: http://localhost:5174/
   
7. Uma tela de login aparecerá. Para logar, o usuário é "admin" e a senha "123456"

## OBS: PARA EFEITOS DE TESTE, O USUÁRIO E SENHA SÃO SIMPLES, MAS SEMPRE TOME CUIDADO NESSAS HORAS TAMBÉM!

Enfim, a partir daí é só utilizar o sistema!

### Instruções para executar os testes (se aplicável).

1. Para rodar os testes, vá até a pasta "backend".
   ```
   cd backend
   ./vendor/bin/phpunit
   ```

   Pronto, os resultados dos testes aparecerão no seu terminal!

   Obrigado!
