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
        conteudo1: "Quem foi Euclides da Cunha?",
        conteudo2: 'Euclides Rodrigues da Cunha (1866–1909) foi um escritor, jornalista, engenheiro, professor, militar e sociólogo brasileiro. É mais conhecido por sua obra-prima "Os Sertões" (1902), uma análise profunda sobre o Brasil interiorano, especialmente sobre a Guerra de Canudos.',
        conteudo3: "Ele é considerado um dos precursores do pré-modernismo brasileiro, por sua abordagem crítica, científica e literária da realidade nacional.",
        conteudo4: "Principais áreas de atuação",
        conteudo5: "1. Literatura e Jornalismo",
        conteudo6: "Escrevia com forte influência do determinismo e do positivismo, correntes intelectuais do final do século XIX.",
        conteudo7: "Misturava ciência, literatura e crítica social.",
        conteudo8: 'Como jornalista, foi enviado especial do jornal "O Estado de S. Paulo" para cobrir a Guerra de Canudos (1897).',
        conteudo9: "2. Engenharia e Ciências Naturais",
        conteudo10: "Formou-se pela Escola Militar da Praia Vermelha, e depois tornou-se engenheiro civil.",
        conteudo11: "Era fascinado por geografia, geologia, antropologia, meteorologia e biologia.",
        conteudo12: "Foi membro do Instituto Histórico e Geográfico Brasileiro.",
        conteudo13: '"Os Sertões" (1902)',
        conteudo14: "Estrutura da Obra:",
        conteudo15: "A Terra – análise geológica e geográfica do sertão baiano.",
        conteudo16: "O Homem – estudo antropológico sobre o sertanejo.",
        conteudo17: "A Luta – descrição histórica e social da Guerra de Canudos.",
        conteudo18: "Temas centrais:",
        conteudo19: "Conflito entre o Brasil moderno (urbano) e o Brasil arcaico (sertanejo).",
        conteudo20: "Visão crítica da ação do Exército e do Estado contra os seguidores de Antônio Conselheiro.",
        conteudo21: "A luta entre civilização vs. barbárie — embora ele comece vendo os sertanejos como bárbaros, ao fim da obra demonstra empatia e crítica ao Estado.",
        conteudo22: "A Guerra de Canudos",
        conteudo23: "Aconteceu no sertão da Bahia, liderada por Antônio Conselheiro, um líder religioso que atraiu milhares de sertanejos.",
        conteudo24: "O governo considerou o movimento uma ameaça à República.",
        conteudo25: "Euclides, inicialmente com visão militar, muda de perspectiva após ver a realidade do povo oprimido.",
        conteudo26: 'Foi o pano de fundo para "Os Sertões".',
        conteudo27: "Ideias e Filosofia",
        conteudo28: "Influenciado pelo positivismo de Comte e o determinismo de Taine.",
        conteudo29: "Acreditava que o meio geográfico, o clima e a raça moldavam o comportamento humano.",
        conteudo30: "Mas suas experiências em Canudos abalaram essas crenças — tornando-o mais humano, menos cientificista.",
        conteudo31: "Morte trágica",
        conteudo32: "Morreu em 1909, assassinado pelo amante de sua esposa.",
        conteudo33: "Teve uma vida pessoal conturbada, e sua morte trágica marcou o fim precoce de uma mente brilhante.",
        conteudo34: "Outras obras",
        conteudo35: '"Contrastes e Confrontos" (1907) – coletânea de ensaios sobre política, ciência, literatura e sociedade.',
        conteudo36: '"Peru Versus Bolívia" – estudo geopolítico sobre conflitos na América do Sul.',
        conteudo37: "Textos e artigos publicados em jornais e revistas da época.",
        conteudo38: "Legado",
        conteudo39: "Um dos fundadores da literatura sociológica brasileira.",
        conteudo40: "Influenciou o modernismo e autores como Graciliano Ramos, João Cabral de Melo Neto e Guimarães Rosa.",
        conteudo41: "Tem obras estudadas até hoje nas escolas e universidades do Brasil.",
        audio: "../AUDIO/Text to Speech (17)_join.mp3",
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
        menu6: "Sign Up",
        conteudo1: "Who was Euclides da Cunha?",
        conteudo2: "Euclides Rodrigues da Cunha (1866–1909) was a Brazilian writer, journalist, engineer, professor, military man, and sociologist. He is best known for his masterpiece 'Os Sertões' (1902), a deep analysis of the Brazilian hinterlands, especially about the War of Canudos.",
        conteudo3: "He is considered one of the forerunners of Brazilian Pre-Modernism due to his critical, scientific, and literary approach to national reality.",
        conteudo4: "Main areas of activity",
        conteudo5: "1. Literature and Journalism",
        conteudo6: "Wrote under strong influence of determinism and positivism, intellectual currents of the late 19th century.",
        conteudo7: "Blended science, literature, and social criticism.",
        conteudo8: "As a journalist, he was a special correspondent for the newspaper 'O Estado de S. Paulo' to cover the War of Canudos (1897).",
        conteudo9: "2. Engineering and Natural Sciences",
        conteudo10: "Graduated from the Military School of Praia Vermelha, and later became a civil engineer.",
        conteudo11: "He was fascinated by geography, geology, anthropology, meteorology, and biology.",
        conteudo12: "He was a member of the Brazilian Historical and Geographical Institute.",
        conteudo13: "'Os Sertões' (1902)",
        conteudo14: "Structure of the Work:",
        conteudo15: "The Land – geological and geographical analysis of the Bahian backlands.",
        conteudo16: "The Man – anthropological study of the backlands people.",
        conteudo17: "The Fight – historical and social description of the War of Canudos.",
        conteudo18: "Main themes:",
        conteudo19: "Conflict between modern (urban) Brazil and archaic (backlands) Brazil.",
        conteudo20: "Critical view of the actions of the Army and the State against the followers of Antônio Conselheiro.",
        conteudo21: "The struggle between civilization vs. barbarism — although he initially viewed the backlanders as barbarians, by the end he shows empathy and criticizes the State.",
        conteudo22: "The War of Canudos",
        conteudo23: "Took place in the backlands of Bahia, led by Antônio Conselheiro, a religious leader who attracted thousands of followers.",
        conteudo24: "The government saw the movement as a threat to the Republic.",
        conteudo25: "Euclides, initially with a military perspective, changed his view after witnessing the reality of the oppressed people.",
        conteudo26: "It was the backdrop for 'Os Sertões'.",
        conteudo27: "Ideas and Philosophy",
        conteudo28: "Influenced by Comte’s positivism and Taine’s determinism.",
        conteudo29: "Believed that geography, climate, and race shaped human behavior.",
        conteudo30: "But his experiences in Canudos shook those beliefs — making him more humane, less scientistic.",
        conteudo31: "Tragic death",
        conteudo32: "He died in 1909, murdered by his wife’s lover.",
        conteudo33: "He had a troubled personal life, and his tragic death marked the early end of a brilliant mind.",
        conteudo34: "Other works",
        conteudo35: "'Contrastes e Confrontos' (1907) – a collection of essays on politics, science, literature, and society.",
        conteudo36: "'Peru Versus Bolívia' – a geopolitical study on conflicts in South America.",
        conteudo37: "Texts and articles published in newspapers and magazines of the time.",
        conteudo38: "Legacy",
        conteudo39: "One of the founders of Brazilian sociological literature.",
        conteudo40: "Influenced Modernism and authors like Graciliano Ramos, João Cabral de Melo Neto, and Guimarães Rosa.",
        conteudo41: "His works are still studied today in schools and universities across Brazil.",
        audio: "../AUDIO/Text to Speech (19)_join.mp3",
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
        fim20: "Subscribe and receive news<br>about updates and topics<br>related to Pre-Modernism",
        fim21: "Send",
        fim22: "© 2025 Alvorada Literária. All rights reserved.",
    },
    es: {
        menu1: "Inicio",
        menu2: "Obras",
        menu7: "Servicios",
        menu4: "Contáctanos",
        menu5: "Iniciar sesión",
        menu6: "Registrarse",
        conteudo1: "¿Quién fue Euclides da Cunha?",
        conteudo2: "Euclides Rodrigues da Cunha (1866–1909) fue un escritor, periodista, ingeniero, profesor, militar y sociólogo brasileño. Es más conocido por su obra maestra 'Os Sertões' (1902), un análisis profundo del interior de Brasil, especialmente sobre la Guerra de Canudos.",
        conteudo3: "Es considerado uno de los precursores del premodernismo brasileño por su enfoque crítico, científico y literario de la realidad nacional.",
        conteudo4: "Principales áreas de actuación",
        conteudo5: "1. Literatura y Periodismo",
        conteudo6: "Escribía bajo una fuerte influencia del determinismo y el positivismo, corrientes intelectuales de finales del siglo XIX.",
        conteudo7: "Combinaba ciencia, literatura y crítica social.",
        conteudo8: "Como periodista, fue corresponsal especial del periódico 'O Estado de S. Paulo' para cubrir la Guerra de Canudos (1897).",
        conteudo9: "2. Ingeniería y Ciencias Naturales",
        conteudo10: "Se graduó en la Escuela Militar de Praia Vermelha, y luego se convirtió en ingeniero civil.",
        conteudo11: "Estaba fascinado por la geografía, la geología, la antropología, la meteorología y la biología.",
        conteudo12: "Fue miembro del Instituto Histórico y Geográfico Brasileño.",
        conteudo13: "'Os Sertões' (1902)",
        conteudo14: "Estructura de la obra:",
        conteudo15: "La Tierra – análisis geológico y geográfico del sertón bahiano.",
        conteudo16: "El Hombre – estudio antropológico sobre el sertanejo.",
        conteudo17: "La Lucha – descripción histórica y social de la Guerra de Canudos.",
        conteudo18: "Temas centrales:",
        conteudo19: "Conflicto entre el Brasil moderno (urbano) y el Brasil arcaico (del sertón).",
        conteudo20: "Visión crítica de la acción del Ejército y del Estado contra los seguidores de Antônio Conselheiro.",
        conteudo21: "La lucha entre civilización vs. barbarie — aunque al principio veía a los sertanejos como bárbaros, al final demuestra empatía y crítica al Estado.",
        conteudo22: "La Guerra de Canudos",
        conteudo23: "Ocurrió en el sertón de Bahía, liderada por Antônio Conselheiro, un líder religioso que atrajo a miles de sertanejos.",
        conteudo24: "El gobierno consideró el movimiento una amenaza para la República.",
        conteudo25: "Euclides, inicialmente con una visión militar, cambió de perspectiva al ver la realidad del pueblo oprimido.",
        conteudo26: "Fue el trasfondo de 'Os Sertões'.",
        conteudo27: "Ideas y Filosofía",
        conteudo28: "Influenciado por el positivismo de Comte y el determinismo de Taine.",
        conteudo29: "Creía que el medio geográfico, el clima y la raza moldeaban el comportamiento humano.",
        conteudo30: "Pero sus experiencias en Canudos sacudieron esas creencias — volviéndose más humano, menos cientificista.",
        conteudo31: "Muerte trágica",
        conteudo32: "Murió en 1909, asesinado por el amante de su esposa.",
        conteudo33: "Tuvo una vida personal turbulenta, y su trágica muerte marcó el final prematuro de una mente brillante.",
        conteudo34: "Otras obras",
        conteudo35: "'Contrastes e Confrontos' (1907) – colección de ensayos sobre política, ciencia, literatura y sociedad.",
        conteudo36: "'Perú Versus Bolivia' – estudio geopolítico sobre los conflictos en América del Sur.",
        conteudo37: "Textos y artículos publicados en periódicos y revistas de la época.",
        conteudo38: "Legado",
        conteudo39: "Uno de los fundadores de la literatura sociológica brasileña.",
        conteudo40: "Influyó en el modernismo y en autores como Graciliano Ramos, João Cabral de Melo Neto y Guimarães Rosa.",
        conteudo41: "Sus obras siguen siendo estudiadas hoy en día en escuelas y universidades de Brasil.",
        audio: "../AUDIO/Text to Speech (21)_join.mp3",
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
        fim19: "Suscribirse",
        fim20: "Suscríbete y recibe noticias<br> sobre nuevas actualizaciones y temas<br> del pre-modernismo",
        fim21: "Enviar",
        fim22: "© 2025 Alvorada Literária. Todos los derechos reservados.",
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