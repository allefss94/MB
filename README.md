# mercado bitcoin-project

Projeto Front-end para a empresa Mercado Bitcoin.

Seguindo as especificações propostas no desafio técnico. Foi criada uma tela (pagina) simples para cadastro de usuário.

## Estrutura de diretórios

#### src
* assets: Contém principalmente arquivos de css que foram separados em arquivos distintos para melhor organização (main, reset, variables...)
* components: Contém os componentes reutilizáveis da aplicação (Button, Input, RadioGroup...). E também um componente Steps que monta todos os campos de formulário a partir de um array de objetos de configuração.
* composables: Contém o composable _useForm_ que abstrai a lógica e o gerenciamento de dados do formulário
* server: Contém a implementação de um servidor fake para simular a comunicação com a API. Como se trata de um projeto front-end, não foi implementado um servidor "real", ao invés disso foi utilizado o MirageJs para simular as requisições que de forma aleatória retorna os status de sucesso ou erro (201, 404, 500).
* shared: Contém arquivos/implementações que podem ser compartilhadas por toda a aplicação. _ClientHttp_ sendo uma implementação basica do fetch para requisições HTTP e _validators_ validações para atender as regras do formulário.

> Todo o projeto foi desenvolvido apenas para atender aos requisitos solicitados e obviamente em cenário real outras técnologias e estratégias poderiam ser utilizadas.


###

## Instalação

```sh
pnpm install
```

### Copie o arquivo .env.example para .env

```sh
cp .env.example .env
```	

### Executando o projeto 

```sh
pnpm dev
```


