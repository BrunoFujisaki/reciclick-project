<script>
export default {
    data() {
        return {
            amigos: [
                { nome: 'Bruno', pontos: 9999, rank: 'rank1' },
                { nome: 'Eric', pontos: 9999, rank: 'rank1' },
                { nome: 'Matheus', pontos: 9999, rank: 'rank1' },
                { nome: 'Ana', pontos: 850, rank: 'rank2' },
                { nome: 'Carlos', pontos: 700, rank: 'rank2' },
                { nome: 'Fernanda', pontos: 600, rank: 'rank2' },
                { nome: 'Ricardo', pontos: 450, rank: 'rank3' },
                { nome: 'Patrícia', pontos: 300, rank: 'rank3' },
                { nome: 'Marcelo', pontos: 200, rank: 'rank4' },
                { nome: 'Juliana', pontos: 150, rank: 'rank4' },
                { nome: 'Roberto', pontos: 50, rank: 'rank5' },
                { nome: 'Camila', pontos: 0, rank: 'rank5' }
            ]
        }
    },
    props: {
        pontos: Number,
        ranking: String
    },
    computed: {
        amigosComPontos() {
            const todosAmigos = [
                ...this.amigos,
                { nome: 'Você', pontos: this.pontos, rank: this.ranking }
            ];

            return todosAmigos.sort((a, b) => b.pontos - a.pontos);
        }
    }
}
</script>

<template>
    <div class="ranking-container">
        <h1 class="ranking-titulo-amigos">Ranking</h1>
        <ul class="amigos">
            <li v-for="amigo in amigosComPontos" :key="amigo">
                <div class="imagem">
                    <img :src="`${amigo.rank}.png`" alt="">
                </div>
                <p>{{ amigo.nome }}</p>
                <p>{{ amigo.pontos.toLocaleString() }} pts</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>

.ranking-titulo-amigos {
    font-family: var(--font-retro);
    margin: 3em 0 2em 1.2em;
    font-size: 15px;
    font-weight: normal;
}


ul {
    margin: 1em;
}

.imagem {
    width: 32px;
    height: 32px;
}

.imagem img {
    position: relative;
    top: -10px;
    left: -5px;
    width: 100%;
}

.pontos-imagem {
    display: flex;
    align-items: center;
}

li {
    display: grid;
    align-self: auto;
    grid-template-columns: auto 1fr auto;
    font-family: var(--font-retro);
    font-size: 10px;
    padding: .2em 0;
}

@media screen and (min-width: 1024px) {
    .ranking-container {
        width: 80%;
        margin: auto;
    }
}
</style>