import { useId } from "react";

// Planta de un pie con una espiral hipnótica: la misma forma que el favicon (public/favicon.svg).
// La espiral está recortada, así que deja ver lo que haya detrás, y gira sin parar
// (salvo si el visitante tiene activado «reducir movimiento»).
function Huella({ className = "" }: { className?: string }) {
    const idMascara = useId();

    return (
        <svg viewBox="16 5 34 56" fill="currentColor" className={className} aria-hidden="true">
            <mask id={idMascara}>
                <rect x="16" y="5" width="34" height="56" fill="white" />
                <path
                    d="M32.5 32.0 L32.5 31.9 L32.6 31.8 L32.6 31.7 L32.8 31.7 L32.9 31.6 L33.0 31.6 L33.1 31.7 L33.3 31.7 L33.4 31.9 L33.5 32.0 L33.6 32.2 L33.7 32.4 L33.7 32.6 L33.7 32.9 L33.6 33.1 L33.5 33.4 L33.3 33.6 L33.1 33.8 L32.8 34.0 L32.5 34.1 L32.2 34.2 L31.8 34.2 L31.4 34.1 L31.0 34.0 L30.6 33.9 L30.3 33.6 L30.0 33.3 L29.7 32.9 L29.5 32.5 L29.4 32.0 L29.3 31.5 L29.3 31.0 L29.4 30.4 L29.6 29.9 L29.9 29.4 L30.3 28.9 L30.7 28.5 L31.3 28.2 L31.9 28.0 L32.5 27.8 L33.2 27.8 L33.9 27.8 L34.5 28.0 L35.2 28.3 L35.8 28.7 L36.4 29.2 L36.9 29.8 L37.3 30.4 L37.6 31.2 L37.8 32.0 L37.8 32.8 L37.7 33.7 L37.5 34.5 L37.1 35.3 L36.6 36.1 L36.0 36.8 L35.2 37.3 L34.4 37.8 L33.5 38.1 L32.5 38.3 L31.5 38.3 L30.5 38.2 L29.5 37.9 L28.6 37.4 L27.7 36.8 L26.9 36.1 L26.2 35.2 L25.7 34.2 L25.3 33.1 L25.1 32.0 L25.1 30.8 L25.3 29.7 L25.7 28.5 L26.2 27.4 L26.9 26.4 L27.8 25.5 L28.8 24.8 L30.0 24.2 L31.2 23.8 L32.5 23.6"
                    fill="none"
                    stroke="black"
                    strokeWidth={1.9}
                    className="motion-safe:animate-girar"
                    style={{ transformOrigin: "32.5px 32px" }}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </mask>
            <g mask={`url(#${idMascara})`}>
                <path d="M31 60C23 60 21 55.5 22.5 50.5C24 45.5 25 42 21.5 36C19.5 33 18.5 31 18.5 29C17.5 22 23 18 31 18.5C40 19 46.5 22.5 45.5 30C44.5 36 42 41 41.5 48C41.5 56 38 60 31 60Z" />
                <circle cx="25" cy="12.5" r="4.6" />
                <circle cx="33" cy="10.8" r="3.4" />
                <circle cx="39" cy="12.4" r="3.0" />
                <circle cx="43.6" cy="15.6" r="2.6" />
                <circle cx="47.2" cy="19.8" r="2.2" />
            </g>
        </svg>
    );
}

export default Huella;
