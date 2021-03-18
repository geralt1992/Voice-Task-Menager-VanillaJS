export {voiceMessage};

const doneBtn = document.getElementById('doneTask');
const youSaidOutput = document.getElementById('youSaid');
const tableOut = document.getElementById('doneOut');
const clearDoneTasksBtn = document.getElementById('clearDoneTasks');



let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

doneBtn.addEventListener('click' , (e) => {
    e.preventDefault();

    recognition.start();

});



//FUNKCIJA ZA VOICE MESSAGEOM
function voiceMessage(){

    let speech = new SpeechSynthesisUtterance();
    speech.text = "Speak";

    let synt =  window.speechSynthesis;
    synt.speak(speech);
}


//GLAVNA INICIJACIJA S
recognition.onstart = function() {
    console.log('voice is activited, speak now!');
    voiceMessage();
}


 //event hold string a we talking about - sad imamo dostupno sve što kažemo
recognition.onresult = function(event) {

    //access to izgovorenu poruku
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;

    //show what user said
    youSaidOutput.innerHTML = transcript;

    //filter control word
    DoneControlWord(transcript);

}

recognition.onend = function(event) {
    console.log('GOTOVO');
}


//FUNKCIJA KOJA PROVJERAVA DA LI IMA RIJEČ OK
function DoneControlWord(transcript){
    console.log(transcript);

     //PROVJERAVA DA LI U PORUCI IMA NEKA OD RIJEČI IZ CONDITIONSA, AKO DA VRAĆA TRUE!
        var conditions = ['ok'];
        var test = conditions.some(el => transcript.includes(el));

    //ako nema kontrolne riječi
    if(!test){
        alert(`You Said: "${transcript}" --- at the end use command words (OK)`);
    }

    //za dodavanje
    if(transcript.includes('ok')){
        checkTaskInLocalStorage(transcript);
    }
}




