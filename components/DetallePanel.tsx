import ItemCategoria from "./ItemCategoria";
import "./DetallePanel.css";

const categorias = [
  {
    category: "Reaction",
    score: 80,
    icon: "/icons/icon-reaction.svg",
    color: "var(--light-red)",
    bgColor: "hsla(0, 100%, 67%, 0.08)",
  },
  {
    category: "Memory",
    score: 92,
    icon: "/icons/icon-memory.svg",
    color: "var(--orangey-yellow)",
    bgColor: "hsla(39, 100%, 56%, 0.08)",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "/icons/icon-verbal.svg",
    color: "var(--green-teal)",
    bgColor: "hsla(166, 100%, 37%, 0.08)",
  },
  {
    category: "Visual",
    score: 72,
    icon: "/icons/icon-visual.svg",
    color: "var(--cobalt-blue)",
    bgColor: "hsla(234, 85%, 45%, 0.08)",
  },
];

const DetallePanel = () => {
  return (
    <div className="resumen-panel">
      <h2 className="resumen-titulo">Summary</h2>

      <div className="resumen-lista">
        {categorias.map((item) => (
          <ItemCategoria key={item.category} {...item} />
        ))}
      </div>

      <button className="resumen-btn">Continue</button>
    </div>
  );
};

export default DetallePanel;
