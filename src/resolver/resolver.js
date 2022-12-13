const resolver = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) =>
      dataSources.trackAPI.getTracksForHome(),
    tracksForHomeFetch: async () => {
      const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await fetch(`${baseUrl}/tracks`);
      return res.json();
    },
  },
  Track: {
    // author: ({ authorId }, _, { dataSources }) =>
    //   dataSources.trackAPI.getAuthor(authorId),
    // using fetch instead of dataSources
    author: async ({ authorId }, _, { dataSources }) => {
      const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
      const res = await fetch(`${baseUrl}/author/${authorId}`);
      return res.json();

      // return dataSources.trackAPI.getAuthor(authorId);
    },
  },
};

module.exports = resolver;
