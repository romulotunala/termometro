<template>
	<section class="opinioes">
		<!-- <img class="logo-vnw" src="../assets/imagens/vainaweb.svg"> -->
		<h1 class="opinioes-titulo">Como está a aula?</h1>
		<div class="div-opinioes">
			<button class="contentOpinioes" v-on:click="addOpiniao()"> <!-- v-model="counterChata" -->
				<div class="contentOpinioes-center">
					<img class="opiniao" src="../assets/faces/chata.svg">
					<p class="opiniao-descricao">Chata</p>
				</div>
			</button>
			<button class="contentOpinioes" v-on:click="counterDevagar += 1">
				<div class="contentOpinioes-center">
					<img class="opiniao" src="../assets/faces/devagar.svg">
					<p class="opiniao-descricao">Devagar</p>
				</div>
			</button>
			<button class="contentOpinioes" v-on:click="counterOk += 1">
				<div class="contentOpinioes-center">
					<img class="opiniao" src="../assets/faces/ok.svg">
					<p class="opiniao-descricao">Ok</p>
				</div>
			</button>
			<button class="contentOpinioes" v-on:click="counterAnimada += 1">
				<div class="contentOpinioes-center">
					<img class="opiniao" src="../assets/faces/animada.svg">
					<p class="opiniao-descricao">Animada</p>
				</div>
			</button>
			<button class="contentOpinioes" v-on:click="counterIncrivel += 1">
				<div class="contentOpinioes-center">
					<img class="opiniao" src="../assets/faces/incrivel.svg">
					<p class="opiniao-descricao">In-crí-vel</p>
				</div>
			</button>
		</div>
		<Travado></Travado>
		<div class="div-contOpinioes"> 
			<div class="contentOpinioes">
				<div class="contentOpinioes-center ">
					<img class="opiniao" src="../assets/faces/chata.svg">
				</div>
			</div>
			<p class="numOpiniao" v-for="opiniao in opinioes">
				{{ opiniao.counterChata }}
			</p>
			<div class="contentOpinioes">
				<div class="contentOpinioes-center">
					<img class="opiniao" src="../assets/faces/devagar.svg">
				</div>
			</div>
			<p class="numOpiniao" v-for="opiniao in opinioes">{{ opiniao.counterDevagar }}</p>
			<div class="contentOpinioes">
				<div class="contentOpinioes-center">
					<img class="opiniao" src="../assets/faces/ok.svg">
				</div>
			</div>
			<p class="numOpiniao" v-for="opiniao in opinioes">{{ opiniao.counterOk }}</p>
			<div class="contentOpinioes">
				<div class="contentOpinioes-center">
					<img class="opiniao" src="../assets/faces/animada.svg">
				</div>
			</div>
			<p class="numOpiniao" v-for="opiniao in opinioes">{{ opiniao.counterAnimada }}</p>
			<div class="contentOpinioes">
				<div class="contentOpinioes-center">
					<img class="opiniao" src="../assets/faces/incrivel.svg">
				</div>
			</div>
			<p class="numOpiniao" v-for="opiniao in opinioes">{{ opiniao.counterIncrivel }}</p>
			<button class="zerarContador" v-on:click="zerarOpiniao()">X</button>
		</div>
	</section>
	
</template>

<script>
	import Travado from './Travado.vue'

	export default {
	  name: 'Opinioes',

	  data(){
	  	return{
	  		counterChata: 0,
	  		counterDevagar:0,
	  		counterOk: 0,
	  		counterAnimada:0,
	  		counterIncrivel:0,

	  		opinioes: [
	  			{counterChata: 0,
	  			counterDevagar: 0,
		  		counterOk: 0,
		  		counterAnimada: 0,
		  		counterIncrivel: 0}
	  		]
	  	}
	  },

	  components: {
	  	Travado
	  }, 

	  methods:{
	  	addOpiniao(){
	  		// this.counterChata.push ({counterChata: this.counterChata += 1})
	  		
	  	},
	  	zerarOpiniao(){
	  		this.counterChata = 0,
	  		this.counterDevagar = 0,
	  		this.counterOk = 0,
	  		this.counterAnimada = 0,
	  		this.counterIncrivel = 0
	  	}
	  }
	}
</script>

<style scoped>

.opinioes{
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	align-content: center;

	/*background: blue;*/
}
.opinioes-titulo{
	width: 100%;
	margin: 5% 0;
	margin-bottom: ;
	color: #fcaf17;
	text-align: center;
	text-transform: uppercase;
	font-family: arial;
	font-weight: 900;
	font-size: 3em;

	/*background: blue;*/
}
.div-opinioes{
	width: 100%;
	margin-bottom: 60px;
	display:flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;

	/*background: blue;*/
}
.contentOpinioes{
	width: 14%;
	height: 0;
	padding-bottom: 14%;
	margin: 0 .8%;
	border: 2px solid #BBB;
	border-radius: 50%;
	box-shadow: none;
	background-color: #FFF;
	cursor: pointer;
}
.contentOpinioes:focus{
	outline: none;
}
.contentOpinioes-center{
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: center;
	
}
.opiniao{
	width: 50%;
	
}
.opiniao-descricao{
	margin-top: 10px;
	text-transform: uppercase;
	color: #09F;
	font-family: arial;
	font-weight: 900;
	font-size: 1.5em;
}
.div-contOpinioes{
	width: 80%;
	max-height: 220px; 
	padding: 10px;
	padding-top: 20px;
	margin-bottom: 30px;
	border-radius: 20px;

	background-color: #FFF;
	display:flex;
	flex-flow: column wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
}
.numOpiniao{
	color: #09F;
	font-family: 'Barrio', cursive;
	font-weight: 500;

	/*align-self: flex-end;*/
}
.zerarContador{
	width: 25px;
	height: 25px;
	position: absolute;
	bottom: 10px;
	right: 10px;
	border: 1px solid #999;
	border: none;
	border-radius: 50%;
	background-color: #09F;
	color:#FFF;
	font-family: 'Barrio', cursive;
	font-weight: 500;
}
.zerarContador:focus{
	outline: none;
}
</style>