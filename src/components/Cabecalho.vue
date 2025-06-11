<script>
import TabelaRanking from './TabelaRanking.vue';

export default {
    data() {
        return {
            menuVisivel: false,
            mostrarTelaUsuario: false,
            tituloRanking: null
        }
    },
    components: { TabelaRanking },
    methods: {
        toggleMenu() {
            this.menuVisivel = !this.menuVisivel;
        },

        toggleTelaUsuario() {
            this.mostrarTelaUsuario = !this.mostrarTelaUsuario;
        },
        cliqueFora(event) {
            const menuLateral = this.$refs.menuLateral;
            const telaUsuario = this.$refs.telaUsuario;
            if (this.menuVisivel && menuLateral && !menuLateral.contains(event.target)) {
                this.toggleMenu();
            }

            if (this.mostrarTelaUsuario && telaUsuario && !telaUsuario.contains(event.target)) {
                this.toggleTelaUsuario();
            }
        }
    },
    emits: ['pagina'],
    props: {
        paginaAtual: String,
        pontos: Number
    },
    mounted() {
        document.addEventListener('click', this.cliqueFora);
    },
    beforeUnmount() {
        document.removeEventListener('click', this.cliqueFora);
    },
    computed: {
        ranking() {
            if (this.pontos >= 1000) {
                this.tituloRanking = 'Eco-Mestre'
                return 'rank1';
            } else if (this.pontos >= 500) {
                this.tituloRanking = 'Reciclador Pro';
                return 'rank2';
            } else if (this.pontos >= 250) {
                this.tituloRanking = 'Pixel Sustentável'
                return 'rank3';
            } else if (this.pontos >= 100) {
                this.tituloRanking = 'Aprendiz Verde'
                return 'rank4';
            } else {
                this.tituloRanking = 'Novato da Natureza';
                return 'rank5';
            }
        }
    }
}
</script>

<template>
    <header class="cabecalho">
        <div class="cabecalho-container">
            <button class="menu" @click.stop="toggleMenu">
                <img src="../assets/images/menu.png" alt="">
            </button>
            <transition name="slide-left">
                <ul v-if="menuVisivel" class="menu-lista" ref="menuLateral">
                    <li class="menu-lista-item">
                        <button @click.stop="toggleMenu">
                            <img src="../assets/images/fechar.png" alt="">
                        </button>
                    </li>
                    <li class="menu-lista-item">
                        <a href="#" class="lista-item-link" @click="$emit('pagina', 'home')"
                            :class="{ ativo: paginaAtual === 'home' }">
                            Home
                        </a>
                    </li>

                    <li class="menu-lista-item">
                        <a href="#" class="lista-item-link" @click="$emit('pagina', 'pontos')"
                            :class="{ ativo: paginaAtual === 'pontos' }">
                            Pontos
                        </a>
                    </li>

                    <li class="menu-lista-item">
                        <a href="#" class="lista-item-link" @click="$emit('pagina', 'mapa')"
                            :class="{ ativo: paginaAtual === 'mapa' }">
                            Mapa
                        </a>
                    </li>
                </ul>
            </transition>
            <h1 class="titulo">reciclick</h1>
        </div>
        <ul class="paginas-lista">
            <li class="lista-item">
                <a href="#" class="lista-item-link" @click="$emit('pagina', 'home')"
                    :class="{ ativo: paginaAtual === 'home' }">
                    Home
                </a>
            </li>
            <li class="lista-item">
                <a href="#" class="lista-item-link" @click="$emit('pagina', 'pontos')"
                    :class="{ ativo: paginaAtual === 'pontos' }">
                    Pontos
                </a>
            </li>
            <li class="lista-item">
                <a href="#" class="lista-item-link" @click="$emit('pagina', 'mapa')"
                    :class="{ ativo: paginaAtual === 'mapa' }">
                    Mapa
                </a>
            </li>
        </ul>
        <button class="usuario" @click.stop="toggleTelaUsuario()">
            <img src="../assets/images/usuario.png" alt="">
        </button>
        <!-- Tela que sobe -->
        <transition name="slide-up">
            <div v-if="mostrarTelaUsuario" class="tela-usuario" ref="telaUsuario">
                <button class="fechar" @click.stop="toggleTelaUsuario">
                    <img src="../assets/images/fechar.png" alt="">
                </button>

                <div :class="['ranking', ranking]">
                    <h1 class="ranking-titulo">{{ tituloRanking }}</h1>
                    <div class="ranking-imagem"><img :src="`${ranking}.png`" alt=""></div>
                    <p>{{ pontos.toLocaleString() }}</p>
                </div>

                <TabelaRanking :ranking="ranking" :pontos="this.pontos" />
            </div>
        </transition>
    </header>
