import React from 'react';
import { useState } from 'react/cjs/react.development';

import './MateriaTurma.css';

const MateriaTurma = props =>{
    //const [professoresMateria, setProfessoresMateria] = useState([]);
    const [professorInput, setProfessorInput] = useState('');

    const materia = props.materia;
    const professores =props.professores;

    const addProfessorMateriaFunc = props.addProfessorMateria;

    const handleBtnAdd = (ev) => {
        ev.preventDefault();

         const professorFind = professores.find( professor => professorInput == professor.nome);

         if(professorFind){
            addProfessorMateriaFunc(materia, professorFind);
         }
         
    };

    const renderProfessorMateria = () => {
        console.log(materia);
        return (materia.professores.length > 0) ? materia.professores.map( professor => (
            <div className='div-professor-materia'>
                {professor.nome}
            </div>
        )) : ''
    };

    return (
        <div className='div-materia'>
            <span className='materia-nome'>{materia.nome}</span>
            <div className='div-add-professor'>
                <datalist id='data-professores'>
                {professores.map(professor => (<option>{professor.nome}</option>))}
                </datalist>
                <input 
                    defaultValue={professorInput}
                    onChange={ev=>setProfessorInput(ev.target.value)}
                    type='text' 
                    className={"in-add-professor-"+materia.nome} 
                    list='data-professores' 
                    placeholder='Nome do professor'    
                />
                <button onClick={handleBtnAdd} className={'add-professor-'+materia.nome}>+</button>
                <div className='professores-materia'>
                    {renderProfessorMateria()}
                </div>
            </div>
        </div>
    );
}

export default MateriaTurma;