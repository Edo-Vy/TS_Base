/** Type 
 * ---- Primitive value : giá trị cơ bản mà máy tính có thể hiểu, khi render ra file.js
 * thì sẽ ko có kiểu dữ liệu vì bản chất js ko có
 * ---- Reference value (object) {},[]
 * ---- union type
 */
// Giá trị cơ sở
let hoTen:string = 'string';
let luong:number = 10000; 
let valid:boolean = true;
// ? có giá trị undefined và null
//--- Đôi khi kết quả trả về ( ko phải us khai báo biến mà dùng 1 biến ) để nhận kq trả về từ api hoặc kq từ 
//----- 1 lệnh truy vấn thì có khả năng xảy ra undefined 
let result10:undefined = undefined;
let userLogin:null = null;

// Refence value
// type : ~ từ khóa khai báo biến : var, let, const nhưng mà dùng để khai báo cho kiểu dữ liệu ( string, number,...)
 type NhanVien = {
     ma:number|string,
     hoTen:string,
     moTa?: string,
// ? : optional properties - những giá trị mang dấu ? thì có thể khai báo có hoặc không cho ob
//----- nhưng mà nếu như có thì bắt buộc phải là kiểu string 
 }
// tuân thủ nguyên tắc : đúng tên thuộc tính, đúng giá trị
 let nv:NhanVien = {ma:"1", hoTen:'ABC'};

 // union type

 type ResponseTypeResult = string | boolean | undefined | NhanVien ;
 // nhận kết quả ở phía server có nhiều kq chứ ko phải 1
 let resultServer : ResponseTypeResult = null;

 /** Interface - cũng tạo ra 1 định dạng dữ liệu  như Type
 * Tuy nhiên interface có nhiều tính năng hơn và  chỉ sử dụng trên TS
 * --- có kế thừa ( extends ) có thể phát triển thêm
 * --- merge interface cùng tên
 * --- interface định dạng dữ liệu prototype (class)
 * Dùng được cho class
 */

 interface Product {

    id: number | string,
    name: string,
    price : number,
    img : string
 }
 // merge : khai báo interface trùng tên sẽ tự động gộp lại thuộc tính, nếu ko khai báo đủ thì sẽ báo lỗi
 interface Product {
     des?: string,
 }

 let prod:Product ={id:1, name:"Product 1", price:1000, img:"http://pisum.photos/200/200", des:"abc"}
 
 // kế thừa ( cha có gì con có đó )

 interface Button {
     id: number | string,
     innerHTML: string,
     className : string
 }

 interface ButtonGradient extends Button {
      css : string
 }

 let btn : ButtonGradient = { id: "btn-1", innerHTML:"button 1", className:"btn btn-1", css:"abs"};


 // interface định dạng dữ liệu protoype (class)
//--- Bản chất interface chỉ định nghĩa ra format thôi chứ ko xử lý
//---- Xử lý chỉ có class hoặc ob chứ format ko xử lý
//===== Gọi là tính đa hình trong hướng đối tượng
 interface CRUD {
     create : (newItem)=>void,
     update,
     delete,
     search
 }
// tạo ra 1 lớp đối tượng
 class FoodList implements CRUD {
     create: (newItem : any) =>{

     };
     update: any;
     search: any;
     delete: any;
 }

 /** ? Khi nào dùng Type & khi nào dùng interface
  *-- Type : khi format 1 định dạng đơn giản. Tuy nhiên nếu muốn phát triển Type đó lên
  * kế thừa được hay sử dụng cho class được thì bắt buộc phải dùng Interface
  */

// Type của function
//--- function có 2 kiểu dữ liệu : kiểu dữ liệu trả về ():__ + kiểu dữ liệu của callback

// ---- let tinhTong = () :number --> kiểu trả về của (): number
let tinhTong = (num1:number, num2:number) :number=>{

    return num1 + num2;
}

//---- hàm showMess ko trả về gì hết ( ko có lệnh output hay return)
//------ thì ko cần khai báo gì hết () hoặc (): void -> void ko cần return 
let showMess = (mess:string):void =>{

    console.log("Hello", mess);
}

//---- function callback - kiểu dữ liệu của callback - kiểu dữ liệu của hàm ( truyền vào 1 hàm khác )

function main(callback:(title:string) => void){ // định nghĩa 1 hàm ntn ->(title:string) => void
    // render ra giao diện 1 đoạn nội dung nào đó
    callback("Hello Cyber");
}

const renderH1 = (title:string):void =>{

    document.querySelector('body').innerHTML = `<h1>${title}</h1>`
}
const renderDIV = (title:string):void =>{

    document.querySelector('body').innerHTML = `<div class="bg-dark text-light text-center py-4">${title}</div>`
}
// main(renderH1);
main(renderDIV);

