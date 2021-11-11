import React from 'react';
import { useState } from 'react/cjs/react.development';

/**
 * 
 * @param {object} props contendo os atributos:
 * - columns: array contendo cada coluna da tabela, cada item sendo um objeto JSON com os atributos
 *  name e label. Exemplo: [{name: "id", label: "Identificação"}, {name: "nome", label: "Nome"}]
 * - itens: array contendo cada item da tabela, cada item sendo um JSON com o atributo id
 * para identificar o item e o atributo values contendo um array com cada coluna e seu respectivo valor
 *  Exemplo: [
 * {
 *  id: 1,
 *  values: [
 *          {name: "id", value: 1},
 *          {name: "nome", value: "Astolfo"}
 *      ]
 * }
 * ]
 * @returns o elemento jsx da tabela
 */
const Table = props =>{
    // const [itens, setItens] = useState([]);

    // setItens(props.itens);

    const itens = props.itens;

    console.log(itens);

    return (
        <div className='div-table'>
            <table className={props.className}>
                <thead>
                    <tr>
                        {props.columns.map(column => <th key={column.name} className={column.name} >{column.label}</th>)}
                    </tr>
                </thead>
            
                <tbody>
                    {
                        itens.length > 0 ? itens.map(
                            item => 
                            <tr key={item.id}>
                                {item.values.map( c => <td key={item.id+c.name} className={c.name}>{c.value}</td>)}
                            </tr> 
                        ) : ''
                    }
                </tbody>
            
            </table>
        </div>
      );
}

export default Table