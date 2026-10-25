// Trazo SVG de un brazo de espiral de Arquímedes (el radio crece al girar), centrada en (0, 0).
// «desfase» gira el brazo: con medio giro (Math.PI) se obtiene el segundo brazo de una espiral doble.
// La usan la espiral grande del santuario y las espirales de las plantas de Pedalina.
export function brazoEspiral(radio: number, vueltas: number, desfase = 0) {
    const puntos: string[] = [];
    const angulo = vueltas * 2 * Math.PI;
    for (let t = 0; t <= angulo; t += 0.08) {
        const r = (radio * t) / angulo;
        puntos.push(`${(r * Math.cos(t + desfase)).toFixed(1)} ${(r * Math.sin(t + desfase)).toFixed(1)}`);
    }
    return `M${puntos.join(" L")}`;
}
