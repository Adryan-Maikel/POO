class Pessoa {   
    constructor(id, nameReceived, emailReceived, phoneReceived, cpfReceived, passwordReceived) {
        this.id = id;
        this.name = nameReceived;
        this.email = emailReceived;
        this.phone = phoneReceived;
        this.cpf = cpfReceived;
        this.password = passwordReceived;
    }
    
    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getPhone() {
        return this.phone;
    }

    getCpf() {
        return this.cpf;
    }

    getPassword() {
        return this.password;
    }

    toString() {
        return "<p>Nome: " + this.name +"</p>"+
            "<p>Email: " + this.email +"</p>"+
            "<p>Phone: " + this.phone +"</p>"+
            "<p>CPF: " + this.cpf +"</p>"+
            "<p>Senha: " + 
        ((this.password != null && this.password != "")
        ? "xxxxxxx" : "Não cadastrada") +"</p>"+
            "<div class='botoes'><button onclick='deleteObject("+this.id+")' class='delete'>Excluir</button>" +
            "<button onclick='editObject("+this.id+")' class='edit'>Editar</button></div>";
    }
}
