let title;
let image;
let questions;
let levels;
let createdQuizz = {

    title: "Título do quizz",
    image: "https://t.ctcdn.com.br/5XPASDBUosgmBv5Ptpxcd6eTJso=/512x288/smart/filters:format(webp)/i257652.jpeg",
    questions: [],
    levels: []
};
let question={
    title: "Título da pergunta 1",
    color: "#123456",
    answers: []
};
let answer={
    text: "Texto da resposta 1",
    image: "https://t.ctcdn.com.br/5XPASDBUosgmBv5Ptpxcd6eTJso=/512x288/smart/filters:format(webp)/i257652.jpeg",
    isCorrectAnswer: true
};
let level ={
    title: "Título do nível 1",
    image: "https://t.ctcdn.com.br/5XPASDBUosgmBv5Ptpxcd6eTJso=/512x288/smart/filters:format(webp)/i257652.jpeg",
    text: "Descrição do nível 1",
    minValue: 0
};
const userQuizzListStoraged = localStorage.getItem("quizzes");
const mainDiv = document.querySelector("main");


function homepage(){
    getUserQuizzes();
    getQuizzes();
}

function getUserQuizzes() {
    if (userQuizzListStoraged === null) {
        mainDiv.innerHTML =`
            <div class="first-pageQuizzes">
                <div class="insert-quizz flex-container">
                    <p class="null-quizz">Você ainda não inseriu <br> nenhum quizz :(</p>
                    <button class="create-quizz-button" onclick="createQuizz();">Criar Quizz</button>
                </div>  
            </div>
            <h2> Todos os quizzes</h2>
            <div class="other-quizzes"></div>
            `;
    } // else {
    //     //<button onclick="createQuizz();"><ion-icon name="add-circle"></ion-icon></button> 
    // }
}

function getQuizzes(){ //faz get na lista de quizzes
    let promise = axios.get('https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes');
    promise.then(printQuizzes);
}

function printQuizzes(quizzes){ //mostra a lista de quizzes no html
    const otherQuizzes = document.querySelector(".other-quizzes");
    const listaQuizz = quizzes.data;
    console.log(listaQuizz);
    for (let i = 0; i < listaQuizz.length; i++) {
        otherQuizzes.innerHTML += ` 
        
        <button onclick="openQuizz(${listaQuizz[i].id})" class="quizzBox"> 
        <img src="${listaQuizz[i].image}" alt="thumb"> 
        <div class="gradient"></div>
        <h4 class="QuizzTitle white"> ${listaQuizz[i].title} </h4>
        </button>`;
    }
}

function renderizar(titleQuestion,imageQuestion){
    return `<div class=""gradient">
            <img src="${imageQuestion}"/>
            <span>${titleQuestion}</span>
    `
}

function createQuizz() {
    mainDiv.innerHTML=`
    <strong>Começando pelo começo</strong>
        <div class="quizz-creation flex-container">
            <input id="i1" type="text" minlength="20" maxlength="65" required placeholder="Título do seu quizz">
            <input id="i2" type="url" required placeholder="URL da imagem do seu quizz">
            <input id="i3" placeholder="Quantidade de perguntas do quizz" type="number" min="3" required>
            <input id="i4" placeholder="Quantidade de níveis do quizz" type="number" min="2" required>
        </div>
        <button class="create-question-button" onclick="readINFOSQuizz();">Prosseguir pra criar perguntas</button>
    `
                                                      //questionsCreate();
}

function readINFOSQuizz(){
    title=document.getElementById("i1").value;
    image=document.getElementById("i2").value;
    questions=document.getElementById("i3").value;
    levels=document.getElementById("i4").value;    

    if(title.length<20 || title.length>65){
        alert(`escolha um título entre 20 e 65 caracteres. O seu está com ${title.length}`);
        return;
    }
    if(!isValidHttpUrl(image)){
        alert('Insira uma url de imagem')
        return;
    }
    if(questions<3){
        alert('São necessárias 3 perguntas no minimo para o quizz');
        return;
    }
    if(levels<2){
        alert('São necessárias 2 níveis no minimo para o quizz');
        return;
    }

    console.log("title: "+title);
    createdQuizz.title=title;

    console.log("createdquizz.title: "+createdQuizz.title);
    createdQuizz.image=image;
    questionsCreate();
}
function isValidHttpUrl(string) { //verifica se a string é url
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
    return true;
}

