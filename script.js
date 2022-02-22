const operaciones = [
    {
      descripcion: 'Sueldo',
      categoria: 'Trabajo',
      fecha: '01/01/2021',
      monto: 50000,
      tipo: 'Ganancia',
    },
    {
      descripcion: 'Pago de alquiler',
      categoria: 'Alquiler',
      fecha: '02/01/2021',
      monto: 15000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Pago de expensas',
      categoria: 'Alquiler',
      fecha: '02/01/2021',
      monto: 5000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Pago de internet',
      categoria: 'Servicios',
      fecha: '10/01/2021',
      monto: 2000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Trabajo freelance',
      categoria: 'Trabajo',
      fecha: '15/01/2021',
      monto: 20000,
      tipo: 'Ganancia',
    },
    {
      descripcion: 'Cena con amigas',
      categoria: 'Salidas',
      fecha: '18/01/2021',
      monto: 1500,
      tipo: 'Gasto',
    }
]

// Mostrar por consola "Cena con amigas"

// Hardcodeando posicion
// console.log(operaciones[5].descripcion)

// Utilizando un metodo de array
// const cenaConAmigas = operaciones.find(operacion => operacion.descripcion === 'Cena con amigas')
// console.log(cenaConAmigas.descripcion)

// const nuevaOperacion = {
//     descripcion: "Veterinaria",
//     categoria: "Mascotas",
//     fecha: "19/01/2021",
//     monto: 2500,
//     tipo: "Gasto"
// }

//operaciones.push(nuevaOperacion)
const operaciones2 = [...operaciones, {
    descripcion: "Veterinaria",
    categoria: "Mascotas",
    fecha: "19/01/2021",
    monto: 2500,
    tipo: "Gasto"
}]
//console.log(operaciones2)

const copiaOperaciones = operaciones.map(operacion => {
    return {
        descripcion: operacion.descripcion,
        categoria: operacion.categoria,
        fecha: operacion.fecha,
        monto: operacion.monto.toString(),
        tipo: operacion.tipo
    }
})
//console.log(copiaOperaciones)

const filtroOperaciones = operaciones.filter(operacion => operacion.monto > 3000)
//console.log(filtroOperaciones)

const ganancias = operaciones.filter(operacion => operacion.tipo === "Ganancia")
//console.log(ganancias)

const gastos = operaciones.filter(operacion => operacion.tipo === "Gasto")
//console.log(gastos)

const initialValue = 0;
const totalGastos = gastos.reduce(
  (previousValue, currentValue) => {
      return previousValue + currentValue.monto
  }, initialValue
);

//console.log(totalGastos)

// SPREAD OPERATOR
// Crea una COPIA de mi variable original y la podemos modificar
const numeros = [23, 50, 15, 20, 99, 150]
const numeros2 = [...numeros, 37, 40, 68, 21]

//console.log('numeros ', numeros)
//console.log('numeros2 ', numeros2)

const nuevaOperacion = {
    descripcion: "Veterinaria",
    categoria: "Mascotas",
    fecha: "19/01/2021",
    monto: 2500,
    tipo: "Gasto"
}

const nuevaOperacionCopia = {...nuevaOperacion, lugar: 'Chopper'} // agregando props
const nuevaOperacionCopia2 = {...nuevaOperacion, monto: 3000} // modificando props

//console.log('1) ', nuevaOperacion)
//console.log('2) ', nuevaOperacionCopia2)

const delUnoAlTres = [1, 2, 3];

const delUnoAlCinco = [...delUnoAlTres, 4, 5]

//console.log( delUnoAlCinco ); // [1, 2, 3, 4, 5]

const arrayDado = ['UNO', 'DOS', 'TRES'];

const nuevoArray = ['CERO', ...arrayDado, 'CUATRO']

//console.log( nuevoArray ); // ['CERO', 'UNO', 'DOS', 'TRES', 'CUATRO']

const frase0 = ['¡', 'Hola'];
const frase1 = [',', ' ', 'Mundo'];
const frase2 = ['!'];

