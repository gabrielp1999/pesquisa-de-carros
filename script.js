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
    
    // const textoPesquisa = resultado.data.Modelo + " " + resultado.data.AnoModelo;

    // const resultadoImagem = await axios.get(`https://serpapi.com/search.json?q=${textoPesquisa}&tbm=isch&ijn=0&api_key=14ea1aef60872af939ead0290b04aad2b1b8c5a0c2122502342e419e19e8aa36`, {
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //       "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    //       "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    //     }
    // });

    // console.log(resultadoImagem.data);


    const caixa = document.getElementById('caixa');

    caixa.style.display ="block";
    
    let conteudo = `
    <span class="titulo">Marca:</span> <br> <span class="descricao">${resultado.data.Marca}</span> <br>
    <span class="titulo">Modelo:</span> <br> <span class="descricao">${resultado.data.Modelo}</span> <br>     
    <span class="titulo">Ano:</span><br> <span class="descricao">${resultado.data.AnoModelo}</span> <br>    
    <span class="titulo">Valor:</span> <br> <span class="descricao">${resultado.data.Valor}</span> <br>
    <span class="titulo">Combustivel:</span> <br> <span class="descricao">${resultado.data.Combustivel}</span><br>    
    <span class="titulo">Mes de referencia:</span><br><span class="descricao">${resultado.data.MesReferencia}</span><br>
    `;
    caixa.innerHTML = conteudo;
    
}



buscarMarcas()


