import "./PuntajePanel.css";

const PuntajePanel = () => {
  return (
    <div className="resultado-panel">
      <h2 className="resultado-titulo">Your Result</h2>

      <div className="resultado-circulo">
        <span className="resultado-puntaje">76</span>
        <span className="resultado-total">of 100</span>
      </div>

      <h3 className="resultado-calificacion">Great</h3>
      <p className="resultado-descripcion">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default PuntajePanel;
