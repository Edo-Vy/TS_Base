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
 * --- interface định dạng dữ liệu protoype (class)
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

 interface CRUD {
     create,
     update,
     delete,
     search
 }
// tạo ra 1 lớp đối tượng
 class FoodList implements CRUD {
     create: any;
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

//---- hàm showMess ko trả về gì hết ( ko có leengj output hay return)
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

    document.querySelector('body').innerHTML = `<div class="bg-dark text-light text-center">${title}</div>`
}
// main(renderH1);
main(renderDIV);

// Kiểu dữ liệu của mảng

let arrNumber : number[] = [1,2,3,4,5];
