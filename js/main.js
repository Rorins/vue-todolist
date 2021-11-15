// Partire dalla definizione di un array con 3 oggetti ( i todo).
// Ogni oggetto todo avrà le seguenti proprietà:
// - text, una stringa che indica il testo del todo
// - completed, un booleano (true/false) che indica se il todo è stato completato oppure no

const app = new Vue({
    el:"#root",
    data:{
     toDo: [
         {
             text: "Accarezzare micio",
             completed:false
         },
         {
             text:"Pulire lettiera",
             completed:true
         },
         {
             text:"Dare croccantini",
             completed:false
         }
     ],
     newToDo:"",
    },
//     MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, 
// il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto
//  alla lista dei todo esistenti.
    methods:{
        addToDo(){
            if(this.newToDo !== ""){
                //Aggiunta ToDo
                //Creiamo il nuovo oggetto che pusheremo nell'array
                this.toDo.unshift({
                    text: this.newToDo,
                    completed: false,
                });
            //Puliamo lo spazio
            this.newToDo = "";
            }
        },
//         MILESTONE 2
// Visualizzare a fianco di ogni todo una “x”:
//  cliccando su di essa, il todo viene rimosso dalla lista.
//Rimuoviamo ToDo
        removeToDo(index){
            console.log(index);
            this.toDo.splice(index, 1);
        }
    }
});