function questionsCreate(){
    mainDiv.innerHTML=`
    <div class="quizz-questions">
            <div class="create-questions-title"><strong>Crie suas perguntas</strong></div> 
     </div>
    `;

    for(let i=0;i<questions;i++){
        mainDiv.innerHTML+=
        `
        <div class="quizz-questions">
               <div class="question-box">
   
                   <div class="first-question">
                       <h2>Pergunta ${i+1}</h2>
   
                       <div class="table-question">
                           <input id="a${i+1}1" class="questions-answers" type="text" placeholder="Texto da pergunta">
                           <input id="a${i+1}2" class="questions-answers" type="text" placeholder="Cor de fundo da pergunta">
                           <h2>Resposta correta</h2>
                           <input id="a${i+1}3" class="questions-answers" type="text" placeholder="Resposta correta">
                           <input id="a${i+1}4" class="questions-answers" type="url" placeholder="URL de imagem">
                           <h2>Respostas incorretas</h2>
                           <input id="a${i+1}5" class="questions-answers" type="text" placeholder="Resposta incorreta 1">
                           <input id="a${i+1}6" class="questions-answers" type="url" placeholder="URL de imagem 1">
                           <input id="a${i+1}7" class="questions-answers" type="text" placeholder="Resposta incorreta 2">
                           <input id="a${i+1}8" class="questions-answers" type="url" placeholder="URL de imagem 2">
                           <input id="a${i+1}9" class="questions-answers" type="text" placeholder="Resposta incorreta 3">
                           <input id="a${i+1}10" class="questions-answers" type="url" placeholder="URL de imagem 3">
                       </div>
                       
                   </div>
   
   
                  
   
                   
               </div>
           </div>
       
       `
    }
    
    mainDiv.innerHTML+=`
    <button class="create-levels-button" onclick="readINFOQuizzPg2();">Prosseguir pra criar níveis</button>                                
    `;                                          //levelsCreate();
}
function readINFOQuizzPg2() {
    for(let i =0;i<questions;i++){
        question.title=document.getElementById(`a${i+1}1`).value;
        if(question.title.length<20){
            alert(`a pergunta deve ter mais de 20 caracteres, a sua está com ${question.title.length}`);
            return;
        }
        question.color=document.getElementById(`a${i+1}2`).value;
        // if(question.color.value[0]!="#"){
        //     alert("a cor de fundo deve começar com # e conter números e letras de 'A' até 'F' (formato hexadecimal)");
        // }
        answer.text=document.getElementById(`a${i+1}3`).value;
        if(answer.text==""){
            alert("Insira um texto para a resposta");
            return;
        }
        answer.image=document.getElementById(`a${i+1}4`).value;
        if(!isValidHttpUrl(answer.image)){
            alert("Insira uma URL de imagem valida");
            return;
        }
        answer.isCorrectAnswer=true;//////////////////////////////////////////
        question.answers[0]=answer;

        answer.text=document.getElementById(`a${i+1}5`).value;
        if(answer.text==""){
            alert("Insira um texto para a resposta");
            return;
        }
        answer.image=document.getElementById(`a${i+1}6`).value;
        answer.image=document.getElementById(`a${i+1}4`).value;
        if(!isValidHttpUrl(answer.image)){
            alert("Insira uma URL de imagem valida");
            return;
        }
        answer.isCorrectAnswer=false;
        question.answers[1]=answer;

        answer.text=document.getElementById(`a${i+1}7`).value;
        if(answer.text==""){
            alert("Insira um texto para a resposta");
            return;
        }
        answer.image=document.getElementById(`a${i+1}8`).value;
        if(!isValidHttpUrl(answer.image)){
            alert("Insira uma URL de imagem valida");
            return;
        }
        answer.isCorrectAnswer=false;
        question.answers[2]=answer;

        answer.text=document.getElementById(`a${i+1}9`).value;
        if(answer.text==""){
            alert("Insira um texto para a resposta");
            return;
        }
        answer.image=document.getElementById(`a${i+1}10`).value;
        if(!isValidHttpUrl(answer.image)){
            alert("Insira uma URL de imagem valida");
            return;
        }
        answer.isCorrectAnswer=false;
        question.answers[3]=answer;

        
        // if(document.getElementById(`a${i+1}3`).value && document.getElementById(`a${i+1}5`) == null){
        //     alert("o texto das respostas não pode estar vazio");
        //     return;
        // }
        
        

        createdQuizz.questions[i]=question;
    }
    function isValidHttpUrl(string) { //verifica se a string é url
        let url;
        try {
          url = new URL(string);
        } catch (_) {
          return false;  
        }
        return true;
    }

    levelsCreate();
}

