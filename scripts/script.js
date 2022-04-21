function creatQuizz() {
    cleanPage();
    displayFirstCreationPage();
}

function cleanPage() {
    const principal = document.querySelector("main");
    principal.innerHTML = "";
}

