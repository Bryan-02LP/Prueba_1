import PuntajePanel from "@/components/PuntajePanel";
import DetallePanel from "@/components/DetallePanel";
import "./ResultCard.css";

export default function Home() {
  return (
    <main className="result-card">
      <PuntajePanel />
      <DetallePanel />
    </main>
  );
}
