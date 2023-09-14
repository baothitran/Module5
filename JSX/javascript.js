const formLogin = document.createElement('form');
formLogin.method = "GET";
formLogin.action = "#";

const div_1 = document.createElement("div");
const label_1 = document.createElement("label");
label_1.innerText = "Email";
const input_email = document.createElement('input');
input_email.type = "email";
input_email.id = 'email';

div_1.appendChild(label_1);
div_1.appendChild(input_email);


const div_2 = document.createElement("div");
const label_2 = document.createElement("label");
label_2.innerText = "Password";
const input_password = document.createElement('input');
input_password.type = "password";
input_password.id = 'password';

div_2.appendChild(label_2);
div_2.appendChild(input_password);

const btnLogin = document.createElement('button');
btnLogin.innerText = "Login";
btnLogin.onclick = () => {
    const data = {
        "email": input_email.value,
        "password": input_password.value
    }
    alert(JSON.stringify(data))
}

formLogin.appendChild(div_1);
formLogin.appendChild(div_2);
formLogin.appendChild(btnLogin)



document.querySelector('#root').appendChild(formLogin);