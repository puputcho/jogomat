function send() {
    number1 = document.getElementById('numero1').value
    number2 = document.getElementById('numero2').value
    question = number1 + 'x' + number2
    actual_answer = parseInt(number1) * parseInt(number2)

    qw = "<h4 id='wordDisplay'> P. " + question + "</h4>";
    ib = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    cb = "<br><br><button class='btn btn-info' onClick='check()'>Checar</button>";
    row = qw + ib + cb;
    document.getElementById("output").innerHTML = row;
}
qturn = 'p1'
aturn = 'p2'
p1score = 0
p2score = 0
function check(){
    getAnswer = document.getElementById('inputCheckBox');
    if (getAnswer == actual_answer) {
        if (aturn == 'p1') {
            p1score = p1score + 1;
            document.getElementById('p1score').innerHTML = p1score
        }else{
            p2score = p2score + 1;
            document.getElementById('p2score').innerHTML = p2score
        }
        if (qturn == 'p1') {
            qturn = 'p2'
            document.getElementById('turnoR').innerHTML = 'Perguntadeiro:' + p2
    }
}
}