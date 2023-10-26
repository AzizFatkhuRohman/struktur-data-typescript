//tipe data
let nama:string= "AzizFRohman" //string
console.log(nama)
let npm:number = 4357027205003 //number
console.log(npm)

let statusMahasiswa: boolean
statusMahasiswa=true //Boolean
console.log("mahasiswa "+statusMahasiswa)

let prodi:any
prodi=["IF",1]
// prodi="SI"
console.log(prodi)//Tipe data Any bisa digunakan untuk tipe data apa saja

let array:number[]
array=[1,2,3,4,5,6,7,8,9]//array number
console.log("array number: "+array)

let array2:string[]
array2=['akbar','aziz','hafiz'] //array string
console.log("array sting"+array2)

let array3:any[]
array3 = [1,2,"any","any"]//array any
console.log("array any: "+array3)

let alamat:[string,number]
alamat=["Karawang",89699735698]//array tuppel
console.log("array tuple: "+alamat)

enum bulan{
    jan = 1, feb,mar,apr
}//indexs enum dimulai dari satu
enum def{
    jan,feb,mar,apr
}//defaul enum
console.log(bulan,def)

function teman():string{//Fungsi string
    return "String"
}
function teman2():number{//Fungsi number
    return 1
}

console.log(teman(),teman2())

function multi(val:number,val2:number):number{//cara menuliskan tipe data pada fungsi
    return val*val2
}
const res = multi(5,5)
console.log(res)

//Object
type user ={
    nama:string,umur:number,alamat:string
}
let User:user={
    nama:"AzizFrohman",umur:22,alamat:"London"
}
console.log("object",User)

//fungsi default
const full=(nama:string="Aziz",kelas:string="SI"):string=>{
    return nama+" "+kelas
}
console.log("defaul fungsi",full())

//class

export class myUser{
    constructor(public nama:string){
    }
}
let out= new myUser("Aziz")
console.log("Class",out.nama)