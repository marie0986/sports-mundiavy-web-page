// ===============================
// MENÚ
// ===============================

const menuButton =
    document.getElementById("menuButton");

const navbar =
    document.getElementById("navbar");


menuButton.addEventListener("click", function () {

    navbar.classList.toggle("open");

});


// ===============================
// BUSCADOR
// ===============================

const searchButton =
    document.getElementById("searchButton");

const searchBox =
    document.getElementById("searchBox");

const searchInput =
    document.getElementById("searchInput");

const searchButtonGo =
    document.getElementById("searchButtonGo");


searchButton.addEventListener("click", function () {

    searchBox.classList.toggle("show");

    if (searchBox.classList.contains("show")) {

        searchInput.focus();

    }

});


searchButtonGo.addEventListener("click", search);


searchInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        search();

    }

});


function search() {

    const text =
        searchInput.value.toLowerCase().trim();


    if (text === "") {

        showMessage("Escribe algo para buscar.");

        return;

    }


    if (text.includes("hotel")) {

        document
            .getElementById("hoteles")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

    else if (text.includes("crucero")) {

        document
            .getElementById("cruceros")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

    else if (text.includes("deporte")) {

        document
            .getElementById("deportes")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

    else if (
        text.includes("viaje") ||
        text.includes("destino")
    ) {

        document
            .getElementById("destinos")
            .scrollIntoView({
                behavior: "smooth"
            });

    }

    else {

        showMessage(
            "No encontramos esa búsqueda."
        );

    }


    searchBox.classList.remove("show");

}


// ===============================
// BOTONES VER MÁS
// ===============================

const moreButtons =
    document.querySelectorAll(".more-button");


const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalImage =
    document.getElementById("modalImage");

const closeModal =
    document.getElementById("closeModal");

const modalAction =
    document.getElementById("modalAction");


moreButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        window.location.href =
            "details.html?section=" + button.dataset.pageSection;

    });

});


modalAction.addEventListener("click", function () {

    modal.classList.remove("show");

    document
        .getElementById("contacto")
        .scrollIntoView({
            behavior: "smooth"
        });

    showMessage("Te ayudaremos a reservar esta experiencia.");

});


closeModal.addEventListener("click", function () {

    modal.classList.remove("show");

});


modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        modal.classList.remove("show");

    }

});


document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modal.classList.remove("show");

    }

});


// ===============================
// BOTÓN ÚNETE
// ===============================

const joinButton =
    document.getElementById("joinButton");


joinButton.addEventListener("click", function () {

    window.location.href =
        "details.html?section=" + joinButton.dataset.pageSection;

});


// ===============================
// CUENTA
// ===============================

const accountButton =
    document.getElementById("accountButton");


accountButton.addEventListener("click", function () {

    showMessage(
        "La sección de cuenta estará disponible próximamente."
    );

});


// ===============================
// NEWSLETTER
// ===============================

const newsletterForm =
    document.getElementById("newsletterForm");

const flightForm =
    document.getElementById("flightForm");

const flightTabs = document.querySelectorAll(".flight-tab");
const returnField = document.getElementById("returnField");
const returnInput = document.getElementById("flightReturn");
const swapFlights = document.getElementById("swapFlights");
const departureInput = document.getElementById("flightDeparture");
let tripType = "roundtrip";

const today = new Date().toISOString().split("T")[0];
departureInput.min = today;
returnInput.min = today;

const airportList = document.getElementById("airportList");
const airportDataUrl = "https://raw.githubusercontent.com/mwgg/Airports/master/airports.json";

fetch(airportDataUrl)
    .then(function (response) {
        if (!response.ok) throw new Error("No se pudo cargar la base de aeropuertos");
        return response.json();
    })
    .then(function (airports) {
        const fragment = document.createDocumentFragment();
        Object.values(airports).forEach(function (airport) {
            if (!airport.iata || !airport.name || !airport.city || !airport.country) return;
            const option = document.createElement("option");
            option.value = `${airport.city} - ${airport.name} (${airport.iata}) - ${airport.country}`;
            fragment.appendChild(option);
        });
        airportList.replaceChildren(fragment);
    })
    .catch(function () {
        showMessage("Usando aeropuertos principales. Escribe una ciudad para buscar.");
    });

departureInput.addEventListener("change", function () {
    returnInput.min = departureInput.value || today;
    if (returnInput.value && returnInput.value < returnInput.min) {
        returnInput.value = returnInput.min;
    }
});

[departureInput, returnInput].forEach(function (dateInput) {
    dateInput.addEventListener("click", function () {
        if (typeof dateInput.showPicker === "function") {
            try {
                dateInput.showPicker();
            } catch (error) {
            }
        }
    });
});

flightTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        tripType = tab.dataset.trip;
        flightTabs.forEach(function (item) { item.classList.remove("active"); });
        tab.classList.add("active");
        const isOneWay = tripType === "oneway";
        returnField.hidden = isOneWay;
        returnInput.required = !isOneWay;
    });
});

