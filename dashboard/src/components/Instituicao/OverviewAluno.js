import React from "react";
import '../Instituicao/OverviewAluno.css'

export default () => {
    return(
        <aside>
            <div class="grid">
            
            <div class="grid__item-historia">História</div>

            <div class="grid__item-port"></div>

            <div class="grid__item-math">Matemática</div>

            <div class="grid__item-fisica">Física</div>

            <div class="grid__item">
                <h1>Biologia</h1>
                <p>Tarefas de Física</p>
            </div>
            <div class="grid__item">
                <h1>Química</h1>
                <p>Tarefas de Química</p>
            </div>
            <div class="grid__item">
                <h1>Inglês</h1>
                <p>Tarefas de Inglês</p></div>
            <div class="grid__item">
                <h1>Geografia</h1>
                <p>Tarefas de Geografia</p>
            </div>
            </div>
        </aside>  
    )
}

