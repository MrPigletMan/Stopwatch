def on_button_pressed_a():
    global Start, StartTime, Clock
    Start = 1
    StartTime = input.running_time()
    Clock = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global Clock, StartTime, Time, Start
    basic.clear_screen()
    Clock = 0
    basic.show_leds("""
        . . . . #
                . . . # .
                # . # . .
                . # . . .
                . . . . .
    """)
    StartTime = 0
    Time = 0
    Start = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Clock, Time
    basic.clear_screen()
    Clock = 0
    if 0 == Start:
        basic.show_leds("""
            # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
        """)
        control.wait_micros(1000000)
        basic.clear_screen()
    else:
        Time = input.running_time() - StartTime
        basic.show_number(Time / 1000)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

Time = 0
StartTime = 0
Start = 0
Clock = 0
basic.clear_screen()
Clock = 0
Start = 0
StartTime = 0
Time = 0

def on_forever():
    if 1 == Clock:
        basic.show_leds("""
            . # # # .
                        # . # . #
                        # . # . #
                        # . . # #
                        . # # # .
        """)
        control.wait_micros(100000)
        basic.show_leds("""
            . # # # .
                        # . . . #
                        # . # # #
                        # . . # #
                        . # # # .
        """)
        control.wait_micros(100000)
        basic.show_leds("""
            . # # # .
                        # . . . #
                        # . # . #
                        # . # # #
                        . # # # .
        """)
        control.wait_micros(100000)
        basic.show_leds("""
            . # # # .
                        # . . . #
                        # # # . #
                        # . . # #
                        . # # # .
        """)
        control.wait_micros(100000)
basic.forever(on_forever)
