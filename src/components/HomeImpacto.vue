<script>

export default {}
</script>

<template>
    <!-- Impacto Ambiental Section -->
    <section class="impact-section">
        <div class="container">
            <div class="impact-content">
                <div class="impact-text">
                    <h2>Seu Impacto no Meio Ambiente</h2>
                    <p>
                        Cada ação de reciclagem contribui para um planeta mais sustentável.
                        Através da nossa plataforma, você pode visualizar o impacto real
                        das suas ações e se motivar a continuar fazendo a diferença.
                    </p>
                    <ul class="impact-benefits">
                        <li>Redução de resíduos em aterros sanitários</li>
                        <li>Economia de recursos naturais</li>
                        <li>Diminuição da poluição ambiental</li>
                        <li>Contribuição para economia circular</li>
                    </ul>
                </div>
                <div class="impact-visual">
                    <img src="../assets/images/terra.png" alt="">
                    <div class="impact-stats">
                        <div class="impact-stat">
                            <span class="impact-number">85%</span>
                            <span class="impact-desc">Redução de CO₂</span>
                        </div>
                        <div class="impact-stat">
                            <span class="impact-number">92%</span>
                            <span class="impact-desc">Economia de Água</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Impact Section */
.impact-section {
    padding: 80px 20px;

}

/* Essa parte ajustar para tela menores width 80%  tela grande 60%*/
.impact-content {
    display: flex;
    align-items: center;
}

.impact-text h2 {
    font-size: 1.7rem;
    font-weight: normal;
    color: var(--verde-titulo);
    font-family: var(--font-retro);
    margin-bottom: 1.5rem;
}

.impact-text p {
    font-size: 14px;
    font-family: var(--font-padrao);
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 2rem;
}

.impact-benefits li {
    padding: 10px 0;
    font-family: var(--font-padrao);
    font-size: 14px;
    position: relative;
    padding-left: 30px;
}

.impact-benefits li::before {
    content: url('check.png');
    position: absolute;
    left: 0;
}

.impact-visual {
    text-align: center;
}

.impact-stats {
    display: flex;
    gap: 1em;
}

.impact-stat {
    text-align: center;
}

.impact-number {
    display: block;
    font-weight: normal;
    font-family: var(--font-retro);
    font-size: 1.7rem;
    color: var(--verde-titulo);
}

.impact-desc {
    font-size: 14px;
    font-family: var(--font-padrao);
    color: var(--text-light);
}

@media (max-width: 840px) {
    .impact-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
}

@media (max-width: 540px) {
    .impact-content {
        display: flex;
        flex-direction: column;
    }

    .impact-content p {
        margin: 1em auto;
    }
}
</style>