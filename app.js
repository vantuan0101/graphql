// const { ApolloServer } = require("@apollo/server");

const { ApolloServer } = require("apollo-server");
// const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./src/schema/schema");
const resolver = require("./src/resolver/resolver");
const TrackAPI = require("./src/datasources/track-api");
// const mocks = {
//   Query: () => ({
//     tracksForHome: () => [...new Array(6)],
//   }),
//   Track: () => ({
//     id: () => "track_01",
//     title: () => "Astro Kitty, Space Explorer",
//     author: () => ({
//       name: "Grumpy Cat",
//       photo:
//         "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
//     }),
//     thumbnail: () =>
//       "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
//     length: () => 1210,
//     modulesCount: () => 6,
//   }),
// };

const server = new ApolloServer({
  typeDefs,
  resolver,
  dataSources: () => ({
    trackAPI: new TrackAPI(),
  }),
});
server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});
// async function startServer() {
//   const { url } = await startStandaloneServer(server);
//   console.log(`🚀 Server ready at ${url}`);
// }
// startServer();
