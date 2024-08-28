import NavBar from '../NavBar'

export function Header() {
  return (
    <div>
      <div className="flex items-center gap-3">
        {/* <p>Logo</p> */}
        <NavBar />
      </div>
      <div className="z-2 relative mt-24">
        <h1 className="font-poppins text-xl font-bold text-title">Olá,</h1>
        <h1 className="font-poppins text-xl font-bold text-title">
          Meu nome é{' '}
        </h1>
        <h1 className="font-poppins text-xl font-bold text-title">
          Guilherme Zaparoli
        </h1>
        <h1 className="font-poppins text-xl font-bold text-title">
          Eu construo coisas para web
        </h1>
      </div>
    </div>
  )
}
