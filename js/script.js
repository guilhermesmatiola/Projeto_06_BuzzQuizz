let listaQuizz = [];
let title;
let image;
let questions;
let levels;
homepage();
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



function homepage(){
    document.querySelector("main").innerHTML=`
    <div class="first-pageQuizzes">
    <button onclick="creatQuizz();"><ion-icon name="add-circle"></ion-icon></button> 
        <div class="insert-quizz flex-container">
            <p class="null-quizz">Você ainda não inseriu <br> nenhum quizz :(</p>
            <button class="create-quizz-button" onclick="createQuizz();">Criar Quizz</button>
        </div>
        <div class="textQuizzTitle">
        <h2> Todos os quizzes</h2>
        </div>

        
    </div>    
    <div class="other-quizzes"></div>
    `;
    getQuizzes();
}
homepage(); //cria a pagina inicial ou volta pra ela quando preciso

function getQuizzes(){ //faz get na lista de quizzes
    let promise = axios.get('https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes');
    promise.then(printQuizzes);
}

function printQuizzes(quizzes){ //mostra a lista de quizzes no html
    let oQuizzes = document.querySelector(".other-quizzes"); // oQuizzes => otherQuizzes
    listaQuizz = quizzes.data;
    console.log(quizzes.data);
    for(i = 0; i < listaQuizz.length; i++){     // ADICIONAR OS QUIZZES DO SERVER
        oQuizzes.innerHTML += ` 
        
        <button onclick="showQuizz(${i})" class="quizzBox"> 
        <img src="${listaQuizz[i].image}" alt="thumb"> 
        <div class="gradient"></div>
        <h4 class="QuizzTitle white"> ${listaQuizz[i].title} </h4>
        </button>`
    }
}

function renderizar(titleQuestion,imageQuestion){
    return `<div class=""gradient">
            <img src="${imageQuestion}"/>
            <span>${titleQuestion}</span>
    `
}

function createQuizz() {
  //  cleanPage();
   // displayFirstCreationPage();

    document.querySelector("main").innerHTML=`
    
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
    document.querySelector("main").innerHTML=`
    <div class="quizz-questions">
            <div class="create-questions-title"><strong>Crie suas perguntas</strong></div> 
     </div>
    `;

    for(let i=0;i<questions;i++){
        document.querySelector("main").innerHTML+=
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
    
    document.querySelector("main").innerHTML+=`
    <button class="create-levels-button" onclick="readINFOQuizzPg2();">Prosseguir pra criar níveis</button>                                
    `;                                          //levelsCreate();
}
function readINFOQuizzPg2() {
    for(let i =0;i<questions;i++){
        question.title=document.getElementById(`a${i+1}1`).value;
        question.color=document.getElementById(`a${i+1}2`).value;
        answer.text=document.getElementById(`a${i+1}3`).value;
        answer.image=document.getElementById(`a${i+1}4`).value;
        answer.isCorrectAnswer=true;//////////////////////////////////////////
        question.answers[0]=answer;
        answer.text=document.getElementById(`a${i+1}5`).value;
        answer.image=document.getElementById(`a${i+1}6`).value;
        answer.isCorrectAnswer=false;
        question.answers[1]=answer;
        answer.text=document.getElementById(`a${i+1}7`).value;
        answer.image=document.getElementById(`a${i+1}8`).value;
        answer.isCorrectAnswer=false;
        question.answers[2]=answer;
        answer.text=document.getElementById(`a${i+1}9`).value;
        answer.image=document.getElementById(`a${i+1}10`).value;
        answer.isCorrectAnswer=false;
        question.answers[3]=answer;

        if(question.title.length<20){
            alert(`a pergunta deve ter mais de 20 caracteres, a sua está com ${question.title.length}`);
            return;
        }
        if(document.getElementById(`a${i+1}3`).value && document.getElementById(`a${i+1}5`) == null){
            alert("o texto das respostas não pode estar vazio");
            return;
        }
        // if(question.color.value[0]!="#"){
        //     alert("a cor de fundo deve começar com # e conter números e letras de 'A' até 'F' (formato hexadecimal)");
        // }
        if(!isValidHttpUrl(answer.image)){
            alert("insira uma URL de imagem");
            return;
        }
        

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
    document.querySelector("main").innerHTML=`
    
    <div class="quizz-levels">
            <div class="create-questions-title"><strong>Agora, decida os níveis</strong></div> 
    </div>
    `
    for(let i=0;i<levels;i++){
        document.querySelector("main").innerHTML+=
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

    
    document.querySelector("main").innerHTML+=`
        <button class="create-levels-button" onclick="readINFOQuizzPg3();">Finalizar Quizz</button>
    `;
}
function readINFOQuizzPg3() {
    for(let i =0;i<levels;i++){
        level.title=document.getElementById(`a${i+1}1`).value;
        level.minValue=document.getElementById(`a${i+1}2`).value;
        level.image=document.getElementById(`a${i+1}3`).value;
        level.text=document.getElementById(`a${i+1}4`).value;
        createdQuizz.levels[i]=level;
    }
    console.log(createdQuizz);
    let promise=axios.post('https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes',createdQuizz);
    promise.then(postedQuizz());
}
function postedQuizz(){
    alert("sucess");
    homepage();
}
//Codigo executado ao iniciar


// function cleanPage() {
//     const principal = document.querySelector("main");
//     principal.innerHTML = "";
// }
