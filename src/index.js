import $ from 'jquery'
import convert from './converter'

document.onkeyup = function (e) {
    var event = $.event.fix(e || window.event)

    if (event.which == 69 && event.ctrlKey && event.shiftKey) {
        event.target.value = convert(event.target.value)
    }
}