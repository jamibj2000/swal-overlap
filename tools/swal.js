loadMsg(
    {
        timer: 10,
        swalBody: {
            text: `El mensaje salió exitoso! Hurray!`,
            icon: 'question',
            timer: 3000
        },
        methodCondition: null
    })

function condition(result) {
    if (result.isConfirmed) {
        console.log("Se confirmó el mensaje");
    } else {
        console.log("Se canceló el mensaje");
    }
}