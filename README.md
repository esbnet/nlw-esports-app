# nlw-esports-app

It is an App to consume a Rest API [nlw-esports-server](https://github.com/esbnet/nlw-esports-server). Its purpose is to locate players with advertisements for the games of interest to them.

![Main](./src/assets/main.png)

## Pré-requisites

- node
- expo CLI (https://blog.expo.dev/new-versioned-expo-cli-cf6e10632656)
- server running ([how to isntall and run](https://github.com/esbnet/nlw-esports-server))

## Technologies:

- react
- axios
- tailwindcss
- typescript

## How it works:

1. Select the game:<br/>
   <img src="./src/assets/tela01.jpeg" alt="drawing" width="240"/><br/>

2. Select the advertisement and click on button "Conectar"<br/>
   <img src="./src/assets/tela02.jpeg" alt="drawing" width="240"/><br/>

3. In the info, click on the discord code to copy it to the clipboard and search for it on Discord<br/>
   <img src="./src/assets/tela03.jpeg" alt="drawing" width="240"/><br/>

4. Confirmation of copy to clipboard:<br/>
   <img src="./src/assets/tela04.jpeg" alt="drawing" width="240"/><br/>

## Installation

Clone this project into your project directory:

`git clone https://github.com/esbnet/nlw-esports-app.git`

## Start

Run the following command to start the aplication:

`expo start`

## End-Points:

The application consumes the following end-points:

- GET `/games'` - Get a list of games
- POST `/game/:id/ads` - Create a ad for the game by id
- GET `/games/:id/ads` - Get ad for the game by id
- GET `/ads/:id/discord` - Get ads for the game selected
