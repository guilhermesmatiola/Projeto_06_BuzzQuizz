const userQuizzListStoraged = localStorage.getItem("quizzes");

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

