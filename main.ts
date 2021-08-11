input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    Watch = 0
    Stop = 1
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Stop = 2
})
let Watch = 0
let Stop = 0
Stop = 0
Watch = 0
basic.forever(function () {
    while (Stop + 0 == 1) {
        control.waitMicros(1000)
        Watch += 1
    }
    if (Stop + 0 == 2) {
        basic.showString("" + (Watch / 100))
    }
})
