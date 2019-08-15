function tryLogin(payload) {
    console.log(payload);
    var url = 'http://localhost:3000/login';

    var config = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };


    var takeResponse = function (response) {
        return response.json();
    };

    var finalResponse = function (data) {
        alert(data.message);

        if(data.message=='Login Successful'){
          window.location.href = "./index.html";
        }

        //console.log(data.message);
    };

    fetch(url, config).then(takeResponse).then(finalResponse);
}

function onLoginButtonClick(event)
{
    //event.preventDefault();

    var form = document.getElementById("sign-in-form");
    var data = new FormData(form);

    var email = data.get('email_address');
    var pass = data.get('password');

    var params = {
        email: email,
        password: pass
    };

    if(email && pass) {
        tryLogin(params);
    }else{
        alert('Please fill in all the fields to continue');
    }

}
