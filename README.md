# Projeto_BD_Pemun
Projeto desenvolvido para a disciplina de Modelagem e Projeto de Banco de Dados, na graduação em Ciência da Computação na [CESAR School](https://www.cesar.school)

Este projeto foi desenvolvido com o objetivo de aplicar os conceitos aprendidos em sala de aula. Foi incluído uma série de requisitos específicos, que foram implementados para demonstrar o conhecimento em modelagem de banco de dados, criação de consultas, integração entre FrontEnd e BackEnd, e configuração de segurança.

Dessa forma, o seguinte repositório abrange o processo desde a criação de um MiniMundo até a modelagem conceitual, lógica e física, passando por validações em cada fase. As tecnologias utilizadas incluem Java com Spring Boot para o BackEnd, React para o FrontEnd, e MySQL como banco de dados.

## 💻 Devs:
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/anabxalves">
        <img src="https://avatars.githubusercontent.com/u/108446826?v=4" width="200px;" alt="Foto Ana"/><br>
        <sub>
          <b>Ana Beatriz Alves</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Caiobadv">
        <img src="https://avatars.githubusercontent.com/u/117755420?v=4" width="200px;" alt="Foto Caio"/><br>
        <sub>
          <b>Caio Barreto</b>
        </sub>
      </a>
    <td align="center">
      <a href="https://github.com/virnaamaral">
        <img src="https://avatars.githubusercontent.com/u/116957619?v=4" width="200px;" alt="Foto Virnas"/><br>
        <sub>
          <b>Virna Amaral</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
<br>

## Requisitos do Projeto

- Modelo conceitual ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)
- Modelo lógico relacional ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)
- Script de criação ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)
- Script de povoamento ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)
- Consultas SQL ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)
- Ter no mínimo 8 entidades ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)
- Conceitos obrigatórios ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)
  - Atributo composto
  - Atributo multivalorado
  - Cardinalidades diversas
  - Atributo de relacionamento
  - Auto-relacionamento
  - Agregação ou ternário
  - Entidade fraca
  - Herança
- Extra: usar outros conceitos, como: check, default, unique, na criação do BD ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)

- Realizar comandos no banco 
  - Inserção ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)
  - Deleção ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)
  - Alteração ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)
  - Gerar relatórios ![Badge Em Desenvolvimento](https://img.shields.io/badge/STATUS-Em_Desenvolvimento-orange)

- A integração do banco com uma aplicação deve ser realizada web, desktop, mobile 
os comandos no banco deverão ser realizados por meio da interface ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)

