// Espera a que el DOM esté completamente cargado
$(document).ready(function () {

    /* ---------------------------------
    Ejercicio previo: Ir arriba
    --------------------------------- */
    $("#btn-ir-arriba").click(function () {
        $("html, body").animate(
            { scrollTop: 0 },
            600
        );
    });

    /* ---------------------------------
    Lección 6 – Ejercicio 3
    Manipulación del DOM
    --------------------------------- */

    // Cambiar color de texto de los elementos de la lista
    $("#lista-ejemplo li").css("color", "red");

    // Agregar dinámicamente un cuarto elemento a la lista
    $("#lista-ejemplo").append(
        "<li>Elemento 4 (agregado dinámicamente con jQuery)</li>"
    );

    /* ---------------------------------
    Lección 6 – Ejercicio 4
    Eventos en jQuery
    --------------------------------- */

    $("#btn-toggle-lista").click(function () {

        $("#lista-ejemplo").toggle();

        // Cambiar texto del botón según estado
        if ($(this).text() === "Ocultar lista") {
            $(this).text("Mostrar lista");
        } else {
            $(this).text("Ocultar lista");
        }
    });

    /* ---------------------------------
    Lección 6 – Ejercicio 5
    Uso de plugin (Tooltip Bootstrap)
    --------------------------------- */

    $('[data-bs-toggle="tooltip"]').tooltip();

    console.log("Actividad Módulo 2 · Lección 6 completada correctamente");
});
