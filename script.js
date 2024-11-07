let main;
const propertyInf = [];

do {
    main = prompt(`
    Imóveis cadastrados: ${propertyInf.length}
    1 - Novo imóvel.
    2 - Listar imóveis salvos.
    3 - Sair.`);

    switch (main) {
        case "1":
            let property = {};
            property.name = prompt(`Nome do proprietário:`);
            property.rooms = parseInt(prompt(`Quantidade de quartos:`));
            property.bathroom = parseInt(prompt(`Quantidade de banheiros:`));
            property.garage = prompt(`Tem garagem? (S/N):`);
            if (confirm(`Deseja salvar este imóvel?\nNome: ${property.name}\nQuartos: ${property.rooms}\nBanheiros: ${property.bathroom}\nGaragem: ${property.garage}`)) {
                propertyInf.push(property);
                alert("Imóvel salvo com sucesso!");
            } else {
                alert("Imóvel não salvo.");
            }
            break;

        case "2":
            if (propertyInf.length === 0) {
                alert("Não há imóveis cadastrados.");
            } else {
                let propertyList = propertyInf.map((p, index) => `
            Imóvel ${index + 1}:
                Proprietário: ${p.name}
                Quartos: ${p.rooms}
                Banheiros: ${p.bathroom}
                Garagem: ${p.garage}`);

                alert(`Informações dos imóveis:\n${propertyList}`);
            }
            break;

        case "3":
            alert("Encerrando...");
            break;

        default:
            alert("Opção inválida.");
    }
} while (main !== "3");