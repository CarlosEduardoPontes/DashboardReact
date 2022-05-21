import React from "react";
import '../../style/OverviewAluno.css'

export default () => {
    return(
        <aside class='container'>
            <div class="grid">
                <div class='grid-area-aluno'><p>Seja bem-vindo a sua Àrea do Aluno.</p>
                     <p>Verifique se seu Professor já postou suas tarefas!</p>
                </div>
                
                <div class="grid__item">
                    <div class='grid__item__titulo'>Português</div>
                    <div class='grid__item__texto'>Tarefas de Português</div>
                    <div class='grid__item__subtexto'><button class='app-hub-button'>Iniciar Tarefa</button></div>
                </div>

                <div class="grid__item">
                    <div class='grid__item__titulo'>Matemática</div>
                    <div class='grid__item__texto'>Tarefas de Matemática</div>
                    <div class='grid__item__subtexto'><button class='app-hub-button'>Iniciar Tarefa</button></div>
                </div>

                <div class="grid__item">
                    <div class='grid__item__titulo'>História</div>
                    <div class='grid__item__texto'>Tarefas História</div>
                    <div class='grid__item__subtexto'><button class='app-hub-button'>Iniciar Tarefa</button></div>
                </div>

                <div class="grid__item">
                    <div class='grid__item__titulo'>Geografia</div>
                    <div class='grid__item__texto'>Tarefas de Geografia</div>
                    <div class='grid__item__subtexto'><button class='app-hub-button'>Iniciar Tarefa</button></div>
                </div>

                <div class="grid__item">
                    <div class='grid__item__titulo'>Química</div>
                    <div class='grid__item__texto'>Tarefas de Química</div>
                    <div class='grid__item__subtexto'><button class='app-hub-button'>Iniciar Tarefa</button></div>
                </div>

                <div class="grid__item">
                    <div class='grid__item__titulo'>Física</div>
                    <div class='grid__item__texto'>Tarefas de Física</div>
                    <div class='grid__item__subtexto'><button class='app-hub-button'>Iniciar Tarefa</button></div>
                </div>

                <div class="grid__item">
                    <div class='grid__item__titulo'>Biologia</div>
                    <div class='grid__item__texto'>Tarefas de Biologia</div>
                    <div class='grid__item__subtexto'><button class='app-hub-button'>Iniciar Tarefa</button></div>
                </div>
                <div class="grid__item">
                    <div class='grid__item__titulo'>Ingês</div>
                    <div class='grid__item__texto'>Tarefas de Inglês</div>
                    <div class='grid__item__subtexto'><button class='app-hub-button'>Iniciar Tarefa</button></div>
                </div>
            </div>
        </aside>  
    )
}

