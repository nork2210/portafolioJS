window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const senha = document.getElementById('senha')
    const senhaConfirma = document.getElementById('senhaConfirma')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const senhaValor = senha.value.trim()
        const senhaConfirmaValor = senhaConfirma.value.trim();
     
        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
        if(!usuarioValor){
            //console.log('CAMPO VACIO')
            validaFalla(usuario, 'Campo vacío')
        }else{
            validaOk(usuario)
        }

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Campo vacío')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }
         //validando campo senha
         const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/          
         if(!senhaValor) {
             validaFalla(senha, 'Campo vacío')
         } else if (senhaValor.length < 10) {             
             validaFalla(senha, 'Debe tener 8 caracteres cómo mínimo.')
         } else if (!senhaValor.match(er)) {
             validaFalla(senha, 'Debe tener al menos una may., una min. y un núm.')
         } else {
             validaOk(senha)
         }

         //validando campo senha Confirmación
         if(!senhaConfirmaValor){
             validaFalla(senhaConfirma, 'Confirme su password')
         } else if(senhaValor !== senhaConfirmaValor) {
             validaFalla(senhaConfirma, 'La senha no coincide')
         } else {
             validaOk(senhaConfirma)
         }


    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})


