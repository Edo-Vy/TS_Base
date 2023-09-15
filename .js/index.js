/** Type
 * ---- Primitive value : giá trị cơ bản mà máy tính có thể hiểu, khi render ra file.js
 * thì sẽ ko có kiểu dữ liệu vì bản chất js ko có
 * ---- Reference value (object) {},[]
 * ---- union type
 */
// Giá trị cơ sở
let hoTen = 'string';
let luong = 10000;
let valid = true;
// ? có giá trị undefined và null
//--- Đôi khi kết quả trả về ( ko phải us khai báo biến mà dùng 1 biến ) để nhận kq trả về từ api hoặc kq từ 
//----- 1 lệnh truy vấn thì có khả năng xảy ra undefined 
let result10 = undefined;
let userLogin = null;
// tuân thủ nguyên tắc : đúng tên thuộc tính, đúng giá trị
let nv = { ma: "1", hoTen: 'ABC' };
// nhận kết quả ở phía server có nhiều kq chứ ko phải 1
let resultServer = null;
let prod = { id: 1, name: "Product 1", price: 1000, img: "http://pisum.photos/200/200", des: "abc" };
let btn = { id: "btn-1", innerHTML: "button 1", className: "btn btn-1", css: "abs" };
// tạo ra 1 lớp đối tượng
class FoodList {
}
/** ? Khi nào dùng Type & khi nào dùng interface
 *-- Type : khi format 1 định dạng đơn giản. Tuy nhiên nếu muốn phát triển Type đó lên
 * kế thừa được hay sử dụng cho class được thì bắt buộc phải dùng Interface
 */
// Type của function
//--- function có 2 kiểu dữ liệu : kiểu dữ liệu trả về ():__ + kiểu dữ liệu của callback
// ---- let tinhTong = () :number --> kiểu trả về của (): number
let tinhTong = (num1, num2) => {
    return num1 + num2;
};
//---- hàm showMess ko trả về gì hết ( ko có lệnh output hay return)
//------ thì ko cần khai báo gì hết () hoặc (): void -> void ko cần return 
let showMess = (mess) => {
    console.log("Hello", mess);
};
//---- function callback - kiểu dữ liệu của callback - kiểu dữ liệu của hàm ( truyền vào 1 hàm khác )
function main(callback) {
    // render ra giao diện 1 đoạn nội dung nào đó
    callback("Hello Cyber");
}
const renderH1 = (title) => {
    document.querySelector('body').innerHTML = `<h1>${title}</h1>`;
};
const renderDIV = (title) => {
    document.querySelector('body').innerHTML = `<div class="bg-dark text-light text-center py-4">${title}</div>`;
};
// main(renderH1);
main(renderDIV);
// Kiểu dữ liệu của mảng
//--- tất cả phần tử trong [ phải chung kiểu dữ liệu ]
let arrNumber = [1, 2, 3, 4, 5];
let arrprod = [
    { id: 1, name: 'pro1', price: 1000, img: 'link1' },
    { id: 2, name: 'pro2', price: 1000, img: 'link2' },
    { id: 3, name: 'pro3', price: 1000, img: 'link3' },
];
//tuple : thể hiện của dữ liệu dưới dạng mảng
//--- phần tử thứ nhất khác vs phần tử thứ 2 ở kiểu dữ liệu [number,(newNumber:number)=>number] == number, function
let result = [1, (newNumber) => {
        return newNumber;
    }];
let sv = [1, 'ABC'];
let result20 = 1;
//--- any cho phép thực thi operation ( +, -, *, /, gọi hàm...)
//- Lớp đối tượng thì có thể gán giá trị được cho nó
class ProductType {
    constructor() {
        this.id = '';
        this.name = '';
        this.img = '';
    }
    showInfo() {
        console.log('id', this.id);
        console.log('name', this.name);
        console.log('img', this.img);
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
let result30 = undefined;
let result40 = 1;
if (result30 instanceof ProductType) {
    result30.showInfo();
}
// result30.showInfo();
if (typeof result40 == 'number') {
    result40++;
}
/** access modifier
 * --- private : trong class sử dụng được, instance ( đối tượng từ class đó ) không truy xuất được.
 * Lớp con không thể sử dụng được
 * --- protected : trong class đó sử dụng được, instance không sử dụng được, class con có thể sử dụng
 * --- public ( mặc định ) : tất cả đều truy xuất được
 * */
class NhanVienCyber {
    constructor() {
        this.maNV = '';
        this.tenNV = '';
        // private luongCB : number = 1000;
        this.luongCB = 1000;
        this.heSL = 1;
    }
    tinhLuong() {
        return this.luongCB * this.heSL;
    }
    ;
    tinhPhuCap() {
        return this.luongCB * this.heSL + 1;
    }
    ;
}
// private : chỉ dùng bình thường được trong lớp đối tượng, ra ngoài lớp đối tượng không dùng được
let nv1 = new NhanVienCyber();
nv1.maNV = 1;
nv1.tenNV = ' ABC';
console.log('luong', nv1.tinhLuong());
// nv1.luongCB = 5000;
class NhanVienKTCyber extends NhanVienCyber {
    constructor() {
        super(...arguments);
        this.nghiepVuKT = '';
    }
}
let nv2 = new NhanVienKTCyber();
nv2.maNV = 2;
nv2.tenNV = ' ABC';
console.log('luong', nv1.tinhLuong());
/** Generic
 * - Cho phép truyền động type vào phần format
 */
// <..>: đại diện cho 1 biến làs kiểu dữ liệu  ex <T>
class List {
    constructor() {
        this.data = [];
        this.create = (newItem) => {
            this.data.push(newItem);
        };
        this.getItemById = (id) => {
            return this.data.find((item) => item.id === id);
        };
        this.deleteItem = (id) => {
            this.data = this.data.filter((item) => item.id !== id);
        };
    }
}
let userList = new List();
let user = { id: 1, userName: 'a-1', password: 123, fullName: 'abc', email: 'abs', phone: 123 };
userList.create(user);
userList.deleteItem(1);
console.log('userList', userList);
let proList = new List();
let newPro = { id: 1, name: 'pro-1', price: 1000 };
proList.create(newPro);
console.log(proList);
//  utility type ======
let funcDemo = () => {
    return 1;
};
let FuncDispatch = () => {
    return function () {
        return 1;
    };
};
