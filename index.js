const container = document.querySelector('.container');
let gen = document.querySelectorAll('.gen');
let turn = 'X';
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const restart = document.querySelector('.restart');
let board = ['','','','','','','','',''];
let thearray = Array.from(gen);
/* playerone = {
    marker:'X',
    turn:'o'
}

playertwo = {
    marker:'O',
    turn : 'x'
}
 */
function gameplay(item){
    if(turn == 'X'){
        player1.classList.add('inturn')
        player2.classList.remove('inturn')
        item.innerText = 'X';
        turn = 'O'
    }else if(turn == 'O'){
        player2.classList.add('inturn')
        player1.classList.remove('inturn')
        item.innerText = 'O';
        turn = 'X'
    }
}

//To check for winners
function champion(){  
    if((board[0] == board[1] && board[1] == board[2] && board[2] != "")){
        alert(`${board[1]} is a champion`)
        return
    }else if(board[3] == board[4] && board[4] == board[5] && board[5] !="") {
        alert(`${board[3]} is a champion`)         
        return
    }else if(board[6] == board[7] && board[7] == board[8] && board[8] !="") {
        alert(`${board[6]} is a champion`)
         
        return
    }else if(board[0] == board[3] && board[3] == board[6] && board[6] !="") {
        alert(`${board[3]} is a champion`)
         
        return
    }else if(board[1] == board[4] && board[4] == board[7] && board[7] !="") {
        alert(`${board[4]} is a champion`)
         
        return
    }else if(board[2] == board[5] && board[5] == board[8] && board[8] !="") {
        alert(`${board[2]} is a champion`)
         
        return
    }else if(board[0] == board[4] && board[4] == board[8] && board[8] !="") {
        alert(`${board[0]} is a champion`)
         
        return
    }else if(board[2] == board[4] && board[4] == board[6] && board[6] !="") {
        alert(`${board[6]} is a champion`)
         
        return
    }else{
        for(let i= 0;i<9;i++){
            if(board[i] == ''){
                return
            }
        }
        alert('This is a tie');
    }
}


clickers = function(sign){
    gen.forEach(function(item){
        item.addEventListener('click',function(){
                if(item.innerHTML == ""){
                    gameplay(item);
                    let ind = thearray.indexOf(item);
                    board[ind] = item.innerText;
                }
                else{
                    alert('no')
                }
                champion();        
        })
    })
}();

function reinstate(){
//window.location.reload();
gen.forEach(function(item){
    item.innerHTML = '';
})
board = ['','','','','','','','','']
turn = 'X'
}
restart.addEventListener('click',function(){
    reinstate();
})