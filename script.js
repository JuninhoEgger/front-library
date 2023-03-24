function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(livro) {
    linha = document.createElement("tr")

    tdTitle = document.createElement("td")
    tdAuthor = document.createElement("td")
    tdId = document.createElement("td")

    tdId.innerHTML = livro.id
    tdTitle.innerHTML = livro.title
    tdAuthor.innerHTML = livro.author

    linha.appendChild(tdId)
    linha.appendChild(tdTitle)
    linha.appendChild(tdAuthor)

    return linha
}

function main() {
    dados = fazGet("https://egger-library.uc.r.appspot.com//books/findAllBooks")
    let livros = JSON.parse(dados)
    let tabela = document.getElementById("tabela")
    livros.forEach(livro => {
        let linha = criaLinha(livro)
        tabela.appendChild(linha)
    })
}

main()