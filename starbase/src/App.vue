<template>
	<div id="app">
		<h3>{{title}}</h3>
		<div v-for="id in initialids" class="col-md-12">
		  <char :id="id"/>
		</div>
	</div>
</template>

<script>
import char from './Char.vue'

	export default{
		name: 'app',
		data(){
			return{
				title: 'Generate Your Teams',
				initialids : [1,13,14]
			}
		},
		components:{
			char
		}
	}
</script>

<style lang="sass">
body
  background: #263238
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: white
  margin-top: 60px

.character-card
  border: 2px solid #4FC08D
  cursor: pointer
  border-radius: 4px
</style>