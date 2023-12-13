<h2>
<p align="center"> 
  Orbit Graph Generator Web App
</p>

</h2>

<p align="center">
<img src='https://user-images.githubusercontent.com/115179333/231576187-282b29d7-d872-4dfc-aaff-3f9184700ac8.jpg' width="50%">
</p>

## Orbit Tweets Search - Frontend

## Descrição do Projeto:
---

O Orbit Tweets Search é um web app que utiliza a API oficial do Twitter para obter dados de postagens e comentários nessa rede social. Ele é dividido em 2 categorias: 
* Tweets Search, que retorna o conteúdo dos tweets no intervalo máximo de 7 dias.
* Tweets Count, que retorna a contagem de tweets relacioandos a uma determinada query no intervalo de 7 dias.

O frontend deste projeto foi gerado utilizando o Framework Angular na versão 13.3.1.

O site gerado pelo projeto possui 2 páginas:

  1. A página de login, na qual o login é feito por meio de um usuário previamente cadastrado.
  2. A página principal, na qual o usuário informa todos os parâmetros de busca.
  3.   
Link do projeto do Firebase:
```
https://console.firebase.google.com/project/orbit-tweets-search-v2/hosting/sites/orbit-tweets-search-v2?hl=pt-br
```

## Páginas da Aplicação
---
### Login page:
![Captura de tela 2023-12-13 111346](https://github.com/FlavioTomeOrbitDS/orbit-tweets-search-frontend-v.2.0/assets/115179333/f959b00b-223a-4742-8d22-45b3aef2d990)


### Index Page:
![Captura de tela 2023-12-13 111438](https://github.com/FlavioTomeOrbitDS/orbit-tweets-search-frontend-v.2.0/assets/115179333/97a12be4-2e0a-430c-8283-71427018234b)

## Manual de utilização
  1. O usuário deve informar o login e a senha padrão para acessar o sistema. Não há cadastro de usuários.
  2. Após fazer o login, o usuário deverá escolher a qual conta a API do twitter estará vinculada, pois o número de requisições é limitado para cada conta cadastrada. Até o momento os limites na documentação da API é de 10.000 tweets por mês para cada conta.
  3. Depois de escolher a conta, o usuário vai preencher os campos com os parâmetros da busca.
  4. Atenção, a data inserida em Data Inicial não deve possuir um intervalo maior que 7 dias para a Data Atual.
  5. Preenchidos os campos de busca, o usuário deverá escolher o tipo de busca, clicando no botão correspondente.

## Instalação e Configuração
---
### Pré-requisitos

Para executar este projeto, é necessário ter o seguinte software instalado em sua máquina:

* Node.js (v14.18.1 ou superior)
* Angular CLI (v13.0.4 ou superior)

### Instalação
1. Clone o repositório do projeto no seu computador.
```
  git clone https://github.com/FlavioTomeOrbitDS/orbit-tweets-search-frontend-v.2.0.git
```

2. Abra o terminal ou prompt de comando e navegue até o diretório raiz do projeto.
```
 ...\orbit-tweets-search-frontend-v.2.0>
```
3. Execute o comando npm install para instalar todas as dependências do projeto.
```
 ...\orbit-tweets-search-frontend-v.2.0>npm install
```

## Executando o projeto
---
1. Para executar o projeto, execute o comando ng serve na raiz do projeto.
```
 ...\orbit-tweets-search-frontend-v.2.0>ng serve
```

2. Em seguida, abra o navegador e acesse http://localhost:4200/ para visualizar a página de login.

## Estrutura do Projeto
---
```
.
├── src/
│   ├── app/
│   │   ├── components/                  # Componentes reutilizáveis em toda a aplicação
│   │   ├── app-routing.module.ts        # Definição das rotas da aplicação
│   │   ├── app.component.html          # Template principal da aplicação
│   │   ├── app.component.ts            # Código do componente principal da aplicação
│   │   └── app.module.ts                # Definição dos módulos da aplicação
│   ├── assets/                          # Arquivos estáticos
```

## Deploy da aplicação no Google Firebase
---
O Google Firebase é uma plataforma de desenvolvimento de aplicativos móveis e web que oferece diversos serviços, incluindo hospedagem de sites estáticos. Para realizar o deploy da aplicação Angular no Firebase, siga os passos abaixo:

1. Crie uma conta no Google Firebase e faça o login no console do Firebase.

2. Crie um novo projeto no Firebase e configure o serviço de hospedagem seguindo as instruções do console.

3. No terminal, execute o comando npm run build para gerar a versão de produção da aplicação. Isso criará uma pasta dist na raiz do projeto com os arquivos otimizados para produção.
```
...\orbit-tweets-search-frontend-v.2.0>npm run build
```

4. Instale a ferramenta Firebase CLI globalmente na sua máquina com o seguinte comando:
```
...\orbit-tweets-search-frontend-v.2.0>npm install -g firebase-tools
```
5. Inicie o processo de login com o Firebase CLI executando o comando firebase login. Siga as instruções na tela para autenticar sua conta.

6. No terminal, navegue até a pasta **dist** criada no passo 3 e execute o comando firebase init. Isso iniciará um processo de configuração do Firebase Hosting para o projeto.
```
...\orbit-tweets-search-frontend-v.2.0\dist>firebase init
```
7. Siga as instruções na tela para configurar o Firebase Hosting. Quando perguntado sobre qual pasta deve ser usada como diretório público, informe a pasta **dist**.

8. Após a conclusão da configuração, execute o comando firebase deploy para realizar o deploy da aplicação no Firebase Hosting.
```
...\orbit-tweets-search-frontend-v.2.0>firebase deploy
```

9. Após o deploy ser concluído, a aplicação Angular estará disponível no URL fornecido pelo Firebase Hosting.

Dessa forma, você pode realizar o deploy da aplicação Angular no serviço de hospedagem do Google Firebase. Vale lembrar que é importante seguir as instruções com cuidado e garantir que todas as configurações estejam corretas antes de realizar o deploy.
