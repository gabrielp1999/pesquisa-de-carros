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
    const labelModelo = document.getElementById('labelModelo')
    const caixa = document.getElementById('caixa')
    const anoId = document.getElementById('anoId')
    const labelAno = document.getElementById('labelAno')
    let conteudoModelo = "<option value=''>Selecionar Modelo</option>";

    for(let modelo of resultado.data.modelos){
        conteudoModelo += ` <option value="${modelo.codigo}">${modelo.nome}</option>`
    }

    modeloId.innerHTML = conteudoModelo;

    if(value !== 0){
        labelModelo.style.display="flex"
        modeloId.style.display="flex"
        caixa.style.display="none"
        anoId.style.display ="none"
        labelAno.style.display ="none"
    }
    

}

async function selecionarModelo(value) {
    const codigoMarca = document.getElementById('marcaId').value;    
    const resultado = await axios(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigoMarca}/modelos/${value}/anos`);
    console.log(resultado.data);
    const anoId = document.getElementById('anoId')
    const labelAno = document.getElementById('labelAno')
    const caixa = document.getElementById('caixa')
    let conteudoAno = "<option value=''>Selecionar ano</option>";

    for(let anoCarro of resultado.data){
        conteudoAno += `"<option value='${anoCarro.codigo}'>${anoCarro.nome}</option>"`
    }

    if(value !== 0){
        anoId.style.display="flex"
        labelAno.style.display="flex"
        caixa.style.display="none"
    }

    anoId.innerHTML = conteudoAno;
    
}

async function selecionarAno(value) {
    const codigoMarca = document.getElementById('marcaId').value;
    const codigoModelo = document.getElementById('modeloId').value;
    const resultado = await axios(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos/${value}`);

    console.log(resultado.data)

    const caixa = document.getElementById('caixa');

    caixa.style.display ="flex";
    
    let conteudo = `
    <span class="titulo">Marca:</span><span class="descricao">${resultado.data.Marca}</span>
    <span class="titulo">Modelo:</span><span class="descricao">${resultado.data.Modelo}</span>    
    <span class="titulo">Ano:</span><span class="descricao">${resultado.data.AnoModelo}</span>    
    <span class="titulo">Valor:</span><span class="descricao">${resultado.data.Valor}</span>
    <span class="titulo">Combustivel:</span><span class="descricao">${resultado.data.Combustivel}</span>    
    <span class="titulo">Mes de referencia:</span><span class="descricao">${resultado.data.MesReferencia}</span>
    `;


    caixa.innerHTML = conteudo;
    
}

buscarMarcas()


