/*
FALSY → valores avaliados como false
 *false → literal
 0
 null / undefined
 ' ' " " ` ` → strings vazias
 NaN

 Todo resto é avaliado como true
 */

 function falaOi(){
    return 'Oi';
 }

 const vaiExecutar = false;

 console.log(vaiExecutar && falaOi()); // falaOi é true, se vaiExecutar for true, executa a função.

 const corUsuario = null;
 const corPadrao = corUsuario || 'preto'; // se o usuário selecionar uma cor válida, aparece a cor dele
 console.log(corPadrao);