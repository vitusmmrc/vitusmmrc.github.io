//Mastery Hover Pop-Up box
let masteryFrame = document.getElementById('mastery')

masteryFrame.addEventListener("mouseover", () => {
    document.getElementById('mastery-title').style.color = 'var(--gold-1)'
    document.getElementById('mastery-popup').classList.remove("hidden")
});

masteryFrame.addEventListener("mouseout", () => {
    document.getElementById('mastery-title').style.color = 'var(--gold-2)'
    document.getElementById('mastery-popup').classList.add("hidden")
});
//---------------------------------------------------------//

//Open Chat
let chatButton = document.getElementById('chat-button')
let chatWindows = document.getElementById('chat-windows')
chatButton.addEventListener("click", toggleChat);
function toggleChat() {
    chatWindows.classList.toggle('hidden')
}
//---------------------------------------------------------//

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
//---------------------------------------------------------//

//Message Validation
let messageInput = document.getElementById('message');
let chatMessage = document.querySelector('.chat-message')
messageInput.addEventListener('keydown', () => {
    chatMessage.classList.remove('error')
})

//Send Message 
//---------------------------------------------------------//
function sendMsg() {
    const url = "https://discord.com/api/webhooks/969474429946069052/r_g_Iff25OJozxjWqXyGZOJX0WgwDTwGDKJtUt6VQmzUGjA_JYPX8YlGbqkmFMBg0ZJx"
    let nameInput = document.getElementById('name')
    let name = nameInput.value
    let chatMessage = document.querySelector('.chat-message')
    let message = document.getElementById('message').value
    let button = document.getElementById('send-button')

    if (name != '' && name != null) { nameInput.classList.remove('error') } else {
        nameInput.classList.add('error')
    }
    if (message != '' && message != null) { chatMessage.classList.remove('error') } else {
        chatMessage.classList.add('error')
    }

    if (name != '' && name != null && message != '' && message != null) {
        messageInput.value = ''
        button.innerHTML = 'Enviado <span class="check">✔</span>'
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

                            color: 7887400,
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

//Forward to Mobile Version
//---------------------------------------------------------//

window.mobileCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};


window.addEventListener('load', () => {
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    let height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    let popUpContainer = document.getElementById('pop-up-container')

    if (window.mobileCheck() == true) {
        console.log('Parece que você está usando um celular, gostaria de acessar a versão mobile?')
        popUpContainer.classList.remove('hidden')
    }

    if (height > width) {
        // console.log('retrato')
        document.querySelector('.background-video video').style.width="unset"
        document.querySelector('.background-video video').style.height = "110%"
    }
})



//---------------------------------------------------------//

// document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('dragstart', event => event.preventDefault());