document.getElementById('login_button').addEventListener('click', function(event){
    event.preventDefault()
    // console.log('login Button cliked')


    const phone_Number = document.getElementById('number_input').value
    const pin_number = document.getElementById('password_input').value

    console.log(phone_Number, pin_number)

    if(phone_Number === '10' && pin_number === '1234'){
        console.log('your Phone number & pin Number is correct')
        window.location.href = './home.html'
    }
    else{
        alert('please check your Number of password')
    }



})








