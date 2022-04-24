const userQuizzListStoraged = localStorage.getItem("quizzes");

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
        ////
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
    if (userQuizzListStoraged === undefined) {
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

