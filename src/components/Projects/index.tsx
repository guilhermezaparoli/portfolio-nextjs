import { ProjectCard } from './ProjectCard'
import pokedex from '../../../public/assets/images/project-pokedex.png'

export function Projects() {
  return (
    <div id="projetos" className="flex flex-col justify-center pt-20">
      <p className="text-start font-mono text-simple dark:text-simpleDark">
        Projetos
      </p>
      <h1 className="font-poppins text-3xl font-bold text-simple dark:text-simpleDark md:text-4xl">
        Meus Projetos
      </h1>
      <p className="whitespace-nowrap font-poppins text-sm text-simple dark:text-simpleDark md:text-lg">
        Coisas que contruí até agora:
      </p>

      <div className="mb-40 mt-8 flex flex-col items-center gap-6 md:flex-row md:gap-20">
        <ProjectCard
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="Pokedex"
          tecnologies="HTML, CSS, React.js"
          image={pokedex}
        />{' '}
        <ProjectCard
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="Pokedex"
          tecnologies="HTML, CSS, React.js"
          image={pokedex}
        />{' '}
        <ProjectCard
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="Pokedex"
          tecnologies="HTML, CSS, React.js"
          image={pokedex}
        />
        <ProjectCard
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="Pokedex"
          tecnologies="HTML, CSS, React.js"
          image={pokedex}
        />
      </div>
    </div>
  )
}
