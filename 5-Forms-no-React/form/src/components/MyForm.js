import React, { useState } from 'react';
import "./MyForm.css";

const MyForm = ({user}) => {
    //3 - Gerenciament de Dados
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("enviando o formulário") 
        console.log(name, email, bio, role);

         // limpar o formulario após o envio
        setName("");
        setEmail("");
        setBio("");
    }

   


    return (
        <div>
            {/* Envio de form */}
            {/* 1 - criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" value={name} placeholder='Digite o seu nome' onChange={handleName}/>
                </div>
                {/* 2 - Label envolvendo o input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" value={email} placeholder='Digite o seu email' onChange={(e) => setEmail(e.target.value)}/>
                </label>

                {/* Text Area */}
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do usuário' value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
           {/* Select */}
           <label>
                <span>Função do Sistema</span>
                <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
           </label> 
            <input type="submit" value="enviar"/>
            </form>
        </div>
    );
}

export default MyForm;
