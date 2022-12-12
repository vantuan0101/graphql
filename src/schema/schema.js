const typeDefs = `#graphql
#Type Query là định nghĩa những entry point đi vào schema
#Định nghĩa những data mà clients có thể query trong schema
type Query {
  #Quey to get tracks  array for the homepage grid
  #non-null Track và non-null list
  tracksForHome : [Track!]! 

}
#A track iis a group oof Module that teaches about a specifiic topic
    type Track {
      id : ID!
      #the track's tittle
      title : String!
      author : Author!
      thumbnail : String
      length : Int
      modulesCount: Int
    }
    type Author {
      id:ID!
      name : String!
      photo : String
    }
`;

module.exports = typeDefs;
