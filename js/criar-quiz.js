//variáveis
let numberOfQuestions;
let numberOfLevels;
let quizzName;
let quizzImg;

let quizzCreated = {
    title: "",
    image: "",
    questions: [],
    levels: [
        {
            title:"",
            image:"",
            text:"",
            minValue: 0
        }
    ],
}

function form1DataValidation(){
    const form1 = document.querySelector(".form-screen1")
    form1.addEventListener('submit', (e) => {
        e.preventDefault();
    
        numberOfQuestions = parseInt(document.querySelector(".input-numberquestions").value)
        numberOfLevels = parseInt(document.querySelector(".input-numberlevels").value)
        quizzCreated.title = document.querySelector(".input-name").value;
        quizzCreated.image = document.querySelector(".input-img").value
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
        quizzCreated.questions.push(object)
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
                    <input type="text" placeholder="Resposta correta" class="input-rightanswer" required>
                    <input type="url" placeholder="URL da imagem" class="input-img-rigthanswer" required>
                    <h1>Respostas incorretas</h1>
                    <input type="text" placeholder="Resposta incorreta 1" class="input-wronganswer wrong1" required>
                    <input type="url" placeholder="URL da imagem 1" class="input-img-wronganswer imgwrong1" required>
                    <br>
                    <input type="text" placeholder="Resposta incorreta 2" class="input-wronganswer wrong2">
                    <input type="url" placeholder="URL da imagem 2" class="input-img-wronganswer imgwrong2">
                    <br>
                    <input type="text" placeholder="Resposta incorreta 3" class="input-wronganswer wrong3">
                    <input type="url" placeholder="URL da imagem 3" class="input-img-wronganswer imgwrong3">                                                            
                    <br>
                </div>
            </div> <!--Fim da pergunta-->  
        `
    }    
}

function printLevels(){
    let inputLevels = document.querySelector(".input-levels");
    inputLevels.innerHTML = "";
    for(let i=0; i < numberOfLevels; i++){
        inputLevels.innerHTML += `
            <section class="level"><!--Commeço level-->
                <div class="level-top">
                    <h1>Nivel ${i+1}</h1>
                    <button class="edit-question"><ion-icon name="create"></ion-icon></button>
                </div>
                <div class="form-screen3">
                    <input type="text" placeholder="Título do nível">
                    <input type="number" placeholder="% de acerto mínima">
                    <input type="url" placeholder="URL da imagem do nível">
                    <textarea name="" id="descricao-nivel" placeholder="Descrição do nível"></textarea>
                </div>
            </section> <!--Fim level-->
        `
    }    
}

function checkCharacters(){
    const titles = document.querySelectorAll(".input-question-text");
    for(let i=0; i < numberOfQuestions; i++){
        if(titles[i].value.length >= 20){
            quizzCreated.questions[i].title = titles[i].value;
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
            quizzCreated.questions[i].color = colors[i].value;
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
            //quizzCreated.questions[i].answers[i].text = rightAnswers[i].value;
        }else{
            return false;
        }
    }
    return true;
}


//validação tela 2
function checkFields(){
    let a = checkCharacters();
    let b = checkColor();
    let c = checkAnswers();
    if(a == true && b == true && c == true){
        const currentScreen = document.querySelector(".create-screen2");
        const nextScreen = document.querySelector(".create-screen3")
        currentScreen.classList.add("hidden");
        nextScreen.classList.remove("hidden");
        printLevels()
    } else {
        alert("Preencha os campos corretamente!")
    }
}

