<script>
import 'leaflet/dist/leaflet.css';
import Cabecalho from './components/Cabecalho.vue';
import PaginaMapa from './components/PaginaMapa.vue';
import PaginaHome from './components/PaginaHome.vue';
import PaginaPontos from './components/PaginaPontos.vue';

export default {
  components: { Cabecalho, PaginaHome, PaginaMapa, PaginaPontos },
  data() {
    return {
      paginaAtual: 'home',
      pontos: 0
    }
  },
  methods: {
    mudarPagina(pagina) {
      this.paginaAtual = pagina
    },
    calcPontos(pontos) {
      this.pontos += Number(pontos);
      console.log(this.pontos);
    }
  }
}
</script>
<template>
  <Cabecalho :pagina-atual="paginaAtual" :pontos="pontos" @pagina="mudarPagina" />
  <PaginaHome v-if="paginaAtual == 'home'" @pagina="mudarPagina" />
  <PaginaMapa v-if="paginaAtual == 'mapa'" />
  <PaginaPontos v-if="paginaAtual == 'pontos'" @enviar-pontos="calcPontos" />
</template>
<style scoped>
</style>