* Node con TypeScript - TS-Node-dev (preferido)

1. Instalar TypeScript y demás dependencias
>npm i -D typescript @types/node ts-node-dev rimraf
2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
>npx tsc --init --outDir dist/ --rootDir src
3. Crear scripts para dev, build y start
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"

Nota:
    MAs sobre  ts-node-dev: https://www.npmjs.com/package/ts-node-dev

* Inicio de la aplicacion
Cron for Node.js
> npm i cron
JSON Server
> npm i json-server
> npm i dotenv
> npm i env-var

1 parametrizar
PORT=
MAILER_EMAIL=
MAILER_EMAIL_PASS=
PROD=

# mails

https://myaccount.google.com/u/0/apppasswords?pli=1&rapt=AEjHL4MQx_DiaTofE1Ml2Jx6HEZXkycJCctSb-CUi5qVi4Rv754t9OWLAB-k7c3zWUBcUAVB-XbdnnTvVrq0pOmZyOnSW4pbYgCJRRYfnrrQWdBSMj_VUL8

https://myaccount.google.com/security

https://www.npmjs.com/package/nodemailer

> npm i nodemailer