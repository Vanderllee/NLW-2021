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

## Integração do frontend, app externa e backend
#### Requisitando dados do github ao frontend, passando o codigo ao backend e obtendo a resposta do token e user
    1. Verificar no github o Authorization callback URL como sendo http://localhost:3000;

    2. No componente LoginBox, criar uma constante signinUrl = 'https://github.com/login/oauth/authorize?scope=user&client_id=fgahdsjkf12341af1fad1';

    3. Obter retorno na url de callback o codigo;

    4. Verificar se esta incluso na url window.location.href, includes('?code='), pegando a url  dentro de um useEffect;

    5. Apagar do window.history.pushState({}, '', urlWithoutCode);

    6. Enviar o codigo para o backend fazer o login;

    7. Obter como resposta os dados do usuario e o token;

    8. Desestruturar, { token, user } = response.data, os dados em token e user;

    9. Salvar o token no localStorage do usuario;

    10. Testar user no console.log(user);

### ContextAPI do react (AuthContext e AuthProvider)
    Obs: Os dados do user precisam ser compartilhados entre os componentes. Por isso usamos o ContextAPI

    1. Criar uma pasta context em src;

    2. Em context, criar auth.tsx;

    3. Em auth.tsx,criar o componente AuthProvider; 

    4. Criar o AuthContext(createContext) e Passar o AuthContext.Provider para o AuthProvider;
        Obs: O provider vai fornecer os dados a todos os componentes que estiver nele.
    
    5. Definir a interface para o AuthProvider, passando o tipo para a propriedade children: ReactNode;

    6. Passar a interface ao AuthProvider(props);

    7. Passar a propriedade children ao AuthContext.Provider;

    8. Colocar o AuthProvider por volta de toda a aplicação (<App />) em main.tsx;

        Conclusão: Todos os componentes terão acesso ao que estiver dentro do contexto!

    9. Em auth.tsx, definir as tipagens que irão ao contexto para o [User] e [AuthContextData];

    10. Definir o AuthContext(createContext({} as AuthContextData))

    11. Assim, a propriedade [value] do provider aceitará as propriedades de AuthContext;
        Obs: os componentes terão acesso as propriedades user e signInUrl;
    
    12. Fazer a requisição dos dados dentro de AuthProvider(pegar a logica do componente LoginBox);

    13. Definir um estado para o user em AuthProvider ;
        Obs: Lembrar que o usuario pode estar logado ou não (<User | null>)

    14. Setar o user no estado;
        Conclusão: os dados agora estão no estado desse componente;
    
    15. Passar o user do estado para a propriedade value do contexto;

    16. Exportar a constante AuthContext;

    17. Em LoginBox, importar o AuthContext e passar para o const {} = useContext(AuthContext);

    18. Testar e ver os dados em cada componente da aplicação.

### Passar o dado do token do localStorage para obter os dados do profile do usuario
    
    19. Em auth.tsx, AuthProvider, dentro de um useEffect, pegar o token do localStorage e requisitar o os dados na rota 'profile';
        Obs: na requisição, usar o headers;
    
    20. Testar para ver se os dados vieram na resposta. 
        Obs: resposta: ok!

    21. Salvar os dados da requisição dentro do estado do componente;
        Conclusão: assim mantermos o usuario sempre logado, não importando quanto F5 ele der na tela. Sempre teremos os dados disponivel no contexto e em qualquer componente!

    
### Criar a função de logout no auth.tsx, dentro do componente AuthProvider
    
    22. Definir a função signout, setar o user como nul e remover o token;

    23. Passar a função signout ao value do AuthContext.Provider para que ela esteja disponivel aos componentes;

    24. Finalizado o contexto do usuario!

    25. Remover o user do componente LoginBox;

### Componente SendMessageForm

    1...
    




