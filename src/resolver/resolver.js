const resolver = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (_, __, { dataSources }) =>
      dataSources.trackAPI.getTracksForHome(),
    track: (_, { id }, { dataSources }) => dataSources.trackAPI.getTrack(id),
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) =>
      dataSources.trackAPI.getAuthor(authorId),
    // using fetch instead of dataSources
    // author: async ({ authorId }, _, { dataSources }) => {
    //   const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com";
    //   const res = await fetch(`${baseUrl}/author/${authorId}`);
    //   return res.json();

    // return dataSources.trackAPI.getAuthor(authorId);
    // },
  },
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: "Increment track views successfully",
          track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
    },
  },
};

module.exports = resolver;