- Extra: Escolher um domínio para trabalhar, elencando um "cliente" do mundo real, para entender o domínio e modelar o BD ![Badge Feito](https://img.shields.io/badge/STATUS-FEITO-green)

> OBS.: Limitações
>- Proibido usar qualquer tipo de ferramenta para "facilitar" a integração com o banco, como frameworks ou bibliotecas de mapeamento objeto relacional (ORM) que fornecem camadas de abstração do BD
>- Comandos de inserção, atualização, deleção e seleção de dados, precisam ser feitos com SQL e enviados ao banco.

## Demo

Confira a demo da aplicação desenvolvida, disponível no link 

## Instalação e Execução Local

> **Passo 1: Clonar o repositório no GitHub**
>- Ir para a pasta que armazenará o repositório
>- Executar o comando `git clone https://github.com/Caiobadv/Projeto_BD_Pemun`

> **Passo 2: Baixar dependências**
>- Cada uma das tecnologias e ferramentas abaixo descritas foram essenciais para a construção do projeto. 
>- Caso dúvida de como instalar, recomendamos consultar a documentação de cada tecnologia, a fim de sanar quaisquer dúvidas ou lacunas desta, resumida, orientação
>- Dependências Necessárias:
>   - Lombok
>   - Java OpenJDK 22
>   - MySQL
>   - Spring Boot
>   - npm
>      - npm install react-router-dom
>      - npm install react-scripts

>**Passo 3: Configurar conexão com o BD**
>- Configuração dos arquivos `Jdbcconfig`, `Databaseconfig` e `Applicationproperties`
>   - Ajustar o URL para o do seu localhost
>   - Ajustar o nome do usuário e senha

>**Passo 4: Executar os códigos**
>- Em dois terminais distintos, rodar a aplicação do frontend e a do backend
>   - Recomendamos executar o backend via IntelliJ, tendo em vista as facilidades proporcionadas pela IDE
>- Rodar o Frontend React, por meio do comando `npm start`
>- Rodar o Backend Java Project, apertando o *play* no IntelliJ, conforme print abaixo.

<div align="center">
  <img src="https://github.com/theomilll/CLEO/assets/108446826/6ccfbc91-ecaf-4c27-8f50-8ec3ddc90e31" title="Visão do Terminal" alt="Visão do Terminal" width="500px"/>
 </div>

## Domínio

Nosso projeto foi desenvolvido para o Pernambuco Model United Nations (PEMUN), uma extensão universitária ligada à Universidade Federal de Pernambuco (UFPE) que realiza, anualmente, eventos de simulação das Nações Unidas em Pernambuco. 

Para atender às necessidades da PEMUN, detalhamos os principais requisitos que o site deve cumprir:
- **Informações da Atual Edição**: Deve conter informações essenciais sobre a edição atual da PEMUN, incluindo datas, local, temas a serem discutidos, e uma visão geral do evento, assim como um cronograma detalhado das atividades, sessões de debate, palestras e workshops que ocorrerão durante o evento.
- **Arquivo de Edições Anteriores**: Uma seção dedicada que permite aos usuários acessar informações sobre edições passadas da PEMUN, incluindo resumos, fotos, vídeos e documentos relevantes.
- **Sistema de Inscrição**: Um formulário online que permite aos interessados se inscreverem de forma fácil e rápida, coletando informações essenciais como nome, e-mail, instituição de ensino, e preferências de comitê. Além disso, é necessário disponibilizar ferramentas para a equipe administrativa gerenciar as inscrições, enviar confirmações e notificações aos participantes.
- **Loja Online**: Uma loja virtual com um catálogo de produtos relacionados à PEMUN, como camisetas, canecas, materiais didáticos e souvenirs, possuindo uma funcionalidade para adicionar produtos ao carrinho e finalizar a compra de maneira segura e intuitiva. Além disso, é importante para a equipe administrativa possuir ferramentas que gerenciam o inventário de produtos e monitoram as vendas.
- **Acesso de Administrador**: Em nível de gestão, uma feature interessante é o painel de administração, onde a equipe da PEMUN pode gerenciar as inscrições e vendas, assim como gerar relatórios detalhados sobre inscrições, vendas e outras métricas importantes.

## Linguagens, Bibliotecas e Ferramentas Utilizadas

As tecnologias que permitiram a construção de um sistema robusto e eficiente teve o fluxo de trabalho dividido da seguinte forma:
- Frontend (React);
- Backend (Spring Boot e Java);
- Banco de Dados (MySQL);
- Comunicação (APIs REST).

Ainda, utilizamos da ferramenta Figma para desenvolver um protótipo interativo do site, com o objetivo principal de proporcionar uma visão clara e tangível do produto final e facilitar um processo de consulta iterativa com o cliente. Sendo assim, o protótipo desenvolvido está disponível no link: https://www.figma.com/design/AMfEdepDjqDfcnyPWJrcUJ/WireFrame-Site---Edi%C3%A7%C3%A3o-VI-(Copy)?node-id=0-1&t=RpBJ3KpzOhoEc7bu-1. 

## Modelagens

A modelagem de Banco de Dados (BD) é o processo de criar uma representação estruturada dos dados que serão armazenados em um sistema de BD, que envolve a identificação e a definição das entidades, atributos e relações que refletem a lógica de negócio e os requisitos do sistema.

Em nosso projeto, o processo de modelagem foi dividido em quatro etapas, que foram aumentando em nível de abstração: mini-mundo, modelagem conceitual, modelagem lógica e modelagem física.

### Mini-Mundo

Servindo como um guia inicial para o desenvolvimento da modelagem conceitual, ajudou a garantir que todas as necessidades e expectativas do cliente fossem capturadas desde o início.

Segue, na íntegra:
> Em um ambiente universitário vibrante, um sistema de banco de dados é desenvolvido para gerenciar e facilitar a participação dos estudantes em eventos, aquisição de produtos temáticos e a gestão de comitês e diretores envolvidos na organização desses eventos. Este sistema categoriza usuários primariamente como clientes, identificados por CPF, nome, email, telefone, endereço, faculdade, curso, login e senha. Estes clientes podem inscrever-se em comitês temáticos, que são entidades administradas por diretores, também registrados no sistema, que podem supervisionar outros diretores em uma hierarquia de liderança.

> Dentro deste universo, existe a Loja, um conceito virtual onde produtos como bottons, camisas e pacotes para eventos são comercializados. Cada produto, ingresso ou pacote tem uma descrição detalhada, incluindo preço e quantidade disponível. Clientes navegam pela Loja, adicionando itens de seu interesse a um Carrinho, que mantém um registro do código dos itens adicionados, a quantidade e o valor total da compra.

> Os eventos são marcos importantes para a comunidade universitária, com cada um tendo seu próprio conjunto de informações, incluindo a data, localização e ingressos disponíveis. Os ingressos para os eventos são entidades específicas no banco de dados, que além de dados comerciais, estão vinculados ao evento ao qual pertencem.

> As inscrições são feitas pelos clientes para participar dos comitês e dos eventos, e essas inscrições registram preferências, justificativas para a participação e informações de pagamento, garantindo assim um controle eficaz sobre quem está participando de quais atividades e como.

> Neste mini mundo de eventos universitários, Cliente, Produto, Ingresso, Evento, Comitê e Diretor formam um tecido de relações dinâmicas, refletindo a complexidade e o engajamento da vida acadêmica. Clientes tornam-se participantes ativos através da Inscrição e da inclusão de itens no Carrinho, enquanto Diretores e Comitês estruturam e enriquecem a experiência do evento. A interação dessas entidades cria uma experiência compreensiva e integrada para todos os envolvidos, com a garantia de que a informação circula eficientemente para proporcionar eventos bem-sucedidos e memoráveis.

### Modelo Conceitual

Para facilitar a visualização das entidades, atributos e relacionamentos, foi desenvolvido um Diagrama Entidade-Relacionamento (ER), para representar graficamente as entidades, seus atributos e os relacionamentos entre elas. 

<div align="center">
  <img src="https://github.com/Caiobadv/Projeto_BD_Pemun/assets/108446826/1fded0bc-3541-474d-83b9-306d08357087" title="Visão do Terminal" alt="Visão do Terminal" width="800px"/>
 </div>

Conforme demonstrado acima, em nosso projeto, foram identificadas as seguintes entidades, com seus respectivos atributos:

> Usuário:
CPF (PK); Nome; Email; Telefone (Multivalorado); Endereço (Composto); Rua; Numero; Bairro; Cep; Complemento; Faculdade; Curso; Login; Senha

> Comitê:
ID_Comitê (PK); Nome; Tipo; Tema 1; Tema 2; Descrição; Qtd_vagas

> Diretor (Herança)

> Delegado (Herança)

> Item (Entidade Mãe):
Id_Item (PK); Nome; Qtd_total; Descrição; Preço

> Produto (Entidade Fraca)
Cor; Tamanho

> Pacote:
Qtd_Produtos

> Ingresso (Herança)

> Evento:; Nome (PK); Descrição; Data/Hora; Endereço (Composto); Rua; Número; Bairro; CEP; Complemento

> Carrinho:
ID_Carrinho (PK); Valor_Total; Qtd_Itens

> Inscrição:
ID_Insricao (PK); Preferência1; Preferência2; Justicativa; Pagamento; Data

Definidas as entidades e seus atributos, importante, ainda, descrever as relações estabelecidas entre elas, para definir como elas interagem entre si, podendo ser de diferentes tipos, como um-para-um, um-para-muitos ou muitos-para-muitos. Os relacionamentos entre as entidades são as seguintes:

>- Um Delegado (0,n) faz sua Inscrição (1,1) para participar (0,n) de um Comitê (1,1);
>- Um Comitê (1,1) possui Diretores (1,n);
>- Os Diretores(1,n)(0,n) se supervisionam (Auto-relacionamento);
>- Um Usuário (1,1) compra um Carrinho (1,n) que possui Itens (0,n) (Ternário), que registra a quantidade de Itens da compra (Atributo de Relacionamento);
>- Um Pacote (0,n) ou um Produto (1,n) são tipos de Itens (Agregação);
>- Um Pacote contém Produtos (Agregação);
>- Um Ingresso é um tipo de Produto (Agregação);
>- Um Evento (1,1) contém Ingresso (1,n).

### Modelo Lógico

Para melhor descrever essa etapa, foi desenvolvido um Diagrama de Relacionamento Lógico, que auxilia na visualização das tabelas, colunas e relações entre as tabelas de forma detalhada, por meio de uma representação gráfica da estrutura lógica do banco de dados.

<div align="center">
  <img src="https://github.com/Caiobadv/Projeto_BD_Pemun/assets/108446826/74a3eba6-e6d9-416c-bb72-7be97287355e" title="Visão do Terminal" alt="Visão do Terminal" width="800px"/>
 </div>

### Modelo Físico

Conforme o arquivo `dbPemun.sql`, presente na pasta `../bd_script/scriptDbPemun.sql`, geramos o script de criação do BD, que inclui as instruções SQL para a criação de tabelas, definições de chaves primárias e estrangeiras e outras restrições necessárias.

Para verificar o resultado, utilizamos das IDE do DBeaver e Insomnia, para, respectivamente, visualizar as tabelas, instâncias e relacionamentos criados, assim como testar alterações e interações com o BD criado, para, assim, verificar a criação correta e validar sua estrutura.

## Divisão das Pastas

Conforme exposto, o desenvolvimento do projeto foi dividido em três partes principais: o FrontEnd em React, o BackEnd em Java com SpringBoot, e a Integração entre o FrontEnd, o BackEnd e o Banco de Dados.

### FrontEnd

Para iniciar o desenvolvimento do frontend do projeto, tivemos que instalar o Node.js, que inclui o npm (Node Package Manager), que foi usado para gerenciar as dependências do projeto e facilitar o desenvolvimento.

Dentre os arquivos e pastas criados, destacamos a seguir os mais importantes para o projeto:
> Src: Pasta principal do código-fonte da aplicação
>- App.js: Componente principal que organiza a estrutura da aplicação e importa outros componentes
>- Pages: Pasta para armazenar as páginas da aplicação, cada uma representando uma rota específica
>- Images: Pasta que armazena todas as imagens utilizadas ao longo da aplicação

Descreveremos melhor a integração e as operações realizadas mais a frente, mas, em resumo, o uso do Axios na página do administrador permite a integração eficiente do frontend React com o backend, possibilitando a execução de operações no banco de dados através de uma interface web de administração.

### BackEnd

Para desenvolver o backend da aplicação, criamos um Java Project por meio da IDE IntelliJ, que, por configuração nativa, aplica as noções do padrão MVC (Model-View-Controller) em um projeto Java, com o objetivo separar a lógica de negócios (Model), a apresentação dos dados (Views), e o controle das interações do usuário (Controller). 

No contexto do nosso projeto Java com MVC, as pastas e arquivos estão organizados da seguinte forma:

>**Model**: A pasta `model` contém as classes Java que representam o modelo de dados da aplicação e correspondem às entidades do BD. Essas classes são responsáveis por definir os atributos, métodos e relações entre os objetos que serão manipulados pela aplicação.

> **Views (Repository + Service)**: Em nosso projeto, a camada de Views está representada pelas pastas `repository` e `service`, que são combinadas para lidar com a lógica de acesso aos dados e os serviços da aplicação.
>- A pasta `repository` contém as interfaces e classes responsáveis por realizar operações de persistência de dados, como consultas, inserções, atualizações e exclusões no banco de dados.
>- A pasta `service` contém as classes que implementam a lógica de negócios da aplicação, arquivos nos quais são definidos os serviços que realizam operações mais complexas envolvendo múltiplas entidades e regras de negócio específicas.

>**Controller (Controller)**: A pasta `controller` contém as classes Java responsáveis por receber as requisições HTTP dos clientes, delegar o processamento para as classes de serviço, e retornar as respostas adequadas para os clientes.

### Integração

Conforme mencionado acima, o Axios foi utilizado no frontend para enviar requisições HTTP para o backend, conectando as funções do frontend com as definições e lógica de negócios implementadas no controller do backend. Dessa forma, no frontend são definidas funções ou métodos que utilizam o Axios para realizar operações CRUD (Create, Read, Update, Delete) no banco de dados através do backend.

> **Conexão do Backend com o Banco de Dados via Jbdcconfig**
>- No arquivo `Jbdcconfig`, foi realizada a conexão direta com o banco de dados através de uma URL específica. Apesar de não ser a forma mais ideal ou usual de realizar essa conexão, tivemos que fazer, pois tivemos problemas na configuração diretamente pelo `DataBaseConfig`, que não conseguiram ser resolvidas até o momento.

>**Configuração de Segurança no Databaseconfig**
>- Além de ser responsável por estabelecer a conexão com o banco de dados, a classe `DataBaseConfig` configurou aspectos de segurança relacionados ao acesso a ele, incluindo a definição de credenciais de acesso seguras, como usuário `root` e senha `password`, além de outras configurações relevantes de segurança, como a utilização de SSL `useSSL=false` e a definição do fuso horário do servidor `serverTimezone=UTC`.

>**Configuração no application.properties**
>- Já no arquivo `application.properties` foram realizadas configurações adicionais para o Spring Boot conectar-se ao BD, o que inclui diversas propriedades que são essenciais para a conexão e o funcionamento do banco de dados no projeto.

