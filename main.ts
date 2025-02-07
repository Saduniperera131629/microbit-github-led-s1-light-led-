music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 120), music.PlaybackMode.InBackground)
basic.showNumber(20)
basic.showNumber(19)
basic.showNumber(18)
basic.showNumber(17)
basic.showNumber(16)
basic.showNumber(15)
basic.showNumber(14)
basic.showNumber(13)
basic.showNumber(12)
basic.showNumber(11)
basic.showNumber(10)
basic.showNumber(9)
basic.showNumber(8)
basic.showNumber(7)
basic.showNumber(6)
basic.showNumber(5)
music.play(music.stringPlayable("A - A - A - A - ", 120), music.PlaybackMode.InBackground)
basic.showNumber(4)
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
basic.showArrow(ArrowNames.North)
music.play(music.stringPlayable("G - G - G - G - ", 120), music.PlaybackMode.LoopingInBackground)
serial.writeNumbers([
0,
1,
0
])
control.raiseEvent(
EventBusSource.MICROBIT_ID_BUTTON_A,
EventBusValue.MICROBIT_EVT_ANY
)
basic.forever(function () {
	
})
