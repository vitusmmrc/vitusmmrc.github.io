//Name Validation
let nameInput = document.getElementById('name');
nameInput.addEventListener('keydown', () => {
    nameInput.classList.remove('error')
})
nameInput.addEventListener('keypress', (keypressed) => {
    let name = nameInput.value
    let key = keypressed.key
    if (key == ' ' && name.length == 0) {
        keypressed.preventDefault()
    }
})

//Message Validation
let messageInput = document.getElementById('message');
messageInput.addEventListener('keydown', () => {
    messageInput.classList.remove('error')
})

function sendMsg() {
    const url = "https://discord.com/api/webhooks/971782794843922492/TU3s9oLOjaaCcJoBQFPygRkgHINgI0912j0UHLaxqVQWixurLhKhI4Sxg4ujgNVn3F84"
    let nameInput = document.getElementById('name')
    let name = nameInput.value
    let messageInput = document.getElementById('message')
    let message = document.getElementById('message').value
    let button = document.getElementById('send-button')

    if (name != '' && name != null) { nameInput.classList.remove('error') } else {
        nameInput.classList.add('error')
    }
    if (message != '' && message != null) { messageInput.classList.remove('error') } else {
        messageInput.classList.add('error')
    }

    if (name != '' && name != null && message != '' && message != null) {
        messageInput.value = ''
        button.innerHTML = 'Enviado  <span class="check">✔</span>'
        setTimeout(() => { button.innerHTML = 'Enviar' }, 3000);
        fetch(
            url,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    embeds: [
                        {

                            color: 13710906,
                            author: {
                                name: name,
                            },
                            description: message,
                        },
                    ]
                }),
            }
        );
    }

}