function displayState () {
    basic.clearScreen()
    basic.showString("" + (states[stateIndex]), 75)
basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (stateIndex > 0) {
        stateIndex += -1
    }
    displayState()
})
function displayCapital () {
    basic.clearScreen()
    basic.showString("" + (capitals[stateIndex]), 75)
basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    if (stateIndex < 49) {
        stateIndex += 1
    }
    displayState()
})
input.onGesture(Gesture.Shake, function () {
    stateIndex = 49
    displayState()
})
function initializeStateArray () {
    states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    displayCapital()
})
function initializeCapitolArray () {
    capitals = ["Montgomery", "Juneau", "Phoenix", "Little Rock", "Sacramento", "Denver", "Hartford", "Dover", "Tallahassee", "Atlanta", "Honolulu", "Boise", "Springfield", "Indianapolis", "Des Moines", "Topeka", "Frankfort", "Baton Rouge", "Augusta", "Annapolis", "Boston", "Lansing", "Saint Paul", "Jackson", "Jefferson City", "Helena", "Lincoln", "Carson City", "Concord", "Trenton", "Santa Fe", "Albany", "Raleigh", "Bismarck", "Columbus", "Oklahoma City", "Salem", "Harrisburg", "Providence", "Columbia", "Pierre", "Nashville", "Austin", "Salt Lake City", "Montpelier", "Richmond", "Olympia", "Charleston", "Madison", "Cheyenne"]
}
let stateIndex = 0
let states: string[] = []
let capitals: string[] = []
stateIndex = 0
initializeStateArray()
initializeCapitolArray()
displayState()
