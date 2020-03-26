function validar(){
    var nome = formuser.nome.value;
    var email = formuser.email.value;
    var fone = formuser.fone.value;
    
    if(nome == ""){
        alert('Preencha o campo nome.');
        formuser.nome.focus();
        return false;
    }
    
    if(email == "" || email.indexOf('@') == -1 ){
        alert('Preencha o campo E-mail.');
        formuser.email.focus();
        return false;
    }
    
    if(fone == "" || fone.length <= 11){
        alert('Preencha o campo telefone com minimo 11 digitos');
        formuser.fone.focus();
        return false;
    }
}