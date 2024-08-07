## Task Completed

1/ User can enter their username to log in.

2/ Implemented a server using Node and ExpressJs

3/ Integrated a PostgreSQL database and used Prisma as an orm, defined structured db schema

4/ Implemented a websocket server.

## To be done

1/Store password encrypted using a Bcrypt library.

2/ Allowing users to send and receive messages in real-time within their private chat room

3/ Store chat messages in a database.

## Getting Started

Clone the repository, and then

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Getting a database

You can get a postgres db locally using docker or on the cloud (neon.tech)

```jsx
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```

For docker run the above command in the terminal.

-> Copy over all .env.example files to .env
-> Update .env files everywhere with the right db url
-> Go to `packages/db` and run
`npx prisma migrate dev`
` npx prisma db seed`
