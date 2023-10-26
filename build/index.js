"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myUser = void 0;
//tipe data
let nama = "AzizFRohman"; //string
console.log(nama);
let npm = 4357027205003; //number
console.log(npm);
let statusMahasiswa;
statusMahasiswa = true; //Boolean
console.log("mahasiswa " + statusMahasiswa);
let prodi;
prodi = ["IF", 1];
// prodi="SI"
console.log(prodi); //Tipe data Any bisa digunakan untuk tipe data apa saja
let array;
array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //array number
console.log("array number: " + array);
let array2;
array2 = ['akbar', 'aziz', 'hafiz']; //array string
console.log("array sting" + array2);
let array3;
array3 = [1, 2, "any", "any"]; //array any
console.log("array any: " + array3);
let alamat;
alamat = ["Karawang", 89699735698]; //array tuppel
console.log("array tuple: " + alamat);
var bulan;
(function (bulan) {
    bulan[bulan["jan"] = 1] = "jan";
    bulan[bulan["feb"] = 2] = "feb";
    bulan[bulan["mar"] = 3] = "mar";
    bulan[bulan["apr"] = 4] = "apr";
})(bulan || (bulan = {})); //indexs enum dimulai dari satu
var def;
(function (def) {
    def[def["jan"] = 0] = "jan";
    def[def["feb"] = 1] = "feb";
    def[def["mar"] = 2] = "mar";
    def[def["apr"] = 3] = "apr";
})(def || (def = {})); //defaul enum
console.log(bulan, def);
function teman() {
    return "String";
}
function teman2() {
    return 1;
}
console.log(teman(), teman2());
function multi(val, val2) {
    return val * val2;
}
const res = multi(5, 5);
console.log(res);
let User = {
    nama: "AzizFrohman", umur: 22, alamat: "London"
};
console.log("object", User);
//fungsi default
const full = (nama = "Aziz", kelas = "SI") => {
    return nama + " " + kelas;
};
console.log("defaul fungsi", full());
//class
class myUser {
    constructor(nama) {
        this.nama = nama;
    }
}
exports.myUser = myUser;
let out = new myUser("Aziz");
console.log("Class", out.nama);
