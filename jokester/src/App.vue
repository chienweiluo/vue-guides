<template>
	<div id="app">
		<h3>good jokes~?</h3>
		<button class="btn btn-primary" @click="initJokes()">add 10 random jokes</button>
		<span v-for="type in types">
			<input type="checkbox" :value="type" checked>
			<label>{{type}} </label>
		</span>
		<div class="">
			{{$store.state.jokes}}
		</div>
	</div>
</template>
<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2C3350
  margin-top: 60px
</style>
<script>
	import {mapActions} from 'vuex';

	export default{
		data(){
			return{
				types: ['general','knockknock', 'programing']
			}
		},
		methods: mapActions([
			'initJokes'
			])
	}
</script>