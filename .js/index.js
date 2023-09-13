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
//---- hàm showMess ko trả về gì hết ( ko có leengj output hay return)
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
    document.querySelector('body').innerHTML = `<div class="bg-dark text-light text-center">${title}</div>`;
};
// main(renderH1);
main(renderDIV);
// Kiểu dữ liệu của mảng
let arrNumber = [1, 2, 3, 4, 5];
