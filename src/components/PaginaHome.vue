<script>
import HomeImpacto from './HomeImpacto.vue';
import Rodape from './Rodape.vue';

export default {
    data() {
        return {
            stats: {
                pontosColetados: 1250,
                usuariosAtivos: 847,
                pontosReciclagem: 40
            }
        };
    },
    methods: {
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },
    emits:['pagina'],
    components: {HomeImpacto, Rodape}
};
</script>

<template>
    <section class="hero-section">
        <div class="hero-content">
            <div class="hero-text">
                <h1 class="hero-title">
                    Transforme sua reciclagem em uma experiência divertida
                </h1>
                <p class="hero-description">
                    Descubra pontos de coleta próximos a você, ganhe pontos por reciclar e ajude a construir um
                    futuro
                    mais sustentável para todos.
                </p>
                <div class="hero-buttons">
                    <button class="hero-btn" @click="scrollToSection('recursos')">
                        Começar Agora
                    </button>
                    <button class="hero-btn" @click="scrollToSection('como-funciona')">
                        Como Funciona
                    </button>
                </div>
            </div>
            <div class="hero-visual">
                <div class="recycling-icons">
                    <div class="icon-container papel">
                        <img src="/papel.png" alt="Papel" />
                        <span>Papel</span>
                    </div>
                    <div class="icon-container plastico">
                        <img src="/plastico.png" alt="Plástico" />
                        <span>Plástico</span>
                    </div>
                    <div class="icon-container vidro">
                        <img src="/vidro.png" alt="Vidro" />
                        <span>Vidro</span>
                    </div>
                    <div class="icon-container metal">
                        <img src="/metal.png" alt="Metal" />
                        <span>Metal</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="stats-section">
        <div class="stats-container">
            <div class="stat-item">
                <div class="stat-number">{{ stats.pontosColetados.toLocaleString() }}</div>
                <div class="stat-label">Pontos Coletados</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">{{ stats.usuariosAtivos }}</div>
                <div class="stat-label">Usuários Ativos</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">{{ stats.pontosReciclagem }}</div>
                <div class="stat-label">Pontos de Reciclagem</div>
            </div>
        </div>
    </section>

    <section id="como-funciona" class="como-funciona">
        <div class="container">
            <h2 class="section-title">Como Funciona</h2>
            <p class="section-subtitle">
                Três passos simples para começar a reciclar e ganhar pontos
            </p>
            <div class="steps-container">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <h3>Encontre Pontos de Coleta</h3>
                        <p>Use nosso mapa interativo para localizar os pontos de reciclagem mais próximos de você.</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <h3>Recicle Seus Materiais</h3>
                        <p>Separe seus resíduos e leve até os pontos de coleta. Cada material tem seu local específico.
                        </p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <h3>Ganhe Pontos</h3>
                        <p>Complete tarefas diárias de reciclagem e acumule pontos para subir no ranking.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="recursos" class="features-section">
        <div class="container">
            <h2 class="section-title">Principais Recursos</h2>

            <div class="features-grid">
                <div class="feature-card">
                    <img src="../assets/images/map-marker.png" alt="">
                    <h3>Mapa Interativo</h3>
                    <p>Encontre facilmente pontos de coleta seletiva e ecopontos próximos à sua localização.</p>
                </div>

                <div class="feature-card">
                    <img src="../assets/images/games.png" alt="">
                    <h3>Gamificação</h3>
                    <p>Sistema de pontuação que torna a reciclagem divertida e recompensa bons hábitos.</p>
                </div>

                <div class="feature-card">
                    <img src="../assets/images/target.png" alt="">
                    <h3>Acompanhe seu Progresso</h3>
                    <p>Veja suas estatísticas de reciclagem e compare com outros usuários.</p>
                </div>

                <div class="feature-card">
                    <img src="../assets/images/trophy.png" alt="">
                    <h3>Ranking e Conquistas</h3>
                    <p>Compete com amigos e ganhe badges por atingir metas de sustentabilidade.</p>
                </div>
            </div>
        </div>
    </section>

    <HomeImpacto />

    <section class="cta-section">
        <div class="container">
            <div class="cta-content">
                <h2>Pronto para Começar?</h2>
                <p>Junte-se à comunidade Reciclick e faça parte da mudança que o planeta precisa.</p>
                <div class="cta-buttons">
                    <button class="btn-cta" @click="$emit('pagina', 'pontos')">Ver Pontuação</button>
                    <button class="btn-cta" @click="$emit('pagina', 'mapa')">Explorar Mapa</button>
                </div>
            </div>
        </div>
    </section>

    <Rodape />
</template>

<style scoped>

