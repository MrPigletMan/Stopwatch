def on_button_pressed_a():
    global Watch, Stop
    basic.clear_screen()
    Watch = 0
    Stop = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global Stop
    basic.clear_screen()
    Stop = 2
input.on_button_pressed(Button.B, on_button_pressed_b)

Watch = 0
Stop = 0
Stop = 0
Watch = 0

def on_forever():
    global Watch
    while Stop + 0 == 1:
        control.wait_micros(1000)
        Watch += 1
    if Stop + 0 == 2:
        basic.show_string("" + str((Watch / 100)))
basic.forever(on_forever)
