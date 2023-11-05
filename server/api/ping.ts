export default defineEventHandler((event) =>{
  return{
    message: 'pong',
    query: getQuery(event)//req.query
  }
})
