function calcularReceta() {
    // Constantes de la receta base
    const harinaBase = 1; // kg
    const mantecaBase = 0.230; // kg
    const aguaBase = 0.546; // kg
    const salBase = 26; // gramos
    const propionatoBase = 5; // gramos
    const benzoatoBase = 0.001; // gramos

    const ratioHarinaMasa = 1.781; // Relación de harina a masa
    const masaTotalBase = 26.715; // kg de masa a partir de 15 kg de harina

    // Obtener valores del inventario
    const kgChicas = parseInt(document.getElementById("kg_chicas").value) || 0;
    const doceChicas = parseInt(document.getElementById("doce_chicas").value) || 0;
    const kgGrandes = parseInt(document.getElementById("kg_grandes").value) || 0;
    const diezGrandes = parseInt(document.getElementById("diez_grandes").value) || 0;

    // Obtener valores de los pedidos
    const pedidosChicas = parseInt(document.getElementById("pedidos_chicas").value) || 0;
    const pedidosGrandes = parseInt(document.getElementById("pedidos_grandes").value) || 0;

    // Calcular masa existente en inventario
    const masaExistenteChicas = (kgChicas * 30 * 0.035) + (doceChicas * 12 * 0.035);
    const masaExistenteGrandes = (kgGrandes * 25 * 0.045) + (diezGrandes * 10 * 0.045);

    const masaExistenteTotal = masaExistenteChicas + masaExistenteGrandes;

    // Calcular masa necesaria para los pedidos
    const masaPedidosChicas = pedidosChicas * 30 * 0.035;
    const masaPedidosGrandes = pedidosGrandes * 25 * 0.045;

    const masaPedidosTotal = masaPedidosChicas + masaPedidosGrandes;

    // Calcular masa total a producir
    const masaFinal = masaTotalBase - masaExistenteTotal + masaPedidosTotal;

    // Calcular ingredientes finales basados en la masa final
    const harinaFinal = masaFinal / ratioHarinaMasa;
    const mantecaFinal = (harinaFinal / harinaBase) * mantecaBase;
    const aguaFinal = (harinaFinal / harinaBase) * aguaBase;
    const salFinal = (harinaFinal / harinaBase) * salBase;
    const propionatoFinal = (harinaFinal / harinaBase) * propionatoBase;
    const benzoatoFinal = (harinaFinal / harinaBase) * benzoatoBase;

    // Mostrar resultado
    document.getElementById("resultado").innerHTML = `
        <p>Harina: ${harinaFinal.toFixed(2)} kg</p>
        <p>Manteca: ${mantecaFinal.toFixed(3)} kg</p>
        <p>Agua: ${aguaFinal.toFixed(3)} kg</p>
        <p>Sal: ${salFinal.toFixed(2)} gramos</p>
        <p>Propionato: ${propionatoFinal.toFixed(2)} gramos</p>
        <p>Benzoato: ${benzoatoFinal.toFixed(3)} gramos</p>
    `;
}
