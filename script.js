 async function buscarMarcas() {
    const resultado = await axios(`https://parallelum.com.br/fipe/api/v1/carros/marcas`);

    const marcasId = document.getElementById('marcaId');

    let conteudo = "<option value=''>Selecionar Marca</option>";

    for(let marca of resultado.data){
        conteudo += ` <option value="${marca.codigo}">${marca.nome}</option>`
    }

    marcasId.innerHTML = conteudo;
 
}

async function selecionarMarca(value) {
    const resultado = await axios(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${value}/modelos`);
    const modeloId = document.getElementById('modeloId');
    const anoId = document.getElementById('anoId')

    let conteudoModelo = "<option value=''>Selecionar Modelo</option>";
    let conteudoAno = "<option value=''>Selecionar ano</option>";

    for(let modelo of resultado.data.modelos){
        conteudoModelo += ` <option value="${modelo.codigo}">${modelo.nome}</option>`
    }

    for(let anoCarro of resultado.data.anos){
        conteudoAno += `"<option value='${anoCarro.codigo}'>${anoCarro.nome}</option>"`
    }


    console.log(resultado.data)

    modeloId.innerHTML = conteudoModelo;
    anoId.innerHTML = conteudoAno;

}



buscarMarcas()



