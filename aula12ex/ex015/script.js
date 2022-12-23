function verificar(){
    var data = new Date()
    var anoA = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > anoA){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
     }else {
            var fsex= document.getElementsByName('radsex')
            var idade = anoA - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id','foto')
            if (fsex[0].checked) {
                genero = 'Homem'
                if(idade >= 0 && idade < 10){
                    //crinaça
                } else if (idade < 21){
                    //jovem
                } else if (idade < 50){
                    //adulto
                } else {
                    //Idoso
                }
            } else if (fsex[1].checked){
                genero = 'Mulher'
                if(idade >= 0 && idade < 10){
                    //crinaça
                } else if (idade < 21){
                    //jovem
                } else if (idade < 50){
                    //adulto
                } else {
                    //Idoso
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
} 