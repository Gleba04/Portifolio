function redirecionar() {
    alert("Estamos te redirecionando para outra página! Aperte OK para continuar.");
    window.location.href = "HTML/saiba-mais.html";
}
function showMap(latitude, longitude) {
    var map = L.map('map').setView([latitude, longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Estamos aqui!')
        .openPopup();
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            showMap(latitude, longitude);
        }, function (error) {
            alert("Erro ao obter localização.");
        });
    } else {
        alert("Localização não suportada pelo seu navegador!");
    }
}
getLocation();


//carrocel
const slides = document.querySelector('.slides');
let index = 0;

let images = document.querySelectorAll('.slides img');
const totalSlides = images.length;

images.forEach(img => {
    let clone = img.cloneNode(true);
    slides.appendChild(clone);
});

let allImages = document.querySelectorAll('.slides img');

function nextSlide() {
    index++;
    slides.style.transition = "transform 0.5s ease-in-out";
    slides.style.transform = `translateX(${-index * 200}px)`; 

    if (index >= totalSlides) {
        setTimeout(() => {
            slides.style.transition = "none";
            index = 0;
            slides.style.transform = `translateX(0px)`;
        }, 500); 
    }
}

setInterval(nextSlide, 2000);


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
        titulo: "Pré-Modernismo:<br> O Retrato de uma Época",
        titulo2: "O Pré-Modernismo foi um período de transição na literatura brasileira, marcado pela crítica social, linguagem mais coloquial e personagens marginalizados. Destacaram-se autores como Euclides da Cunha, Lima Barreto e Monteiro Lobato.",
        titulo3: "Saiba mais",
        titulo4: "Euclides da Cunha",
        titulo5: 'Euclides da Cunha (1866–1909) foi um escritor e jornalista brasileiro, autor de "Os Sertões", que analisa a Guerra de Canudos. Morreu assassinado aos 43 anos.',
        titulo6: "Lima Barreto",
        titulo7: 'Lima Barreto (1881–1922) foi um escritor brasileiro que criticou o racismo e a elite. É autor de "Triste Fim de Policarpo Quaresma" e foi pouco valorizado em vida.',
        titulo8: "Monteiro Lobato",
        titulo9: 'Monteiro Lobato (1882–1948) foi um escritor brasileiro, famoso pela série "Sítio do Picapau Amarelo", que misturava folclore, educação infantil e crítica social.',
        mais: "Ver mais",
        mais2: "Ver mais",
        mais3: "Ver mais",
        audio: "AUDIO/Text to Speech.wav",
        foot: "Sobre-Nós",
        foot2: "Nosso Projeto",
        foot3: 'Na "Alvorada Literária", descubra o pré-modernismo, <br>período em que vários autores abordaram a realidade social e política do Brasil.',
        foot4: "Integrantes",
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
        titulo: "Pre-Modernism:<br> The Portrait of an Era",
        titulo2: "Pre-Modernism was a period of transition in Brazilian literature, marked by social criticism, more colloquial language, and marginalized characters. Authors such as Euclides da Cunha, Lima Barreto, and Monteiro Lobato stood out.",
        titulo3: "Learn More",
        titulo4: "Euclides da Cunha",
        titulo5: 'Euclides da Cunha (1866–1909) was a Brazilian writer and journalist, author of "Os Sertões," which analyzes the War of Canudos. He was murdered at the age of 43.',
        titulo6: "Lima Barreto",
        titulo7: 'Lima Barreto (1881–1922) was a Brazilian writer who criticized racism and the elite. He is the author of "Triste Fim de Policarpo Quaresma" and was underappreciated during his lifetime.',
        titulo8: "Monteiro Lobato",
        titulo9: "Monteiro Lobato (1882–1948) was a Brazilian writer, famous for the series 'Sítio do Picapau Amarelo,' which combined folklore, children's education, and social criticism.",
        mais: "See more",
        mais2: "See more",
        mais3: "See more",
        audio: "AUDIO/Text to Speech-english.wav",
        foot: "About Us",
        foot2: "Our Project",
        foot3: 'At "Alvorada Literária", discover Pre-Modernism,<br>a period in which several authors addressed Brazil\'s social and political reality.',
        foot4: "Team Members",
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
        titulo: "Pre-modernismo:<br> El Retrato de una Época",
        titulo2: "El pre-modernismo fue un período de transición en la literatura brasileña, marcado por la crítica social, un lenguaje más coloquial y personajes marginados. Se destacaron autores como Euclides da Cunha, Lima Barreto y Monteiro Lobato.",
        titulo3: "Saber más",
        titulo4: "Euclides da Cunha",
        titulo5: "Euclides da Cunha (1866–1909) fue un escritor y periodista brasileño, autor de 'Os Sertões', que analiza la Guerra de Canudos. Murió asesinado a los 43 años.",
        titulo6: "Lima Barreto",
        titulo7: "Lima Barreto (1881–1922) fue un escritor brasileño que criticó el racismo y a la élite. Es autor de 'Triste Fim de Policarpo Quaresma' y fue poco valorado en vida.",
        titulo8: "Monteiro Lobato",
        titulo9: "Monteiro Lobato (1882–1948) fue un escritor brasileño, famoso por la serie 'Sítio do Picapau Amarelo', que mezclaba folclore, educación infantil y crítica social.",
        mais: "Ver más",
        mais2: "Ver más",
        mais3: "Ver más",
        audio: "AUDIO/Text to Speech-espanhol.wav",
        foot: "Sobre nosotros",
        foot2: "Nuestro proyecto",
        foot3: "En 'Alvorada Literária', descubre el pre-modernismo,<br>una época en la que varios autores abordaron la realidad social y política de Brasil.",
        foot4: "Integrantes",
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

