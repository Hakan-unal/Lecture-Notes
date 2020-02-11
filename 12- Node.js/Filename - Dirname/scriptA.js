
// dosyanın konumunu gösteriyor
console.log(__filename);
// klasörün konumunu gösteriyor
console.log(__dirname);

let firstName = "Hakan";
const fonksiyon = (name) => {
    console.log(name);
}

exports = {
    firstName,
    fonksiyon
}
