
let options 
do {
    options = prompt(`
    1 - Imóveis cadastrados.
    2 - Salvar um novo imóvel.
    3 - Listar os imóveis salvos.
    4 - Sair.`)

    switch (options) {
        case '1':

            if (furniture > 0){
                alert("Não há imóveis cadrastados")
            }
            break
        case '2':
            saveProperty{
                name: 
            }
            break
        case '3':
            alert("Saindo...")
            break
        default:
            alert("Opção inválida. Tente novamente.")
    }
}while(options !== "4")