import { descubrirGuino } from "./guinos";

// Detalle escondido para curiosos: un mensaje en la consola del navegador (F12).
const HUELLA = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⡀⢀⡶⠋⠉⠉⠓⢦⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠏⠉⠈⢻⡞⠀⠀⠀⠀⠀⠈⣧⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⠾⠛⠻⡄⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⢸⠆⠀
⠀⠀⠀⠀⠀⣠⡤⠿⣄⠀⠀⢹⠄⠀⠀⢻⡀⠀⠀⠀⠀⠀⣸⠀⠀
⠀⠀⠀⠀⢰⠃⠀⠀⠸⡆⢠⣸⠤⠤⠤⠸⠧⠤⠤⢄⡀⠈⡇⠀⠀
⠀⠀⠀⢀⣼⣀⣀⣀⣜⡱⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣷⠀⠀
⠀⠀⡼⠉⠈⢳⠤⠐⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡄⠀
⠀⢰⡇⠀⢠⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣧⠀
⠀⢸⡧⠔⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀
⢀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠇⠀
⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠀⠀
⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠃⠀⠀
⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀
⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠇⠀⠀⠀
⠀⠸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠀⠀⠀⠀
⠀⠀⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡟⠀⠀⠀⠀
⠀⠀⠈⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀
⠀⠀⠀⢹⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀
⠀⠀⠀⠀⢷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⢸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠸⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠹⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⢦⡀⠀⠀⠀⠀⠀⠀⢀⡴⠃⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠳⠤⣤⣤⡤⠴⠋⠁⠀⠀⠀⠀⠀⠀
`;

// Premio para los más curiosos: quien escriba pedalina() en la consola desbloquea un guiño.
function pedalina() {
    descubrirGuino("consola");
    console.log(
        "%cMmm… me has llamado por mi nombre. Sabía que eras de los curiosos. Pasa, descálzate… y sigue mirando 👣",
        "color: #edc577; font-family: Georgia, serif; font-size: 16px; font-style: italic;",
    );
    return "👣";
}

export function mostrarMensajeConsola() {
    (window as Window & { pedalina?: typeof pedalina }).pedalina = pedalina;
    console.log(`%c${HUELLA}`, "color: #d9ad63; font-family: monospace; font-size: 12px; line-height: 1;");
    console.log(
        "%cSi estás mirando el código… Pedalina ya te ha visto 👣",
        "color: #edc577; font-family: Georgia, serif; font-size: 16px; font-style: italic;",
    );
    console.log(
        "%c¿Te atreves a llamarla? Escribe pedalina() y pulsa Enter…",
        "color: #d9ad63; font-family: Georgia, serif; font-size: 13px;",
    );
}
