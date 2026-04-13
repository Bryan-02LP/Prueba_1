import FilaMetrica from "./FilaMetrica";
import "./PanelDetalle.css";

const metricas = [
  {
    nombre: "Reacción",
    puntuacion: 80,
    icono: "/icons/icon-reaction.svg",
    colorTexto: "var(--rojo-claro)",
    colorFondo: "hsla(0, 100%, 67%, 0.08)",
    colorBarra: "var(--rojo-claro)",
  },
  {
    nombre: "Memoria",
    puntuacion: 92,
    icono: "/icons/icon-memory.svg",
    colorTexto: "var(--amarillo)",
    colorFondo: "hsla(39, 100%, 56%, 0.08)",
    colorBarra: "var(--amarillo)",
  },
  {
    nombre: "Verbal",
    puntuacion: 61,
    icono: "/icons/icon-verbal.svg",
    colorTexto: "var(--verde-agua)",
    colorFondo: "hsla(166, 100%, 37%, 0.08)",
    colorBarra: "var(--verde-agua)",
  },
  {
    nombre: "Visual",
    puntuacion: 72,
    icono: "/icons/icon-visual.svg",
    colorTexto: "var(--azul-cobalt)",
    colorFondo: "hsla(234, 85%, 45%, 0.08)",
    colorBarra: "var(--azul-cobalt)",
  },
];

const PanelDetalle = () => {
  return (
    <div className="panel-detalle">
      <h2 className="panel-detalle__titulo">Desglose</h2>

      <div className="panel-detalle__lista">
        {metricas.map((item) => (
          <FilaMetrica key={item.nombre} {...item} />
        ))}
      </div>

      <button className="panel-detalle__btn">Continuar</button>
    </div>
  );
};

export default PanelDetalle;
