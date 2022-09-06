import { useState } from 'react'

function Form () {

    function cadastrarUsuario (e) {
        e.preventDefault()
        console.log(`Usuario: ${name} com a Senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="Name">Nome:</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Digite seu nome"
                      onChange={(e) => setName(e.target.value)}
                      />
                </div>
                <div>
                    <label htmlFor="Password">Senha:</label>
                    <input 
                      type="password" 
                      id="password" 
                      name="password" 
                      placeholder="Digite sua senha"
                      onChange={(e) => setPassword(e.target.value)}
                      />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )
}

export default Form