//const fraseCompleta = [...frase0, ...frase1, ...frase2]

//console.log( fraseCompleta.join('') ); // ¡Hola, Mundo!

const reviews = {
    reviewIMDB: 9,
    reviewFilmAffinity: 8.1
};
   
const peliInfo = {
    titulo: 'The Dark Knight',
    anio: 2008
};
   
const pelicula = {...peliInfo, ...reviews}

//console.log(pelicula);
// {
//   titulo: 'The Dark Knight',
//   anio: 2008,
//   reviewIMDB: 9,
//   reviewFilmAffinity: 8.1
// }

const estudiante = {
    nombre: 'Ada',
    apellido: 'Lovelace'
};
   
const estudianteJS = {sabeJS: true, ...estudiante, edad: 27}

//console.log(estudianteJS);
// { sabeJS: true, nombre: 'Ada', apellido: 'Lovelace', edad: 27 }

//console.log( Math.max(4, 7) ); // 7

const tresNums = [9, 4, 7];
//console.log( Math.max(tresNums[0], tresNums[1], tresNums[2]) ); // 9
//console.log( Math.max(tresNums) ); // NaN

const masNums = [5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17];
//console.log( Math.max(...masNums) ); // NaN, y debería ser 132

// ejemplo de uso

const agregarNumeroAlArray = (number, array) => [...array, number]

//console.log( agregarNumeroAlArray(1, [6, 19]) ) // [6, 19, 1]
//console.log( agregarNumeroAlArray(4, [1, 2, 3]) ) // [1, 2, 3, 4]

// REST OPERATOR permite a una funcion recibir una cantidad indefinida de parametros

const contarLosArgumentos = (...theArgs) => console.log(theArgs.length)

//contarLosArgumentos('uno', 'dos'); // 2
//contarLosArgumentos('uno', 'dos', 'tres', 'cuatro'); // 4
//contarLosArgumentos(5, 5, 4, 1, 32, 132, 54, 3, 4, 5, 76, 45, 23, 65, 12, 17); // 16

// const sumar = (num1, num2, num3) => {
//     if (num1 && num2 && num3) {
//         return num1 + num2 + num3
//     } else {
//         return num1 + num2
//     }
// }

const sumar = (...num) => {
    let acc = 0
    num.forEach(x => acc += x)
    return acc
}

// console.log(sumar(2, 4))
// console.log(sumar(2, 4, 4))

const alCuadradoYSumar = (...numeros) => {
    const numerosAlCuadrado = numeros.map(num => Math.pow(num, 2))
    let acc = 0
    numerosAlCuadrado.forEach(x => acc += x)
    return acc
}

// console.log(alCuadradoYSumar(2, 4, 3)); // 29
// console.log(alCuadradoYSumar(1, 2)); // 5

/* estudiantesPorHechizo, que tome por parámetro el nombre de un hechizo y un array de estudiantes y devuelva un array con todos les estudiantes que tengan ese hechizo como hechizoPreferido */

const estudiantesPorHechizo = (hechizo, estudiantes) => {
    const arrayFiltrado = estudiantes.filter(estudiante => hechizo === estudiante.hechizoPreferido)
    return arrayFiltrado
}

//console.log(estudiantesPorHechizo("Expecto Patronum", estudiantes))

/* estudiantesConMasAmiguesQue, que tome por parametro un numero y un array de estudiantes y devuelva un array con todos les estudiantes que tengan un número de amigues mayor o igual a el número pasado por parámetro */

const estudiantesConMasAmiguesQue = (numero, estudiantes) => {
    const arrayFiltrado = estudiantes.filter(estudiante => estudiante.amigues.length >= numero)
    return arrayFiltrado
}

//console.log(estudiantesConMasAmiguesQue(6, estudiantes))

/* estudiantesConFamiliares, que tome por parámetro un array con nombres de familiares (p.ej, ["Sapo", "Lechuza"]) y un array de estudiantes y devuelva un array con les estudiantes que tengan cuyo familiar sea alguno de los incluidos en el parámetro */