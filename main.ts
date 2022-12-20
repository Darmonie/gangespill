let terning = 0
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        terning = randint(1, 6)
        basic.showNumber(terning)
    }
    if (terning == 6) {
        basic.showIcon(IconNames.Surprised)
    }
})
