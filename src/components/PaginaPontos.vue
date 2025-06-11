<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { tarefasDiarias } from '@/tarefas/tarefasDiarias';
import { tarefasPlastico } from '@/tarefas/tarefasPlastico';
import { tarefasMetal } from '@/tarefas/tarefasMetal';
import { tarefasPapel } from '@/tarefas/tarefasPapel';
import { tarefasVidro } from '@/tarefas/tarefasVidro';
import Rodape from './Rodape.vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
        Rodape
    },
    data() {
        return {
            pagination: Pagination,
            tarefasDeReciclaveis: [
                { titulo: 'missões diárias', imagem: 'tarefa-tudo.png', tarefas: tarefasDiarias },
                { titulo: 'plásticos', imagem: 'tarefa-plastico.png', tarefas: tarefasPlastico },
                { titulo: 'metais', imagem: 'tarefa-metal.png', tarefas: tarefasMetal },
                { titulo: 'papéis', imagem: 'tarefa-papel.png', tarefas: tarefasPapel },
                { titulo: 'vidros', imagem: 'tarefa-vidro.png', tarefas: tarefasVidro },
            ],
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                },
                1450: {
                    slidesPerView: 5,
                }
            }
        };
    },
    methods: {
        terminarTarefa(tarefa) {
            tarefa.concluida = true;
            this.$emit('enviar-pontos', tarefa.pontos);
        }
    },
    emits: ['enviar-pontos'],
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>

<template>
    <section class="missoes" v-for="categoria in tarefasDeReciclaveis" :key="categoria">
        <h1 class="titulo-missao">{{ categoria.titulo }}</h1>
        <Swiper :modules="[pagination]" :spaceBetween="10" :slidesPerView="1" :pagination="{ clickable: true }"
            :breakpoints="breakpoints">
            <div class="swiper-pagination" style="position: initial; padding: 1em;"></div>
            <SwiperSlide v-for="tarefa in categoria.tarefas" :key="tarefa.tipo">
                <div class="card-missao" :class="[tarefa.tipo, { concluida: tarefa.concluida }]">
                    <div class="card-imagem">
                        <img :src="`tarefas/${tarefa.tipo}.png`" alt="">
                    </div>
                    <hr />
                    <div class="card-info">
                        <h3 class="card-titulo">{{ tarefa.titulo }}</h3>
                        <p class="card-descricao">{{ tarefa.descricao }}</p>
                        <h3 class="card-pontos">Pontos: {{ tarefa.pontos }}</h3>
                    </div>
                    <button :disabled="tarefa.concluida" @click="terminarTarefa(tarefa)"
                        class="concluir-tarefa-botao">Pronto</button>
                </div>
            </SwiperSlide>
        </Swiper>
    </section>
    <Rodape />
</template>

<style>
.swiper {
    z-index: 0;
    width: 100%;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-pagination-bullet {
    background-color: var(--branco) !important;
}

.swiper-pagination-bullet-active {
    background-color: var(--verde-titulo) !important;
}

.missoes {
    display: flex;
    flex-direction: column;
    align-items: center;

}

.titulo-missao {
    width: 100%;
    color: var(--verde-titulo);
    background-color: var(--cinza);
    padding: 1em;
    margin: 1em;
    font-family: var(--font-retro);
    font-size: 14px;
    font-weight: normal;
}

.card-missao {
    height: 100%;
    min-height: 330px;
    border-top: 1.5em solid;
    background-color: var(--cinza);
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-imagem {
    width: 100%;
    text-align: center;
}

hr {
    width: 100%;
}

.card-imagem {
    padding: 1em;
}

.card-info {
    flex: 1;
    text-align: center;
    color: black;
    color: var(--branco);
    font-family: var(--font-padrao);
    padding: 1em;
}

.card-titulo {
    font-family: var(--font-retro);
    font-size: 13px;
    font-weight: normal;
}

.card-descricao {
    flex-grow: 1;
    font-size: 13px;
    padding: 1em 0;
}

.card-pontos {
    font-family: var(--font-retro);
    font-size: 12px;
    font-weight: normal;
}

.concluir-tarefa-botao {
    width: 100%;
    padding: .8em 1em;
    margin-top: 1em;
    font-family: var(--font-retro);
    color: var(--branco);
    cursor: pointer;
    border: none;
}

.concluida {
    opacity: 0.5;
    pointer-events: none;
    transition: 0.3s;
}

/* CARDS TAREFAS PERSONALIZADOS */
.tarefa-tudo .concluir-tarefa-botao {
    background-color: var(--roxo);
}

.tarefa-tudo,
.tarefa-tudo hr,
.tarefa-tudo .concluir-tarefa-botao {
    border-color: var(--roxo);
}

.tarefa-tudo .card-imagem {
    background-color: #8558ff;
}

.tarefa-plastico .concluir-tarefa-botao {
    background-color: var(--vermelho);
}

.tarefa-plastico,
.tarefa-plastico hr,
.tarefa-plastico .concluir-tarefa-botao {
    border-color: var(--vermelho);
}

.tarefa-plastico .card-imagem {
    background-color: #ff5596c4;
}

.tarefa-metal .concluir-tarefa-botao {
    background-color: var(--amarelo);
}

.tarefa-metal,
.tarefa-metal hr,
.tarefa-metal .concluir-tarefa-botao {
    border-color: var(--amarelo);
}

.tarefa-metal .card-imagem {
    background-color: #ffd966c4;
}

.tarefa-papel .concluir-tarefa-botao {
    background-color: var(--azul);
}

.tarefa-papel,
.tarefa-papel hr,
.tarefa-papel .concluir-tarefa-botao {
    border-color: var(--azul);
}

.tarefa-papel .card-imagem {
    background-color: #5eb3ffc4;
}

.tarefa-vidro .concluir-tarefa-botao {
    background-color: var(--verde);
}

.tarefa-vidro,
.tarefa-vidro hr,
.tarefa-vidro .concluir-tarefa-botao {
    border-color: var(--verde);
}

.tarefa-vidro .card-imagem {
    background-color: #70e7a2c4;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.missoes {
    animation: fadeInUp .6s ease-out;
}
</style>