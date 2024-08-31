import { ProjectCard } from '../ProjectCard'

export function Projects() {
  return (
    <div className="mt-20 flex flex-col justify-center text-white">
      <p className="text-start font-mono text-white">Projetos</p>
      <h1 className="font-poppins text-3xl font-bold text-white">
        Meus Projetos
      </h1>
      <p className="whitespace-nowrap font-poppins text-sm text-white">
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
