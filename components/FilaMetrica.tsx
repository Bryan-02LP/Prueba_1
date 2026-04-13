import Image from "next/image";
import "./FilaMetrica.css";

interface FilaMetricaProps {
  nombre: string;
  puntuacion: number;
  icono: string;
  colorTexto: string;
  colorFondo: string;
  colorBarra: string;
}

const obtenerNivel = (puntuacion: number): { etiqueta: string; color: string } => {
  if (puntuacion >= 90) return { etiqueta: "Top", color: "#22c55e" };
  if (puntuacion >= 70) return { etiqueta: "Bien", color: "#3b82f6" };
  if (puntuacion >= 50) return { etiqueta: "Regular", color: "#f59e0b" };
  return { etiqueta: "Bajo", color: "#ef4444" };
};

const FilaMetrica = ({ nombre, puntuacion, icono, colorTexto, colorFondo, colorBarra }: FilaMetricaProps) => {
  const nivel = obtenerNivel(puntuacion);

  return (
    <div className="fila-metrica" style={{ backgroundColor: colorFondo }}>
      <div className="fila-metrica__cabecera">
        <div className="fila-metrica__izquierda">
          <Image src={icono} alt={nombre} width={20} height={20} />
          <span className="fila-metrica__nombre" style={{ color: colorTexto }}>
            {nombre}
          </span>
        </div>
        <div className="fila-metrica__valor">
          <strong>{puntuacion}</strong> / 100
          <span
            className="fila-metrica__badge"
            style={{ backgroundColor: nivel.color }}
          >
            {nivel.etiqueta}
          </span>
        </div>
      </div>
      <div className="fila-metrica__barra-fondo">
        <div
          className="fila-metrica__barra-relleno"
          style={{ width: `${puntuacion}%`, backgroundColor: colorBarra }}
        />
      </div>
    </div>
  );
};

export default FilaMetrica;
