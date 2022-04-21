function createQuizz() {
  //  cleanPage();
   // displayFirstCreationPage();

    document.querySelector("main").innerHTML=`
    
    <strong>Começando pelo começo</strong>
        <div class="quizz-creation flex-container">
            <input type="text" placeholder="Título do seu quizz">
            <input type="text" placeholder="URL da imagem do seu quizz">
            <input type="text" placeholder="Quantidade de perguntas do quizz">
            <input type="text" placeholder="Quantidade de níveis do quizz">
        </div>
        <button class="create-question-button" onclick="questionsCreate();">Prosseguir pra criar perguntas</button>
    `

}

function questionsCreate(){
    document.querySelector("main").innerHTML=`
    <div class="quizz-questions">
            <div class="create-questions-title"><strong>Crie suas perguntas</strong></div> 
            <div class="question-box">

                <div class="first-question">
                    <h2>Pergunta ${1}</h2>

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
                    
                </div>

                <div class="other-question">
                    <div class="next-question">
                        <h2>Pergunta ${2}</h2>
                        <img class="vector-image" src="media/Vector.png" onclick="insertAnswers()">
                    </div>
                </div>

                <div class="first-question">
                    <div class="next-question">
                        <h2>Pergunta ${3}</h2>
                        <img class="vector-image" src="media/Vector.png" onclick="insertAnswers()">
                    </div>
                </div>

                <button class="create-levels-button" onclick="levelsCreate();">Prosseguir pra criar níveis</button>

                
            </div>
        </div>
    
    `

}
function levelsCreate(){
    document.querySelector("main").innerHTML=`
    
    <div class="quizz-levels">
            <div class="create-questions-title"><strong>Agora, decida os níveis</strong></div> 

            <div class="question-box">

                <div class="first-question">
                    <h2>Nível ${1}</h2>

                    <div class="table-question">
                        <input class="questions-answers" type="text" placeholder="Título do nível">
                        <input class="questions-answers" type="text" placeholder="% de acerto mínima">
                        <input class="questions-answers" type="text" placeholder="URL de imagem do nível">
                        <input class="questions-answers" type="text" placeholder="Descrição do nível">
                        
                    </div>
                    
                </div>

                <div class="other-question">
                    <div class="next-question">
                        <h2>Nível ${2}</h2>
                        <img class="vector-image" src="media/Vector.png" onclick="insertAnswers()">
                    </div>
                </div>

                <div class="first-question">
                    <div class="next-question">
                        <h2>Nível ${3}</h2>
                        <img class="vector-image" src="media/Vector.png" onclick="insertAnswers()">
                    </div>
                </div>

                <button class="create-levels-button">Finizalizar Quizz</button>

                
            </div>


        </div>
    
    `
}

function cleanPage() {
    const principal = document.querySelector("main");
    principal.innerHTML = "";
}

function homepage(){
    document.querySelector("main").innerHTML=`
    <button onclick="creatQuizz();"><ion-icon name="add-circle"></ion-icon></button> 
        <div class="insert-quizz flex-container">
            <p class="null-quizz">Você ainda não inseriu <br> nenhum quizz :(</p>
            <button class="create-quizz-button" onclick="createQuizz();">Criar Quizz</button>
        </div>
    `
}
homepage(); //cria a pagina inicial ou volta pra ela quando preciso

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
