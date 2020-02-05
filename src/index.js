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
    
    //2
    Mutation: {
        post: (root,args,context) => {
                return context.prisma.createLink({
                  url: args.url,
                  description: args.description
                })
        },
        updateLink: (parent, args) =>{
            
            const oldLink = links.find( link => link.id === args.id );

            //console.log( oldLink );

            links[ oldLink.id ] ={
                url : args.url !== undefined ? args.url : oldLink.url,
                description : args.description !== undefined ? args.description : oldLink.description,
                id: oldLink.id
            };
            console.log('Sending');
            console.log(   links[ oldLink.id ] );
            console.log('The array is ');
            console.log(links);

            return links[ oldLink.id ];
        }
    }

  };

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