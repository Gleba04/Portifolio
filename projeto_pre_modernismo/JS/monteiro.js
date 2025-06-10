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
        conteudo1: "Quem foi Monteiro Lobato?",
        conteudo2: "José Bento Renato Monteiro Lobato (1882–1948) foi um escritor, editor, tradutor, empresário e intelectual brasileiro. Ele é o criador do Sítio do Picapau Amarelo, marco da literatura infantil brasileira, e também teve forte atuação como crítico social e defensor da industrialização do Brasil.",
        conteudo3: "Formação e carreira",
        conteudo4: "Nasceu em Taubaté (SP).",
        conteudo5: "Formou-se em Direito, mas logo abandonou a área jurídica.",
        conteudo6: "Foi promotor de justiça, mas seu interesse mesmo era pela leitura, escrita e o desenvolvimento do país.",
        conteudo7: "Fundou a Editora Monteiro Lobato & Cia, uma das primeiras editoras brasileiras.",
        conteudo8: "Trabalhou como adido comercial nos EUA, onde teve contato com ideias de desenvolvimento industrial e tecnológico.",
        conteudo9: "Obra principal",
        conteudo10: "Literatura Infantil – Sítio do Picapau Amarelo",
        conteudo11: "Mistura folclore, mitologia, história e ciência com imaginação.",
        conteudo12: "Criou personagens inesquecíveis:",
        conteudo13: "Emília – a boneca de pano falante, esperta e atrevida.",
        conteudo14: "Pedrinho, Narizinho, Dona Benta, Tia Nastácia, Visconde de Sabugosa, entre outros.",
        conteudo15: "Alguns livros famosos:",
        conteudo16: "Reinações de Narizinho (1931)",
        conteudo17: "O Saci",
        conteudo18: "Caçadas de Pedrinho",
        conteudo19: "História do Mundo para Crianças",
        conteudo20: "O Minotauro",
        conteudo21: "Viagem ao Céu",
        conteudo22: "Atuação política e industrial",
        conteudo23: "Foi um dos primeiros a denunciar a exploração estrangeira do petróleo brasileiro.",
        conteudo24: "Lançou o movimento “O Petróleo é Nosso”, que futuramente influenciaria a criação da Petrobras.",
        conteudo25: "Defendia a industrialização, o progresso científico e a educação técnica como caminhos para o desenvolvimento do Brasil.",
        conteudo26: "Polêmicas",
        conteudo27: "Apesar da importância, algumas obras dele trazem estereótipos racistas, especialmente nas descrições de personagens como Tia Nastácia e no uso de termos e posturas hoje considerados preconceituosos.",
        conteudo28: "Foi preso pelo governo de Getúlio Vargas por criticar o Estado Novo.",
        conteudo29: "Teve visões nacionalistas intensas, mas também críticas à elite e ao atraso do país.",
        conteudo30: "Estilo literário",
        conteudo31: "Didático e direto, com muita influência de conteúdo educativo.",
        conteudo32: "Misturava humor, crítica social, fantasia e conhecimento.",
        conteudo33: "Grande criador de personagens marcantes.",
        conteudo34: "Valorizava a cultura nacional, especialmente o folclore.",
        conteudo35: "Legado",
        conteudo36: "É o pai da literatura infantil brasileira.",
        conteudo37: "Influenciou gerações com seus livros do Sítio, que viraram séries de TV, quadrinhos e animações.",
        conteudo38: "Apesar das críticas modernas, é lembrado como um dos autores mais importantes do Brasil no século XX.",
        conteudo39: "Foi um visionário, tanto como escritor quanto como pensador do desenvolvimento nacional.",
        audio: "../AUDIO/Text to Speech (29)_join.mp3",
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
        conteudo1: "Who was Monteiro Lobato?",
        conteudo2: "José Bento Renato Monteiro Lobato (1882–1948) was a Brazilian writer, editor, translator, entrepreneur, and intellectual. He created *Sítio do Picapau Amarelo*, a landmark of Brazilian children's literature, and was also a strong social critic and advocate for the industrialization of Brazil.",
        conteudo3: "Education and Career",
        conteudo4: "He was born in Taubaté (SP).",
        conteudo5: "Graduated in Law, but soon abandoned the legal field.",
        conteudo6: "He worked as a public prosecutor, but his true interests were reading, writing, and national development.",
        conteudo7: "Founded Monteiro Lobato & Cia Publishing House, one of the first Brazilian publishers.",
        conteudo8: "Worked as a commercial attaché in the USA, where he was influenced by industrial and technological development ideas.",
        conteudo9: "Main Work",
        conteudo10: "Children's Literature – Sítio do Picapau Amarelo",
        conteudo11: "Blends folklore, mythology, history, and science with imagination.",
        conteudo12: "Created unforgettable characters:",
        conteudo13: "Emília – the talkative, clever, and bold rag doll.",
        conteudo14: "Pedrinho, Narizinho, Dona Benta, Aunt Nastácia, Viscount of Sabugosa, among others.",
        conteudo15: "Some famous books:",
        conteudo16: "*Reinações de Narizinho* (1931)",
        conteudo17: "*O Saci*",
        conteudo18: "*Caçadas de Pedrinho*",
        conteudo19: "*História do Mundo para Crianças*",
        conteudo20: "*O Minotauro*",
        conteudo21: "*Viagem ao Céu*",
        conteudo22: "Political and Industrial Action",
        conteudo23: "He was one of the first to denounce the foreign exploitation of Brazilian oil.",
        conteudo24: "Launched the movement 'The Oil is Ours', which later influenced the creation of Petrobras.",
        conteudo25: "Defended industrialization, scientific progress, and technical education as paths to Brazil’s development.",
        conteudo26: "Controversies",
        conteudo27: "Despite his importance, some of his works contain racist stereotypes, especially in the descriptions of characters like Aunt Nastácia and in terms and attitudes now considered prejudiced.",
        conteudo28: "He was arrested by Getúlio Vargas' government for criticizing the Estado Novo regime.",
        conteudo29: "Held strong nationalist views, but was also critical of the elite and the country's backwardness.",
        conteudo30: "Literary Style",
        conteudo31: "Didactic and direct, with strong influence from educational content.",
        conteudo32: "Blended humor, social criticism, fantasy, and knowledge.",
        conteudo33: "Great creator of striking characters.",
        conteudo34: "Valued national culture, especially folklore.",
        conteudo35: "Legacy",
        conteudo36: "He is considered the father of Brazilian children's literature.",
        conteudo37: "Influenced generations with his *Sítio* books, which became TV series, comics, and animations.",
        conteudo38: "Despite modern criticism, he is remembered as one of Brazil's most important 20th-century authors.",
        conteudo39: "He was a visionary, both as a writer and as a thinker of national development.",
        audio: "../AUDIO/Text to Speech (31)_join.mp3",
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
        fim20: "Subscribe to receive updates <br> on new content and topics<br> about Pre-Modernism",
        fim21: "Submit",
        fim22: "© 2025 Alvorada Literária. All rights reserved.",
    },
    es: {
        menu1: "Inicio",
        menu2: "Obras",
        menu7: "Servicios",
        menu4: "Contáctanos",
        menu5: "Iniciar sesión",
        menu6: "Registrarse",
        conteudo1: "¿Quién fue Monteiro Lobato?",
        conteudo2: "José Bento Renato Monteiro Lobato (1882–1948) fue un escritor, editor, traductor, empresario e intelectual brasileño. Es el creador del *Sítio do Picapau Amarelo*, un hito de la literatura infantil brasileña, y también tuvo una fuerte actuación como crítico social y defensor de la industrialización de Brasil.",
        conteudo3: "Formación y carrera",
        conteudo4: "Nació en Taubaté (SP).",
        conteudo5: "Se graduó en Derecho, pero pronto abandonó el área jurídica.",
        conteudo6: "Fue fiscal, pero su verdadero interés era la lectura, la escritura y el desarrollo del país.",
        conteudo7: "Fundó la editorial Monteiro Lobato & Cia, una de las primeras editoriales brasileñas.",
        conteudo8: "Trabajó como agregado comercial en Estados Unidos, donde entró en contacto con ideas de desarrollo industrial y tecnológico.",
        conteudo9: "Obra principal",
        conteudo10: "Literatura Infantil – *Sítio do Picapau Amarelo*",
        conteudo11: "Mezcla folclore, mitología, historia y ciencia con imaginación.",
        conteudo12: "Creó personajes inolvidables:",
        conteudo13: "Emília – la muñeca de trapo habladora, lista y atrevida.",
        conteudo14: "Pedrinho, Narizinho, Doña Benta, Tía Nastácia, Vizconde de Sabugosa, entre otros.",
        conteudo15: "Algunos libros famosos:",
        conteudo16: "*Reinações de Narizinho* (1931)",
        conteudo17: "*O Saci*",
        conteudo18: "*Caçadas de Pedrinho*",
        conteudo19: "*História do Mundo para Crianças*",
        conteudo20: "*O Minotauro*",
        conteudo21: "*Viagem ao Céu*",
        conteudo22: "Actuación política e industrial",
        conteudo23: "Fue uno de los primeros en denunciar la explotación extranjera del petróleo brasileño.",
        conteudo24: "Lanzó el movimiento “¡El Petróleo es Nuestro!”, que posteriormente influiría en la creación de Petrobras.",
        conteudo25: "Defendía la industrialización, el progreso científico y la educación técnica como caminos para el desarrollo de Brasil.",
        conteudo26: "Controversias",
        conteudo27: "A pesar de su importancia, algunas de sus obras presentan estereotipos racistas, especialmente en la descripción de personajes como Tía Nastácia y en el uso de términos y posturas hoy considerados prejuiciosos.",
        conteudo28: "Fue encarcelado por el gobierno de Getúlio Vargas por criticar el Estado Novo.",
        conteudo29: "Tenía visiones nacionalistas intensas, pero también críticas hacia la élite y el atraso del país.",
        conteudo30: "Estilo literario",
        conteudo31: "Didáctico y directo, con gran influencia de contenido educativo.",
        conteudo32: "Combinaba humor, crítica social, fantasía y conocimiento.",
        conteudo33: "Gran creador de personajes memorables.",
        conteudo34: "Valorizaba la cultura nacional, especialmente el folclore.",
        conteudo35: "Legado",
        conteudo36: "Es el padre de la literatura infantil brasileña.",
        conteudo37: "Influyó en generaciones con sus libros del *Sítio*, que se convirtieron en series de televisión, cómics y animaciones.",
        conteudo38: "A pesar de las críticas modernas, es recordado como uno de los autores más importantes de Brasil en el siglo XX.",
        conteudo39: "Fue un visionario, tanto como escritor como pensador del desarrollo nacional.",
        audio: "../AUDIO/Text to Speech (33)_join.mp3",
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
        fim20: "Suscríbete y recibe noticias <br> sobre nuevas actualizaciones y temas<br> del Pre-Modernismo",
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