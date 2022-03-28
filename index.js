const container = document.querySelector('.container');
let gen = document.querySelectorAll('.gen');





const gameboard = function(){
    let gen = document.querySelectorAll('.gen');
    let board = ['x','o','x','x','o','x','g','g','f']
    let thearray = Array.from(gen);
    clickers = function(sign){
        gen.forEach(function(item){
            item.addEventListener('click',function(){
                    item.innerText = sign;
                    let ind = thearray.indexOf(item);
                    board[ind] = sign;
            })
        })
    }
    return{clickers}    

}

let gamestart = gameboard();



let click1 = 0;
let click2 = 0;
const gameplay = function(){
    const playerone = function(){
        click1++
        gamestart.clickers("X"); 
    }
    
    const playertwo = function(){
        click2++;
        gamestart.clickers('O');
    }
    
    if(click1 == click2){
        playerone();
    }else if(click1>click2){
        playertwo();
    } else if(click2>click1){
        alert('wait for your turn')
        return;
    }
}


gen.forEach(function(item){
    item.addEventListener('click',function(){
        gameplay();            
    })
})
