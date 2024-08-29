import { ProjectCard } from '../ProjectCard'

export function Projects() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center text-white">
      <h1 className="font-poppins text-xl font-bold">Projetos</h1>
      <p className="whitespace-nowrap font-poppins text-sm text-white">
        Coisas que contruí até agora:
      </p>

      <div className="mb-40 mt-8 flex flex-col gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}
