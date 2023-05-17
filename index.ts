import Fastify from "fastify";
import fastifyWebsocket from "@fastify/websocket";

const fastify = Fastify();

await fastify.register(fastifyWebsocket);

await fastify.register(async (_, __, done) => {
  fastify.get("/", { websocket: true }, ({ socket }) => {
    socket.s(); // error?
  });

  done();
});

await fastify.listen({ port: 3000 });
