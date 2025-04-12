document.addEventListener("DOMContentLoaded", function () {
    const selectPerson = document.getElementById("selectPerson");
    const tipoUsuarioContainer = document.getElementById("tipoUsuarioContainer");
    const alunoFields = document.querySelectorAll(".aluno-field");
    const professorFields = document.querySelectorAll(".professor-field");
    const cadastrarBtn = document.getElementById("cadastrarBtn");
    const profileContent = document.querySelector(".profile-content");
    const successMessage = document.getElementById("successMessage");
 
    function toggleFields() {
        const selected = selectPerson.value;
 
        alunoFields.forEach(field => field.style.display = "none");
        professorFields.forEach(field => field.style.display = "none");
 
        if (selected === "Aluno") {
            alunoFields.forEach(field => field.style.display = "flex");
        } else if (selected === "Professor") {
            professorFields.forEach(field => field.style.display = "flex");
        }
    }
 
    selectPerson.addEventListener("change", toggleFields);
    toggleFields();
 
    cadastrarBtn.addEventListener("click", function () {
        profileContent.style.display = "none";
        successMessage.style.display = "block";
        tipoUsuarioContainer.style.display = "none";
    });
});

// Consumo da API