//import fs from 'fs';
//import path from 'path';

const loadTypeSchema = type  => {
  return (
  new Promise((resolve , reject ) => {
    const pathToSchema = path.join(
      process.cwd(),
      `src/schema/${type}.graphql`
    )
    fs.readFile(pathToSchema, { encoding: 'utf-8' }, (err, schema) => {
      if (err) {
        return reject(err)
      }

      resolve(schema)
    })
  })
  )
}

module.exports = loadTypeSchema;
  //export default loadTypeSchema ;
 // export default loadTypeSchema;
