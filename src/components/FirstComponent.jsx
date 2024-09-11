import React from 'react'
import { Link } from 'react-router-dom';

const FirstComponent = () => {
  const nome = "David";
  const sobrenome = "Martins Peres";
  const matricula = 2324290022;
  const materia = "Construção de Front-End";
  const prof = "Felipe Batista"
  return (
    <div className="inicio-container"> 
    <h1>Lista dos Principais Artilheiros da Seleção Brasileira.</h1><br/>


      <h2>Aluno: {nome} {sobrenome}
      <br/>Matricula: {matricula}
      <br/>{materia}, Professor: {prof}</h2>
      <p> <br/><button><Link to={'Segundo'}>Sobre a Seleção Brasileira.</Link></button> </p>
      <h2> <button><Link to={'Terceiro'}> Prosseguir</Link></button>   </h2>
      

      <footer> <button> <Link to={'Quarto'}>ALL PROJECT</Link></button> </footer>
      
      </div>
  )
}

export default FirstComponent