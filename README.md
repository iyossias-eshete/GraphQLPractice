# GraphQLPractice
Codes I wrote when doing some practice on GraphQL.

Authentication based link and feeds creation GraphQL using Prisma.

Signin/Login needed to use the post mutation query.

mutation {
  signup(
    name: "IG"
    email: "IG@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      id
    }
  }
}

mutation {
  login(
    email: "IG@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}


Authentication token from signin and login must be provided as a bearer token when using it to make mutation query.
This can be used under the HTTPHeaders in the GraphQL Playground.
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazY5YWQ5eTJ1czU2MDkzNThtbzBuNW8xIiwiaWF0IjoxNTgwOTA1NTg3fQ.ZHRXJFLOG_twsKtDUBlLNFkpyvQVII_H6EvLSHVsJxs"
}


The queries are as follows:

 mutation{
	updateLink(id: "link-1" , url : "www.RED.com", description: "REDEFINED"){
   id
  }
}

mutation{
  post( url : "WWW.REDAcademy.com" , description:"REDefined"){
    id,
    url,
    description
  }
}

query{
  feed{
    id,
    url,
    description
  }
}

mutation {
  post(
    url: "www.TalkDev.org"
    description: "An awesome Technology conference"
  ) {
    id,
    url,
    description
  }
}

mutation {
  signup(
    name: "IG"
    email: "IG@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      id
    }
  }
}

mutation {
  login(
    email: "IG@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}
