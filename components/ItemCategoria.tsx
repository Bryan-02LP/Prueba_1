import Image from "next/image";
import "./ItemCategoria.css";

interface ItemCategoriaProps {
  category: string;
  score: number;
  icon: string;
  color: string;
  bgColor: string;
}

const ItemCategoria = ({ category, score, icon, color, bgColor }: ItemCategoriaProps) => {
  return (
    <div className="fila-resumen" style={{ backgroundColor: bgColor }}>
      <div className="fila-resumen-izquierda">
        <Image src={icon} alt={category} width={20} height={20} />
        <span className="fila-categoria" style={{ color: color }}>
          {category}
        </span>
      </div>
      <span className="fila-puntaje">
        <strong>{score}</strong> / 100
      </span>
    </div>
  );
};

export default ItemCategoria;
