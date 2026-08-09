# Menopausa Não Tem Cor

Site estático oficial do podcast, feito somente com HTML, CSS e JavaScript.

## Arquivos principais

- `index.html` — apresentação do podcast.
- `episodios.html` — biblioteca, busca, favoritos, player e downloads.
- `styles.css` — identidade visual e responsividade.
- `script.js` — episódios e interações.
- `public/` — fotografias, capas e demais imagens.

## Publicar na Vercel

Envie esta pasta para o GitHub, importe o repositório na Vercel e clique em **Deploy**. Não é necessário escolher framework, instalar dependências, informar comando de build ou cadastrar variáveis de ambiente.

## Publicar no GitHub Pages

Em **Settings → Pages**, selecione **Deploy from a branch**, escolha a branch principal e a pasta raiz.

## Adicionar episódios

1. Coloque o arquivo MP3 dentro de `public/audio/`.
2. Abra `script.js`.
3. Adicione o caminho no campo `audio`, por exemplo: `audio: "public/audio/episodio-01.mp3"`.

O player e o botão de download serão habilitados automaticamente.
