// quiz6 문제

// 전에 코딩했던 구구단 코드 재활용
// 입력폼에 숫자를 입력하고 출력버튼을 누르면 해당 단수가 출력
// 템플릿 표현식 사용
// 숫자가 아닌값을 입력할경우 alert 메세지 출력

var $printBtn = document.getElementById('btn');
var $num = document.getElementById('num');
var $result = document.getElementById('result');

$printBtn.addEventListener('click', function(){    
    var value = $num.value;
    if ($result.hasChildNodes() == true) {
        $result.removeChild($result.childNodes[0]);
    }

    if (isNaN(value)) {
        alert('숫자를 입력해주세요');
    } else {
        const div = document.createElement('div');
        var str = '';
        
        for (var i = 1; i<10; i++){
            const innerDiv = document.createElement('div');
            str = `${value} x ${i} = ${value*i}`
            innerDiv.textContent = str;
            div.appendChild(innerDiv);
        }
        $result.appendChild(div);
    }
});