// Kiểu dữ liệu của mảng
//--- tất cả phần tử trong [ phải chung kiểu dữ liệu ]
let arrNumber : number[] = [1,2,3,4,5];
let arrprod :Product[] = [
    {id:1, name:'pro1', price:1000, img:'link1'},
    {id:2, name:'pro2', price:1000, img:'link2'},
    {id:3, name:'pro3', price:1000, img:'link3'},
];

//tuple : thể hiện của dữ liệu dưới dạng mảng
//--- phần tử thứ nhất khác vs phần tử thứ 2 ở kiểu dữ liệu [number,(newNumber:number)=>number] == number, function

let result:[number,(newNumber:number)=>number] = [1, (newNumber):number=>{

    return newNumber;

}];

let sv:[number, string] = [1,'ABC'];

// kiểu dữ liệu any, unknown
//--- sẽ nhận tất cả giá trị
type ResponseServer = Product | number;
let result20:any| number = 1;

//--- any cho phép thực thi operation ( +, -, *, /, gọi hàm...)

//- Lớp đối tượng thì có thể gán giá trị được cho nó

class ProductType {

    id: string ='';
    name: string ='';
    img: string ='';
    showInfo ():void {
        console.log('id',this.id);
        console.log('name',this.name);
        console.log('img',this.img);
    }
}

let prod1 = new ProductType();
prod1.id = '1';
prod1.name = 'produc 2';
prod1.img = 'https://picsum.photos/200/200';

// let result30:any = prod1;
// let result30:any = undefined;
//unknown ~ any nhưng chặn lại ở bước operation
//--- check kiểu dữ liệu mới được thực hiện operation
let result30:unknown = undefined;
let result40:unknown = 1;

if (result30 instanceof ProductType){
     result30.showInfo();

}

// result30.showInfo();

if (typeof result40 == 'number'){
    result40 ++;
}

/** access modifier
 * --- private : trong class sử dụng được, instance ( đối tượng từ class đó ) không truy xuất được.
 * Lớp con không thể sử dụng được 
 * --- protected : trong class đó sử dụng được, instance không sử dụng được, class con có thể sử dụng
 * --- public ( mặc định ) : tất cả đều truy xuất được
 * */ 

class NhanVienCyber {

    maNV :string|number = '';
    tenNV : string = '';
    // private luongCB : number = 1000;
    protected luongCB : number = 1000;
    heSL: number = 1;

    tinhLuong() : number {
        return this.luongCB * this.heSL;
    };
    tinhPhuCap() : number {
        return this.luongCB * this.heSL + 1;
    };
}
// private : chỉ dùng bình thường được trong lớp đối tượng, ra ngoài lớp đối tượng không dùng được
let  nv1 : NhanVienCyber = new NhanVienCyber();

nv1.maNV = 1;
nv1.tenNV = ' ABC';

console.log('luong', nv1.tinhLuong());

// nv1.luongCB = 5000;

class NhanVienKTCyber extends NhanVienCyber {

    nghiepVuKT : string ='';
}

let  nv2 : NhanVienKTCyber = new NhanVienKTCyber();

nv2.maNV = 2;
nv2.tenNV = ' ABC';


console.log('luong', nv1.tinhLuong());

/** Generic 
 * - Cho phép truyền động type vào phần format
 */
// <..>: đại diện cho 1 biến làs kiểu dữ liệu  ex <T>

class List<T> {
    data : T[] = [];
    create = (newItem:T) =>{
        this.data.push(newItem);
    }
    getItemById = (id:any)=>{
        return this.data.find((item:any) => item.id === id);
    }
    deleteItem = (id:any) =>{
        this.data = this.data.filter((item:any) => item.id  !== id);
    }
}

type User = {
    id:number
    userName : string;
    password: number | string;
    fullName: string;
    email: string;
    phone : number | string;
}

let userList = new List<User>();
let user :User = {id:1,userName:'a-1', password:123, fullName:'abc', email:'abs', phone:123};

userList.create(user);
userList.deleteItem(1);
console.log('userList',userList);


type Product__Cl = {
    id: number;
    name: string;
    price : number;
}

let proList = new List<Product__Cl>();

let newPro:Product__Cl = {id:1, name:'pro-1', price:1000};

proList.create(newPro);

console.log(proList);

//  utility type ======

let funcDemo = ():number =>{
    return 1;
}
//--- ReturnType : trả về type - thường dùng cho Hook, dispatch
type ResultNumber = ReturnType<typeof funcDemo>;

let FuncDispatch = ():()=>number =>{

    return function ():number {
        return 1
    }
}

type ResultFunc = ReturnType<typeof FuncDispatch>