class proyect {
    constructor(num, preview, title, view, code){
        this.num = num;
        this.preview = preview;
        this.title = title;
        this.view = view;
        this.code = code;
    }

}

const creditCard= new proyect (1, "img/credit-value.jpg", "Credit Value", "https://Tarjeta-de-validaci-n-4.emerson04sv.repl.co", "https://github.com/Emerson04-sv/Tarjeta-de-validaci-n.git");
const caloriaApp= new proyect (2, "img/caloria-app.jpg", "Caloria App", "https://CaloriasApp-2.emerson04sv.repl.co", "https://github.com/Emerson04-sv/CaloriasApp.git");
const triviaApp= new proyect (3, "img/trivia-app.jpg", "Trivia App", "https://Trivia-App-1.emerson04sv.repl.co", "https://github.com/Emerson04-sv/Trivia-App.git");
const proyects=[creditCard, caloriaApp, triviaApp];

const container = document.getElementById("container-proyect")
/* const numProyect = document.getElementsByClassName("num-proyect");
const preview = document.getElementsByClassName("preview-proyect"); 
const title = document.getElementsByClassName("title-proyect");
const view = document.getElementsByClassName("view-proyect");
const imgView = document.getElementsByClassName("img-view-proyect");
const code = document.getElementsByClassName("code-proyect");
const imgCode = document.getElementsByClassName("img-code-proyect"); */

addProyect();

function addProyect (){
    for(let i=0; i<proyects.length; i++){
        container.innerHTML +=`
        <div>
            <div class="center-proyect">
                <h2 class="num-proyect">${proyects[i].num}</h2>
                <img class="preview-proyect" src="${proyects[i].preview}" alt="proyect">
            </div>
            <div class="code-template">
                <h3 class="title-proyect">${proyects[i].title}</h3>
                <a class="view-proyect" href="${proyects[i].view}" target="_blank">
                    <img class="img-view-proyect img-size" src="img/another-page.svg" alt="View">
                </a>
                <a class="code-proyect" href="${proyects[i].code}" target="_blank">
                    <img class="img-code-proyect img-size img-white" src="img/github.svg" alt="Code">
                </a> 
            </div>
        </div>
        `;
    }  
}
