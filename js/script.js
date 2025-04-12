function check() {
    let input = document.querySelectorAll('input')
    let textarea = document.querySelector('textarea').value
    let text = document.querySelectorAll('.text')

    if (input[0].value=='') {
        text[0].innerHTML='Enter your name'
    }else {
        text[0].innerHTML=''
    }

    if (input[1].value=='') {
        text[1].innerHTML='Enter your Email'
    }else if (!input[1].value.match(/@/) || input[1].value.indexOf('.')==-1) {
        text[1].innerHTML='invaild your Email'
    } else {
        text[1].innerHTML=''
    }

    if (input[2].value=='') {
        text[2].innerHTML='Enter your phone number'
    } else if (isNaN(input[2].value)) {
        text[2].innerHTML='invaild your phone number'
    }
    else {
        text[2].innerHTML=''
    }

    if (textarea=='') {
        text[3].innerHTML='Enter your message'
    }else if (textarea.length<=3) {
        text[3].innerHTML='invaild your message'
    } else {
        text[3].innerHTML=''
    }
}