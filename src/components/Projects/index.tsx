import { ProjectCard } from "./ProjectCard";
import pokedex from "../../../public/assets/images/project-pokedex.png";
import propertyPulse from "../../../public/assets/images/propertyPulse.png";
import cooffeeDelivery from "../../../public/assets/images/coffee-delivery.png";

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
      <div className="flex flex-col items-center"></div>

      <div className="grid-cols-projects mb-40 mt-8 flex flex-col items-center gap-8 md:grid md:gap-20">
      <ProjectCard
          description="Site para locação de imóveis, com as seguintes funcionalidades: cadastro via google account, envio de mensagem direto ao proprietário do imóvel, favoritar imóveis preferidos, visualizar geolocalização do imóvel, dentre outras."
          title="Alugue um imóvel"
          technologies="Next.js 14, Tailwind, MongoDB, Mongoose, React Geocode, NextAuth.js"
          image={propertyPulse}
          url="https://property-pulse-ten-gamma.vercel.app/"
          repo={"https://github.com/guilhermezaparoli/property-pulse"}

        />
        <ProjectCard
          description="Aplicativo que permite pesquisar e explorar Pokémon, exibindo detalhes como estatísticas. Oferece uma experiência interativa e atualizada em tempo real. A interface é projetada para ser amigável e responsiva, garantindo uma experiência fluida tanto em dispositivos desktop quanto móveis."
          title="Pokedex"
          technologies="React.js, TypeScript, Styled Components, Vite"

          image={pokedex}
          url="https://pokedex-ts-lyart.vercel.app/"
          repo={"https://github.com/guilhermezaparoli/Pokedex-TS"}
        />{" "}
    {" "}
        <ProjectCard
          description="Aplicativo de delivery de café criado durante o curso Ignite da Rocketseat. Permite ao usuário adicionar cafés ao carrinho e concluir uma compra fictícia usando a Stripe (apenas para testes)"
          title="Coffee Delivery"
          technologies="React.js, TypeScript, Styled Components, Vite, zod"
          image={cooffeeDelivery}
          url="https://coffee-delivery-amber-psi.vercel.app/"
          repo={"https://github.com/guilhermezaparoli/Coffee-Delivery"}

        />
      </div>
    </div>
  );
}
