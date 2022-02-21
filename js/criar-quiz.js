//variáveis
let numberOfQuestions;
let numberOfLevels;
let quizzName;
let quizzImg;

let quizzCreated = {
    title: "",
    image: "",
    questions: [],
    levels: [],
}

function form1DataValidation(){
    const form1 = document.querySelector(".form-screen1")
    form1.addEventListener('submit', (e) => {
        e.preventDefault();
    
        numberOfQuestions = parseInt(document.querySelector(".input-numberquestions").value)
        numberOfLevels = parseInt(document.querySelector(".input-numberlevels").value)
        quizzName = document.querySelector(".input-name").value;
        quizzImg = document.querySelector(".input-img").value;
        quizzCreated.title = quizzName;
        quizzCreated.image = quizzImg;
        createFirstScreen();
    })
    
}

function createFirstScreen(){
    const firstScreen = document.querySelector(".create-screen1");
    const secondScreen = document.querySelector(".create-screen2");
    firstScreen.classList.add("hidden");
    secondScreen.classList.remove("hidden");  
    printQuestions();  
}

function printQuestions(){
    let inputQuestions = document.querySelector(".input-questions");
    inputQuestions.innerHTML = ""

    let object = {
        title:"",
        color:"",
        answers: [
            {
                text:"",
                image:"",
                isCorrectAnswer: true
            }
        ]
    }

    for(let i=0; i < numberOfQuestions; i++){
        inputQuestions.innerHTML += `
            <div class="question"> <!--Começo da pergunta-->
                <div class="question-top">
                    <h1>Pergunta ${i+1}</h1>
                    <button class="edit-question"><ion-icon name="create"></ion-icon></button>
                </div>
                <div class="form-screen2 question${i+1}">
                    <input type="text" placeholder="Texto da pergunta" class="input-question-text" required>
                    <input type="text" placeholder="Cor de fundo da pergunta" value="#" class="input-question-background" required>
                    <h1>Resposta correta</h1>
                    <input type="text" placeholder="Resposta correta" class="input-rightanswer answer" required>
                    <input type="url" placeholder="URL da imagem" class="input-img rigthanswer" required>
                    <h1>Respostas incorretas</h1>
                    <input type="text" placeholder="Resposta incorreta 1" class="input-wronganswer wrong1 answer" required>
                    <input type="url" placeholder="URL da imagem 1" class="input-img wronganswer imgwrong1" required>
                    <br>
                    <input type="text" placeholder="Resposta incorreta 2" class="input-wronganswer wrong2 answer">
                    <input type="url" placeholder="URL da imagem 2" class="input-img wronganswer imgwrong2">
                    <br>
                    <input type="text" placeholder="Resposta incorreta 3" class="input-wronganswer wrong3 answer">
                    <input type="url" placeholder="URL da imagem 3" class="input-img wronganswer imgwrong3">                                                            
                    <br>
                </div>
            </div> <!--Fim da pergunta-->  
        `
    }    
}

function printLevels(){
    let inputLevels = document.querySelector(".input-levels");
    inputLevels.innerHTML = "";

    let object = {
        title:"",
        image:"",
        text:"",
        minValue: 0
    }

    for(let i=0; i < numberOfLevels; i++){
        quizzCreated.levels.push(object)
        inputLevels.innerHTML += `
            <section class="level"><!--Commeço level-->
                <div class="level-top">
                    <h1>Nivel ${i+1}</h1>
                    <button class="edit-question"><ion-icon name="create"></ion-icon></button>
                </div>
                <div class="form-screen3">
                    <input type="text" class="input-level-title" placeholder="Título do nível">
                    <input type="number" class="input-level-minimum" placeholder="% de acerto mínima" min = "0" max = "100">
                    <input type="url" class="input-level-img" placeholder="URL da imagem do nível">
                    <textarea name="" id="level-description" class="input-level-description" placeholder="Descrição do nível"></textarea>
                </div>
            </section> <!--Fim level-->
        `
    }    
}

//Validações perguntas

function checkCharactersQuestion(){
    const titles = document.querySelectorAll(".input-question-text");
    for(let i=0; i < numberOfQuestions; i++){
        if(titles[i].value.length >= 20){
        }else{
            return false
        }
    }
    return true
}


function checkColor(){
    let colors = document.querySelectorAll(".input-question-background");
    for(let i=0; i < numberOfQuestions; i++){
        if(colors[i].value.length === 7 && colors[i].value[0] === '#'){
        }else{
            return false;
        }
    }
    return true;
}

