function carregar(){
   var msg = window.document.getElementById('msg');
   var img = window.document.getElementById('imagem') ;
   var data = new Date();
   var hora = data.getHours();
   if(hora >= 0 && hora < 12){
    msg.innerHTML = 'Olá, Bom dia!' + '<br> Agora são ' + hora + ' horas'
    img.src = "imagens/manha-redonda.png";
    document.body.style.background = '#fcd7a2'
    }else if(hora >= 12 && hora <= 18){
    msg.innerHTML = 'Olá, Boa tarde!' + '<br> Agora são ' + hora + ' horas'
    img.src = "imagens/tarde-redonda.png";
    document.body.style.background = '#c23a0b'
    }else{
    msg.innerHTML = 'Olá, Boa noite!' + '<br> Agora são ' + hora + ' horas'
    img.src = "imagens/noite-redonda.png";
    document.body.style.background = '#222c35';
    }
}

