//voltar ao topo
document.querySelector('.voltar-topo').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//tema
document.addEventListener('DOMContentLoaded', function () {
    const temaSelect = document.getElementById('tema');

    temaSelect.addEventListener('change', function () {
        if (temaSelect.value === 'escuro') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    });
});

//audio
const audio = document.getElementById('meuAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

audio.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    progressBar.value = Math.floor(audio.currentTime);
});

progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value;
});

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '⏸';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶';
    }
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
}

//imagens
document.addEventListener('DOMContentLoaded', function () {
    const seletorTema = document.getElementById('tema');
    const imgAudio = document.getElementById('img-audio');
    const logoBloco = document.getElementById('logo-bloco');
    const imagensIntegrantes = document.querySelectorAll('.img-integrante');

    seletorTema.addEventListener('change', function () {
        const temaSelecionado = this.value;

        imgAudio.src = temaSelecionado === 'escuro' ? '../IMG/logo-escuro.png' : '../IMG/logo.png';
        logoBloco.src = temaSelecionado === 'escuro' ? 'IMG/logo-escuro.png' : 'IMG/logo.png';

        const nomes = ['luan', 'leticia', 'miguel', 'fernanda'];
        imagensIntegrantes.forEach((img, i) => {
            const nome = nomes[i];
            img.src = temaSelecionado === 'escuro' 
                ? `IMG/${nome}-escuro.png` 
                : `IMG/${nome}.png`;
        });
    });
});

