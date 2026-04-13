import "./PanelPuntaje.css";

const PanelPuntaje = () => {
  return (
    <div className="panel-puntaje">
      <h2 className="panel-puntaje__titulo">Tu Resultado</h2>

      <div className="panel-puntaje__circulo">
        <span className="panel-puntaje__numero">76</span>
        <span className="panel-puntaje__maximo">de 100</span>
      </div>

      <h3 className="panel-puntaje__nivel">Excelente</h3>
      <p className="panel-puntaje__descripcion">
        Superaste al 65% de las personas que realizaron estas pruebas.
      </p>
    </div>
  );
};

export default PanelPuntaje;
