radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    led.toggle(2, 2)
    if (name == "pitch") {
        pins.servoWritePin(AnalogPin.P0, 90 + value)
    } else if (name == "roll") {
        pins.servoWritePin(AnalogPin.P1, 90 + value)
    } else {
        pins.servoWritePin(AnalogPin.P2, value)
    }
})
basic.showLeds(`
    # # # . .
    # . # . .
    # # # . .
    # . . # .
    # . . . #
    `)
radio.setGroup(1)
basic.forever(function () {
	
})
