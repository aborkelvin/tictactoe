const container = document.querySelector('.container');
let gen = document.querySelectorAll('.gen');
let turn = 'X';
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const restart = document.querySelector('.restart');
let board = ['','','','','','','','',''];
let thearray = Array.from(gen);
let result = document.querySelector('.result')
/* playerone = {
    marker:'X',
    turn:'o'
}

playertwo = {
    marker:'O',
    turn : 'x'
}
 */

let src = <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z" fill="#31C3BD" fill-rule="evenodd"/>
    </svg>;

function gameplay(item){
    if(turn == 'X'){
        player1.classList.add('inturn')
        player2.classList.remove('inturn')
        item.innerHTML = 'X';
        turn = 'O'
    }else if(turn == 'O'){
        player2.classList.add('inturn')
        player1.classList.remove('inturn')
        item.innerHTML = 'O';
        turn = 'X'
    }
}

//To check for winners
function champion(){  
    let cleararea = function(i){
        result.textContent = `${board[i]} is a champion`
    }
    if((board[0] == board[1] && board[1] == board[2] && board[2] != "")){
        alert(`${board[1]} is a champion`)
        reinstate();
    }else if(board[3] == board[4] && board[4] == board[5] && board[5] !="") {
        alert(`${board[3]} is a champion`)         
        reinstate();
    }else if(board[6] == board[7] && board[7] == board[8] && board[8] !="") {
        alert(`${board[6]} is a champion`)         
        reinstate();
    }else if(board[0] == board[3] && board[3] == board[6] && board[6] !="") {
        alert(`${board[3]} is a champion`)         
        reinstate();
    }else if(board[1] == board[4] && board[4] == board[7] && board[7] !="") {
        alert(`${board[4]} is a champion`)         
        reinstate();
    }else if(board[2] == board[5] && board[5] == board[8] && board[8] !="") {
        alert(`${board[2]} is a champion`)         
        reinstate();
    }else if(board[0] == board[4] && board[4] == board[8] && board[8] !="") {
        alert(`${board[0]} is a champion`)         
        reinstate();
    }else if(board[2] == board[4] && board[4] == board[6] && board[6] !="") {
        alert(`${board[6]} is a champion`)         
        reinstate();
    }else{
        //checks if there's any empty array and returns
        for(let i= 0;i<9;i++){
            if(board[i] == ''){
                return
            }
        }
        alert('This is a tie');
        reinstate();
    }
}


clickers = function(sign){
    gen.forEach(function(item){
        item.addEventListener('click',function(){
                if(item.innerHTML == ""){
                    gameplay(item);
                    let ind = thearray.indexOf(item);
                    board[ind] = item.innerHTML;
                }
                /* else{
                    alert('no')
                } */
                setTimeout(champion,2000)        
        })
    })
}();

function reinstate(){
    gen.forEach(function(item){
        item.innerHTML = '';
    })
    board = ['','','','','','','','','']
    turn = 'X'
}

restart.addEventListener('click',function(){
    reinstate();
})