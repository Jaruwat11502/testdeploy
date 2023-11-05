import useAuth from "../composables/useAuth"

export default defineNuxtRouteMiddleware((to,from)=>{
  const {role} = useAuth()
  if(role.value !== 'admin'){
    return navigateTo ('/')
  }
})