</template>

<style scoped>
/* Transição deslizando da esquerda */
.slide-left-enter-active,
.slide-left-leave-active {
    transition: transform 0.3s ease;
}

.slide-left-enter-from {
    transform: translateX(-100%);
}

.slide-left-enter-to {
    transform: translateX(0);
}

.slide-left-leave-from {
    transform: translateX(0);
}

.slide-left-leave-to {
    transform: translateX(-100%);
}

/* Animação slide para cima (tela usuário) */
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.5s ease;
}

.slide-up-enter-from {
    transform: translateY(100%);
    opacity: 0;
}

.slide-up-enter-to {
    transform: translateY(0);
    opacity: 1;
}

.slide-up-leave-from {
    transform: translateY(0);
    opacity: 1;
}

.slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}

.paginas-lista {
    display: none;
}

.tela-usuario {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 90vh;
    background-color: #0000009a;
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    z-index: 3;
    padding: 1em;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
    font-family: var(--font-padrao);
    overflow-y: auto;
}


.ranking-titulo {
    padding-top: 1em;
    font-family: var(--font-retro);
    font-weight: normal;
    font-size: 18px;
    text-align: center;
}

.ranking {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

.ranking p {
    text-align: center;
    font-family: var(--font-retro);
}

.tela-usuario .fechar {
    background-color: transparent;
    border: none;
}

.inputs {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 3em;
}

.inputs label {
    display: flex;
    align-items: center;
}

.cabecalho {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-color: var(--cinza);
}

.cabecalho-container {
    display: flex;
    align-items: center;
}

.cabecalho .titulo {
    font-family: var(--font-retro);
    color: var(--verde-titulo);
    font-size: 16px;
    font-weight: normal;
}

.menu {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.usuario {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.menu,
.usuario {
    margin: 1em;
}

.menu-lista {
    position: fixed;
    top: 0;
    background-color: #0000009a;
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    width: 45vw;
    padding-top: 1em;
    height: 100vh;
    z-index: 2;
}

.menu-lista-item button {
    background-color: transparent;
    border: none;
}

.lista-item-link.ativo {
    border-bottom: 4px solid var(--verde-titulo);
    position: relative;
    width: max-content;
}

.lista-item-link {
    position: relative;
    text-transform: uppercase;
    font-family: var(--font-retro);
    color: var(--verde-titulo);
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
}

.lista-item-close {
    padding: .5em;
}

.menu-lista-item {
    padding: 1em;
}

.rank5 {
    color: #a26743;
}

.rank4 {
    color: #c3d8f0;
}

.rank3 {
    color: #ffff00;
}

.rank2 {
    color: #4ef8ff;
}

.rank1 {
    color: var(--vermelho);
}

@media screen and (min-width: 1000px) {
    .menu {
        display: none;
    }

    .cabecalho .titulo {
        padding-left: 1em;
    }

    .paginas-lista {
        margin-left: 3em;
        display: flex;
        gap: 1em;
        margin-right: auto;
    }

    .lista-item {
        padding-top: .5em;
    }

    .lista-item-link {
        font-size: 15px;
    }

    .lista-item-link::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 100%;
        height: 4px;
        background-color: var(--verde-titulo);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    .lista-item-link:hover::after {
        transform: scaleX(1);
    }
}
</style>