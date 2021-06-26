class proyect {
    constructor(num, preview, title, view, code){
        this.num = num;
        this.preview = preview;
        this.title = title;
        this.view = view;
        this.code = code;
    }
}

const creditCard= new proyect (1, "img/credit-value.JPG", "Credit Value", "https://Tarjeta-de-validaci-n-4.emerson04sv.repl.co", "https://github.com/Emerson04-sv/Tarjeta-de-validaci-n.git");
const caloriaApp= new proyect (2, "img/caloria-app.JPG", "Caloria App", "https://CaloriasApp-2.emerson04sv.repl.co", "https://github.com/Emerson04-sv/CaloriasApp.git");
const triviaApp= new proyect (3, "img/trivia-app.JPG", "Trivia App", "https://Trivia-App-1.emerson04sv.repl.co", "https://github.com/Emerson04-sv/Trivia-App.git");
const proyects=[creditCard, caloriaApp, triviaApp];
