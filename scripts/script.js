function auth() {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    console.log('Email', email);

    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(() => {
            console.log("Usuario criado com sucesso!!");
        })
        .catch((error) => {
            console.log('Problemas ao criar o usuario!');
            console.log(error)
        });
}
