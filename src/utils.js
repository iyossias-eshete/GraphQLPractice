const jwt = require('jsonwebtoken');
//const APP_SECRET = 'Graphql-is-awsome'
const APP_SECRET = 'SECRET';

function getUserId(context){
    const Authorization = context.request.get('Authorization')
    if(Authorization){
        const token = Authorization.replace('Bearer ', '');
        const { userId } = jwt.verify(token, '')
    }
}