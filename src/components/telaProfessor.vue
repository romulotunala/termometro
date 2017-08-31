<template>
	<section id="telaProfessor">
		<div class="alunosTravados">
			<ul class="lista-alunosTravados" v-for="aluno in alunos">
				<li class="item-lista-alunoTravados">{{ aluno.nome }}</li>
			</ul>
		</div>
	</section>
</template>
<script>
	export default{
		name: 'telaProfessor'
	}
</script>
<style scoped>
	#telaProfessor{
		width: 50%;
		height: 50%;
		padding: 5px;
		border: solid #000 2px;
		background-color: #FFF;

	}
	.alunosTravados{
		/*width: 50%;
		height: 50%;
		background-color: red;*/
	}
</style>