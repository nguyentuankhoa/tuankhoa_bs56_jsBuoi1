// bài 1 : tính tiền lương nhân viên 
// input:luong1 ngay = 100.000
// bước xử lí :tính tiền lương =lương 1 ngày * số ngày làm
// output: tính và xuất ra số tiền lương nhân viên


var soNgayLam = 30;
var luongMotNgay = 100000;
var tinhLuongNhanVien = soNgayLam * luongMotNgay;
console.log("🚀 ~ file: index.js:10 ~ tinhLuongNhanVien:", tinhLuongNhanVien)



// bài 2 :tính gia trị trung bình 
// input: lấy 5 sô thực người dùng
// bước xử lí : tính giá trị trung bình = (5 sô + lại) / 5
//output : tính và xuất ra giá trị trung bình của 5 số đó

var so1 = 5;
var so2 = 5;
var so3 = 5;
var so4 = 5;
var so5 = 5;
var Tong = (so1 + so2 + so3 + so4 + so5) / 5;
console.log("🚀 ~ file: index.js:25 ~ Tong:", Tong)



// bài 3: quy đổi USD ra tiền VNĐ
// input: giá đô la hiện tại 23.500 vnd, cho người dùng nhập vào số đô la
// các bước xử lí: quy đổi 23.000 vnd * so do la
// output: quy đổi và xuất ra giá trị

var tienDo = 5;
var tienViet = 23500;
var quyDoi = tienDo * tienViet;
console.log("🚀 ~ file: index.js:37 ~ quyDoi:", quyDoi)


// bài 4: tính chu vi và diện tích
// input: viết vào chiều dài và rộng
// bước xử lí: diện tích = chiều dài * chiều rộng, chu vi = (chiều dài + chiều rộng) * 2
// output: tính và xuất ra chu vi và diện tích

var chieuDai = 3;
var chieuRong = 2;
var chuVi = (chieuDai + chieuRong) * 2;
console.log("🚀 ~ file: index.js:48 ~ chuVi:", chuVi)
var dienTich = chieuDai * chieuRong;
console.log("🚀 ~ file: index.js:50 ~ dienTich:", dienTich)


// bài 5: tính tổng 2 ký số
// input : nhập vào hai ký 
// bước xử lí: lấy số hàng chục / 10, lấy số hàng đơn vị %10
//output:  tính tổng 2 ký số vừa nhập 

var haiKySo = 12;
var hangChuc = Math.floor(haiKySo / 10);
var hangDonVi = Math.floor(haiKySo % 10);
var tongHaiKySo = hangChuc + hangDonVi;
console.log("🚀 ~ file: index.js:62 ~ tongHaiKySo:", tongHaiKySo)
