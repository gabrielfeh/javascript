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
                    img.setAttribute('src', 'img/menino.png')
                } else if (idade < 21){
                    img.setAttribute('src', 'img/homem-jovem.png')
                } else if (idade < 50){
                    img.setAttribute('src', 'img/homem-adulto.png')
                } else {
                    img.setAttribute('src', 'img/homem-idoso.png')
                }
            } else if (fsex[1].checked){
                genero = 'Mulher'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src', 'img/menina.png')
                } else if (idade < 21){
                    img.setAttribute('src', 'img/mulher-jovem.png')
                } else if (idade < 50){
                    img.setAttribute('src', 'img/mulher-adulta.png')
                } else {
                    img.setAttribute('src', 'img/mulher-idosa.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
    }
} 