# Projeto frontend com React e Vite!

## css
    1. criar pasta style em src
    2. criar e editar arquivo global.css em style
    3. passar o arquivo css para o main.tsx

## Images
    1. baixar as imagens cedidas para a pasta assets em src.

## Layout
    1. Criar a estrutura do arquivo App.module.css
        obs: isso evita misturar o css dos componentes
    2. Usar scss para pegar funcionalidades que não estão no css
        obs: isso permite pegar um elemento que esta dentro de outro e passar o scss
    3. Criar a pasta componentes em src.
    4. Na pasta componentes, criar os componentes nas pastas LoginBox, MessageList,  SendMessageForm. 
    5. Criar arquivo index.tsx para cada pasta.
    6. Desenvolver o html dos componentes.
    7. Estilizar o LoginBox.
    8. Estilizar o MessageList.
    9. Adicionar responsividade.

## Integração entre Frontend e Backend
#### Criar um serviço para fazer a integração
    1. Criar uma pasta service em src do frontend;
    2. Criar arquivo api.ts em service;
    3. Instalar o axios nesse arquivo;
    4. Importa e criar uma constante api passando a baseURL;
    5. No componente MessageList, requisitar os dados;
    6. Criar interface e passar os dados para o estado do componente;
    7. Renderiar os dados em tela;