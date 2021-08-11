input.onButtonPressed(Button.A, function () {
    Start = 1
    StartTime = input.runningTime()
    Clock = 1
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Clock = 0
    if (0 == Start) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        control.waitMicros(1000000)
        basic.clearScreen()
    } else {
        Time = input.runningTime() - StartTime
        basic.showNumber(Time / 1000)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Clock = 0
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    StartTime = 0
    Time = 0
    Start = 0
})
let Time = 0
let StartTime = 0
let Start = 0
let Clock = 0
basic.clearScreen()
Clock = 0
Start = 0
StartTime = 0
Time = 0
basic.forever(function () {
    if (1 == Clock) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . . # #
            . # # # .
            `)
        control.waitMicros(100000)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . # # #
            # . . # #
            . # # # .
            `)
        control.waitMicros(100000)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . # . #
            # . # # #
            . # # # .
            `)
        control.waitMicros(100000)
        basic.showLeds(`
            . # # # .
            # . . . #
            # # # . #
            # . . # #
            . # # # .
            `)
        control.waitMicros(100000)
    }
})
