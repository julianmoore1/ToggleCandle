let lit = true
loops.everyInterval(1000, function () {
    if (input.buttonIsPressed(Button.A)) {
        if (lit) {
            lit = false
        } else {
            lit = true
        }
    }
    if (lit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    } else {
        basic.clearScreen()
    }
})
