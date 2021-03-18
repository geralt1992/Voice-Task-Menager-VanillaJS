//CONST
const ttableOut = document.getElementById('out');


//FUNKCIJA ZA BRISANJE
function deleteTask(transcript){

    let store = localStorage;
    let tasks = JSON.parse(store.getItem('tasks'));

    //PROVJERAVA DA LI U PORUCI IMA NEKA OD RIJEČI IZ CONDITIONSA, AKO DA VRAĆA TRUE!
    var conditions = ['one' , 1 , 'two' , 2 , 'three' , 3 , 'four' , 4 , 'five' , 5 , 'six' , 6 , 'seven' , 7 , 'eight' , 8 , 'nine' , 9 , 'ten' , 10 ];
    var test = conditions.some(el => transcript.includes(el));


    //maknuti iz lStorea - miče prvi unos
    if(transcript.includes('one') ||transcript.includes(1)){
        tasks.splice(0 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }

    //maknuti iz lStorea - miče drugi unos
    if(transcript.includes('two') ||transcript.includes(2)){
        tasks.splice(1 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }

     //maknuti iz lStorea - miče teći unos
    if(transcript.includes('three') ||transcript.includes(3)){
        tasks.splice(2 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }

     //maknuti iz lStorea - miče četvrti unos
    if(transcript.includes('four') ||transcript.includes(4)){
        tasks.splice(3 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }

    //maknuti iz lStorea - miče peti unos
    if(transcript.includes('five') ||transcript.includes(5)){
        tasks.splice(4 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }

    //maknuti iz lStorea - miče šesti unos
    if(transcript.includes('six') ||transcript.includes(6)){
        tasks.splice(5 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }

    //maknuti iz lStorea - miče sedmi unos
    if(transcript.includes('seven') ||transcript.includes(7)){
        tasks.splice(6 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }

    //maknuti iz lStorea - miče osmi unos
    if(transcript.includes('eight') ||transcript.includes(8)){
        tasks.splice(7 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }

     //maknuti iz lStorea - miče deveti unos
    if(transcript.includes('nine') ||transcript.includes(9)){
        tasks.splice(8 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }

    //maknuti iz lStorea - miče deseti unos
    if(transcript.includes('ten') ||transcript.includes(10)){
        tasks.splice(9 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }
}

export {deleteTask};
