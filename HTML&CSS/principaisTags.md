# Principais Tags 

## Títulos
As tags de título no HTML, representadas pela família do `h`, são usadas para definir cabeçalhos em uma página web. Elas ajudam a estruturar o conteúdo de forma hierárquica e lógica, indicando a importância relativa de diferentes seções de texto. Além de melhorar a legibilidade para os usuários, essas tags são fundamentais para otimização de motores de busca (SEO) e acessibilidade.

| Tag  | Descrição                                                                                       |
|------|-------------------------------------------------------------------------------------------------|
| `<h1>` | Representa o título principal ou o cabeçalho mais importante de uma página. Usado apenas uma vez por página para denotar o título principal. |
| `<h2>` | Indica o segundo nível de cabeçalho, geralmente usado para seções principais dentro da página.                                       |
| `<h3>` | Usado para subtítulos ou divisões de conteúdo sob o `<h2>`. Representa um terceiro nível de hierarquia de cabeçalhos.                  |
| `<h4>` | Utilizado para subtítulos ou divisões mais específicas sob o `<h3>`. Um quarto nível de hierarquia de cabeçalhos.                     |
| `<h5>` | Indica um cabeçalho de quinto nível, usado para subdivisões dentro do conteúdo de um `<h4>`.                                          |
| `<h6>` | Representa o nível mais baixo de cabeçalho, usado para detalhes ainda mais específicos sob o `<h5>`.                                   |

![alt text](images/image-6.png)

## Textos

`<p>`: A tag `<p>` no HTML é usada para definir um parágrafo de texto. É uma das tags mais básicas e fundamentais para a estruturação de conteúdo em uma página web. Cada bloco de texto que deseja separar em parágrafos distintos deve ser encapsulado dentro de uma tag `<p>`.

`<strong>`: Denota texto de importância forte, e geralmente é renderizado em negrito pelos navegadores. A tag `<strong>` também transmite semântica, indicando que o texto é importante.

`<ul>, <ol>, <li>`: Utilizadas para criar listas. `<ul>` é uma lista não ordenada (com marcadores), `<ol>` é uma lista ordenada (numerada), e `<li>` define cada item da lista.

![alt text](images/image-7.png)

Como fica esse exemplo no código:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>Minha Primeira Página HTML</title>
  </head>
  <body>
   <p>Sou um parágrafo</p>
   <p> <strong>Um parágrafo com negrito</strong></p>
   <p>Sou uma lista não ordenada</p>
   <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
   </ul>
   <p>Sou uma lista ordenada</p>
   <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
   </ol>
  </body>
</html>

```

## Link
A tag `<a>` (abreviação de "anchor", ou âncora) é um dos elementos mais importantes em HTML, utilizada para criar links que conectam diferentes páginas da web, documentos ou recursos, e facilitam a navegação entre eles.

A principal função da tag `<a>` é permitir a navegação de uma página web para outra. Quando um usuário clica em um link, o navegador carrega a página especificada no atributo `href`.

O atributo href pode apontar para um URL externo (um site diferente) ou para uma parte interna da mesma página.

Além de href, a tag `<a>` pode ter outros atributos como  `target="_blank"` para abrir o link em uma nova aba, `rel="noopener noreferrer"` para melhorar a segurança, e download para permitir que o link seja usado para baixar arquivos.

```html
<a href="https://www.example.com" target="_blank">Visite o Exemplo</a>
``` 


## Botão
TODO: TERMINAR


## Imagem

Para trabalhar com imagens em HTML, existe a tag principal que é `<img>`

Diferente das outras tags, ela tem atributos e auto-fechamento, ou seja, ela não tem um `</img>` e sim `</>`

Veja no exemplo abaixo:
```html
<img src="caminho/para/imagem.jpg" alt="Descrição da imagem" width="500" height="300" />
```

Os principais atributos:
| Atributo | Descrição                                                                                                                       |
|----------|----------------------------------------------------------------------------------------------------------------------------------|
| `src`    | Especifica o caminho (URL) da imagem que você deseja exibir. Este é o único atributo obrigatório.                                 |
| `alt`    | Fornece um texto alternativo que é exibido se a imagem não puder ser carregada. Importante para acessibilidade, pois leitores de tela usam este texto para descrever a imagem a usuários com deficiência visual. |
| `width`  | Define a largura da imagem. Este valor pode ser definido em pixels ou em porcentagens.                                            |
| `height` | Define a altura da imagem. Este valor pode ser definido em pixels ou em porcentagens.                                             |

Exemplo no navegador:



![alt text](images/image-8.png)

> [!NOTE]  
> Quanto conteúdo até aqui!  Hora do respiro, toma uma água e partiu prática

## Exercício:

> Abra seu vscode e crie seu primeiro arquivo html com o nome index, copie a estrutura abaixo e adicione:
> 
>1. Um título que tenha seu nome
>2. Um paragráfo descrevendo quem é você hoje
>3. Uma lista com 3 metas que você queira realizar

### Copie seu html e coloque abaixo nos comentários.

> [!IMPORTANT]  
>  Caso tenha alguma dúvida estamos na comunidade: [link do discord](https://discord.com/invite/fmVw468ZMR)