function checkAnswers(){
    let rightAnswers = document.querySelectorAll(".input-rightanswer");
    let wrongAnswers = document.querySelectorAll(".wrong1");
    for(let i=0; i < numberOfQuestions; i++){
        if(rightAnswers[i].value !== '' && wrongAnswers[i].value !== ''){
        }else{
            return false;
        }
    }
    return true;
}

function getQuestions(){
    for(let i = 0; i < numberOfQuestions; i++){
        let title = document.querySelector(`.question${i+1} .input-question-text`).value;
        let color = document.querySelector(`.question${i+1} .input-question-background`).value;
       // let answers = getAnswers(`.question${i+1}`);

        question = {
            title: title,
            color: color,
         // answers: answers
        }

        quizzCreated.questions.push(question);
    }
}

function getAnswers(where){
    let allAnswers = []

    let ans = document.querySelectorAll(`${where} .answer`);
    let img = document.querySelectorAll(`${where} .input-img`)

    for(let i = 0; i < (numberOfQuestions*4); i++){
        let title = ans[i].value;
        let background = img[i].value;
        if(title !== '' && ans[i].classList.contains(".input-rightanswer")){
            let obj = {
                text: title,
                image: img[i].value,
                isCorrectAnswer: true
            }

            allAnswers.push(obj);

        }else if(ans[i].value !== '' && !ans[i].classList.contains(".input-rightanswer")){
            let obj = {
                text: ans[i].value,
                image:img[i].value,
                isCorrectAnswer: false
            }
            allAnswers.push(obj);
        }
    }

    return allAnswers
}

function form2DataValidation(){
    let a = checkCharactersQuestion();
    let b = checkColor();
    let c = checkAnswers();
    if(a == true && b == true && c == true){
        getQuestions();
        const currentScreen = document.querySelector(".create-screen2");
        const nextScreen = document.querySelector(".create-screen3")
        currentScreen.classList.add("hidden");
        nextScreen.classList.remove("hidden");
        printLevels()
    } else {
        alert("Preencha os campos corretamente!")
    }
}


//validação níveis
function checkCharactersTitle(){
    let titles = document.querySelectorAll(".input-level-title");
    for(let i=0; i < numberOfLevels; i++){
        if(titles[i].value.length >= 10){
            return true;
        } else{
            return false
        }
    }
}

function checkURL(url){}

function checkPercentage(){
    let valueLevel = document.querySelectorAll(".input-level-minimum")
    for(let i=0; i < numberOfLevels; i++){
        if (valueLevel[i].value > 100 || valueLevel[i].value < 0){
            return false;
        } else {
            return true;
        }
    }
}

function checkDescription(){
    let description = document.querySelectorAll(".input-level-description")
    for(let i=0; i < numberOfLevels; i++){
        if (description[i].value.length <= 30){
            return false;
        } else{
            return true
        }
    }
}

function checkPercentage0(){
    let valueLevel = document.querySelectorAll(".input-level-minimum")
    for(let i=0; i < numberOfLevels; i++){
        if(valueLevel[i] === 0){
            return true
        }else{}
    
    return false
    }
}

function form3DataValidation(){
    let a = checkCharactersTitle();
    let b = checkPercentage();
    let c = checkDescription();
    let d = checkPercentage0();

    if(a == true && b == true && c == true && d == true){
        const currentScreen = document.querySelector(".create-screen3");
        const nextScreen = document.querySelector(".create-screen4")
        currentScreen.classList.add("hidden");
        nextScreen.classList.remove("hidden");
        printQuizz();
    } else {
        alert("Preencha os campos corretamente!")
    }
}

function printQuizz(){
    let lastScreen = document.querySelector(".all-done-quizz")
    lastScreen.innerHTML = ""
    lastScreen.innerHTML += `
        <div class ="color-changes">  
        </div>
        <img class="quizz-image" src="${quizzImg}" alt="">
        <p class ="quizzes-titles font">${quizzName}</p> 
    `

    resetVariables();
}

function resetVariables(){
    let numberOfQuestions;
    let numberOfLevels;
    let quizzName;
    let quizzImg;

    let quizzCreated = {
        title: "",
        image: "",
        questions: [],
        levels: [],
    }
}

function returnHome(){
    const currentScreen = document.querySelector(".create-screen4");
    const nextScreen = document.querySelector(".first-screen")
    currentScreen.classList.add("hidden");
    nextScreen.classList.remove("hidden");
}