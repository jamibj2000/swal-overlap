var messagesContainer = []
var messageCount = 0

function loadMsg(messageBody) {
    messagesContainer.push(messageBody)
}

function showMessages() {
    if (messageCount < messagesContainer.length) {
        const { timer, swalBody, methodCondition } = messagesContainer[messageCount]

        const SwalMessageObject = {
            timer: 1,
            swalBody: { 
                text: '¡El mensaje salió exitoso!',
                icon: 'success'
            },
            swalCondition: null
        }

        if (timer) {
            SwalMessageObject.timer = timer
            SwalMessageObject.swalBody.timer = timer
        }

        if (swalBody) {
            Swal.fire(
                swalBody
            ).then((result) => {
                if (methodCondition) {
                    SwalMessageObject.swalCondition = methodCondition
                    SwalMessageObject?.swalCondition(result) || null
                } else {
                    messageCount++
                    showMessages()
                }
            })
        } else {
            console.error("ERROR: La propiedad 'swalBody' es null. La propiedad 'swalBody' (el cuerpo del mensaje) debe estar definido.");
        }
    }
}