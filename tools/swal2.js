loadMsg(
    {
        timer: 10,
        swalBody: {
            text: `Esto es un mensaje de pruebas ! Eureka!`,
            icon: 'info',
            timer: 3000
        },
        methodCondition: condition
    })

function condition(result) {
    messageCount++
    if (result.isConfirmed) {
        console.log("Se confirmó el mensaje" + messageCount);
        showMessages()
    } else {
        console.log("Se canceló el mensaje" + messageCount);
        showMessages()
    }
}