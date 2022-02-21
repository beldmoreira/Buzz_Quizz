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

    if(selectedQuizzContent.data.questions[0].answers.length === 4) {
        for(let i = 0; i < selectedQuizzContent.data.questions.length; i++) {
            addQuestions.innerHTML += `
            <div class="question-title" style="background-color: ${selectedQuizzContent.data.questions[i].color}">
            <span>${selectedQuizzContent.data.questions[i].title}</span>
            </div>
            <div class = "question-box">
                <figure class="answerImage ${selectedQuizzContent.data.questions[i].answers[0].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[0].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[0].text}</figcaption>
                </figure>
                <figure class = "answerImage ${selectedQuizzContent.data.questions[i].answers[1].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src = "${selectedQuizzContent.data.questions[i].answers[1].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[1].text}</figcaption>
                </figure>
                <figure class="answerImage ${selectedQuizzContent.data.questions[i].answers[2].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[2].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[2].text}</figcaption>
                </figure>
                <figure class="answerImage ${selectedQuizzContent.data.questions[i].answers[3].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[3].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[3].text}</figcaption>
                </figure>
            </div>`

            //addQuestions = addQuestions.sort(() => Math.random() - 0.5);
            
        }
    } else if (selectedQuizzContent.data.questions[0].answers.length === 3){
        for(let i = 0; i < selectedQuizzContent.data.questions.length; i++){
            addQuestions.innerHTML += `
            <div class="question-title" style="background-color: ${selectedQuizzContent.data.questions[i].color}">
            <span>${selectedQuizzContent.data.questions[i].title}</span>
            </div>
            <div class = "question-box">
                <figure class="image ${selectedQuizzContent.data.questions[i].answers[0].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[0].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[0].text}</figcaption>
                </figure>
                <figure class="image ${selectedQuizzContent.data.questions[i].answers[1].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[1].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[1].text}</figcaption>
                </figure>
                <figure class="image ${selectedQuizzContent.data.questions[i].answers[2].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[2].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[2].text}</figcaption>
                </figure>
            </div>`

            //addQuestions = addQuestions.sort(() => Math.random() - 0.5);

        }
    } else if (selectedQuizzContent.data.questions[0].answers.length === 2){
        for(let i = 0; i < selectedQuizzContent.data.questions.length; i++){
            addQuestions.innerHTML += `
            <div class="question-title" style="background-color: ${selectedQuizzContent.data.questions[i].color}">
            <span>${selectedQuizzContent.data.questions[i].title}</span>
            </div>
            <div class = "question-box">
                <figure class="image ${selectedQuizzContent.data.questions[i].answers[0].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[0].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[2].text}</figcaption>
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[0].text}</figcaption>
                </figure>
                <figure class="image ${selectedQuizzContent.data.questions[i].answers[1].isCorrectAnswer}" onclick="chosenAnswer(this)">
                    <img src="${selectedQuizzContent.data.questions[i].answers[1].image}">
                    <figcaption class = "selectedCaption">${selectedQuizzContent.data.questions[i].answers[2].text}</figcaption>
                    <figcaption>${selectedQuizzContent.data.questions[i].answers[1].text}</figcaption>
                </figure>
            </div>`

            //addQuestions = addQuestions.sort(() => Math.random() - 0.5);
        }
    }
}

function chosenAnswer(answerOptions) {

    let chosenAnswerOption = answerOptions.parentNode;
    let selectingFigures = chosenAnswerOption.children;

    for(let i = 0; i < selectingFigures.length; i++) {
        
        selectingFigures[i].firstElementChild.classList.add("whitened-image");
        selectingFigures[i].setAttribute("onclick", "");

        if(selectingFigures[i].classList.contains('true')) {
            const imageCaption = selectingFigures[i].lastElementChild;
            imageCaption.classList.add("green-text");
        } else {
            const imageCaption = selectingFigures[i].lastElementChild;
            imageCaption.classList.add("red-text");
        }
    }

    answerOptions.classList.remove("whitened-image");

    setTimeout(function() {
        answerOptions.scrollIntoView({behavior: 'smooth', block:'center'})
    }, 2000);

}