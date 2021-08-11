input.onButtonPressed(Button.A, function () {
    StartTime = input.runningTime()
    basic.showIcon(IconNames.SmallDiamond)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Time = input.runningTime() - StartTime
    basic.showNumber(Time / 1000)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    StartTime = 0
    Time = 0
})
let Time = 0
let StartTime = 0
basic.clearScreen()
StartTime = 0
Time = 0
basic.forever(function () {
	
})
