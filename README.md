# Documentação do Template Next.js 14 + Netlify

Este documento fornece uma visão geral da estrutura do projeto Next.js, detalhando os principais diretórios e arquivos.

## Estrutura do Projeto

### 1. `content/`
Este diretório contém arquivos que representam o conteúdo estático do site, organizados em várias seções, como casos de estudo, informações de contato, definições de formulários, gêneros de conteúdo, e páginas principais como "blog", "home", "quem somos" e "serviços".

### 2. `public/`
Armazena recursos estáticos que podem ser acessados diretamente, como imagens. Este diretório contém subpastas para uploads de arquivos e configuração do painel admin do Netlify.

### 3. `src/`
O diretório `src` é onde a lógica do aplicativo é desenvolvida, dividido nas partes:

- **app/**: Contém a estrutura principal do aplicativo, incluindo rotas para a API e páginas principais.
- **components/**: Armazena componentes reutilizáveis do React, organizados em subpastas.
- **lib/**: Armazena bibliotecas auxiliares para funcionalidades específicas.
- **utils/**: Contém utilitários para manipulação de dados e envio de e-mails.

### 4. Arquivos de Configuração
- **package.json**: Define as dependências do projeto e scripts de execução.
- **tailwind.config.js**: Configurações do Tailwind CSS.

## Comandos npm run

O arquivo `package.json` contém os seguintes scripts que podem ser executados usando o comando `npm run <script>`:

- **`npm run dev`**: Inicia o servidor de desenvolvimento do Next.js. O aplicativo será executado em modo de desenvolvimento, permitindo visualização em tempo real das alterações feitas no código em [http://localhost:3000](http://localhost:3000).

- **`npm run build`**: Compila o aplicativo para produção, otimizando o código e gerando os arquivos necessários para o deploy. Esse comando deve ser executado antes de iniciar a aplicação em modo de produção.

- **`npm run lint`**: Executa o ESLint para verificar a qualidade do código e garantir que ele siga as regras definidas. É uma boa prática executar esse comando antes de fazer commits.

- **`npm run format`**: Formata o código usando o Prettier. Esse comando garante que o código siga um estilo consistente, facilitando a leitura e manutenção.
