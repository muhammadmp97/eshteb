import $ from 'jquery'
import convert from './converter'

document.onkeyup = (e) => {
    var event = $.event.fix(e || window.event)

    if (event.which == 70 && event.ctrlKey && event.shiftKey) {
        event.target.value = convert(event.target.value)
    }
}