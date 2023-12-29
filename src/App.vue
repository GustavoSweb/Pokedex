<template>
  <div id="app" class="w-[100vw] flex justify-evenly items-center flex-col h-[100vh]">
    <div class="flex gap-3 min-w-[40%]"><input type="text" id="form-pokemon" v-model="name" class="w-[70%] pl-2 transition-all rounded-lg"><button class="bg-main-color w-[30%] rounded-lg py-2 text-white" @click="SerchPokemon">Buscar</button></div>
    <Pokedex :pokemon="pokemon"/>
  </div>
</template>

<script>

import axios from 'axios'
import Pokedex from './components/Pokedex.vue'

export default {
  name: 'App',
  data(){
    return{
      pokemon:false,
      name:''
    }
  },
  methods:{
    SerchPokemon: async function(){
      try{
        this.pokemon = await (await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.name}`)).data
        console.log(this.pokemon)
      }catch(err){
        console.error(err)
      }

    }
  },
  components:{
    Pokedex
  }
  
}
</script>

<style>
#app{
  background-image: url('./assets/img/background.png');
  background-size: cover;
}
#form-pokemon{
  outline: solid 0px #d30a4090;
}
#form-pokemon:focus{
  outline: solid 5px #d30a4090;
}
</style>
