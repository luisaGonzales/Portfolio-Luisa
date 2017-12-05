import createStore from 'redux-zero';
import asientos from '../img/Projects/Asientos.png';
import bootstrap from '../img/Projects/Bootstrap.png';
import invitations from '../img/Projects/Invitations.png';
import koalas from '../img/Projects/Koalas.png';
import maze from '../img/Projects/Maze.png';
import memory from '../img/Projects/Memory.png';
import router from '../img/Projects/Router.png';
import scoreboard from '../img/Projects/Scoreboard.png';
import te from '../img/Projects/Te.png';
// ({personal, socials, info, repos, language})
const initialState = {
    personal : {
        name : "Luisa Datne Gonzales Cáceres", 
        who : "Front-End Developer Jr.", 
        age : "22",
    },
    socials : 
    {
        linkedin : "https://www.linkedin.com/in/luisagonzalescaceres/",
        github : 'https://github.com/luisaGonzales',
        facebook : "https://www.facebook.com/luisa.gonzales.58", 
        email : "luisagc711@gmail.com",
        phone : "943572159"
    },
    info : [
        {
            titles : {
                sectionAbout : "Sobre Mí.",
                resume : " Aquí mi CV",
                sectionSkills : "Mis habilidades técnicas.",
                sectionLang : "Idiomas.",
                sectionBadgets : "Yo, como Laboratorian ♥",
                sectionPortfolio : "Mis Proyectos.",
                sectionContact : "Contáctame" 
            },
            about : "Soy una mujer talentosa y apasionada, formada como Front-End Developer en Laboratoria, y como Administradora de Empresas por la Universidad Católica de Santa María. Esta combinación de perspectivas me ha permitido potenciar mis habilidades y conocimientos creando valor en las áreas que me he desempeñado, desarrollando productos centrados en el cliente. Siempre estoy dispuesta a aprender nuevas cosas.",
            phrase : {
                text : '"Lo que me llevará al final; serán mis pasos, no el camino."',
                author : "- Adolfo Cabrales."
            },
            insignia : {
                best : "Una de las 5 mejores",
                bestTxt : "Top 5 en Habilidades Téc, y HSE",
                agile : "La más Agile",
                agileTxt : "",
                squad : "El mejor Squad", 
                squadTxt : "Un excelente trabajo grupal",
                rocking : "Rocking The Sprint", 
                rockingTxt : "La que rompió los esquemas",
                unicornio : "La unicornio", 
                unicornioTxt : "Primer puesto en Habilidades Técnicas"
            }, 
            projects : {
                imgs : [asientos, bootstrap, invitations, koalas, maze, memory, router, scoreboard, te],
                demo : ["https://luisagonzales.github.io/ReservaAsientos-POC/", "https://luisagonzales.github.io/freeLancer-Flex/", "https://luisagonzales.github.io/Invitations-MVC/", "https://luisagonzales.github.io/saveKoalasII/", "https://luisagonzales.github.io/runMaze/", "https://luisagonzales.github.io/memoryGame/", "https://luisagonzales.github.io/Project-Routing/", "https://luisagonzales.github.io/Scoreboard-State/", "https://luisagonzales.github.io/guideBoxModel/" ],
                github : ["https://github.com/luisagonzales/ReservaAsientos-POC/", "https://github.com/luisagonzales/freeLancer-Flex/", "https://github.com/luisagonzales/Invitations-MVC/", "https://github.com/luisagonzales/saveKoalasII/", "https://github.com/luisagonzales/runMaze/", "https://github.com/luisagonzales/memoryGame/", "https://github.com/luisagonzales/Project-Routing/", "https://github.com/luisagonzales/Scoreboard-State/", "https://github.com/luisagonzales/guideBoxModel/"],
                titles : ["Reserva de Asientos", "Empezando Bootstrap", "Invitaciones", "Fundación de Koalas", "Laberinto", "Juego de Memoria", "Plataforma JS", "Scoreboard", "Amante del Té" ],
                description : ["Reservar asientos en un avión, nunca había sido tan fácil", "Un portafolio muy particular", "Checklist para los invitados de una boda", "Salva a los Koalas, estos amigos son muy necesarios", "¿Puedes resolver este laberinto?", "Desafía un poco tu memoria", "Ninguna plataforma había tenido tanta información", "Controla a todos los jugadores en varias partidas", "¿Eres un amante del té?, esta página es para ti"]
            }
        },
        {
            titles : {
                sectionAbout : "About Me.",
                resume : " Here!! My Resume",
                sectionSkills : "My Skills.",
                sectionLang : "Languages", 
                sectionBadgets : "I'm a wonderfull Laboratorian",
                sectionPortfolio : "Here are my Projects",
                sectionContact : "Keep in Touch"
                
            },
            about : "I'm a talented and passionate woman, trained as a Front-End Developer Jr. in Laboratoria, and as a Business Administrator by the 'Universidad Católica de Santa María'. This combination of perspectives has allowed me to strengthen my skills and good knowledge; creating value in the areas where I work, developing products focused on the client. I'm always searching to learn new things.",
            phrase : {
                text : '"Always, we have a chance to change"',
                author : ""
            },
            insignia : {
                best : "Top 5",
                bestTxt : "Top 5 in all Skills",
                agile : "The Agile",
                agileTxt : "",
                squad : "The Best Squad", 
                squadTxt : "An excelent work group",
                rocking : "Rocking The Sprint", 
                rockingTxt : "Who breaks the sprint",
                unicornio : "The Unicorn", 
                unicornioTxt : "The best in Technical Abilities"
            }
        }
    ],
    repos : 
        {
            react : ['https://luisagonzales.github.io/Scoreboard-State/', 'https://luisagonzales.github.io/Project-Routing/','https://luisagonzales.github.io/Invitations-MVC/', 'https://luisagonzales.github.io/QuizABC-React/', 'https://luisagonzales.github.io/Lyft-Evaluado/'], 
        },
    language : 0,
}

const store = createStore(initialState);
export default store;
