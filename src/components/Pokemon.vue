<template>
  <div>
    <h1>{{ num }} {{ UpperOne }}</h1>
    <small>{{ url }}</small>
  </div>
</template>

<script>
export default {
    name:'Pokemon-card',
    created: async function(){
      try{
        this.pokemon.type = this.pokemonBrut.types[0].type.name
        this.pokemon.front = this.pokemonBrut.sprites.front_default
        this.pokemon.back = pokemonBrut.sprites.back_default
        console.log(this.pokemon)
      }catch(err){
        console.error(err)
      }
    },
    data(){
      return{
        pokemon:Object
      }
    },
  props: {
    pokemonBrut:Object
  },
  computed:{
    UpperOne:function(){
         let newName = this.name[0].toUpperCase() + this.name.slice(1)
        return newName
        }
  }
};
</script>