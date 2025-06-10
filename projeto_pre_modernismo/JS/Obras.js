//voltar ao topo
document.querySelector('.voltar-topo').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//escuro
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
        menu7: "Serviços",
        menu3: "Contate-nos",
        menu4: "Entrar",
        menu5: "Cadastrar",
        conteudo1: "Tudo sobre as Obras Mais Famosas do Pré-Modernismo",
        conteudo2: "O Pré-Modernismo foi um período de transição na literatura brasileira, entre o fim do século XIX e o início do século XX, culminando na Semana de Arte Moderna de 1922. As obras desse período se caracterizam pela crítica social, linguagem mais acessível e pela representação de personagens marginalizados ou esquecidos. A seguir, conheça as obras mais importantes:",
        conteudo3: "Os Sertões – Euclides da Cunha (1902)",
        conteudo4: "Os Sertões é considerada a principal obra do Pré-Modernismo brasileiro. Escrita por Euclides da Cunha, ela mistura elementos de literatura, jornalismo, sociologia, geografia e história. O autor acompanhou de perto a Guerra de Canudos, conflito ocorrido no sertão baiano, e escreveu uma análise detalhada sobre o episódio e a realidade do sertanejo.",
        conteudo5: "A obra é dividida em três partes:",
        conteudo6: "A Terra – descrever o sertão nordestino em sua geografia e clima.",
        conteudo7: "O Homem – analisa o sertanejo, mostrando-o como forte, resistente e fruto de seu ambiente.",
        conteudo8: "A Luta – narra os acontecimentos da Guerra de Canudos e critica a violência do Exército contra os sertanejos liderados por Antônio Conselheiro.",
        conteudo9: "A obra é uma crítica ao preconceito das elites contra o interior do Brasil e à exclusão dos pobres. Também mostra o abismo entre o Brasil urbano e o rural, trazendo à tona a realidade do povo nordestino.",
        conteudo10: "Triste Fim de Policarpo Quaresma – Lima Barreto (1911)",
        conteudo11: "Lima Barreto escreveu essa obra como uma sátira ao nacionalismo exagerado e à hipocrisia da sociedade brasileira da Primeira República. Policarpo Quaresma, o protagonista, é um funcionário público ingênuo e extremamente patriota que deseja valorizar a cultura nacional. <br><br> Ele defende ideias utópicas como tornar o tupi a língua oficial do Brasil, cultivar a terra de forma idealizada e lutar pelo país no governo. No entanto, todas as suas iniciativas fracassam, levando-o à prisão e à morte.",
        conteudo12: "A obra critica:",
        conteudo13: "A burocracia estatal.",
        conteudo14: "O militarismo autoritário.",
        conteudo15: "O preconceito racial e social.",
        conteudo16: "A ilusão do nacionalismo romântico.",
        conteudo17: "É uma obra que mostra como o idealismo isolado pode ser sufocado por uma sociedade injusta e atrasada.",
        conteudo18: "Urupês – Monteiro Lobato (1918)",
        conteudo19: "Essa obra é uma coletânea de contos que denuncia a situação do homem do campo no interior paulista. O conto mais famoso da coletânea é Urupês, que apresenta o personagem Jeca Tatu – símbolo do caipira preguiçoso, doente e ignorado pelas autoridades. <br><br> Monteiro Lobato usa o personagem para criticar o abandono do povo rural pelo Estado, mostrando que a miséria do caipira não é resultado de preguiça, mas de abandono social e falta de assistência.",
        conteudo20: "Temas abordados:",
        conteudo21: "Problemas agrários.",
        conteudo22: "Falta de educação.",
        conteudo23: "Miséria rural.",
        conteudo24: "Contraste entre progresso urbano e atraso no campo.",
        conteudo25: "Urupês foi um marco na conscientização social sobre o Brasil rural.",
        conteudo26: "Canaã – Graça Aranha (1902)",
        conteudo27: "Canaã foi uma das primeiras obras a discutir o impacto da imigração europeia no Brasil. A história se passa no Espírito Santo e mostra o conflito entre dois imigrantes alemães com visões de mundo opostas: Milkau, idealista e sonhador, e Lentz, racista e violento.",
        conteudo28: "A obra trata de:",
        conteudo29: "Conflitos culturais entre imigrantes e brasileiros.",
        conteudo30: "A busca por uma identidade nacional.",
        conteudo31: "O preconceito racial e social.",
        conteudo32: "A formação do Brasil moderno.",
        conteudo33: "Graça Aranha utilizou o romance para discutir o papel dos estrangeiros na construção da nação brasileira e a necessidade de integração e compreensão entre diferentes culturas.",
        conteudo34: "Eu – Augusto dos Anjos (1912)",
        conteudo35: "Embora tenha apenas um livro publicado, Augusto dos Anjos é uma figura única no Pré-Modernismo. Seu livro Eu é uma coletânea de poemas marcados por uma linguagem científica, temas existencialistas e um estilo sombrio e filosófico. <br><br> Os poemas tratam da morte, da decomposição, da angústia existencial, da passagem do tempo e da solidão humana. Apesar de sua linguagem incomum para a época, os versos são profundamente emocionais.",
        conteudo36: "Destaques da obra:",
        conteudo37: "Mistura de ciência e lirismo.",
        conteudo38: "Uso de vocabulário técnico.",
        conteudo39: "Pessimismo e melancolia.",
        conteudo40: "Reflexões sobre a natureza humana.",
        conteudo41: "Sua poesia foge dos padrões clássicos e antecipa o experimentalismo modernista.",
        audio: "../AUDIO/Text to Speech (2)_join.mp3",
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
        menu7: "Services",
        menu3: "Contact Us",
        menu4: "Login",
        menu5: "Sign Up",
        conteudo1: "All About the Most Famous Works of Pre-Modernism",
        conteudo2: "Pre-Modernism was a transitional period in Brazilian literature, between the end of the 19th century and the beginning of the 20th, culminating in the Modern Art Week of 1922. The works of this period are characterized by social criticism, more accessible language, and the representation of marginalized or forgotten characters. Below, discover the most important works:",
        conteudo3: "Os Sertões – Euclides da Cunha (1902)",
        conteudo4: "Os Sertões is considered the main work of Brazilian Pre-Modernism. Written by Euclides da Cunha, it combines elements of literature, journalism, sociology, geography, and history. The author closely followed the War of Canudos, a conflict that occurred in the backlands of Bahia, and wrote a detailed analysis of the episode and the reality of the backland people.",
        conteudo5: "The book is divided into three parts:",
        conteudo6: "The Land – describes the northeastern backlands in terms of geography and climate.",
        conteudo7: "The Man – analyzes the backlander, portraying him as strong, resilient, and a product of his environment.",
        conteudo8: "The Fight – narrates the events of the War of Canudos and criticizes the Army's violence against the backlanders led by Antônio Conselheiro.",
        conteudo9: "The work criticizes the prejudice of the elites against Brazil's interior and the exclusion of the poor. It also highlights the gap between urban and rural Brazil, shedding light on the reality of the northeastern people.",
        conteudo10: "Triste Fim de Policarpo Quaresma – Lima Barreto (1911)",
        conteudo11: "Lima Barreto wrote this novel as a satire of exaggerated nationalism and the hypocrisy of Brazilian society during the First Republic. Policarpo Quaresma, the protagonist, is a naive and extremely patriotic civil servant who wants to promote national culture. <br><br> He defends utopian ideas such as making Tupi the official language of Brazil, cultivating the land in an idealized way, and fighting for the country through the government. However, all his efforts fail, leading to his imprisonment and death.",
        conteudo12: "The novel criticizes:",
        conteudo13: "State bureaucracy.",
        conteudo14: "Authoritarian militarism.",
        conteudo15: "Racial and social prejudice.",
        conteudo16: "The illusion of romantic nationalism.",
        conteudo17: "It is a work that shows how isolated idealism can be suffocated by an unjust and backward society.",
        conteudo18: "Urupês – Monteiro Lobato (1918)",
        conteudo19: "This work is a collection of short stories that denounces the situation of rural workers in São Paulo’s countryside. The most famous story is *Urupês*, which presents the character Jeca Tatu – a symbol of the lazy, sick, and ignored hillbilly. <br><br> Monteiro Lobato uses the character to criticize the neglect of rural people by the state, showing that the hillbilly’s misery is not due to laziness, but to social abandonment and lack of support.",
        conteudo20: "Themes addressed:",
        conteudo21: "Agrarian problems.",
        conteudo22: "Lack of education.",
        conteudo23: "Rural poverty.",
        conteudo24: "Contrast between urban progress and rural backwardness.",
        conteudo25: '"Urupês" was a milestone in raising social awareness about rural Brazil.',
        conteudo26: "Canaã – Graça Aranha (1902)",
        conteudo27: '"Canaã" was one of the first works to discuss the impact of European immigration in Brazil. The story takes place in Espírito Santo and depicts the conflict between two German immigrants with opposing worldviews: Milkau, an idealist and dreamer, and Lentz, a racist and violent man.',
        conteudo28: "The book deals with:",
        conteudo29: "Cultural conflicts between immigrants and Brazilians.",
        conteudo30: "The search for a national identity.",
        conteudo31: "Racial and social prejudice.",
        conteudo32: "The formation of modern Brazil.",
        conteudo33: "Graça Aranha used the novel to discuss the role of foreigners in building the Brazilian nation and the need for integration and understanding among different cultures.",
        conteudo34: "Eu – Augusto dos Anjos (1912)",
        conteudo35: "Although he published only one book, Augusto dos Anjos is a unique figure in Pre-Modernism. His book *Eu* is a collection of poems marked by scientific language, existentialist themes, and a somber and philosophical style. <br><br> The poems deal with death, decay, existential anguish, the passage of time, and human solitude. Despite its unusual language for the time, the verses are deeply emotional.",
        conteudo36: "Highlights of the work:",
        conteudo37: "Blend of science and lyricism.",
        conteudo38: "Use of technical vocabulary.",
        conteudo39: "Pessimism and melancholy.",
        conteudo40: "Reflections on human nature.",
        conteudo41: "His poetry defies classical norms and anticipates modernist experimentation.",
        audio: "../AUDIO/Text to Speech (5)_join.mp3",
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
        menu7: "Servicios",
        menu3: "Contáctanos",
        menu4: "Iniciar sesión",
        menu5: "Registrarse",
        conteudo1: "Todo sobre las Obras Más Famosas del Pre-modernismo",
        conteudo2: "El Pre-modernismo fue un período de transición en la literatura brasileña, entre finales del siglo XIX y comienzos del siglo XX, culminando en la Semana de Arte Moderno de 1922. Las obras de este período se caracterizan por la crítica social, un lenguaje más accesible y la representación de personajes marginados u olvidados. A continuación, conoce las obras más importantes:",
        conteudo3: "Os Sertões – Euclides da Cunha (1902)",
        conteudo4: '"Os Sertões" es considerada la obra principal del Pre-modernismo brasileño. Escrita por Euclides da Cunha, mezcla elementos de literatura, periodismo, sociología, geografía e historia. El autor siguió de cerca la Guerra de Canudos, conflicto ocurrido en el sertón de Bahía, y escribió un análisis detallado sobre el episodio y la realidad del sertanejo.',
        conteudo5: "La obra está dividida en tres partes:",
        conteudo6: "La Tierra – describe el sertón del noreste en su geografía y clima.",
        conteudo7: "El Hombre – analiza al sertanejo, mostrándolo como fuerte, resistente y fruto de su entorno.",
        conteudo8: "La Lucha – narra los acontecimientos de la Guerra de Canudos y critica la violencia del Ejército contra los sertanejos liderados por Antônio Conselheiro.",
        conteudo9: "La obra es una crítica al prejuicio de las élites hacia el interior de Brasil y a la exclusión de los pobres. También muestra el abismo entre el Brasil urbano y rural, exponiendo la realidad del pueblo nordestino.",
        conteudo10: "Triste Fim de Policarpo Quaresma – Lima Barreto (1911)",
        conteudo11: "Lima Barreto escribió esta obra como una sátira al nacionalismo exagerado y a la hipocresía de la sociedad brasileña de la Primera República. Policarpo Quaresma, el protagonista, es un funcionario público ingenuo y extremadamente patriota que desea valorar la cultura nacional. <br><br> Defiende ideas utópicas como hacer del tupí la lengua oficial de Brasil, cultivar la tierra de forma idealizada y luchar por el país en el gobierno. Sin embargo, todas sus iniciativas fracasan, llevándolo a la prisión y a la muerte.",
        conteudo12: "La obra critica:",
        conteudo13: "La burocracia estatal.",
        conteudo14: "El militarismo autoritario.",
        conteudo15: "El prejuicio racial y social.",
        conteudo16: "La ilusión del nacionalismo romántico.",
        conteudo17: "Es una obra que muestra cómo el idealismo aislado puede ser sofocado por una sociedad injusta y atrasada.",
        conteudo18: "Urupês – Monteiro Lobato (1918)",
        conteudo19: "Esta obra es una recopilación de cuentos que denuncia la situación del campesino en el interior paulista. El cuento más famoso es *Urupês*, que presenta al personaje Jeca Tatu – símbolo del caipira perezoso, enfermo e ignorado por las autoridades. <br><br> Monteiro Lobato utiliza al personaje para criticar el abandono del pueblo rural por parte del Estado, mostrando que la miseria del caipira no es resultado de la pereza, sino del abandono social y la falta de asistencia.",
        conteudo20: "Temas abordados:",
        conteudo21: "Problemas agrarios.",
        conteudo22: "Falta de educación.",
        conteudo23: "Miseria rural.",
        conteudo24: "Contraste entre el progreso urbano y el atraso rural.",
        conteudo25: '"Urupês" fue un hito en la concienciación social sobre el Brasil rural.',
        conteudo26: "Canaã – Graça Aranha (1902)",
        conteudo27: '"Canaã" fue una de las primeras obras en discutir el impacto de la inmigración europea en Brasil. La historia se desarrolla en Espírito Santo y muestra el conflicto entre dos inmigrantes alemanes con visiones del mundo opuestas: Milkau, idealista y soñador, y Lentz, racista y violento.',
        conteudo28: "La obra trata de:",
        conteudo29: "Conflictos culturales entre inmigrantes y brasileños.",
        conteudo30: "La búsqueda de una identidad nacional.",
        conteudo31: "El prejuicio racial y social.",
        conteudo32: "La formación del Brasil moderno.",
        conteudo33: "Graça Aranha utilizó la novela para discutir el papel de los extranjeros en la construcción de la nación brasileña y la necesidad de integración y comprensión entre diferentes culturas.",
        conteudo34: "Eu – Augusto dos Anjos (1912)",
        conteudo35: "Aunque solo publicó un libro, Augusto dos Anjos es una figura única en el Pre-modernismo. Su libro *Eu* es una colección de poemas marcados por un lenguaje científico, temas existencialistas y un estilo sombrío y filosófico. <br><br> Los poemas tratan sobre la muerte, la descomposición, la angustia existencial, el paso del tiempo y la soledad humana. A pesar de su lenguaje inusual para la época, los versos son profundamente emocionales.",
        conteudo36: "Aspectos destacados de la obra:",
        conteudo37: "Mezcla de ciencia y lirismo.",
        conteudo38: "Uso de vocabulario técnico.",
        conteudo39: "Pesimismo y melancolía.",
        conteudo40: "Reflexiones sobre la naturaleza humana.",
        conteudo41: "Su poesía escapa a los patrones clásicos y anticipa el experimentalismo modernista.",
        audio: "../AUDIO/Text to Speech (8)_join.mp3",
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
        fim20: "Suscríbete y recibe noticias <br> sobre nuevas actualizaciones y temas<br> relacionados con el Pre-modernismo",
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