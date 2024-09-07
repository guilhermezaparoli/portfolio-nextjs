import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <div id="projetos" className="flex flex-col justify-center pt-20">
      <p className="text-start font-mono text-simple dark:text-simpleDark">
        Projetos
      </p>
      <h1 className="font-poppins text-3xl font-bold text-simple dark:text-simpleDark">
        Meus Projetos
      </h1>
      <p className="whitespace-nowrap font-poppins text-sm text-simple dark:text-simpleDark">
        Coisas que contruí até agora:
      </p>

      <div className="mb-40 mt-8 flex flex-col items-center gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
