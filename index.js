const restart = document.querySelector('.restart');
const container = document.querySelector('.container');
let gen = document.querySelectorAll('.gen');
let turn = 'X';

let scores = document.querySelectorAll('.score');

let board = ['','','','','','','','',''];
let thearray = Array.from(gen);
let turnimg = document.querySelector('.turn-img');


//changes the bgcolor and color of the set used to win for x player    
function crownx(a,b,c){
    xmarker = '<path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#1f3641" fill-rule="evenodd"/>'
    svgx = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">' + xmarker + '</svg>';
    
    let arr = [a,b,c]
    for(let i = 0;i<arr.length;i++){
        gen[arr[i]].innerHTML = svgx
        gen[arr[i]].style.backgroundColor = '#31c3bd';
    }
}


//changes the bgcolor and color of the set used to win for y player
function crowny(a,b,c){
    ymarker = '<path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#1f3641"/>';
    svgy = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">' + ymarker + '</svg>';
    let arr = [a,b,c]
    for(let i = 0;i<arr.length;i++){
        gen[arr[i]].innerHTML = svgy
        gen[arr[i]].style.backgroundColor = '#f2b137';
    }
}




//gameplay sets the innerhtml and changes the turn when a player clicks a box
function gameplay(item){    
    let xmarker = '<path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/>'
    let svgx = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">' + xmarker + '</svg>';

    let ymarker = '<path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" fill="#F2B137"/>';
    let svgy = '<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">' + ymarker + '</svg>';

    if(turn == 'X'){
        item.innerHTML = svgx;
        turn = 'O'
        turnimg.src = 'asset 1.svg';

    }else if(turn == 'O'){
        item.innerHTML = svgy;
        turn = 'X';
        turnimg.src = 'asset 0.svg';
    }
}

//Checks for winners,increases score and calls crown fn when there's a winner
function champion(){  
    
    if(board[0] == board[1] && board[1] == board[2] && board[2] != ""){
        
        alert(`${board[1]} is a champion`)
        if(board[0] == 'X'){
            let currentscore = Number(scores[0].innerHTML);
            scores[0].innerHTML = currentscore + 1;            
            crownx(0,1,2);
            
        }else{
            let currentscore = Number(scores[2].innerHTML);
            scores[2].innerHTML = currentscore + 1;
        }        
        reinstate(3000);
        
    }else if(board[3] == board[4] && board[4] == board[5] && board[5] !="") {
        
        alert(`${board[3]} is a champion`)
        recordscore(3,4,5);
        reinstate(3000);

    }else if(board[6] == board[7] && board[7] == board[8] && board[8] !="") {
        
        alert(`${board[6]} is a champion`)
        recordscore(6,7,8);
        reinstate(3000);

    }else if(board[0] == board[3] && board[3] == board[6] && board[6] !="") {
        
        alert(`${board[3]} is a champion`)
        recordscore(0,3,6);
        reinstate(3000);

    }else if(board[1] == board[4] && board[4] == board[7] && board[7] !="") {
        
        alert(`${board[4]} is a champion`)         
        recordscore(1,4,7);
        reinstate(3000);

    }else if(board[2] == board[5] && board[5] == board[8] && board[8] !="") {

        alert(`${board[2]} is a champion`)
        recordscore(2,5,8);         
        reinstate(3000);
    }else if(board[0] == board[4] && board[4] == board[8] && board[8] !="") {
        
        alert(`${board[0]} is a champion`)
        recordscore(0,4,8);         
        reinstate(3000);

    }else if(board[2] == board[4] && board[4] == board[6] && board[6] !="") {
        
        alert(`${board[6]} is a champion`)
        recordscore(2,4,6);
        reinstate(3000);

    }else{
        
        for(let i= 0;i<9;i++){
            if(board[i] == ''){
                //checks if there's any empty array and returns
                return
            }
        }
        alert('This is a tie');

        let currentscore = Number(scores[1].innerHTML);
        scores[1].innerHTML = currentscore + 1;

        reinstate();
    }
}


/*******************************************************************************************************
  Listens for click on gameboard, records the click on the board array(for later use to determine winner),
  calls gameplay to write on gameboard and change turns, then calls champion to check for winners.
*******************************************************************************************************/
clickers = function(sign){
    gen.forEach(function(item){
        item.addEventListener('click',function(){
                if(item.innerHTML == ""){
                    let ind = thearray.indexOf(item);
                    board[ind] = turn;
                    
                    gameplay(item);
                    
                    setTimeout(() => {
                        champion();                            
                    }, 100);
                }
                /* else{
                    alert('clicked already')
                } */
               
                
        })
    })
}();

//waits for some seconds then resets the gameboard after each win and onclick reset button
function reinstate(num){
    setTimeout(() => {
        gen.forEach(function(item){
            item.innerHTML = '';
            item.style.backgroundColor = '#1f3641'
        })    
        board = ['','','','','','','','','']
        turn = 'X'
        turnimg.src = 'asset 0.svg';    
    },num);
    
}

//called after each win to record score increase and show the set won with.
function recordscore(a,b,c){
    if(board[a] == 'X'){
        let currentscore = Number(scores[0].innerHTML);
        scores[0].innerHTML = currentscore + 1;
        crownx(a,b,c);
        
    }else{
        let currentscore = Number(scores[2].innerHTML);
        scores[2].innerHTML = currentscore + 1;
        crowny(a,b,c)
    }         
}

//calls reinstate to reset gameboard and resets the score boards to 0
restart.addEventListener('click',function(){
    reinstate(0);
        
    for(let i = 0;i<3; i++){
        scores[i].innerHTML = 0;
    }
})