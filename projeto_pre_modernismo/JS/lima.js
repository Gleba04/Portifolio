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
        conteudo1: "Quem foi Lima Barreto?",
        conteudo2: "Afonso Henriques de Lima Barreto (1881–1922) foi um jornalista, romancista, contista e cronista brasileiro, conhecido por sua crítica social afiada, seu olhar sobre as injustiças da sociedade da época e por dar voz aos marginalizados — negros, pobres e loucos.",
        conteudo3: "Ele é considerado um dos maiores nomes da literatura pré-modernista, um movimento de transição entre o simbolismo/parnasianismo e o modernismo.",
        conteudo4: "Trajetória e formação",
        conteudo5: "Nasceu no Rio de Janeiro, filho de um tipógrafo e de uma professora.",
        conteudo6: "Era negro, pobre e autodidata — apesar de ter cursado parte da Escola Politécnica, abandonou os estudos para sustentar a família após a morte da mãe e a doença do pai.",
        conteudo7: "Trabalhou como funcionário público e colaborador em jornais e revistas.",
        conteudo8: "Sofreu preconceito racial e social ao longo da vida, o que refletiu fortemente em sua literatura.",
        conteudo9: "Principais obras",
        conteudo10: '1. "Triste Fim de Policarpo Quaresma" (1911)',
        conteudo11: "Obra-prima de Lima Barreto.",
        conteudo12: "Romance satírico que critica o ufanismo e o autoritarismo da República.",
        conteudo13: "Protagonista é um funcionário público nacionalista, que tenta valorizar a cultura brasileira de forma extrema.",
        conteudo14: "O final trágico mostra como o idealismo é esmagado por uma sociedade hipócrita e opressora.",
        conteudo15: '2. "Recordações do Escrivão Isaías Caminha" (1909)',
        conteudo16: "Romance com forte conteúdo autobiográfico.",
        conteudo17: "Critica o racismo e a hipocrisia da imprensa e da elite carioca.",
        conteudo18: "O protagonista é discriminado por ser negro, apesar de sua inteligência e talento.",
        conteudo19: '3. "Clara dos Anjos" (publicado postumamente em 1948)',
        conteudo20: "Retrata a sedução e abandono de uma jovem negra por um homem branco malandro.",
        conteudo21: "Crítica à sociedade racista, machista e desigual.",
        conteudo22: "Temas centrais de sua obra",
        conteudo23: "Racismo e preconceito social.",
        conteudo24: "Hipocrisia das elites.",
        conteudo25: "Burocracia pública e o funcionalismo alienante.",
        conteudo26: "Crítica ao militarismo e à República Velha.",
        conteudo27: "A vida nos subúrbios cariocas.",
        conteudo28: "A condição do louco, do marginalizado, do pobre.",
        conteudo29: "Estilo literário",
        conteudo30: "Linguagem mais simples, próxima do povo.",
        conteudo31: "Ironia, sarcasmo e crítica social.",
        conteudo32: "Narrativa direta, sem o rebuscamento dos parnasianos.",
        conteudo33: "Forte tom realista e denunciante.",
        conteudo34: "Antecipou temas que seriam centrais no modernismo, como a crítica à sociedade elitista e a valorização do povo.",
        conteudo35: "Problemas pessoais",
        conteudo36: "Enfrentou problemas com alcoolismo.",
        conteudo37: "Sofreu diversas internações em hospícios, inclusive contra sua vontade.",
        conteudo38: "Lutou contra a exclusão que sofria nos meios literários da época por ser negro e de origem humilde.",
        conteudo39: "Morreu em 1922, pobre e doente, pouco antes da Semana de Arte Moderna, que consagraria valores que ele já defendia há décadas.",
        conteudo40: "Legado",
        conteudo41: "Foi reconhecido apenas após a sua morte como um dos grandes escritores brasileiros.",
        conteudo42: "Sua obra hoje é vista como visionária, tanto do ponto de vista literário quanto social.",
        conteudo43: "Inspirou escritores modernistas e pós-modernistas.",
        conteudo44: "É símbolo da resistência negra na literatura brasileira.",
        audio: "../AUDIO/Text to Speech (23)_join.mp3",
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
        conteudo1: "Who was Lima Barreto?",
        conteudo2: "Afonso Henriques de Lima Barreto (1881–1922) was a Brazilian journalist, novelist, short story writer, and chronicler, known for his sharp social criticism, his view on the injustices of his time, and for giving voice to the marginalized — Black people, the poor, and the mentally ill.",
        conteudo3: "He is considered one of the greatest names in pre-modernist literature, a transitional movement between Symbolism/Parnassianism and Modernism.",
        conteudo4: "Trajectory and Education",
        conteudo5: "Born in Rio de Janeiro, son of a printer and a teacher.",
        conteudo6: "He was Black, poor, and self-taught — although he attended part of the Polytechnic School, he dropped out to support his family after his mother’s death and his father’s illness.",
        conteudo7: "Worked as a public servant and contributor to newspapers and magazines.",
        conteudo8: "He faced racial and social prejudice throughout his life, which strongly influenced his literature.",
        conteudo9: "Main Works",
        conteudo10: '1. "Triste Fim de Policarpo Quaresma" (1911)',
        conteudo11: "Lima Barreto’s masterpiece.",
        conteudo12: "A satirical novel that criticizes nationalism and authoritarianism in the Republic.",
        conteudo13: "The protagonist is a nationalist public servant who tries to glorify Brazilian culture in extreme ways.",
        conteudo14: "The tragic ending shows how idealism is crushed by a hypocritical and oppressive society.",
        conteudo15: '2. "Recordações do Escrivão Isaías Caminha" (1909)',
        conteudo16: "A novel with strong autobiographical elements.",
        conteudo17: "Criticizes racism and the hypocrisy of the press and elite in Rio.",
        conteudo18: "The protagonist is discriminated against for being Black, despite his intelligence and talent.",
        conteudo19: '3. "Clara dos Anjos" (published posthumously in 1948)',
        conteudo20: "Portrays the seduction and abandonment of a young Black woman by a cunning white man.",
        conteudo21: "A critique of a racist, sexist, and unequal society.",
        conteudo22: "Central Themes in His Work",
        conteudo23: "Racism and social prejudice.",
        conteudo24: "Hypocrisy of the elites.",
        conteudo25: "Public bureaucracy and alienating civil service.",
        conteudo26: "Critique of militarism and the Old Republic.",
        conteudo27: "Life in Rio’s suburbs.",
        conteudo28: "The condition of the insane, the marginalized, the poor.",
        conteudo29: "Literary Style",
        conteudo30: "Simpler language, close to the people.",
        conteudo31: "Irony, sarcasm, and social criticism.",
        conteudo32: "Direct narrative, without the ornate style of the Parnassians.",
        conteudo33: "Strong realistic and denunciative tone.",
        conteudo34: "Anticipated themes that would be central in Modernism, such as criticism of elitist society and valuing the people.",
        conteudo35: "Personal Struggles",
        conteudo36: "Struggled with alcoholism.",
        conteudo37: "Was admitted several times to mental institutions, including against his will.",
        conteudo38: "Fought against exclusion from the literary circles of his time for being Black and of humble origin.",
        conteudo39: "Died in 1922, poor and ill, shortly before the Modern Art Week, which would celebrate values he had defended for decades.",
        conteudo40: "Legacy",
        conteudo41: "Only recognized after his death as one of Brazil’s great writers.",
        conteudo42: "Today, his work is seen as visionary, both from a literary and social perspective.",
        conteudo43: "Inspired modernist and postmodernist writers.",
        conteudo44: "A symbol of Black resistance in Brazilian literature.",
        audio: "../AUDIO/Text to Speech (25)_join.mp3",
        fim1: "Accessibility",
        fim2: "Translation",
        fim3: "Theme",
        fim4: "Light",
        fim5: "Dark",
        fim6: "Size",
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
        fim20: "Subscribe and receive news <br> about updates and topics<br> on Pre-Modernism",
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
        conteudo1: "¿Quién fue Lima Barreto?",
        conteudo2: "Afonso Henriques de Lima Barreto (1881–1922) fue un periodista, novelista, cuentista y cronista brasileño, conocido por su aguda crítica social, su mirada sobre las injusticias de la sociedad de la época y por dar voz a los marginados — negros, pobres y locos.",
        conteudo3: "Es considerado uno de los mayores nombres de la literatura premodernista, un movimiento de transición entre el simbolismo/parnasianismo y el modernismo.",
        conteudo4: "Trayectoria y formación",
        conteudo5: "Nació en Río de Janeiro, hijo de un tipógrafo y una profesora.",
        conteudo6: "Era negro, pobre y autodidacta — a pesar de haber cursado parte de la Escuela Politécnica, abandonó los estudios para mantener a su familia tras la muerte de su madre y la enfermedad de su padre.",
        conteudo7: "Trabajó como funcionario público y colaborador en periódicos y revistas.",
        conteudo8: "Sufrió prejuicios raciales y sociales a lo largo de su vida, lo que se reflejó fuertemente en su literatura.",
        conteudo9: "Principales obras",
        conteudo10: '1. "Triste Fin de Policarpo Quaresma" (1911)',
        conteudo11: "Obra maestra de Lima Barreto.",
        conteudo12: "Novela satírica que critica el nacionalismo exagerado y el autoritarismo de la República.",
        conteudo13: "El protagonista es un funcionario público nacionalista que intenta valorar la cultura brasileña de forma extrema.",
        conteudo14: "El trágico final muestra cómo el idealismo es aplastado por una sociedad hipócrita y opresora.",
        conteudo15: '2. "Recuerdos del Escribano Isaías Caminha" (1909)',
        conteudo16: "Novela con fuerte contenido autobiográfico.",
        conteudo17: "Critica el racismo y la hipocresía de la prensa y la élite carioca.",
        conteudo18: "El protagonista es discriminado por ser negro, a pesar de su inteligencia y talento.",
        conteudo19: '3. "Clara dos Anjos" (publicada póstumamente en 1948)',
        conteudo20: "Retrata la seducción y el abandono de una joven negra por un hombre blanco y pícaro.",
        conteudo21: "Crítica a una sociedad racista, machista y desigual.",
        conteudo22: "Temas centrales de su obra",
        conteudo23: "Racismo y prejuicio social.",
        conteudo24: "Hipocresía de las élites.",
        conteudo25: "Burocracia pública y el funcionalismo alienante.",
        conteudo26: "Crítica al militarismo y a la Vieja República.",
        conteudo27: "La vida en los suburbios de Río.",
        conteudo28: "La condición del loco, del marginado, del pobre.",
        conteudo29: "Estilo literario",
        conteudo30: "Lenguaje sencillo, cercano al pueblo.",
        conteudo31: "Ironía, sarcasmo y crítica social.",
        conteudo32: "Narrativa directa, sin el lenguaje ornamentado de los parnasianos.",
        conteudo33: "Fuerte tono realista y denunciante.",
        conteudo34: "Anticipó temas que serían centrales en el modernismo, como la crítica a la sociedad elitista y la valorización del pueblo.",
        conteudo35: "Problemas personales",
        conteudo36: "Enfrentó problemas con el alcoholismo.",
        conteudo37: "Fue internado varias veces en manicomios, incluso contra su voluntad.",
        conteudo38: "Luchó contra la exclusión que sufría en los círculos literarios de la época por ser negro y de origen humilde.",
        conteudo39: "Murió en 1922, pobre y enfermo, poco antes de la Semana de Arte Moderno, que consagraría valores que él ya defendía hacía décadas.",
        conteudo40: "Legado",
        conteudo41: "Fue reconocido solo después de su muerte como uno de los grandes escritores brasileños.",
        conteudo42: "Hoy, su obra es vista como visionaria, tanto desde el punto de vista literario como social.",
        conteudo43: "Inspiró a escritores modernistas y posmodernistas.",
        conteudo44: "Es símbolo de la resistencia negra en la literatura brasileña.",
        audio: "../AUDIO/Text to Speech (27)_join.mp3",
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
        fim20: "Suscríbete y recibe noticias <br> sobre actualizaciones y temas<br> sobre el Pre-modernismo",
        fim21: "Enviar",
        fim22: "© 2025 Alvorada Literaria. Todos los derechos reservados.",
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