function levelsCreate(){
    mainDiv.innerHTML=`
    
    <div class="quizz-levels">
            <div class="create-questions-title"><strong>Agora, decida os níveis</strong></div> 
    </div>
    `
    for(let i=0;i<levels;i++){
        mainDiv.innerHTML+=
        `
            <div class="question-box">

                <div class="first-question">
                    <h2>Nível ${i+1}</h2>

                    <div class="table-question">
                        <input id="a${i+1}1" class="questions-answers" type="text" placeholder="Título do nível">
                        <input id="a${i+1}2" class="questions-answers" type="number" placeholder="% de acerto mínima">
                        <input id="a${i+1}3" class="questions-answers" type="url" placeholder="URL de imagem do nível">
                        <input id="a${i+1}4" class="questions-answers" type="text" placeholder="Descrição do nível">
                        
                    </div>
                    
                </div>

                

                

                
            </div>
    `
    }

    
    mainDiv.innerHTML+=`
        <button class="create-levels-button" onclick="readINFOQuizzPg3();">Finalizar Quizz</button>
    `;
}

function readINFOQuizzPg3() {
    let levelzero=false;
    for(let i =0;i<levels;i++){
        //
        level.title=document.getElementById(`a${i+1}1`).value;
        if(level.title.length<10){
            alert(`O titulo do nível deve ter mais de 10 caracteres, o seu está com ${question.title.length}`);
            return;
        }
        //
        level.minValue=document.getElementById(`a${i+1}2`).value;
        if(level.minValue=="0"){
            levelzero=true;
        }
        if(!(level.minValue>=0 || level.minValue<=100)){
            alert('Os níveis vão de 0 a 100. Insira um nessa faixa')
        }
        ///
        level.image=document.getElementById(`a${i+1}3`).value;
        if(!isValidHttpUrl(level.image)){
            alert("Insira um URL de imagem válida");
        }
        function isValidHttpUrl(string) { //verifica se a string é url
            let url;
            try {
              url = new URL(string);
            } catch (_) {
              return false;  
            }
            return true;
        }
        level.text=document.getElementById(`a${i+1}4`).value;
        if(level.text.length<30){
            alert("Escolha uma descrição com mais de 30 caracteres");
            return;
        }
        createdQuizz.levels[i]=level;
    }
    if(levelzero==false){
        alert("Pelo menos um dos níveis deve ter o valor 0");
        createQuizzPg3();
    }
    console.log(createdQuizz);
    let promise=axios.post('https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes',createdQuizz);
    promise.then(saveQuizzes);
}

function saveQuizzes(quizz) {
    if (userQuizzListStoraged === null) {
        const userQuizz = [];
        userQuizz.push(quizz.data.id);
        const userQuizzSerialized = JSON.stringify(userQuizz);
        localStorage.setItem("quizzes", userQuizzSerialized);
    } else {
        const userQuizzListDeserialized = JSON.parse(userQuizzListStoraged);
        userQuizzListDeserialized.push(quizz.data.id);
        const userQuizzListSerialized = JSON.stringify(userQuizzListDeserialized);
        localStorage.setItem("quizzes", userQuizzListSerialized);
    }   
}

function openQuizz(quizzId) {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${quizzId}`);
    promise.then((requestedQuizz) => {
        mainDiv.innerHTML = `
        <div class="quizz-title flex-container" style="background-image: url(${requestedQuizz.image});">
            <h3>Título do quizz</h3>
        </div>
        <ul>
        </ul>`
        const list = document.querySelector("ul");
        requestedQuizz.data.questions.map((question) => {
            console.log(question)
            randomizeAnswers(question);
            list.innerHTML = `<div class="answers-box flex-container">
            <div class="colored-question-box flex-container" style="background-color: ${question.color};"><p>${question.title}</p></div>
            <div class="answers flex-container">
                    <div class="answers-options">
                        <img src="${question.answers[0].image}">
                        <p>${question.answers[0].text}</p>
                    </div>
                    <div class="answers-options">
                        <img src="${question.answers[1].image}">
                        <p>${question.answers[1].text}</p>
                    </div>
                    <div class="answers-options">
                        <img src="${question.answers[2].image}">
                        <p>${question.answers[2].text}</p>
                    </div>
                    <div class="answers-options">
                        <img src="${question.answers[3].image}">
                        <p>${question.answers[3].text}</p>
                    </div>
                </div>
            </div>`
        });
    });
}

function randomizeAnswers(questionObject) {
    
}

homepage();