//FUNKCIJA KOJA MIČE IZ PENDING TASKA ZADATAK I STAVLJA GA U NOVU TABLICU DONE TASKS
function checkTaskInLocalStorage(transcript){

    let store = localStorage;
    let CurrentTasks = JSON.parse(store.getItem('tasks'));

    var conditions = ['one' , 1 , 'two' , 2 , 'three' , 3 , 'four' , 4 , 'five' , 5 , 'six' , 6 , 'seven' , 7 , 'eight' , 8 , 'nine' , 9 , 'ten' , 10 ];
    var test = conditions.some(el => transcript.includes(el));

    if(!test){
        alert(`You Said: "${transcript}" --- use number of undone task`);
    }


    if(transcript.includes('one') ||transcript.includes(1)){

        //SPREMA OBAVLJENI ZADATAK U L STORAGE
        let task = CurrentTasks[0].task;

            let DoneTask = {
                task : task
            }
           // console.log(DoneTask);
            if(store.getItem('DoneTasks') === null){
                let doneTasks = [];
                doneTasks.push(DoneTask);
                store.setItem('DoneTasks' , JSON.stringify(doneTasks));
            }else{
                let doneTasks = JSON.parse(store.getItem('DoneTasks'));
                doneTasks.push(DoneTask);
                store.setItem('DoneTasks' , JSON.stringify(doneTasks));
            }

        //obriši iz localStoragea iz tablice tasks

        let tasks = JSON.parse(store.getItem('tasks'));
        tasks.splice(0 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }


    if(transcript.includes('two') ||transcript.includes(2)){
        //SPREMA OBAVLJENI ZADATAK U L STORAGE
        let task = CurrentTasks[1].task;

            let DoneTask = {
                task : task
            }

            if(store.getItem('DoneTasks') === null){
                let doneTasks = [];
                doneTasks.push(DoneTask);
                store.setItem('DoneTasks' , JSON.stringify(doneTasks));
            }else{
                let doneTasks = JSON.parse(store.getItem('DoneTasks'));
                doneTasks.push(DoneTask);
                store.setItem('DoneTasks' , JSON.stringify(doneTasks));
            }

        //obriši iz localStoragea iz tablice tasks

            let tasks = JSON.parse(store.getItem('tasks'));
            tasks.splice(1 , 1);
            store.setItem('tasks' , JSON.stringify(tasks));
    }



    if(transcript.includes('three') ||transcript.includes(3)){
       //SPREMA OBAVLJENI ZADATAK U L STORAGE
        let task = CurrentTasks[2].task;

        let DoneTask = {
            task : task
        }

        if(store.getItem('DoneTasks') === null){
            let doneTasks = [];
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }else{
            let doneTasks = JSON.parse(store.getItem('DoneTasks'));
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }

    //obriši iz localStoragea iz tablice tasks

        let tasks = JSON.parse(store.getItem('tasks'));
        tasks.splice(2 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }


    if(transcript.includes('four') ||transcript.includes(4)){
        //SPREMA OBAVLJENI ZADATAK U L STORAGE
        let task = CurrentTasks[3].task;

        let DoneTask = {
            task : task
        }

        if(store.getItem('DoneTasks') === null){
            let doneTasks = [];
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }else{
            let doneTasks = JSON.parse(store.getItem('DoneTasks'));
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }

    //obriši iz localStoragea iz tablice tasks

        let tasks = JSON.parse(store.getItem('tasks'));
        tasks.splice(3 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }


    if(transcript.includes('five') ||transcript.includes(5)){
       //SPREMA OBAVLJENI ZADATAK U L STORAGE
        let task = CurrentTasks[4].task;

        let DoneTask = {
            task : task
        }

        if(store.getItem('DoneTasks') === null){
            let doneTasks = [];
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }else{
            let doneTasks = JSON.parse(store.getItem('DoneTasks'));
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }

    //obriši iz localStoragea iz tablice tasks

        let tasks = JSON.parse(store.getItem('tasks'));
        tasks.splice(4 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }


    if(transcript.includes('six') ||transcript.includes(6)){
       //SPREMA OBAVLJENI ZADATAK U L STORAGE
        let task = CurrentTasks[5].task;

        let DoneTask = {
            task : task
        }

        if(store.getItem('DoneTasks') === null){
            let doneTasks = [];
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }else{
            let doneTasks = JSON.parse(store.getItem('DoneTasks'));
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }

    //obriši iz localStoragea iz tablice tasks

        let tasks = JSON.parse(store.getItem('tasks'));
        tasks.splice(5 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }


    if(transcript.includes('seven') ||transcript.includes(7)){
        //SPREMA OBAVLJENI ZADATAK U L STORAGE
        let task = CurrentTasks[6].task;

        let DoneTask = {
            task : task
        }

        if(store.getItem('DoneTasks') === null){
            let doneTasks = [];
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }else{
            let doneTasks = JSON.parse(store.getItem('DoneTasks'));
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }

    //obriši iz localStoragea iz tablice tasks

        let tasks = JSON.parse(store.getItem('tasks'));
        tasks.splice(6 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }


    if(transcript.includes('eight') ||transcript.includes(8)){
        //SPREMA OBAVLJENI ZADATAK U L STORAGE
        let task = CurrentTasks[7].task;

        let DoneTask = {
            task : task
        }

        if(store.getItem('DoneTasks') === null){
            let doneTasks = [];
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }else{
            let doneTasks = JSON.parse(store.getItem('DoneTasks'));
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }

    //obriši iz localStoragea iz tablice tasks

        let tasks = JSON.parse(store.getItem('tasks'));
        tasks.splice(7 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }


    if(transcript.includes('nine') ||transcript.includes(9)){
        //SPREMA OBAVLJENI ZADATAK U L STORAGE
        let task = CurrentTasks[8].task;

        let DoneTask = {
            task : task
        }

        if(store.getItem('DoneTasks') === null){
            let doneTasks = [];
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }else{
            let doneTasks = JSON.parse(store.getItem('DoneTasks'));
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }

    //obriši iz localStoragea iz tablice tasks

        let tasks = JSON.parse(store.getItem('tasks'));
        tasks.splice(8 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }


    if(transcript.includes('ten') ||transcript.includes(10)){
        //SPREMA OBAVLJENI ZADATAK U L STORAGE
        let task = CurrentTasks[9].task;

        let DoneTask = {
            task : task
        }

        if(store.getItem('DoneTasks') === null){
            let doneTasks = [];
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }else{
            let doneTasks = JSON.parse(store.getItem('DoneTasks'));
            doneTasks.push(DoneTask);
            store.setItem('DoneTasks' , JSON.stringify(doneTasks));
        }

    //obriši iz localStoragea iz tablice tasks

        let tasks = JSON.parse(store.getItem('tasks'));
        tasks.splice(9 , 1);
        store.setItem('tasks' , JSON.stringify(tasks));
    }
}




//FUNKCIJA ZA NAPRAVITI NEW TABLE ROW I PRIKAZATI TASK
function showTaskOutput(){
    let store = localStorage;
    let doneTasks = JSON.parse(store.getItem('DoneTasks'));
    let i = 1;

    if(doneTasks === null){
        console.log('Izvršeni zadataci su trenutno prazni!')

    }else{

        doneTasks.forEach( (task) => {

            let row = document.createElement('tr');
            row.innerHTML = `
                <td>${i}</td>
                <td>${task.task}</td>
                <td style="font-weight: 600" class="green lighten-2 center white-text">DONE</td>
            `
            tableOut.appendChild(row);
            i++;
        });
    }


}

//show it from lStore to html
showTaskOutput();



//FUNKCIJA CLEAR DONE TASKS
clearDoneTasksBtn.addEventListener('click' , (e) => {
e.preventDefault();
localStorage.removeItem('DoneTasks');
location.reload();
});
