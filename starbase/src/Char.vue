<template>
	<div  @click="switchChar()">
		<div class="character-card">
			<div class="card-block">
				<h4 class="card-title">{{charactar.name}}</h4>
				<p class="card-text">Height: {{charactar.height}}</p>
				<p class="card-text">Mass: {{charactar.mass}}</p>
				<p class="card-text">Hair Color: {{charactar.hair_color}}</p>
				<p class="card-text">Eye Color: {{charactar.eye_color}}</p>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	props: ['id'],
	data(){
		return{
			charactar: {}
		}
	},
	methods:{
		fetchChar(id){
		  	fetch(`http://swapi.co/api/people/${id}`,{
		  		method: 'GET',
		  		mode: 'cors'
		  	})
		  	.then(response => response.json())
		  	.then(json => this.charactar = json);
		  },
		switchChar(){
			let random_id =Math.floor(Math.random()*83)+1
			this.fetchChar(random_id)
		}
	},
	created(){
		this.fetchChar(this.id)
	}
}
</script>
<style>
	
</style>