//tradução
const traducoes = {
    pt: {
        menu1: "início",
        menu2: "Obras",
        menu7: "Serviços",
        menu4: "Contate-nos",
        menu5: "Entrar",
        menu6: "Cadastrar",
        conteudo1: "O que foi o Pré-Modernismo?",
        conteudo2: "O Pré-Modernismo não é considerado uma escola literária, pois não possui uma estética unificada ou um grupo de autores com um manifesto em comum. Trata-se, na verdade, de um movimento de transição, que já antecipa muitas das críticas e inovações que viriam com o Modernismo.",
        conteudo3: "Contexto histórico",
        conteudo4: "Esse período foi marcado por diversas transformações sociais, políticas e econômicas no Brasil:",
        conteudo5: "Crise da República Velha (café com leite)",
        conteudo6: "Guerra de Canudos (1896–1897)",
        conteudo7: "Revolta da Vacina (1904)",
        conteudo8: "Crescimento urbano e industrial em São Paulo",
        conteudo9: "Imigração europeia e migração interna",
        conteudo10: "Ascensão de movimentos populares e sociais",
        conteudo11: "Esses acontecimentos ajudaram a moldar o tom crítico, social e realista das obras pré-modernistas.",
        conteudo12: "Características do Pré-Modernismo",
        conteudo13: "Crítica social e política",
        conteudo14: "Denúncia das desigualdades sociais",
        conteudo15: "Regionalismo (valorização das diferentes regiões do Brasil, especialmente o sertão)",
        conteudo16: "Retrato do Brasil real (mestiço, pobre, marginalizado)",
        conteudo17: "Linguagem mais próxima da fala popular",
        conteudo18: "Mistura de estilos do passado com tendências novas",
        conteudo19: "Principais autores e obras",
        conteudo20: "1. Euclides da Cunha",
        conteudo21: "Obra principal: Os Sertões (1902)",
        conteudo22: "Mistura de ciência, história, jornalismo e literatura",
        conteudo23: "Relato da Guerra de Canudos, denunciando o abandono do sertanejo",
        conteudo24: "2. Lima Barreto",
        conteudo25: "Obras principais: Triste Fim de Policarpo Quaresma, Recordações do Escrivão Isaías Caminha",
        conteudo26: "Denúncia da hipocrisia da sociedade, racismo e elitismo",
        conteudo27: "Linguagem simples e direta",
        conteudo28: "3. Monteiro Lobato",
        conteudo29: "Obras principais: Urupês, Cidades Mortas, além das obras infantis como Sítio do Picapau Amarelo",
        conteudo30: "Crítica ao atraso do interior paulista",
        conteudo31: "Criação do personagem Jeca Tatu (ícone do caipira abandonado)",
        conteudo32: "4. Graça Aranha",
        conteudo33: "Obra principal: Canaã (1902)",
        conteudo34: "Fala sobre o choque entre imigrantes e brasileiros",
        conteudo35: "Questões sobre identidade nacional",
        conteudo36: "Diferenças entre o Pré-Modernismo e o Modernismo",
        conteudo37: "Aspecto",
        conteudo38: "Pré-Modernismo",
        conteudo39: "Modernismo",
        conteudo40: "Unidade estética",
        conteudo41: "Não possui",
        conteudo42: "Tem propostas estéticas inovadoras",
        conteudo43: "Linguagem",
        conteudo44: "Em transição (mais simples que o parnasianismo)",
        conteudo45: "Livre, coloquial, experimental",
        conteudo46: "Objetivo",
        conteudo47: "Denunciar problemas do Brasil real",
        conteudo48: "Romper com o passado e renovar a arte",
        conteudo49: "Início",
        conteudo50: "1902",
        conteudo51: "1922 (Semana de Arte Moderna)",
        conteudo52: "Semana de Arte Moderna (1922)",
        conteudo53: "O Pré-Modernismo prepara o caminho para a Semana de Arte Moderna, evento que marca oficialmente o início do Modernismo no Brasil, promovendo uma renovação estética nas artes e na literatura.",
        audio: "../AUDIO/Text to Speech (11)_join.mp3",
        fim1: "Acessibilidade",
        fim2: "Tradução",
        fim3: "Tema",
        fim4: "Claro",
        fim5: "Escuro",
        fim6: "Tamanho",
        fim7: "Normal",
        fim8: "Grande",
        fim9: "Informações de contato",
        fim10: "Endereço",
        fim11: "Telefone",
        fim12: "E-mail",
        fim13: "Links úteis",
        fim14: "Sobre nós",
        fim15: "Contato",
        fim16: "Política de privacidade",
        fim17: "Termos de uso",
        fim18: "FAQ",
        fim19: "Inscreva-se",
        fim20: "Inscreva-se e receba notícias <br> de novas atualizações e assuntos<br> sobre o Pré-Modernismo",
        fim21: "Enviar",
        fim22: "© 2025 Alvorada Literária. Todos os direitos reservados.",
    },
    en: {
        menu1: "Home",
        menu2: "Works",
        menu7: "Services",
        menu4: "Contact Us",
        menu5: "Login",
        menu6: "Register",
        conteudo1: "What was the Pre-Modernism?",
        conteudo2: "Pre-Modernism is not considered a literary school, as it does not have a unified aesthetic or a group of authors with a common manifesto. It is, in fact, a transitional movement that already anticipates many of the criticisms and innovations that would come with Modernism.",
        conteudo3: "Historical context",
        conteudo4: "This period was marked by several social, political, and economic transformations in Brazil:",
        conteudo5: "Crisis of the Old Republic (coffee with milk politics)",
        conteudo6: "War of Canudos (1896–1897)",
        conteudo7: "Vaccine Revolt (1904)",
        conteudo8: "Urban and industrial growth in São Paulo",
        conteudo9: "European immigration and internal migration",
        conteudo10: "Rise of popular and social movements",
        conteudo11: "These events helped shape the critical, social, and realistic tone of pre-modernist works.",
        conteudo12: "Characteristics of Pre-Modernism",
        conteudo13: "Social and political criticism",
        conteudo14: "Denunciation of social inequalities",
        conteudo15: "Regionalism (appreciation of Brazil’s diverse regions, especially the backlands)",
        conteudo16: "Depiction of real Brazil (mixed-race, poor, marginalized)",
        conteudo17: "Language closer to popular speech",
        conteudo18: "Mix of past styles with new trends",
        conteudo19: "Main authors and works",
        conteudo20: "1. Euclides da Cunha",
        conteudo21: "Main work: Os Sertões (1902)",
        conteudo22: "Mix of science, history, journalism, and literature",
        conteudo23: "Account of the War of Canudos, denouncing the abandonment of the backland people",
        conteudo24: "2. Lima Barreto",
        conteudo25: "Main works: Triste Fim de Policarpo Quaresma, Recordações do Escrivão Isaías Caminha",
        conteudo26: "Denunciation of society’s hypocrisy, racism, and elitism",
        conteudo27: "Simple and direct language",
        conteudo28: "3. Monteiro Lobato",
        conteudo29: "Main works: Urupês, Cidades Mortas, and children’s books like Sítio do Picapau Amarelo",
        conteudo30: "Criticism of the backwardness of São Paulo’s countryside",
        conteudo31: "Creation of the character Jeca Tatu (symbol of the abandoned hillbilly)",
        conteudo32: "4. Graça Aranha",
        conteudo33: "Main work: Canaã (1902)",
        conteudo34: "Discusses the clash between immigrants and Brazilians",
        conteudo35: "Questions about national identity",
        conteudo36: "Differences between Pre-Modernism and Modernism",
        conteudo37: "Aspect",
        conteudo38: "Pre-Modernism",
        conteudo39: "Modernism",
        conteudo40: "Aesthetic unity",
        conteudo41: "None",
        conteudo42: "Has innovative aesthetic proposals",
        conteudo43: "Language",
        conteudo44: "In transition (simpler than Parnassianism)",
        conteudo45: "Free, colloquial, experimental",
        conteudo46: "Objective",
        conteudo47: "Expose problems of real Brazil",
        conteudo48: "Break with the past and renew art",
        conteudo49: "Beginning",
        conteudo50: "1902",
        conteudo51: "1922 (Modern Art Week)",
        conteudo52: "Modern Art Week (1922)",
        conteudo53: "Pre-Modernism paves the way for the Modern Art Week, an event that officially marks the beginning of Modernism in Brazil, promoting an aesthetic renewal in arts and literature.",
        audio: "../AUDIO/Text to Speech (13)_join.mp3",
        fim1: "Accessibility",
        fim2: "Translation",
        fim3: "Theme",
        fim4: "Light",
        fim5: "Dark",
        fim6: "Font Size",
        fim7: "Normal",
        fim8: "Large",
        fim9: "Contact Information",
        fim10: "Address",
        fim11: "Phone",
        fim12: "Email",
        fim13: "Useful Links",
        fim14: "About Us",
        fim15: "Contact",
        fim16: "Privacy Policy",
        fim17: "Terms of Use",
        fim18: "FAQ",
        fim19: "Subscribe",
        fim20: "Subscribe and receive news <br> about new updates and topics<br> related to Pre-Modernism",
        fim21: "Send",
        fim22: "© 2025 Alvorada Literária. All rights reserved."
    },
    es: {
        menu1: "Inicio",
        menu2: "Obras",
        menu7: "Servicios",
        menu4: "Contáctanos",
        menu5: "Iniciar sesión",
        menu6: "Registrarse",
        conteudo1: "¿Qué fue el Pre-modernismo?",
        conteudo2: "El Pre-modernismo no se considera una escuela literaria, ya que no posee una estética unificada ni un grupo de autores con un manifiesto común. En realidad, se trata de un movimiento de transición, que ya anticipa muchas de las críticas e innovaciones que vendrían con el Modernismo.",
        conteudo3: "Contexto histórico",
        conteudo4: "Este período estuvo marcado por diversas transformaciones sociales, políticas y económicas en Brasil:",
        conteudo5: "Crisis de la República Vieja (café con leche)",
        conteudo6: "Guerra de Canudos (1896–1897)",
        conteudo7: "Revuelta de la Vacuna (1904)",
        conteudo8: "Crecimiento urbano e industrial en São Paulo",
        conteudo9: "Inmigración europea y migración interna",
        conteudo10: "Ascenso de movimientos populares y sociales",
        conteudo11: "Estos acontecimientos ayudaron a moldear el tono crítico, social y realista de las obras premodernistas.",
        conteudo12: "Características del Pre-modernismo",
        conteudo13: "Crítica social y política",
        conteudo14: "Denuncia de las desigualdades sociales",
        conteudo15: "Regionalismo (valorización de las diferentes regiones de Brasil, especialmente el sertón)",
        conteudo16: "Retrato del Brasil real (mestizo, pobre, marginado)",
        conteudo17: "Lenguaje más cercano al habla popular",
        conteudo18: "Mezcla de estilos del pasado con nuevas tendencias",
        conteudo19: "Principales autores y obras",
        conteudo20: "1. Euclides da Cunha",
        conteudo21: "Obra principal: Os Sertões (1902)",
        conteudo22: "Mezcla de ciencia, historia, periodismo y literatura",
        conteudo23: "Relato de la Guerra de Canudos, denunciando el abandono del sertanejo",
        conteudo24: "2. Lima Barreto",
        conteudo25: "Obras principales: Triste Fim de Policarpo Quaresma, Recordações do Escrivão Isaías Caminha",
        conteudo26: "Denuncia de la hipocresía de la sociedad, racismo y elitismo",
        conteudo27: "Lenguaje simple y directo",
        conteudo28: "3. Monteiro Lobato",
        conteudo29: "Obras principales: Urupês, Cidades Mortas, además de obras infantiles como Sítio do Picapau Amarelo",
        conteudo30: "Crítica al atraso del interior paulista",
        conteudo31: "Creación del personaje Jeca Tatu (ícono del caipira abandonado)",
        conteudo32: "4. Graça Aranha",
        conteudo33: "Obra principal: Canaã (1902)",
        conteudo34: "Habla sobre el choque entre inmigrantes y brasileños",
        conteudo35: "Cuestiones sobre identidad nacional",
        conteudo36: "Diferencias entre el Pre-modernismo y el Modernismo",
        conteudo37: "Aspecto",
        conteudo38: "Pre-modernismo",
        conteudo39: "Modernismo",
        conteudo40: "Unidad estética",
        conteudo41: "No posee",
        conteudo42: "Tiene propuestas estéticas innovadoras",
        conteudo43: "Lenguaje",
        conteudo44: "En transición (más simple que el parnasianismo)",
        conteudo45: "Libre, coloquial, experimental",
        conteudo46: "Objetivo",
        conteudo47: "Denunciar problemas del Brasil real",
        conteudo48: "Romper con el pasado y renovar el arte",
        conteudo49: "Inicio",
        conteudo50: "1902",
        conteudo51: "1922 (Semana de Arte Moderna)",
        conteudo52: "Semana de Arte Moderna (1922)",
        conteudo53: "El Pre-modernismo prepara el camino para la Semana de Arte Moderna, evento que marca oficialmente el inicio del Modernismo en Brasil, promoviendo una renovación estética en las artes y la literatura.",
        audio: "../AUDIO/Text to Speech (15)_join.mp3",
        fim1: "Accesibilidad",
        fim2: "Traducción",
        fim3: "Tema",
        fim4: "Claro",
        fim5: "Oscuro",
        fim6: "Tamaño",
        fim7: "Normal",
        fim8: "Grande",
        fim9: "Información de contacto",
        fim10: "Dirección",
        fim11: "Teléfono",
        fim12: "Correo electrónico",
        fim13: "Enlaces útiles",
        fim14: "Sobre nosotros",
        fim15: "Contacto",
        fim16: "Política de privacidad",
        fim17: "Términos de uso",
        fim18: "Preguntas frecuentes",
        fim19: "Suscríbete",
        fim20: "Suscríbete y recibe noticias <br> de nuevas actualizaciones y temas<br> sobre el Pre-modernismo",
        fim21: "Enviar",
        fim22: "© 2025 Alvorada Literaria. Todos los derechos reservados."
    }
};

const seletor = document.getElementById("languageSelector");
const meuAudio = document.getElementById("meuAudio"); 

seletor.addEventListener("change", () => {
    const idioma = seletor.value;
    const traducoesIdioma = traducoes[idioma];

    for (const id in traducoesIdioma) {
        const elemento = document.getElementById(id);

        if (elemento) {
            if (elemento.tagName === "INPUT" && (elemento.type === "button" || elemento.type === "submit")) {
                elemento.setAttribute("value", traducoesIdioma[id]);
            } 
            else {
                elemento.innerHTML = traducoesIdioma[id];
            }
        }
    }

    if (meuAudio) {
        const estavaTocando = !meuAudio.paused;
        meuAudio.pause();
        meuAudio.currentTime = 0;
        meuAudio.src = traducoesIdioma.audio;

        if (estavaTocando) {
            meuAudio.play();
        }
    }
});

//tamanho
const seletorFonte = document.getElementById("fonte");
const body = document.body;

seletorFonte.addEventListener("change", () => {
    body.classList.remove("fonte-grande");
    if (seletorFonte.value === "grande") {
        body.classList.add("fonte-grande");
    }
});