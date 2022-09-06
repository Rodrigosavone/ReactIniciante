import Button from "./Button"

function Evento () {

  function meuEvento () {
    console.log('Ativado primeiro evento!')
  }
  function segundoEvento () {
    console.log('Ativado segundo evento!')
  }
  
  return (
    <>
      <p>Clique para disparar um evento:</p>
      <Button event={meuEvento} text="Primeiro Evento"/>
      <Button event={segundoEvento} text="Segundo Evento"/>
    </>
  )
}

export default Evento