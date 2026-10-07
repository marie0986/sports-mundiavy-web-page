const content = {
    experiencias: {
        kicker: "DESCUBRE SPORTS MUNDIAVY",
        title: "Vive tu pasión",
        description: "Explora cruceros, hoteles, deportes y destinos reunidos en un solo lugar para crear tu próxima aventura.",
        image: "imagen pagina inicio.png",
        optionsTitle: "EXPERIENCIAS PARA TODOS",
        options: [
            ["Escapada esencial", "Desde $299 USD", "imagen pagina inicio.png"],
            ["Experiencia premium", "Desde $699 USD", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=90"],
            ["Aventura exclusiva", "Desde $1,299 USD", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=90"]
        ]
    },
    cruceros: {
        kicker: "EXPERIENCIAS EN EL MAR",
        title: "Cruceros",
        description: "Descubre rutas por el Caribe, el Mediterráneo y destinos increíbles a bordo de cruceros llenos de actividades.",
        image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1200&q=90",
        optionsTitle: "CRUCEROS SEGÚN TU PRESUPUESTO",
        options: [
            ["Caribe a tu manera", "$699 USD · 8 días", "Miami → Nassau → Cozumel → Miami", "Incluye camarote, comidas principales, entretenimiento y actividades a bordo.", "Ocean Breeze", "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=800&q=90"],
            ["Mediterráneo clásico", "$1,099 USD · 10 días", "Barcelona → Roma → Santorini → Atenas", "Incluye camarote con balcón, desayunos, cenas y excursiones seleccionadas.", "Mediterranean Star", "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=90"],
            ["Crucero de lujo", "$2,499 USD · 14 días", "Lisboa → Madeira → Canarias → Marruecos", "Incluye suite, restaurantes premium, servicio personalizado y bebidas seleccionadas.", "Royal Horizon", "https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=800&q=90"],
            ["Escapada Bahamas", "$549 USD · 5 días", "Miami → Nassau → CocoCay → Miami", "Incluye comidas, piscina, espectáculos nocturnos y actividades familiares.", "Island Dream", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=90"],
            ["Islas Griegas", "$1,299 USD · 9 días", "Atenas → Mykonos → Santorini → Creta", "Incluye camarote, pensión completa, gimnasio y noches temáticas.", "Aegean Pearl", "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=90"],
            ["Fiordos de Noruega", "$1,599 USD · 11 días", "Copenhague → Bergen → Geiranger → Oslo", "Incluye vistas panorámicas, comidas, conferencias y excursiones por los fiordos.", "Nordic Explorer", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=90"],
            ["Alaska salvaje", "$1,849 USD · 10 días", "Seattle → Juneau → Skagway → Anchorage", "Incluye camarote exterior, comidas, observación de fauna y guías locales.", "Alaska Voyager", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=90"],
            ["Riviera Mexicana", "$799 USD · 7 días", "Los Ángeles → Cabo San Lucas → Mazatlán → Puerto Vallarta", "Incluye comidas, shows en vivo, club infantil y deportes acuáticos.", "Pacific Sun", "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=800&q=90"],
            ["Asia fascinante", "$2,099 USD · 15 días", "Singapur → Bangkok → Hong Kong → Tokio", "Incluye camarote, restaurantes internacionales, Wi-Fi básico y actividades culturales.", "Eastern Odyssey", "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=90"],
            ["Aventura por el Caribe Sur", "$1,249 USD · 12 días", "San Juan → Barbados → Santa Lucía → Aruba", "Incluye bebidas sin alcohol, entretenimiento, piscinas y excursiones en puertos.", "Caribbean Pearl", "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=90"],
            ["Vuelta por el Atlántico", "$1,749 USD · 13 días", "Nueva York → Bermudas → Azores → Lisboa", "Incluye camarote, comidas, actividades deportivas y acceso a zonas de descanso.", "Atlantic Voyager", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=90"]
        ]
    },
    hoteles: {
        kicker: "DESCANSO Y CONFORT",
        title: "Hoteles",
        description: "Encuentra resorts, hoteles urbanos y alojamientos todo incluido para descansar y disfrutar cada momento.",
        image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=90",
        optionsTitle: "HOTELES PARA CADA ESTILO",
        options: [
            ["Estancia urbana", "$89 USD / noche", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=90"],
            ["Resort todo incluido", "$129 USD / noche", "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=90"],
            ["Villa frente al mar", "$289 USD / noche", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=90"],
            ["Hotel Centro París", "$155 USD / noche", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=90"],
            ["Manhattan City Hotel", "$210 USD / noche", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=90"],
            ["Tokyo Garden Stay", "$135 USD / noche", "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=90"],
            ["Roma Boutique Hotel", "$145 USD / noche", "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=90"],
            ["Dubai Skyline Resort", "$320 USD / noche", "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=90"],
            ["Bali Palm Resort", "$118 USD / noche", "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=800&q=90"],
            ["Santorini Blue Suites", "$265 USD / noche", "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=90"],
            ["Copacabana Beach Hotel", "$125 USD / noche", "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=90"],
            ["Cancún Coral Resort", "$175 USD / noche", "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=90"],
            ["Sydney Harbour Suites", "$230 USD / noche", "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=90"]
        ]
    },
    deportes: {
        kicker: "PASIÓN Y EMOCIÓN",
        title: "Deportes",
        description: "Vive partidos, torneos y eventos deportivos con entradas y experiencias para tus equipos favoritos.",
        image: "sportsballs.png",
        optionsTitle: "ELIGE TU DEPORTE FAVORITO",
        options: [
            ["Vóley", "Desde $35 USD", "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=90"],
            ["Básquet", "Desde $50 USD", "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=90"],
            ["Fútbol americano", "Desde $75 USD", "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=800&q=90"],
            ["Pádel", "Desde $40 USD", "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=90"],
            ["Bádminton", "Desde $30 USD", "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=90"],
            ["Waterpolo", "Desde $45 USD", "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=800&q=90"],
            ["Natación", "Desde $25 USD", "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=90"],
            ["Tenis", "Desde $55 USD", "https://images.unsplash.com/photo-1530915365347-a0e7c2f9c7a1?auto=format&fit=crop&w=800&q=90"],
            ["Béisbol", "Desde $45 USD", "sportsballs.png"],
            ["Softball", "Desde $40 USD", "sportsballs.png"],
            ["Pickleball", "Desde $35 USD", "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=90"],
            ["Ping pong", "Desde $25 USD", "https://images.unsplash.com/photo-1534158914592-062992f30f7a?auto=format&fit=crop&w=800&q=90"]
        ]
    },
    destinos: {
        kicker: "TU PRÓXIMA AVENTURA",
        title: "Destinos",
        description: "Inspírate con playas, ciudades y escapadas únicas diseñadas para viajar, descubrir y crear recuerdos.",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=90",
        optionsTitle: "DESTINOS PARA CADA AVENTURA",
        options: [
            ["Escapada tropical", "$299 USD", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=90"],
            ["Ciudad y cultura", "$599 USD", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=90"],
            ["Aventura sin límites", "$1,499 USD", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=90"],
            ["París, Francia", "$899 USD", "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=90"],
            ["Nueva York, USA", "$799 USD", "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=800&q=90"],
            ["Tokio, Japón", "$1,299 USD", "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=90"],
            ["Roma, Italia", "$949 USD", "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=800&q=90"],
            ["Dubái, Emiratos Árabes", "$1,199 USD", "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=90"],
            ["Bali, Indonesia", "$1,099 USD", "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=90"],
            ["Santorini, Grecia", "$1,149 USD", "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=90"],
            ["Río de Janeiro, Brasil", "$749 USD", "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=800&q=90"],
            ["Cancún, México", "$649 USD", "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=800&q=90"],
            ["Sídney, Australia", "$1,399 USD", "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=90"]
        ]
    },
    ofertas: {
        kicker: "OFERTAS ESPECIALES",
        title: "Todo lo que amas",
        description: "Aprovecha oportunidades especiales para viajar, descansar y vivir experiencias inolvidables.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=90",
        optionsTitle: "OFERTAS DESTACADAS",
        options: [
            ["Plan esencial", "$299 USD", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=90"],
            ["Plan completo", "$699 USD", "imagen pagina inicio.png"],
            ["Plan premium", "$1,299 USD", "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=90"]
        ]
    },
    tienda: {
        kicker: "EQUÍPATE PARA TU PRÓXIMA AVENTURA",
        title: "Tienda Sports Mundiavy",
        description: "Encuentra ropa, calzado, balones y accesorios para acompañarte en cada entrenamiento y aventura.",
        image: "sportsballs.png",
        optionsTitle: "PRODUCTOS DESTACADOS",
        options: [
            ["Pack de balones", "$49.99 USD", "sportsballs.png"],
            ["Sudadera Sports", "$39.99 USD", "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=90"],
            ["Camiseta deportiva", "$24.99 USD", "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=90"],
            ["Tenis Sports Mundiavy Classic", "$79.99 USD", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=90"],
            ["Raqueta de pádel", "$89.99 USD", "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=800&q=90"],
            ["Set de pickleball", "$54.99 USD", "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=90"],
            ["Gorra Sports Mundiavy", "$19.99 USD", "https://images.unsplash.com/photo-1521366097868-1f7b5a6f0f6c?auto=format&fit=crop&w=800&q=90"],
            ["Mochila Sports Mundiavy", "$44.99 USD", "mochila sports mundiavy.png"],
            ["Botella térmica", "$18.99 USD", "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=90"],
            ["Balón de fútbol", "$29.99 USD", "https://images.unsplash.com/photo-1614632537190-23e4146777db?auto=format&fit=crop&w=800&q=90"],
            ["Balón de básquet", "$34.99 USD", "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=90"],
            ["Guantes de entrenamiento", "$27.99 USD", "https://images.unsplash.com/photo-1583473848882-ec190c9ea6b8?auto=format&fit=crop&w=800&q=90"],
            ["Mat de yoga", "$32.99 USD", "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=800&q=90"],
            ["Reloj deportivo", "$69.99 USD", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=90"],
            ["Medias deportivas", "$12.99 USD", "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&w=800&q=90"],
            ["Conjunto deportivo", "$59.99 USD", "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=90"]
        ]
    }
};

const section = new URLSearchParams(window.location.search).get("section") || "experiencias";
const selected = content[section] || content.experiencias;

document.getElementById("detailsKicker").textContent = selected.kicker;
document.getElementById("detailsTitle").textContent = selected.title;
document.getElementById("detailsDescription").textContent = selected.description;
document.getElementById("detailsImage").src = selected.image;
document.getElementById("detailsImage").alt = selected.title;
document.getElementById("optionsTitle").textContent = selected.optionsTitle;
document.title = `Sports Mundiavy | ${selected.title}`;

const detailsContact = document.getElementById("detailsContact");
const contactSubject = `Solicitud de información: ${selected.title}`;
const contactBody = `Hola, me gustaría recibir más información sobre ${selected.title}.\n\nGracias.`;
detailsContact.href = `mailto:natmarmo@outlook.com?subject=${encodeURIComponent(contactSubject)}&body=${encodeURIComponent(contactBody)}`;

if (section === "deportes") {
    document.getElementById("sportsGallery").hidden = false;
}

if (section === "ofertas") {
    document.getElementById("membershipOverview").hidden = false;
}

if (section === "tienda") {
    document.getElementById("detailsLogo").hidden = false;
}

const optionsGrid = document.getElementById("optionsGrid");

selected.options.forEach(function (option) {
    const card = document.createElement("article");
    card.className = `option-card${section === "tienda" ? " store-option" : ""}`;
    const isCruise = section === "cruceros";
    const image = isCruise ? option[5] : option[2];
    const extraInfo = isCruise
        ? `<p class="option-ship"><strong>Barco:</strong> ${option[4]}</p><p class="option-route"><strong>Ruta:</strong> ${option[2]}</p><p>${option[3]}</p>`
        : `<p>Incluye atención personalizada y asistencia para organizar tu experiencia.</p>`;
    card.innerHTML = `
        <div class="option-image-wrap">
            <img src="${image}" alt="${option[0]}">
            ${section === "tienda" ? '<img class="product-logo" src="logo.png" alt="Sports Mundiavy">' : ""}
        </div>
        <div class="option-content">
            <h3>${option[0]}</h3>
            <strong>${option[1]}</strong>
            ${extraInfo}
            <a class="option-button" href="mailto:natmarmo@outlook.com?subject=${encodeURIComponent(`Información sobre ${option[0]}`)}&body=${encodeURIComponent(`Hola, me gustaría recibir más información sobre ${option[0]} de ${selected.title}.`) }">SOLICITAR INFORMACIÓN →</a>
        </div>
    `;
    optionsGrid.appendChild(card);
});
