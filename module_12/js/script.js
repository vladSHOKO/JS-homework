$('.ball').on('click', function () {
    let field = $('.field')
    let width = field.width() - 100
    let randomHeight = Math.floor(Math.random() * (field.height() - 100))
    let ball = $('.ball')
    if (ball.position().left === width) {
        ball.animate({left: 0, top: randomHeight}, "slow", function () {
            sayGol()
        })
    } else {
        ball.animate({left: width, top: randomHeight}, "slow", function () {
            sayGol()
        })
    }
})


function changeScore(ballPosition, field) {
    let leftTextarea = $('.score-left')
    let rightTextarea = $('.score-right')
    let leftScore = Number(leftTextarea.text())
    let rightScore = Number(rightTextarea.text())
    if (ballPosition.left === 0) {
        rightScore++
    } else {
        leftScore++
    }
    leftTextarea.text(leftScore)
    rightTextarea.text(rightScore)
    if (leftScore >= 3) {
        alert("Победила левая сторона")
    } else if (rightScore >= 3) {
        alert("Победила правая сторона")
    }
}

function sayGol() {
    let ballPosition = $('.ball').position()
    let field = $('.field')
    if (ballPosition.top > (field.height() / 2) - 100 && ballPosition.top < (field.height() / 2)) {
        alert("Гоол!")
        changeScore(ballPosition, field)
    }


}
