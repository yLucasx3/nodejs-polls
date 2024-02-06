import fastify from "fastify";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import fastifyCookie from "@fastify/cookie";

const app = fastify();

app.register(fastifyCookie, {
  secret: process.env.SECRET_COOKIE,
  hook: "onRequest",
  parseOptions: {},
});

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.get("/", () => console.log("Welcome to nodejs-polls"));

app.listen({ port: Number(process.env.PORT) || 3333 }).then(() => {
  console.log("HTTP server running");
});
