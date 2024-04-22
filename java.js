const emailxInput = document.getElementById("emailx");
const passwordxInput = document.getElementById("passwordx");
const nameInput = document.getElementById("nameInput");
const nameInputDiv = document.getElementById("nameInputDiv"); // Corrected ID
const nameInvalidFeedback = document.getElementById("nameInvalidFeedback");
const fillInput = document.getElementById("valid-para-fill");
const incorrectInput = document.getElementById("valid-para-incorrect");
const logbtn = document.getElementById("logbtn");
const signbtn = document.getElementById("sign");
const title = document.getElementById("title");
const hideName = document.getElementById("hide-name");
const show = document.getElementById("show-name");
const card = document.getElementById("card");

const regName = /^[a-zA-Z\s]+$/;
const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

var userList = JSON.parse(localStorage.getItem("userList")) || [];

function addUser() {
    // Removed (e) parameter
    if (isValidElement(regName, nameInput) && isValidElement(regEmail, emailxInput) && isValidElement(regPassword, passwordxInput)) {
        let name = nameInput.value;
        let email = emailxInput.value;
        let password = passwordxInput.value;
        let user = { name: name, email: email, password: password };

        // Add user to userList
        userList.push(user);

        // Update localStorage with the updated userList
        localStorage.setItem("userList", JSON.stringify(userList));
        console.log(userList);
        alert("User Added");

        // Clear input fields and focus on nameInput
        nameInput.value = "";
        emailxInput.value = "";
        passwordxInput.value = "";
        nameInput.focus();
    } else {
        alert("Please fill all input fields correctly.");
    }
}

function isValidElement(reg, element) {
    if (reg.test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        return true;
    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        return false;
    }
}

hideName.onclick = function() {
    nameInputDiv.classList.replace("d-none", "d-block");
    logbtn.classList.replace("d-block", "d-none");
    signbtn.classList.replace("d-none", "d-block");
    hideName.classList.replace("d-block", "d-none");
    show.classList.replace("d-none", "d-block");
};

// You need to call showe() when you want to show the name input field
function showe() {
    nameInputDiv.classList.replace("d-block", "d-none");
    logbtn.classList.replace("d-none", "d-block");
    signbtn.classList.replace("d-block", "d-none");
    hideName.classList.replace("d-none", "d-block");
    show.classList.replace("d-block", "d-none");
}

logbtn.onclick = function() {
    var emails = userList.map(user => user.email);
    var user = userList.find(user => user.email === emailxInput.value)
    let userName = user ? user.name : "";

    if (emails.includes(emailxInput.value)) {
        card.innerHTML = `<h2 id="title" class="vh-100 align-baseline text-primary"> Welcome <br/><br/> 
            ${userName} </h2>`;
    } else {
        alert("Email not found. Please sign up first.");
    }
};
