# MELIpelopeslage
Apenas mais um projeto

### Pré-requisitos
* Node: **12.16.1**

### Estrutura do projeto
* /server - Servidor Node para APIs (http://localhost:6000)
* /webcomponents - Webcomponents nativos para interfaces
* /next Aplicação em Next Js para renderização de dados e roteamento (http://localhost:3000)

----

## Rodando o projeto automaticamente
Primeiro você deve executar o comando na raiz do projeto abaixo para instalar as dependências do projeto:
```sh
$ bash runme.sh
#Após a execução dos comandos, o projeto estará pronto para acesso na URL http://localhost:3000
```


## Rodando o projeto parte a parte
Será necessário entrar dentro de cada um dos diretórios da raiz do projeto 
```sh
#Buildar webcomponents
cd webcomponents
npm run build
#Buildar/Iniciar servidor de APIs
cd ../server
npm ci
npm start
#Buildar/Iniciar projeto
cd ../next
yarn
yarn build
yarn start
```

----

### Melhorias (TO-DO)
* Testes unitários
* Padronização de CSS (SASS, BEM etc) e usar unidades responsivas (em, rem)
* Testar o uso de styled components para estilizar componentes e views
* Ajustes na semântica para SEO (como schema.org)
* Configurar Linting
* Configurar impots absolutos
* Constantes para URLs e afins
* Teste cross-browser