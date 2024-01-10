function updateProfileGas(ProfileGasolina) {
    const gas = document.querySelector('.vgasolina')
    gas.innerText = ProfileGasolina.data[0][1][45]
    valorGasolina = ProfileGasolina.data[0][1][45]
    
    var trocaGas = valorGasolina.replace(",", ".");
    valorKMgas = (trocaGas / 8)
    var tGas = parseFloat(valorKMgas.toFixed(2));
    const kmgas = document.querySelector('.vkmgas')
    kmgas.innerText = (tGas)

    const ValorGasolina = document.querySelector('.ValorGasolina')
    var localGasolina = localStorage.getItem("ValorGasolina")
    ValorGasolina.value = (localGasolina)
}

function updateProfileEtn(ProfileEtanol) {
    const etn = document.querySelector('.vetanol')
    etn.innerText = ProfileEtanol.data[0][1][45]
    valorEtanol = ProfileEtanol.data[0][1][45]
    
    var trocaEtn = valorEtanol.replace(",", ".");
    valorKMetn = (trocaEtn / 6)
    var tETN = parseFloat(valorKMetn.toFixed(2));
    const kmetn = document.querySelector('.vkmetn')
    kmetn.innerText = (tETN)

    const ValorEtanol = document.querySelector('.ValorEtanol')
    var localEtanol = localStorage.getItem("ValorEtanol")
    ValorEtanol.value = (localEtanol)
}

function updateProfileGNV(ProfileGNV) {
    const gnv = document.querySelector('.vgnv')
    gnv.innerText = ProfileGNV.data[0][1][45]
    valorGNV = ProfileGNV.data[0][1][45]
    
    var trocaGNV = valorGNV.replace(",", ".");
    valorKMgnv = (trocaGNV / 10)
    var tGNV = parseFloat(valorKMgnv.toFixed(2));
    const kmgnv = document.querySelector('.vkmgnv')
    kmgnv.innerText = (tGNV)

    const ValorGNV = document.querySelector('.ValorGNV')
    var localGNV = localStorage.getItem("ValorGNV")
    ValorGNV.value = (localGNV)
}

function btn() {

    const calcGasolina = document.querySelector('.calcGasolina')
    var ValorGasolina = document.querySelector('.ValorGasolina')
    var inputGasolina = ValorGasolina.value
    var inputGasolina = inputGasolina.replace(",", ".")
    resultadoGasolina = (inputGasolina / 8)
    var convertGas = parseFloat(resultadoGasolina.toFixed(2))
    calcGasolina.innerText = (convertGas)
    
    historicoGasilna = localStorage.setItem('ValorGasolina', inputGasolina)

    const calcEtanol = document.querySelector('.calcEtanol')
    var ValorEtanol = document.querySelector('.ValorEtanol')
    var inputEtanol = ValorEtanol.value
    var inputEtanol = inputEtanol.replace(",", ".")
    resultadoEtanol = (inputEtanol / 6)
    var convertEtn = parseFloat(resultadoEtanol.toFixed(2))
    calcEtanol.innerText = (convertEtn)

    historicoEtanol = localStorage.setItem('ValorEtanol', inputEtanol)

    const calcGNV = document.querySelector('.calcGNV')
    var ValorGNV = document.querySelector('.ValorGNV')
    var inputGNV = ValorGNV.value
    var inputGNV = inputGNV.replace(",", ".")
    resultadoGNV = (inputGNV / 10)
    var convertGNV = parseFloat(resultadoGNV.toFixed(2))
    calcGNV.innerText = (convertGNV)

    historicoGNV = localStorage.setItem('ValorGNV', inputGNV)    
}

(async () => {
    const ProfileGasolina = await fecthProfileGasolina()
    updateProfileGas(ProfileGasolina)

    const ProfileEtanol = await fecthProfileEtanol()
    updateProfileEtn(ProfileEtanol)

    const ProfileGNV = await fecthProfileGNV()
    updateProfileGNV(ProfileGNV)
})()


//function btn() {
    
    //console.log(vGNV());
    //console.log(ProfileData());
    //console.log(vEtanol());
    

//}


//*[@id="ValorGasolina"]