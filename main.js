const button = document.querySelector('.btn-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')


let minhaListaDeItens = []

function adicionarNovaTarefa(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })
    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas(){
    let novaLi = ''
    minhaListaDeItens.forEach( (item, posicao) => {
        novaLi = novaLi +

        `<li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="check na tarefa" onclick="concluirTarefa(${posicao})">
        <p>${ item.tarefa }</p>
        <img src="./img/trash.png" alt="tarefa-para-excluir" onclick="deletarItem(${posicao})">
        </li>
        `
    })

    listaCompleta.innerHTML = novaLi
    // Guardar itens no local storage
    localStorage.setItem('lista', JSON.stringify( minhaListaDeItens ))
}
function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostrarTarefas()
}

function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    mostrarTarefas()
}

function recarregarTrarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    
    if(tarefasDoLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    console.log(tarefasDoLocalStorage)
    }

    mostrarTarefas()
}

recarregarTrarefas()
button.addEventListener('click', adicionarNovaTarefa)