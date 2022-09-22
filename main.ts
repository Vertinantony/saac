input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("prepare-se")
    basic.pause(randint(1000, 5000))
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
