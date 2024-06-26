import "./Nav.css";

const Nav = ({setChart}) => {
    return (
        <ul className="nav">
          <li onClick={() => setChart("Recharts")} style={{ marginRight: "10px" }}>Recharts</li>
          <li onClick={() => setChart("react-chartjs-2")} style={{ marginRight: "10px" }}>react-chartjs-2</li>
          <li onClick={() => setChart("Visx")} style={{ marginRight: "10px" }}>Visx</li>
          <li onClick={() => setChart("Victory")} style={{ marginRight: "10px" }}>Victory</li>
          <li onClick={() => setChart("Nivo")} >Nivo</li>
        </ul>
    );
}

export default Nav;