
function login() {
    let user = document.getElementById("email").value;
    let password = document.getElementById("senha").value;
    let aviso = document.getElementById("aviso");

    let confUser = "fernando"
    let confPassword = "fernando123"

    switch (user, password) {
        case user == confUser && password == confPassword:
            aviso.style.color = "#2aff6d";
            aviso.innerHTML = "Login realizado com sucesso ✅";
            break;
        case user === confUser && password !== confPassword:
            aviso.style.color = "#ff4646ff";
            aviso.innerHTML = "Senha não confere ❌";
            break;
        case user !== confUser && password === confPassword:
            aviso.style.color = "#ff4646ff";
            aviso.innerHTML = "Usuário não confere ❌";
            break;
        default:
            if ((user == "" || password == "") || (user == "" && password == "")) {
                aviso.innerHTML = "Preencha todos os campos!";
            } else {
                aviso.style.color = "#ff4646ff";
                aviso.innerHTML = "Acesso Negado ❌";
            }
            break;
    };
    
};
