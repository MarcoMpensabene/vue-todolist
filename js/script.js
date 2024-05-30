const { createApp } = Vue
createApp({
    data() 
    {
        return {
        indexList : 0 ,
        clearContent : "" ,
        todoList : 
        [
            {
                "text" : "Lavare i vestiti" ,
                done : false
            },
            {
                "text" : "Pulire la stanza " ,
                done : false
            },
            {
                "text" : "Fare la spesa" ,
                done : false
            },
            {
                "text" : "Ripassare Vue" ,
                done : false
            },
            {
                "text" : "Guardare ultimo episodio di Spice and Wolf" ,
                done : false
            },
        ]
    }
    } ,
    methods: 
    {
        // ! INVERTIAMO IL VALORE DI done
        invertDone(indexList) {
            this.todoList[indexList].done = !this.todoList[indexList].done;
        },
        removeText(indexList){
            this.todoList.splice(indexList , 1);
        },
        // ? CREIAMO STRUTTURA DELL'OGGETTO PER POI INSERIRLO ALL'INTERNO DELL'ARRAY
        addNewEl(content){
            const newEl = {
                "text" : content ,
                done : false
            }
            this.todoList.push(newEl);
            this.clearInpEl();
        },
        // *   SVUOTIAMO IL CONTENUTO DOPO AVER AGGIUNTO UN ELEMENTO
        clearInpEl(){
            this.clearContent= " ";
        },
        // > MODIFICHIAMO IL VALORE DI TEXT TRAMITE UN PROMPT
        modEl(indexList){
            this.todoList[indexList].text = prompt("Modifica la task");
        }
        
    },
}).mount('#app');
