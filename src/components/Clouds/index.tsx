import './styles.css'

const Clouds = () => {
  return (
    <div className="flex columns-2">
      <div className="cloud-container x2 animate-animate-cloud-x5 scale-55 mt-12">
        <div className="cloud"></div>
      </div>
      <div className="cloud-container x5 animate-animate-cloud-x5 scale-55 mt-48">
        <div className="cloud"></div>
      </div>
    </div>
  )
}

export default Clouds
