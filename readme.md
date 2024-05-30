> Descrizione:
> Rifare l'esercizio della to do list visto insieme a lezione. Ogni oggetto dovra' avere almeno due proprietà:

    text, una stringa che indica il testo del todo
    done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
> Stampare all'interno di una lista HTML un item per ogni todo.
> Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
> Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
> Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante o premendo il tasto invio, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
> 1 - cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
> 2 -  aggiungere un altro bottone che permetta la modifica di un task gia' esistenteBuon lavoro e buon divertimento!


1) Creiamo una lista sull'html da collegare al js tramite vue 
2) Utilizziamo un ciclo for (con vue) per inserire tutto il contenuto degli elementi all'interno dell'elemento della lista
3) Per visualizzare il testo sbarrato ci creiamo una funzione che ci inverte il valore di done da false  a true
4) poi gli andiamo ad dire direttamente nell'elemento che se il valore di done sia uguale true allora ci aggiunge una classe all'elemento che andremo a modificare nel css per sbarrare
5) Aggiungiamo un elemento da clicclare che conterrà il richiamo alla funzione di rimozione del contenuto
6) Per rimuove un elemento da una lista di elementi sapendo l'indice utilizziamo la funzione .splice(index , numero elementi da tagliare) di js
7) Dopo aver formulato la funzione insieriamo un evento click nel nostro bottone/icona/etc con all'interno il richiamo alla funzione
8) Per inserire nuovi elementi per prima cosa creiamo un input dove poter scrivere e una nuova variabile in data dove poter inserire il nuovo oggetto che andremo a creare
9) all'interno della funzione costruiamo un oggetto analogo a quello iniziale che andremo a pushare all'interno del nostro array di partenza 
10) Inseriamo anche un bottone nell'html che al click ci richiami sempre alla funzione di aggiungere un nuovo elmento