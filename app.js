const { crearArchivoBase, listarTabla } = require('./multiplicar/multiplicar');

var colors = require('colors');
const argv = require('./config/yargs').argv;

const comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        // .then(data => console.log(data))
        // .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivoBase(argv.base, argv.limite)
            .then(archivo => console.log(`Archico creado ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    case 'tururu':
        break;
    default:
        console.log("Comando no reconocido");
}


// crearArchivoBase(base)
//     .then(archivo => console.log(archivo))
//     .catch(err => console.log(err));