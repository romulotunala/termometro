<template>
	<section id="travado">
		<p class="travadoParag DescriInput">Meu nome é</p>
		<input class="inputName" type="text" v-on:keyup.enter="addAluno()" v-model="nome" onfocus="this.value=''">
		<div class="alert-btnSOS" v-bind:style="{ display }">
			<img class="mensAlert" id="mensAlert" src="../assets/imagens/obrigado.png">
			<button class="fecharAlert">X</button>
		</div>
		<div class="SOS">
			<!-- <button v-on:click="socorro" v:bind:style={display:estado} class="btnSOS"> -->
			<button class="btnSOS" v-on:click="addAluno()" >
				<img class="imgSOS" src="../assets/imagens/botão.png">
				<p class="resp-BtnSOS">o professor já vem te ajudar =)</p>
			</button>
			<p class="travadoParag DescriButton">Estou travado</p>
		</div>
		<div class="alunosTravados">
			<ul class="lista-alunosTravados">
				<li class="item-lista-alunoTravados" v-for="(aluno, index) in alunos">
					<span>{{ aluno.nome }}</span>
					<button v-on:click="deleteAluno(index)">ok</button>
				</li>
				
			</ul>
		</div>
	</section>
</template>
<script>
	import telaProfessor from '@/components/telaProfessor'

	export default{
		name: 'Travado',
		data () {
			return{
				nome: 'Insira seu nome para pedir ajuda ;)',
				alunos: [{nome:'Os alunos aprarecerão aqui.'}]
			}
		},
		methods:{
			addAluno(){
				this.alunos.push({nome: this.nome})
				this.nome = ''
				
				// this.display = 'flex'
			},
			deleteAluno(index){
				this.alunos.splice(index, 1)
			}
		}
	}
</script>
<style scope>
	#travado{
		width: 100%;
		height: 30vh;
		bottom: 50px;
		display: flex;
		flex-flow: column wrap;
		justify-content: flex-end;
		align-items: flex-start;
		align-content: flex-start;

		/*background-color: red;*/
	}
	.travadoParag{
		color: #fcaf17;
		text-align: left;
		text-transform: uppercase;
		font-family: arial;
		font-weight: 900;
	}
	.DescriInput{
		margin: 0 6.5%;
		font-size: 1.3em;
	}
	.inputName{
		min-width: 23%;
		height: 35px;
		margin: 0 5.5%;
		padding:0 10px;
		border: 2px #EEE solid;
		border-radius: 50px;

		color:#999;
		font-size: .7em;
	}
	.inputName:focus,
	.inputName:hover{
		outline: none;

		color:#000;
		font-size: .8em;

	}
	.alert-btnSOS{
		width: 100%;
		height: 40vh;
		position: absolute;
		top:-100%;
		/*background: rgba(255,255,255,0.7);*/

		display: none;
		align-items: center;
		justify-content: center;
	}
	.mensAlert{
		width: 40%;
		transform: rotate(-13deg);
	}
	.fecharAlert{
		position: absolute;
		right: 50px;
		bottom: 0px;
		background-color: transparent;
		border:none;

		font-size: 1.5em;
		font-family: arial;
		font-weight: 400;
	}
	.fecharAlert:focus{
		outline: none;
	}
	.SOS{
		height: 25vh;
		margin: 0 10%;

		align-self: center;
		display: flex;
		flex-flow: column nowrap;
		justify-content: flex-end;
		align-items: center;

		/*background: blue;*/
	}
	.btnSOS{
		width: 50%;
		padding-bottom: 50%;
		align-self: center;
		background-color: transparent;
		border: none;

		/*background-color: blue;*/
	}
	.btnSOS:focus{
		outline: none;
	}
	.imgSOS{
		width: 100%;
		left: 0;
		top:0;
		position: absolute;
		/*background-color: #ff0;*/
	}
	.DescriButton{
		font-size: 2em;
		margin: 0;
	}
	.resp-BtnSOS {
		width: 170%;
		position: absolute;
		top: 20%;
		left: 110%;
		color: #FFF;
		text-align: left;
		text-transform: unset;
		font-family: arial;
		font-weight: 900;
		font-size: 2em;
		display: none;

	}
	.alunosTravados{
		min-width: 20%;
		min-height: 20vh;
		padding: 15px;
		border: 1px solid #999;
		border-radius: 20px;
		background-color: #FFF;
	}
	.lista-alunosTravados{
		/*background-color: red;*/
		
	}
	.item-lista-alunoTravados{
		list-style: none;
		margin: 1px;

		display: flex;

		/*background-color: blue;*/
	}
	.item-lista-alunoTravados button{
		width: 25px;
		height: 25px;
		margin-left: 10px;
		border: 1px solid #999;
		border-radius: 50%;
		background-color: #FFF;

		display: flex;
		justify-content: center;
		align-items: center;
	}

</style>