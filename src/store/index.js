import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


const baseUrl = 'https://home-listing-gh.herokuapp.com/api/houses'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    properties: [],
    error:null
  },
  actions: {
   getAllProperties({commit}){
     //get all properties
      return new Promise((resolve,reject)=>{
        axios.get(`${baseUrl}`)
        .then(response =>{
          commit("SET_PROPERTIES",response.data)
          resolve(resolve)
        })
        .catch(err =>{
          commit("SET_ERROR",err.response.data.error)
          reject(err)
        })
      })     
    },

    //add property to store
    addProperty({commit},formdata){
      return new Promise((resolve,reject)=>{
        axios.post(`${baseUrl}/create`,formdata)
        .then(response =>{
          commit("ADD_PROPERTY",response.data)
          resolve(response)
        })
        .catch(err =>{
          commit("SET_ERROR",err.response.data.error)
          reject(err)
        })
      })
    }
  },
  mutations: {
    SET_PROPERTIES(state,properties){
      state.properties = properties
    },
    SET_ERROR(state,err){
      state.error = err
    },
    ADD_PROPERTY(state,property){
      state.properties.push(property)
    }
  },
 
  getters:{
    getallproperties:state => state.properties
  }
})
