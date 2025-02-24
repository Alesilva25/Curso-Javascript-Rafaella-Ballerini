function adicionarTarefa() {

    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    const mensagem = document.getElementById("mensagem")

    if (tarefa == "") {
        let mensagemErro = "Digite uma tarefa para adicioná-la à sua lista"
        mensagem.textContent = mensagemErro
    } else {
        const listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        listaTarefas.appendChild(novaTarefa)

        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent.style.color = #28A745;
    }
    
    inputTarefa.value = ""
}