loadMsg(
    {
        timer: 10,
        swalBody: {
            title: "<strong>HTML <u>eJempl_O</u></strong>",
            text: `Este mensaje es de tipo trigger!`,
            icon: 'warning',
            html: `
                Puedes crear un <b>gran texto</b>,
                <a href="#" autofocus>descargar música</a>,
                y otras etiquetas HTML.
            `,
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `
                <i class="fa fa-thumbs-up"></i> Great!
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonText: `
                <i class="fa fa-thumbs-down"></i>
            `,
            cancelButtonAriaLabel: "Thumbs down"
        },
        methodCondition: condition
    })

function condition(result) {
    messageCount++
    if (result.isConfirmed) {
        console.log("Se accionó el trigger_ del mensaje" + messageCount);
        showMessages()
    } else {
        console.log("Se canceló el mensaje trigger_" + messageCount);
        showMessages()
    }
}