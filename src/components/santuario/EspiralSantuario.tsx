// Espiral de dos brazos, púrpura y dorado, como la que sale de las plantas de Pedalina
// en el capítulo 7 de «Barefoot Café». Gira despacio (salvo con «reducir movimiento»).
// Quien la use debe posicionarla (relative, absolute…): sus capas van superpuestas.

const VUELTAS = 3.5;
const RADIO = 96;

// Espiral de Arquímedes (el radio crece al girar), desplazada medio giro para el segundo brazo.
function brazo(desfase: number) {
    const puntos: string[] = [];
    const angulo = VUELTAS * 2 * Math.PI;
    for (let t = 0; t <= angulo; t += 0.08) {
        const r = (RADIO * t) / angulo;
        puntos.push(`${(r * Math.cos(t + desfase)).toFixed(1)} ${(r * Math.sin(t + desfase)).toFixed(1)}`);
    }
    return `M${puntos.join(" L")}`;
}

const BRAZO_DORADO = brazo(0);
const BRAZO_PURPURA = brazo(Math.PI);

function EspiralSantuario({ className = "" }: { className?: string }) {
    return (
        <div className={`aspect-square ${className}`} aria-hidden="true">
            {/* Halo de fondo */}
            <div className="absolute inset-[15%] rounded-full bg-[radial-gradient(circle,rgba(155,107,216,0.35)_0%,rgba(237,197,119,0.15)_45%,transparent_70%)] blur-2xl" />

            {/* Anillo exterior que gira al revés, muy despacio */}
            <svg viewBox="-100 -100 200 200" className="absolute inset-0 h-full w-full motion-safe:animate-girar-inverso">
                <circle r="98" fill="none" stroke="#d9ad63" strokeOpacity={0.25} strokeWidth={0.6} strokeDasharray="1 5" />
            </svg>

            <svg
                viewBox="-100 -100 200 200"
                className="absolute inset-0 h-full w-full drop-shadow-[0_0_10px_rgba(155,107,216,0.6)] motion-safe:animate-girar-lento"
            >
                <path d={BRAZO_PURPURA} fill="none" stroke="#9b6bd8" strokeWidth={3.2} strokeLinecap="round" />
                <path d={BRAZO_DORADO} fill="none" stroke="#edc577" strokeWidth={3.2} strokeLinecap="round" />
                <circle r="3" fill="#f5eee2" />
            </svg>
        </div>
    );
}

export default EspiralSantuario;