swapFlights.addEventListener("click", function () {
    const origin = document.getElementById("flightOrigin");
    const destination = document.getElementById("flightDestination");
    const currentOrigin = origin.value;
    origin.value = destination.value;
    destination.value = currentOrigin;
});

flightForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const origin = document.getElementById("flightOrigin").value.trim();
    const destination = document.getElementById("flightDestination").value.trim();
    const departure = document.getElementById("flightDeparture").value;
    const returnDate = document.getElementById("flightReturn").value;
    const travelers = document.getElementById("flightTravelers").value;
    const flightClass = document.getElementById("flightClass").value;
    const results = document.getElementById("flightResults");

    if (tripType !== "oneway" && returnDate < departure) {
        showMessage("La fecha de regreso debe ser posterior a la salida.");
        return;
    }

    const returnText = tripType === "oneway" ? "Solo ida" : `${departure} - ${returnDate}`;
    results.innerHTML = `
        <div class="results-heading"><strong>Vuelos encontrados</strong><span>${origin} → ${destination} · ${returnText} · ${travelers} · ${flightClass}</span></div>
        <div class="flight-result-list">
            <article><b>SkyBlue Airlines</b><span>08:15 - 13:40 · 5 h 25 min</span><strong>Desde $249</strong><button type="button" class="select-flight" data-airline="SkyBlue Airlines" data-time="08:15 - 13:40" data-duration="5 h 25 min" data-price="$249">SELECCIONAR</button></article>
            <article><b>Ocean Air</b><span>11:30 - 17:10 · 5 h 40 min</span><strong>Desde $319</strong><button type="button" class="select-flight" data-airline="Ocean Air" data-time="11:30 - 17:10" data-duration="5 h 40 min" data-price="$319">SELECCIONAR</button></article>
            <article><b>Mundiavy Express</b><span>18:05 - 23:00 · 4 h 55 min</span><strong>Desde $399</strong><button type="button" class="select-flight" data-airline="Mundiavy Express" data-time="18:05 - 23:00" data-duration="4 h 55 min" data-price="$399">SELECCIONAR</button></article>
        </div>`;
    document.querySelectorAll(".select-flight").forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedFlight = document.createElement("div");
            selectedFlight.className = "selected-flight-info";
            selectedFlight.innerHTML = `
                <div><strong>VUELO SELECCIONADO</strong><h3>${button.dataset.airline}</h3></div>
                <p><b>Ruta:</b> ${origin} → ${destination}</p>
                <p><b>Horario:</b> ${button.dataset.time} · ${button.dataset.duration}</p>
                <p><b>Fechas:</b> ${returnText} · <b>Viajeros:</b> ${travelers}</p>
                <p><b>Clase:</b> ${flightClass} · <b>Precio:</b> ${button.dataset.price}</p>
                <a href="mailto:natmarmo@outlook.com?subject=${encodeURIComponent(`Solicitud de vuelo con ${button.dataset.airline}`)}&body=${encodeURIComponent(`Hola, quiero información y disponibilidad para el vuelo ${button.dataset.airline}. Ruta: ${origin} a ${destination}. Fechas: ${returnText}. Viajeros: ${travelers}. Clase: ${flightClass}. Precio mostrado: ${button.dataset.price}.`)}">PEDIR INFORMACIÓN →</a>`;
            results.querySelector(".selected-flight-info")?.remove();
            results.appendChild(selectedFlight);
            showMessage("Aquí tienes la información del vuelo seleccionado.");
        });
    });
    showMessage("Búsqueda de vuelos realizada correctamente.");

});


newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const email =
        document.getElementById("email").value;


    if (!email.includes("@")) {

        showMessage(
            "Escribe un correo válido."
        );

        return;

    }


    newsletterForm.reset();

    const subscriptionSubject = "Nueva suscripción a ofertas exclusivas";
    const subscriptionBody = `Hola, una nueva persona quiere suscribirse a las ofertas exclusivas de Sports Mundiavy.\n\nCorreo del suscriptor: ${email}`;
    window.location.href = `mailto:natmarmo@outlook.com?subject=${encodeURIComponent(subscriptionSubject)}&body=${encodeURIComponent(subscriptionBody)}`;

    showMessage(
        "Se abrirá tu correo para enviar la suscripción."
    );

});


// ===============================
// MENÚ ACTIVO
// ===============================

const links =
    document.querySelectorAll(".navbar a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        links.forEach(function (item) {

            item.classList.remove("active");

        });


        link.classList.add("active");


        navbar.classList.remove("open");

    });

});


// ===============================
// MENSAJES
// ===============================

const toast =
    document.getElementById("toast");

let toastTimer;


function showMessage(message) {

    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(function () {

            toast.classList.remove("show");

        }, 2800);

}