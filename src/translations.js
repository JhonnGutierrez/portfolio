import commentsImage from './assets/interact-comments.jfif'
import formImage from './assets/multistep-form.jfif'
import countriesImage from './assets/rest-countries.jfif'
import SpaceImage from './assets/space-tourism.jfif'

export default {
    en: {
        "hero.greetings": "Hey! I'm",
        "hero.position": "Frontend Developer",
        "hero.description": "Every day learning something different, from psychology and illustration to programming and physics",
        "projects.title": "Some projects",
        "contact.title": "Contact Me",
        "contact.madeBy": "Created by Jhonn Gutierrez",
        "contact.download": "Download CV",
        "modal": "Mail has been copied to clipboard",
        "projects": [
            {
                title: 'Space Tourism',
                description: 'Fictitious Space Tourism service',
                image: SpaceImage,
                links: [
                    // github
                    'https://github.com/JhonnGutierrez/space-tourism',
                    // page
                    'https://space-tourism-teal.vercel.app/'
                ]
            },
            {
                title: 'Multistep Form',
                description: 'Gaming service subscribe form',
                image: formImage,
                links: [
                    'https://github.com/JhonnGutierrez/multistep-form',
                    'https://multistep-form-lac.vercel.app/'
                ]
            },
            {
                title: 'Comments Section',
                description: 'Comments CRUD based on localStorage',
                image: commentsImage,
                links: [
                    'https://github.com/JhonnGutierrez/interactive-comments-section',
                    'https://interactive-comments-section-rose.vercel.app/'
                ]
            },
            {
                title: 'REST Countries',
                description: 'fetching countries and their information for a API',
                image: countriesImage,
                links: [
                    'https://github.com/JhonnGutierrez/rest-country-api',
                    'https://rest-country-api-theta.vercel.app/'
                ]
            },
        ]
    },
    es: {
        "hero.greetings": "Hola! soy",
        "hero.position": "Desarrollador Frontend",
        "hero.description": "Cada dia aprendiendo algo diferente, desde psicologia y ilustracion hasta programacion y fisica",
        "projects.title": "Proyectos",
        "contact.title": "Contáctame",
        "contact.madeBy": "Hecho por Jhonn Gutierrez",
        "contact.download": "Descargar CV",
        "modal": "El correo ha sido copiado al portapapeles",
        "projects": [
            {
                title: 'Turismo Espacial',
                description: 'Servicio de Turismo espacial ficticio',
                image: SpaceImage,
                links: [
                    // github
                    'https://github.com/JhonnGutierrez/space-tourism',
                    // page
                    'https://space-tourism-teal.vercel.app/'
                ]
            },
            {
                title: 'Formulario multipasos',
                description: 'Formulario de subscripcion a un servicio de gaming',
                image: formImage,
                links: [
                    'https://github.com/JhonnGutierrez/multistep-form',
                    'https://multistep-form-lac.vercel.app/'
                ]
            },
            {
                title: 'Seccion de comentarios',
                description: 'CRUD de comentarios basado en localStorage',
                image: commentsImage,
                links: [
                    'https://github.com/JhonnGutierrez/interactive-comments-section',
                    'https://interactive-comments-section-rose.vercel.app/'
                ]
            },
            {
                title: 'REST Paises',
                description: 'Llamando paises y su informacion desde una API',
                image: countriesImage,
                links: [
                    'https://github.com/JhonnGutierrez/rest-country-api',
                    'https://rest-country-api-theta.vercel.app/'
                ]
            },
        ]
  }
}