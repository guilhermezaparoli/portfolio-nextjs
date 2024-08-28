import { ProjectCard } from '../ProjectCard'

export function Projects() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h1 className="font-poppins text-xl">Projetos</h1>
      <p className="mt-2 whitespace-nowrap font-poppins text-sm">
        Coisas que contruí até agora:
      </p>

      <div className="mb-40 mt-7 flex flex-col gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
