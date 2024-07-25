function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('resultado')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'imagens/bebe-menino.png')
            }else if(idade >=10 && idade < 21){
                //JOVEM
                img.setAttribute('src', 'imagens/jovem-menino.png')
            }else if(idade < 50){
                //ADULTO
                img.setAttribute('src', 'imagens/adulto-menino.png')
            }else{
                //IDOSO
                img.setAttribute('src', 'imagens/idoso-menino.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'imagens/bebe-menina.png')
            }else if(idade >=10 && idade < 21){
                //JOVEM
                img.setAttribute('src', 'imagens/jovem-menina.png')
            }else if(idade < 50){
                //ADULTO
                img.setAttribute('src', 'imagens/adulto-mulher.png')
            }else{
                //IDOSO
                img.setAttribute('src', 'imagens/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos.'
        res.appendChild(img)
    }

}