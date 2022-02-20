function getSelectedQuizz(quizzID) {
    let selectedQuizz = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${quizzID}`);
    selectedQuizz.then(showSelectedQuizzOnScreen);
}

function showSelectedQuizzOnScreen(selectedQuizzContent) {
    
    let addBackgroundImage = document.querySelector(".quizz-title-box");
    addBackgroundImage.innerHTML = "";
    addBackgroundImage.innerHTML += `
    <img src="${selectedQuizzContent.data.image}">
    <h3>${selectedQuizzContent.data.title}</h3>`
    
    let addQuestions = document.querySelector(".question-container");
    addQuestions.innerHTML = "";

    if(selectedQuizzContent.data.questions[0].answers.length === 4){
        for(let i = 0; i < selectedQuizzContent.data.questions.length; i++){
            addQuestions.innerHTML += `
            <span style="background-color: ${selectedQuizzContent.data.questions[i].color}">${selectedQuizzContent.data.questions[i].title}</span>
            <div class = "question-box">
                <figure class="image-1 ${selectedQuizzContent.data.questions[i].answers[0].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[0].image}">
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[0].text}</figcaption>
                </figure>
                <figure class="image-2  ${selectedQuizzContent.data.questions[i].answers[1].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[1].image}">
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[1].text}</figcaption>
                </figure>
                <figure class="image-3 ${selectedQuizzContent.data.questions[i].answers[2].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[2].image}">
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[2].text}</figcaption>
                </figure>
                <figure class="image-4 ${selectedQuizzContent.data.questions[i].answers[3].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[3].image}">
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[3].text}</figcaption>
                </figure>
            </div>`
            
        }
    } else if (selectedQuizzContent.data.questions[0].answers.length === 3){
        for(let i = 0; i < selectedQuizzContent.data.questions.length; i++){
            addPerguntas.innerHTML += `
            <span style="background-color: ${selectedQuizzContent.data.questions[i].color}">${selectedQuizzContent.data.questions[i].title}</span>
            <div class = "question-box">
                <figure class="image-1 ${selectedQuizzContent.data.questions[i].answers[0].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[0].image}">
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[0].text}</figcaption>
                </figure>
                <figure class="image-2  ${selectedQuizzContent.data.questions[i].answers[1].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[1].image}">
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[1].text}</figcaption>
                </figure>
                <figure class="image-3 ${selectedQuizzContent.data.questions[i].answers[2].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[2].image}">
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[2].text}</figcaption>
                </figure>
            </div>`
        }
    } else if (conteudo.data.questions[0].answers.length === 2){
        for(let i = 0; i < conteudo.data.questions.length; i++){
            addPerguntas.innerHTML += `
            <span style="background-color: ${selectedQuizzContent.data.questions[i].color}">${selectedQuizzContent.data.questions[i].title}</span>
            <div class = "question-box">
                <figure class="image-1 ${selectedQuizzContent.data.questions[i].answers[0].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[0].image}">
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[0].text}</figcaption>
                </figure>
                <figure class="image-2  ${selectedQuizzContent.data.questions[i].answers[1].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[1].image}">
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[1].text}</figcaption>
                </figure>
            </div>`
        }
    }
}