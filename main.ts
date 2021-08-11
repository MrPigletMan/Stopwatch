input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    Start = 1
    StartTime = input.runningTime()
    Clock = 1
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
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
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
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
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
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
basic.forever(function on_forever() {
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
