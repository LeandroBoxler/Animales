const fs = require("fs")
const path= require("path")

function leerJSON() {
    const ruta = fs.readFileSync(path.join(__dirname, "./tareas.json"),"utf-8")
    return JSON.parse(ruta)
}
function escribirJSON(dato) {
    const result = JSON.stringify(dato)
    return fs.writeFileSync(path.join(__dirname,"./tareas.json"),result)
}
module.exports = {
    leerJSON,escribirJSON
}