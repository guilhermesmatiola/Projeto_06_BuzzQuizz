function creatQuizz() {
    cleanPage();
    displayFirstCreationPage();
}

function cleanPage() {
    const principal = document.querySelector("main");
    principal.innerHTML = "";
}


function insertAnswers(){ //insere as questoes na criação de perguntas 
    document.querySelector(".other-question").innerHTML+=`
    <div class="table-question">
        <input class="questions-answers" type="text" placeholder="Texto da pergunta">
        <input class="questions-answers" type="text" placeholder="Cor de fundo da pergunta">
        <h2>Resposta correta</h2>
        <input class="questions-answers" type="text" placeholder="Resposta correta">
        <input class="questions-answers" type="text" placeholder="URL de imagem">
        <h2>Respostas incorretas</h2>
        <input class="questions-answers" type="text" placeholder="Resposta incorreta 1">
        <input class="questions-answers" type="text" placeholder="URL de imagem 1">
        <input class="questions-answers" type="text" placeholder="Resposta incorreta 2">
        <input class="questions-answers" type="text" placeholder="URL de imagem 2">
        <input class="questions-answers" type="text" placeholder="Resposta incorreta 3">
        <input class="questions-answers" type="text" placeholder="URL de imagem 3">
    </div>
    `
}