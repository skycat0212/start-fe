var board = document.getElementById("board");

var str = '';

for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
        // TODO : 여기에 필요한 코드를 작성해주세요.
        if ( (i+j)% 2 == 0 ){
            str += '<span class="black"></span>';
        } else {
            str += '<span class="white"></span>';
        }
        
    }
}
board.innerHTML = str;

var spans  = document.querySelectorAll('span')
var clicked  = null;

for(var i=0; i<16; i++){
    if ( i%2 ==0 ){
        var t = i;
        spans[i].addEventListener('click',click);
    } else {
        spans[i].addEventListener('click',click);
    }
}


function click(event){
    if (clicked){
        clicked.className = clicked.className.replace(' click', '');
    }

    var el = event.currentTarget;
    el.className += ' click';
    clicked = el;
}