// import { resolve } from 'dns';

const fs = require('fs');
var colors = require('colors');
// const fs = require('express'); //paquete que se instala, no nativo de node
// const fs = require('./path');    //archivos que creamos

let listarTabla = (base, limite = 10) => {

    // return new Promise((resolve, reject) => {

    //     if (!Number(base)) {
    //         reject(`El valor introducido "${base}" no es un numero`);
    //     }
    console.log("=====================".blue);
    console.log(` === Tabla de ${base} === `.green);
    console.log("=====================".blue);
    let data = "";
    for (let i = 1; i <= limite; i++) {
        // data += `${base} * ${i} = ${base*i}\n`;
        console.log(`${base} * ${i} = ${base*i}`);
    }
    //     reject(data);
    // });
}


let crearArchivoBase = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido "${base}" no es un numero`);
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
            // console.log('Archivo creado');
        });
    });

}

module.exports = {
    crearArchivoBase,
    listarTabla
}