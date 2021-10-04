import React from 'react'
import { useState, createContext, useEffect } from 'react'

import {toast} from 'react-toastify'

import api from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{

       function loadStorage(){

        const storageUser = localStorage.getItem('SistemaUser')

        if(storageUser){
           setUser(JSON.parse(storageUser)) 
           setLoading(false)
        }

        setLoading(false)

       }

       loadStorage()
       
        

    }, [])

    //fazendo um login
    async function signIn(email, password){

        setLoadingAuth(true)

        await api.post("/sessions", {email, password})

        .then(() => {

           
            let data = {
                email,
                //password
                
            }

            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
            toast.success('Bem vindo a plataforma')

        }).catch((error) =>{
            console.log(error)
            toast.error('Algo deu errado, entre em contato com o administrador')
            setLoadingAuth(false)
        })

        

    }

   //cadastrando um usuario
   
    async function signUp(name, email, password){

        setLoadingAuth(true);

        await api.post("/users", {name, email, password})
        
        .then(() => {

            let data = {
                name,
                email,
                //password
            }

            setUser(data)
            storageUser(data)
            setLoadingAuth(false)

            toast.success('Cadastro efetuado com sucesso, bem vindo')
        })
        
        .catch((error) =>{
            console.log(error)
            toast.error('Ops, algo deu errado! Tente novamente')
            setLoadingAuth(false)
         
        })
            
        }      

      function storageUser(data){
      localStorage.setItem('SistemaUser', JSON.stringify(data))
    }

   //fazer logout de usuario
   
    async function signOut(){
        
        localStorage.removeItem('SistemaUser')
        setUser(null)
    }
    

    return(
        <AuthContext.Provider 
        value={{
            signed:!!user,
             user,
              loading,
              signUp,
              signOut,
              signIn,
              loadingAuth
              }}
              >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider