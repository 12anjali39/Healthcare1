// Patient Registration

const patientForm = document.getElementById("patientForm");

const output = document.getElementById("output");

patientForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const age = document.getElementById("age").value;

    const disease = document.getElementById("disease").value;

    const patientCard = document.createElement("div");

    patientCard.classList.add("card");

    patientCard.innerHTML = `
    
        <h3>${name}</h3>

        <p><b>Age:</b> ${age}</p>

        <p><b>Disease:</b> ${disease}</p>

        <button class="delete-btn">
            Delete Record
        </button>
    
    `;

    // Delete Patient Record

    patientCard.querySelector(".delete-btn")
    .addEventListener("click", function(){

        patientCard.remove();

    });

    output.appendChild(patientCard);

    patientForm.reset();

});


// Appointment Booking

const appointmentForm = document.getElementById("appointmentForm");

const appointmentOutput =
document.getElementById("appointmentOutput");

appointmentForm.addEventListener("submit", function(e){

    e.preventDefault();

    const patientName =
    document.getElementById("patientName").value;

    const doctorName =
    document.getElementById("doctorName").value;

    const appointmentDate =
    document.getElementById("appointmentDate").value;

    const appointmentCard =
    document.createElement("div");

    appointmentCard.classList.add("card");

    appointmentCard.innerHTML = `
    
        <h3>${patientName}</h3>

        <p><b>Doctor:</b> ${doctorName}</p>

        <p><b>Date:</b> ${appointmentDate}</p>

        <button class="delete-btn">
            Delete Appointment
        </button>
    
    `;

    // Delete Appointment

    appointmentCard.querySelector(".delete-btn")
    .addEventListener("click", function(){

        appointmentCard.remove();

    });

    appointmentOutput.appendChild(appointmentCard);

    appointmentForm.reset();

});