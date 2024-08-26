import "./styles.css"

const Clouds = () => {
    return (
      <div className="flex columns-2">
        <div className="cloud-container x1 animate-animate-cloud-x4 scale-40">
          <div className="cloud"></div>
        </div>
        <div className="cloud-container x2 animate-animate-cloud-x5 scale-55">
          <div className="cloud"></div>
        </div>
      </div>
    );
  };
  
  export default Clouds;
  