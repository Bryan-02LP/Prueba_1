import PanelPuntaje from "@/components/PanelPuntaje";
import PanelDetalle from "@/components/PanelDetalle";
import "./ResultCard.css";

export default function Home() {
  return (
    <main className="tarjeta-puntaje">
      <PanelPuntaje />
      <PanelDetalle />
    </main>
  );
}