.section-title {
    font-size: 1.7rem;
    color: var(--verde-titulo);
    font-weight: 400;
    font-family: var(--font-retro);
    text-align: center;
    margin-bottom: 1rem;
}

.section-subtitle {
    font-size: .9rem;
    font-family: var(--font-padrao);
    color: var(--text-light);
    text-align: center;
    margin-bottom: 3rem;
}

.hero-btn {
    font-family: var(--font-retro);
    font-weight: normal;
    padding: 12px 24px;
    border-radius: 8px;
    text-decoration: none;
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
    background-color: #4a7200;
    font-size: .7rem;
}

.hero-btn:hover {
    background-color: var(--verde-titulo);
    color: var(--branco);
    transform: translateY(-5px) scale(1.05);
}

/* Hero Section */
.hero-section {
    padding: 80px 20px;
    display: flex;
    align-items: center;
}

.hero-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.hero-title {
    font-family: var(--font-retro);
    font-size: 1.7rem;
    font-weight: normal;
    color: var(--verde-titulo);
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.hero-description {
    font-family: var(--font-padrao);
    font-size: 14px;
    color: var(--text-light);
    line-height: 1.6;
    margin-bottom: 2rem;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.recycling-icons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    max-width: 300px;
}

.icon-container {
    font-family: var(--font-retro);
    font-size: 10px;
    font-weight: normal;
    padding: 20px;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.icon-container:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.icon-container img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
}

.icon-container span {
    display: block;
    color: var(--text-dark);
}

.papel {
    border-left: 4px solid var(--azul);
}

.plastico {
    border-left: 4px solid var(--vermelho);
}

.vidro {
    border-left: 4px solid var(--verde);
}

.metal {
    border-left: 4px solid var(--amarelo);
}

/* Stats Section */
.stats-section {
    background: var(--cinza);
    color: var(--verde-titulo);
    padding: 60px 20px;
}

.stats-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    text-align: center;
}

.stat-number {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    font-family: var(--font-retro);
}

.stat-label {
    font-family: var(--font-padrao);
    font-size: 1.1rem;
    opacity: 0.9;
}

/* How It Works Section */
.como-funciona {
    padding: 80px 20px;
    background: var(--white);
}

.steps-container {
    display: flex;
    align-items: flex-start;
    gap: 40px;
}

.step {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.step-number {
    font-family: var(--font-retro);
    color: var(--verde-titulo);
    font-size: 1.5rem;
}

.step-content h3 {
    font-size: 1rem;
    font-family: var(--font-retro);
    font-weight: normal;
    color: var(--verde-titulo);
    margin-bottom: 0.5rem;
}

.step-content p {
    font-family: var(--font-padrao);
    font-size: 15px;
}

/* Features Section */
.features-section {
    padding: 80px 20px;
    background-color: var(--cinza);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 30px;
}

.feature-card {
    padding: 40px 30px;
    font-family: var(--font-padrao);
    text-align: center;
    transition:  all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}


.feature-card h3 {
    font-size: 1rem;
    font-weight: normal;
    font-family: var(--font-retro);
    color: var(--verde-titulo);
    margin-bottom: 1rem;
}

.feature-card p {
    color: var(--text-light);
    font-size: 14px;
    line-height: 1.6;
}

/* CTA Section */
.cta-section {
    background-color: var(--cinza);
    color: var(--branco);
    padding: 80px 20px;
    text-align: center;
}

.cta-content h2 {
    font-family: var(--font-retro);
    color: var(--verde-titulo);
    font-size: 1.7rem;
    font-weight: normal;
    margin-bottom: 1rem;
}

.cta-content p {
    font-family: var(--font-padrao);
    font-size: 15px;
    margin-bottom: 1rem;
}

.cta-buttons {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn-cta {
    font-family: var(--font-retro);
    padding: 1em;
    border-radius: 8px;
    font-size: .7rem;
    color: var(--preto);
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
    background-color: #4a7200;
}

.btn-cta:hover {
    transform: translateY(-5px) scale(1.05);
    background-color: var(--verde-titulo);
    color: var(--branco);
}

/* Responsive Design */
@media (max-width: 840px) {

    button:hover {
        transform: none !important;
    }

    .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }

    .steps-container {
        flex-wrap: wrap;
    }

    .hero-buttons,
    .cta-buttons {
        justify-content: center;
    }

    .hero-btn {
        background-color: var(--verde-titulo);
        color: var(--branco);
    }

    .btn-cta {
        background-color: var(--verde-titulo);
        color: var(--branco);
    }

    .stats-container {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}

@media (max-width: 540px) {
    .recycling-icons {
        grid-template-columns: 1fr 1fr;
        gap: 15px;
    }
}

/* Animations */
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

.hero-content,
.feature-card,
.step {
    animation: fadeInUp 0.6s ease-out;
}
</style>
