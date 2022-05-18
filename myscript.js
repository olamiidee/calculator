let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));
buttons.map(btn => {
    btn.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = ''
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, - 1)
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch (error) {
                    display.innerText = "ERROR!"
                }
                break;
            default:
                display.innerHTML += e.target.innerText
        }
    })
})