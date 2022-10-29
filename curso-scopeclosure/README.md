# curso-scopeclosure

El scope es cada uno de los entornos donde las variables tienen alcance 
dentro del código de JavaScript. En otras palabras, determina que valor 
tendrá la variable dependiendo dónde se encuentre.

Imagina que pierdes algo importante (llaves, dinero, celular), comienzas 
a buscar este objeto por los lugares más cercanos en que te encuentras; 
si no lo encuentras, buscas en los lugares más lejanos y así sucesivamente 
hasta encontrarlo. Las llaves son las variables y tú eres JavaScript.

Si haces referencia a una variable, el motor de JavaScript buscará su 
declaración en el entorno más cercano, y seguirá buscando en entornos 
más lejanos hasta llegar a la línea de código que la variable esté 
declarada, pero no en viceversa. A este proceso se lo denomina cadena de 
scope (scope chaining).

## Tipos de scope
Existen dos tipos de scope: global y local. El scope local puede ser de 
función o de bloque. Un bloque es toda porción de código que está 
encerrada entre llaves {}, estos pueden ser los bloques: 
función, if, else, while, y for.

## Qué es el scope global
Las variables globales son aquellas que se encuentran declaradas fuera de 
los bloques de código o funciones .El scope global es el entorno donde las 
variables globales pueden ser accedidas desde cualquier lugar de nuestro 
programa.

Qué es el scope local
Las variables locales son aquellas que se encuentran declaradas dentro de 
los bloques de código o funciones. El scope local es el entorno donde las 
variables locales solo se pueden acceder desde una función o bloque del 
programa.

## Hoisting en variables
Para hablar del scope de bloque, realizaré una breve explicacion de Hoisting. Hablaré un más de esto en su clase respectiva.

Hoisting es un término para describir que la declaración de variables y funciones son desplazadas a la parte superior del scope más cercano.

## ¿Por qué “var” no tiene scope de bloque?
En el scope de bloque, sí importa que las variables sean declaradas con var, let o const. Ya que var no tiene un scope de bloque.

## Strict Mode
El modo estricto es una funcionalidad que le permite al motor de JavaScript cambiar la manera en que ejecuta el código. En este modo, se reduce las cosas que podemos hacer, esto es bueno porque permite manejar errores que son poco perceptibles o que el motor de JavaScript sobreentiende y ayuda a su compilación para corregirlos.

## Closure
Un closure permite acceder al scope de una función exterior desde una función interior. En JavaScript, los closures se crean cada vez que una función se genera. A diferencia de otros conceptos como funciones, variables u otros, los closures no se utilizan todas las veces.
"Permiten acceder al ámbito de una función exterior desde una función interior. En JavaScript, las clausuras se crean cada vez que una función es creada"
Tienes una closure cuado una funcion cualquiera
accede a una variable fuera de su contexto.

## Debugging
Debugging es el término para solucionar bugs. Los bugs (“bichos” en inglés) son errores en la aplicación, saber cómo solucionarlos de manera eficiente es clave para tu desarrollo como profesional.

Todo navegador dispone de Dev tools o herramientas de desarrollador, que es un conjunto de características del código de la página web, una de estas es el debugging.

La consola del navegador es importante para ver qué está pasando con el código generado. La consola se muestra con la combinación de teclas F12 / Ctrl + Shift + I / Cmd+Opt+I o clic derecho e “Inspeccionar” en tu navegador preferido (de preferencia Google Chrome).