export default () =>{
 // const role = useState('role', ()=> null)
  const role = useState<null | 'user' | 'admin'>('role',()=>{
    return null
  })
  return{role}
}
