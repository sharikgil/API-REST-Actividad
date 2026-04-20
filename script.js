const contenedor = document.getElementById("contenedor");

fetch("https://api-colombia.com/api/v1/President")
    .then(response => response.json())
    .then(data => {

        data.forEach(presidente => {

            const card = document.createElement("div");
            card.classList.add("card");

          card.innerHTML = `
    <img src="${presidente.image}" alt="${presidente.name}" width="100%">
    <h3>${presidente.name}</h3>
    <p><strong>Apellido:</strong> ${presidente.lastName}</p>
    <p><strong>Periodo:</strong> ${presidente.startPeriodDate} - ${presidente.endPeriodDate}</p>
    <p><strong>Partido:</strong> ${presidente.politicalParty}</p>
`;

            contenedor.appendChild(card);
        });

    })
    .catch(error => console.error("Error:", error));