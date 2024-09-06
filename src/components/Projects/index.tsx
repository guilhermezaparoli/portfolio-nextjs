import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <div className="mt-20 flex flex-col justify-center">
      <p className="text-simple text-start font-mono dark:text-white">
        Projetos
      </p>
      <h1 className="text-simple font-poppins text-3xl font-bold dark:text-white">
        Meus Projetos
      </h1>
      <p className="text-simple whitespace-nowrap font-poppins text-sm dark:text-white">
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
