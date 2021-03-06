export default {
    asidebar: {
        name: "Andrei Amaral",
        availableForProjects: 'Disponivel para novos projetos!',
        paragraph: [
            'Desenvolvedor frontend com o objetivo de se tornar um desenvolvedor ninja em React.'
        ],

        mySkillsTitle: "Minhas Habilidades"
    },

    pages: [
        {
            pageName: "Home",
            pageTitle: "Programador não por formação mas por vocação.",

            aboutMeTitle: "Sobre mim",
            aboutMeParagraphs: [
                'Meu nome é Andrei Jesus do Amaral, tenho 19 anos, resido atualmente na região do Grajaú, na grande cidade São Paulo.',
                'Minha lingua nativa é o Português, mas também falo Inglês no nivel intermediario.',
                'Desde pequeno sempre amei o mundo da tecnologia e ficava me pergutando "como as pessoas fazem site e aplicativos ?"',
                'Aos meus 14 anos, meu irmão me auxíliou a começar meus estudos em desenvolvimento de interfaces, e desde então meu amor por tecnologia não para de crescer.'
            ],

            ImLoverOf: [
                'Tecnologia',
                'Astronomia',
                'Animais'
            ],

            studiesJourney: {
                title: 'Jornada de estudos',
                paragraphs: [
                    'Comecei meus estudos com desenvolvimento de interfaces com HTML, CSS e JavaScript.',
                    'Sempre achei um máximo estudar essas tecnologias e ir vendo os elementos surgirem na tela.',
                    "Há dois anos, ouvi falar sobre o ReactJS e quando vi que era possível juntar as minhas 3 tecnologias favoritas em 'uma só' nunca mais larguei do React hahaha.",
                    'Depois de um tempo estudando React, senti que precisava ter uma certa noção de backend, para que minhas aplicações web começassem a ter mais interações com os usuários.'
                ]
            },

            mainTechs: {
                techs: [
                    'JavaScript', "Typescript", 'React', 'React Native', 'Redux'
                ],
                paragraphs: [
                    'Com um tempo de estudos e uma certa ajuda do meu irmão, consegui entender como funciona o Node e desenvolvi uma aplicação para realizar um CRUD. (NodeJS, Express, MongoDB ou Firebase).',
                    'Hoje são 5 anos de estudos e depois de muitas pedras no caminho, finalmente me sinto apto para entrar no mercado de trabalho.'
                ]
            },

            mySkills: {
                title: "Minhas Habilidades",
                paragraphs: [
                    'A baixo está a lista de tecnologias em que tenho focado nos ultimos dois anos de estudos.'
                ]
            }
        },

        {
            pageName: "Portifólio",
            pageTitle: "Meus projetos de estudos.",

            projects: [
                {
                    name: "Picos Web",
                    images: ['picos-web'],
                    paragraphs: [
                        'O projeto web foi desenvolvido para somente vizualização dos locais no mapa indicados pelos usuários do aplicativo.',
                        'Também foi desenvolvido com o intuito de colocar em pratica tudo que venho estudando todo esse tempo, como por exemplo: ',
                        'Criação de interfaces web e mobile com React, Typescript e Redux;',
                        'Modelagem e consumo de API REST com Nodejs e mongoDB;',
                        'Experiencia do usuário na aplicação.'
                    ]
                },
                {
                    name: "Picos Mobile",
                    images: ['picos-mobile-map', 'picos-mobile-splash'],
                    paragraphs: [
                        'O Projeto foi desenvolvido com o intuito de ajudar os skatistas.',
                        'A funcionalidade do projeto é marcar locais no mapa que seria possível andar de skate.',
                        'É possível também visualizar mais informações sobre o local, como por exemplo: ',
                        'Fotos, instruções para chegar no local;',
                        'Rotas no Google Maps e se abre aos finais de semana.'
                    ]
                }
            ]
        }, 

        {
            pageName: 'Contato',
            pageTitle: "E ae, vamo bater um papo ?",

            formInstruction: "Preencha o formulário abaixo e aguarde que entro em contato !",
            formTip: "* Todos os dados são obrigatórios",
            socialNetworksText: "Ou envie-me uma mensagem em minhas redes sociais =)",
            thanks: 'Obrigado por ter chegado até aqui!!'
        }
    ]
} 