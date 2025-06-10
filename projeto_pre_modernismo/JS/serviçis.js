// tema
document.addEventListener('DOMContentLoaded', function () {
    const temaSelect = document.getElementById('tema');

    const imagensParaTrocar = [
        { id: 'imagem1', claro: '../IMG/serviços.png', escuro: '../IMG/serviços (7).png' },
        { id: 'imagem2', claro: '../IMG/serviços (1).png.', escuro: '../IMG/serviços (8).png' },
        { id: 'imagem3', claro: '../IMG/serviços (2).png', escuro: '../IMG/serviços (9).png' },
        { id: 'imagem4', claro: '../IMG/serviços (3).png', escuro: '../IMG/serviços (10).png' },
        { id: 'imagem5', claro: '../IMG/serviços (4).png', escuro: '../IMG/serviços (11).png' },
        { id: 'imagem6', claro: '../IMG/serviços (5).png', escuro: '../IMG/serviços (12).png' },
    ];

    temaSelect.addEventListener('change', function () {
        if (temaSelect.value === 'escuro') {
            document.body.classList.add('dark-theme');

            imagensParaTrocar.forEach(imagem => {
                const img = document.getElementById(imagem.id);
                if (img) {
                    img.src = imagem.escuro;
                }
            });

        } else {
            document.body.classList.remove('dark-theme');

            imagensParaTrocar.forEach(imagem => {
                const img = document.getElementById(imagem.id);
                if (img) {
                    img.src = imagem.claro;
                }
            });
        }
    });
});

//tradução
const traducoes = {
    pt: {
        menu1: 'início',
        menu2: 'Obras',
        menu3: 'Contate-nos',
        menu4: 'Entrar',
        menu5: 'Cadastrar',
        conteudo1: 'Resumos de Obras',
        conteudo2: 'Oferecemos resumos completos e análises detalhadas de obras do pré-modernismo brasileiro. Entenda os principais temas, personagens e contextos históricos de forma clara e objetiva.',
        conteudo3: 'Aulas Online',
        conteudo4: 'Participe de aulas e workshops sobre a literatura pré-modernista. Aprenda sobre os grandes autores e suas obras em encontros dinâmicos e enriquecedores.',
        conteudo5: 'Consultoria',
        conteudo6: 'Precisa de ajuda com um trabalho escolar ou acadêmico sobre o pré- modernismo? Oferecemos consultoria personalizada para elaboração de resumos, ensaios e apresentações.',
        conteudo7: 'E-books Exclusivos',
        conteudo8: 'Disponibilizamos e-books gratuitos e pagos com conteúdos exclusivos sobre o pré-modernismo, perfeitos para aprofundar seus estudos onde e quando quiser.',
        conteudo9: 'Traduções Literárias',
        conteudo10: 'Oferecemos traduções de resumos e análises para outros idiomas, tornando o estudo da literatura pré-modernista acessível para mais pessoas ao redor do mundo.',
        conteudo11: 'Materiais Educativos',
        conteudo12: 'Acesse nossos materiais educativos, como infográficos, mapas mentais e roteiros de estudo, desenvolvidos para facilitar a compreensão dos temas literários.',
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
        menu1: 'Home',
        menu2: 'Works',
        menu3: 'Contact Us',
        menu4: 'Login',
        menu5: 'Register',
        conteudo1: 'Summaries of Works',
        conteudo2: 'We offer complete summaries and detailed analyses of Brazilian pre-modernist works. Understand the main themes, characters, and historical contexts clearly and objectively.',
        conteudo3: 'Online Classes',
        conteudo4: 'Participate in classes and workshops about pre-modernist literature. Learn about the great authors and their works in dynamic and enriching sessions.',
        conteudo5: 'Consulting',
        conteudo6: 'Need help with a school or academic project about pre-modernism? We offer personalized consulting for writing summaries, essays, and presentations.',
        conteudo7: 'Exclusive E-books',
        conteudo8: 'We provide free and paid e-books with exclusive content about pre-modernism, perfect for deepening your studies anytime, anywhere.',
        conteudo9: 'Literary Translations',
        conteudo10: 'We offer translations of summaries and analyses into other languages, making the study of pre-modernist literature accessible to more people around the world.',
        conteudo11: 'Educational Materials',
        conteudo12: 'Access our educational materials, such as infographics, mind maps, and study guides, developed to make understanding literary themes easier.',
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
        fim12: "E-mail",
        fim13: "Useful Links",
        fim14: "About Us",
        fim15: "Contact",
        fim16: "Privacy Policy",
        fim17: "Terms of Use",
        fim18: "FAQ",
        fim19: "Subscribe",
        fim20: "Subscribe and receive news <br> about new updates and topics<br> related to Pre-Modernism",
        fim21: "Send",
        fim22: "© 2025 Alvorada Literária. All rights reserved.",
    },
    es: {
        menu1: 'Inicio',
        menu2: 'Obras',
        menu3: 'Contáctenos',
        menu4: 'Iniciar sesión',
        menu5: 'Registrarse',
        conteudo1: 'Resúmenes de Obras',
        conteudo2: 'Ofrecemos resúmenes completos y análisis detallados de obras del premodernismo brasileño. Comprenda los principales temas, personajes y contextos históricos de manera clara y objetiva.',
        conteudo3: 'Clases en Línea',
        conteudo4: 'Participe en clases y talleres sobre la literatura premodernista. Aprenda sobre los grandes autores y sus obras en encuentros dinámicos y enriquecedores.',
        conteudo5: 'Consultoría',
        conteudo6: '¿Necesita ayuda con un trabajo escolar o académico sobre el premodernismo? Ofrecemos consultoría personalizada para la elaboración de resúmenes, ensayos y presentaciones.',
        conteudo7: 'E-books Exclusivos',
        conteudo8: 'Ofrecemos e-books gratuitos y de pago con contenidos exclusivos sobre el premodernismo, perfectos para profundizar sus estudios en cualquier momento y lugar.',
        conteudo9: 'Traducciones Literarias',
        conteudo10: 'Ofrecemos traducciones de resúmenes y análisis a otros idiomas, haciendo que el estudio de la literatura premodernista sea accesible para más personas en todo el mundo.',
        conteudo11: 'Materiales Educativos',
        conteudo12: 'Acceda a nuestros materiales educativos, como infografías, mapas mentales y guías de estudio, desarrollados para facilitar la comprensión de los temas literarios.',
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
        fim20: "Suscríbase y reciba noticias <br> sobre nuevas actualizaciones y temas<br> relacionados con el Premodernismo",
        fim21: "Enviar",
        fim22: "© 2025 Alvorada Literaria. Todos los derechos reservados.",
    }
};

const seletor = document.getElementById("languageSelector");

seletor.addEventListener("change", () => {
    const idioma = seletor.value;
    const traducoesIdioma = traducoes[idioma];

    for (const id in traducoesIdioma) {
        const elemento = document.getElementById(id);

        if (elemento) {
            if (elemento.tagName === "INPUT" && (elemento.type === "button" || elemento.type === "submit")) {
                elemento.setAttribute("value", traducoesIdioma[id]);
            } else {
                elemento.innerHTML = traducoesIdioma[id];
            }
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