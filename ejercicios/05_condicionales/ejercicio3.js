let posicionEnLaCarrera = 6;
let mensaeAMostrar;

if (posicionEnLaCarrera == 1)
{
mensajeAMostrar = 'FELICITACIONES, SALISTE 1RO';
}

else if (posicionEnLaCarrera == 2)
{
  mensajeAMostrar ='Te falto poquito para ganar';
}

else if (posicionEnLaCarrera == 3)
{
  mensajeAMostrar ='Sos un orgullo para tu familia';
}

else if (posicionEnLaCarrera > 3)
{
  mensajeAMostrar ='volvé a tu casa';
}

else
{
  mensajeAMostrar ='No tires fruta';
};

console.log(mensajeAMostrar);

