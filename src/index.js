// const { prisma } = require('./generated/prisma-client')

// async function main() {
//   prisma.
//   // Create a new link
//   const newLink = await prisma.createLink({ 
//     url: 'www.prisma.io',
//     description: 'Prisma replaces traditional ORMs',
//   })
//   console.log(`Created new link: ${newLink.url} (ID: ${newLink.id})`)

//   // Read all links from the database and print them to the console
//   const allLinks = await prisma.links()
//   console.log(allLinks)
// }

// main().catch(e => console.error(e))




const { GraphQLServer } = require('graphql-yoga');
const { prisma }  = require('./generated/prisma-client'); 


const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');


const resolvers = {
  Query,
  Mutation,
  User,
  Link
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request =>{
      return {
     ...request,
      prisma,
      }
    }
  });


server.start(( ) => console.log(`Server is running on http://localhost:4000`));