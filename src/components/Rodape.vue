<script>
export default {}
</script>

<template>
    <footer class="rodape">
        <p>
            Projeto desenvolvido por
            <a href="https://github.com/BrunoFujisaki" target="_blank">Bruno Fujisaki</a>,
            <a href="https://github.com/EricDRL" target="_blank">Eric Leite</a> e
            <a href="https://github.com/MatheusCostaeSilva" target="_blank">Matheus Costa</a>.
        </p>
    </footer>
</template>

<style scoped>
.rodape {
    font-family: var(--font-padrao);
    background-color: var(--preto);
    color: var(--verde-titulo);
    text-align: center;
    padding: 2em 0;
    font-size: 16px;
}

a {
    color: var(--verde-titulo);
    font-weight: bold;
    text-decoration: none;
    position: relative;
}

@media screen and (min-width: 1000px) {
    a::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 4px;
        background-color: var(--verde-titulo);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
    }

    a:hover::after {
        transform: scaleX(1);
    }
}
</style>