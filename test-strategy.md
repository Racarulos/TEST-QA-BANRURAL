# Plan de ataque
Se realizaron diferentes pruebas dentro del código siguiento el siguiente flujo:

## Código HTML
Buscando, se encontró que en el momento de agregar la caja de texto "Field", colocaron el mismo valor en "class" y "id", provocando que el querySelector no encontrara de forma correcta el objeto. De igual manera, con el botón "Submit" no agregaron el parámetro "id".

## Funciones en el SCRIPT
En esta parte se encontraron varios errores que afectaban a la funcionalidad del programa.

1. Iniciar el número aleatorio: Aquí se observó que la función no daba un número entero y que los números generados únicamente eran del 1 al 10, siendo lo correcto del 1 al 100, según la lectura del requerimiento. Corrección: Se agregó el parámetro Math.round() para que los números sean únicamente enteros y se cambió el valor de 10 a 100 para que genere correctamente los números del 1 al 100.

2. Intentos permitidos: Se observó que los intentos permitidos eran solamente 5 y lo correcto es 10. Corrección: Solo se cambió el valor a 10.

3. Error de sintaxis en lowOrHi: Aquí se descubrió que en el querySelector no le colocaron el punto. Corrección: Solo se agregó el punto para solucionar el error.

4. Validación de enteros en la funcion checkGuess: Esta validación no existía dentro del código. Corrección: Dentro de un if se agregó esta validación, userGuess != '' && Number.isInteger(Number(userGuess)), esto valida tanto que la caja de texto no esté vacía como que el valor sea un entero. Al final se agregó un mensaje para que el usuario corrija el error.

5. Error de en los if en la funcion checkGuess: Las condiciones no se ejecutaban de forma correcta, ya que no utilizaron la lógica correcta. Correcciones: En la condición que presentaba perder se colocó guessCount === ATTEMPS para que si los intentos del usuario son iguales a los intentos permitidos, coloque el mensaje de perder. En la validación de adivinar el número se corrigió y se agregó userGuess == randomNumber, para que valide de forma correcta el número que ingresó el usuario. Y por último, se corrigieron los colores de las alertas colocando para intento incorrecto color negro, intento correcto color verde y perder color rojo.  

5. Error en el evento que llama a la acción del boton: Realizando pruebas se encontró que el botón no hacía ninguna acción. Corrección: Se encontró que la acción addEventListener estaba escrita de la siguiente forma: addeventListener y, por lo mismo, no funcionaba. Este mismo error se encontró en dos métodos que llamaban a dicha función, línea 104 y 112.

6. Error en la función resetGame: Al momento de reiniciar el juego y volver a colocar un número nuevo, se encontró que el número aleatorio se colocaba únicamente con el número 1. Corrección: Se usó la misma línea de código que se tiene al momento de iniciar el juego.

7. ocultar los scripts: Como parte de buenas practicas de programación, es recomendable ocultar los scripts que se ejecutan en el codigo, por lo cual se agrego una carpeta donde se colocaron los scripts que utiliza la pagina.

Realizando las correcciones indicadas arriba el programa funciona de forma correcta.