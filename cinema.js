var cinema = "ParaMovies";
const catalogo = require("./database/catalogo.json")
//var catalogo = [{
//    codigo: 1,
//    titulo: "Taxi Driver",
//    duracao: 1.54,
//    atores: ["Robert de Niro", "Jodie Foster", "Cybil Shepherd", "Harvey Keitel"],
//    anoDeLancamento: 1976,
//    emCartaz: false
//},{
//    codigo: 2,
//    titulo: "Scarface",
//    duracao: 2.50,
//    atores: ["Al Pacino", "Steven Bauer", "Michelle Pfeifer", "Mary Elizabeth Mastrantonio", "Robert Loggia"],
//    anoDeLancamento: 1983,
//    emCartaz: true
//}
//]

//Adicionar filme ao catálogo
function adicionarFilmes (codigo, titulo, duracao, atores, anoDelancamento, emCartaz){
    catalogo.push({codigo, titulo, duracao, atores, anoDelancamento, emCartaz})
}
//Chamar os parâmetros para adicionar ao catálogo
//console.log(adicionarFilmes(3, "O Poderoso Chefão", 2.55, ["Al Pacino", "Marlon Brando", "Robert de Niro", "Talia Shire"], 1972, false));

//Chamar o catálogo atualizado
//console.log(catalogo)

//Buscar filmes dentro do catalogo catálogo
function buscarFilme (filme){
    for (let index = 0; index < catalogo.length; index++) {
        const element = catalogo[index].codigo;
        if (filme == element) {
            console.log(catalogo[index])
        }
    }
    }
// Chamar o resultado da função buscarFilme
//console.log(buscarFilme(3))

//Função Alterar Status em Cartaz
function alterarStatusEmCartaz(codigo){
    for (let i = 0; i < catalogo.length; i++) {
        catalogo[i].codigo == codigo ? catalogo[i].emCartaz = !catalogo[i].emCartaz : "";
    }
}

//alterarStatusEmCartaz(1)
//console.log(catalogo)

//Mostrar filmes em Cartaz
var listarFilmesEmCartaz = catalogo.filter(function(obj){
    return obj.emCartaz == true
})

console.log(catalogo)