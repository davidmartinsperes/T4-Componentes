import React from 'react'

const ThirdComponent = () => {
    const atletas = [
        { nome: "Neymar Jr.", Estreia: '2010', Marcos: "79 gols em 128 jogos" },
        { nome: "Pelé", Estreia: '1957', Marcos: "77 gols em 92 jogos" },
        { nome: " Ronaldo Fenômeno", Estreia: '1990', Marcos: "62 gols em 99 jogos" },
        { nome: "Romário", Estreia: '1985',Marcos: "55 gols em 70 jogos" },
        {nome: "Zico", Estreia: '1976', Marcos: "48 gols em 71 jogos"}
    ]
    atletas.sort((a,b)=> a.nome.localeCompare(b.nome));
    return (
        <div> 
            <h1>Principais Artilheiros da Seleção Brasileira</h1>
            <ol>{atletas.map((atleta) => (
                <li><b>Nome: {atleta.nome}  | Ano de Estreia: {atleta.Estreia} | Marcos: {atleta.Marcos}.</b></li>
            )
            )}
            </ol>
        </div>
    )

}

export default ThirdComponent