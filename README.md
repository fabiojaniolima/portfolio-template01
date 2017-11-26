# Portfólio (Template HTML5)

Este é um projeto open source, regido por uma licença [MIT](./license).

Exemplo de One Page utilizando HTML5, CSS3 e jQuery.

> **Nota**: Não me responsabilizo pelo suporte ou reparação de qualquer natureza em razão de uso indevido ou inadequado deste projeto ou de seus elementos.

As palavras-chave "DEVE", "NÃO DEVE", "REQUER", "DEVERIA", "NÃO DEVERIA", "PODERIA", "NÃO PODERIA", "RECOMENDÁVEL", "PODE", e "OPCIONAL" neste documento devem ser interpretadas como descritas no [RFC 2119](http://tools.ietf.org/html/rfc2119). Tradução livre [RFC 2119 pt-br](http://rfc.pt.webiwg.org/rfc2119).

1. [Funcionamento](#funcionamento)
1. [Gulp](#gulp)
1. [Como usar o Gulp](#como_usar)
1. [Licença](#licenca)

## 1 - <a id="funcionamento"></a>Funcionamento

Este portfólio web foi construído utilizando **HTML5**, **CSS3** e um pouco de **jQuery**. Na raiz do projeto existem 2 diretórios, sendo eles:

 - **dist**: é o diretório de distribuição, ou seja, contêm os arquivos pré-processados
 - **src**: possui os arquivos de desenvolvimento, tais como: scss, imagens em alta resolução etc
 
 O automatizador de tarefas **Gulp** foi utilizado para automatizar as rotinas de build, ou seja, o diretório **dist** é gerado automaticamente como resultado de um pré-processamento.
 
 > O diretório **dist** é tudo que você precisa para subir seu portfólio, entretanto, se quiser trabalhar com gulp considere que ele irá atuar sobre o diretório **src**.

## 2 - <a id="gulp"></a>Gulp

O **gulpfile.js** possui algumas tarefas básicas, utilizadas com uma certa frequência em ambiente de desenvolvimento, tais como:

 - **serve**: sobe um server local para monitorar alterações em arquivos e atualizar automaticamente o browser
 - **dist**: gera uma versão de distrituição, ou seja, um o diretório dist com arquivos planos e mimificados
 - **prod**: gera uma versão de produção, ou seja, um diretório dist com versões mimificadas, inclusive do html
 
## 3 - <a id="como_usar"></a>Como usar o Gulp

> Você DEVE obrigatoriamente já ter instalado o NODEjs e NPM.

Instale o gulp-cli globalmente:

```
npm install --global gulp-cli
```

Na sequência execute o comando abaixo para instalar as depênciencias contidas em package.json:

```
npm install
```

## 4 - <a id="licenca">Licença MIT
Para maiores informações, leia o arquivo de licença disponibilizado com este projeto.