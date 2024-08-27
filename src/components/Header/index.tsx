import NavBar from '../NavBar'

export function Header() {
  return (
    <div>
      <div className="flex items-center gap-3">
        {/* <p>Logo</p> */}
        <NavBar />
      </div>
      <div className="z-2 relative mt-24">
        <h1 className="font-poppins text-title text-xl font-bold">Olá,</h1>
        <h1 className="font-poppins text-title text-xl font-bold">
          Meu nome é{' '}
        </h1>
        <h1 className="font-poppins text-title text-xl font-bold">
          Guilherme Zaparoli
        </h1>
        <h1 className="font-poppins text-title text-xl font-bold">
          Eu construo coisas para web
        </h1>
      </div>
    </div>
  )
}
