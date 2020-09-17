input.onButtonPressed(Button.AB, function () {
    basic.showString("base mayor")
    basic.showNumber(base_mayor)
    basic.showString("base menor")
    basic.showNumber(base_menor)
    basic.showString("altura")
    basic.showNumber(altura)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Area del trapecio =")
    basic.showNumber(area)
})
let area = 0
let altura = 0
let base_menor = 0
let base_mayor = 0
base_mayor = 20
base_menor = 12
altura = randint(1, 200)
let numerator = base_mayor + base_menor
let denominator = numerator / 2
area = denominator * altura
