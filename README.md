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

# Bases de Datos

# Mongo DB
> docker compose up -d
> npm install mongoose --save

# Postgres
> docker compose up -d

# prisma
> npm install prisma --save-dev
> npx prisma init --datasource-provider sqlite
> npx prisma init --datasource-provider PostgreSQL
> npx prisma migrate dev --name init

# Test
configuracion
https://gist.github.com/Klerith/98d7b1bc0f1525e892f260813cad1007

> npm install -D jest @types/jest ts-jest supertest
> npx jest --init
  y, y, node, y, v8, n
  