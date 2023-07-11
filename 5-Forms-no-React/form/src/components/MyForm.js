import React from 'react';
import "./MyForm.css";

const MyForm = () => {
    return (
        <div>
            {/* 1 - criação de form */}
            <form>
                <div>
                <label htmlFor="name">Nome: </label>
                <input type="text" name="name" placeholder='Digite o seu nome'/>
                </div>
                {/* 2 - Label envolvendo o input */}
                <label>
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder='Digite o seu email'/>
                </label>
           
            <input type="submite" value="enviar"></input> 
            </form>
        </div>
    );
}

export default MyForm;
