const { createApp } = Vue
createApp({
    data() {
        return {
        indexList : 0 ,
        newText : "" ,
        todoList : [
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
    methods: {
        // ! INVERTIAMO IL VALORE DI done
        invertDone(indexList) {
            this.todoList[indexList].done = !this.todoList[indexList].done;
        },
        removeText(indexList){
            this.todoList.splice(indexList , 1);
        },
        addNewEl(newText){
            const newEl = {
                "text" : newText ,
                done : false
            }

            this.todoList.push(newEl)
        }
    },
}).mount('#app')
