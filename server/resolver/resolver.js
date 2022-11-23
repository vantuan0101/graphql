const resolver = {
  Query: {
    books: () => [
      {
        name: "Name of the Wind",
        genre: "Fantasy",
        id: 1,
      },
      {
        name: "The Final Empire",
        genre: "Fantasy",
        id: 2,
      },
    ],
  },
};

module.exports = resolver;
