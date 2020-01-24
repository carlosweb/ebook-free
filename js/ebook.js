function registrar() {
    let emailTxt = document.getElementById('email').value
    let res = document.getElementById('res')
    let timeebook = new Date().getTime()

    var database = firebase.database()
    database.ref(timeebook).set({
        email: emailTxt
    })

    if(emailTxt == 0) {
        res.innerHTML = `Preencha o campo do e-mail`
        res.style.display = 'block'
        res.classList.add('alert-danger')
    } else {
        res.innerHTML = `Seu pedido foi enviado com sucesso!`
        res.style.display = 'block'
        res.classList.remove('alert-danger')
        res.classList.add('alert-success')
    }

}