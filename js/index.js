/**
 * Bài 1 : Tính tiền lương nhân viên
 * 
 * Đầu vào :
 *      - tạo biến LUONG gán giá trị là 100000
 *      - tạo biến soNgayLam để người dùng nhập
 *      - tạo biến tổng (total) để tính tổng ngày làm
 * 
 * Xử lý :
 *      - Tính tổng lương : soNgayLam * LUONG
 *      - Quy đổi về VNĐ
 * 
 * Đầu ra :
 *      - log ra tiền lương nhân viên 
 */


// Bài giải bài 1 //
const btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function () {
    let soNgayLam = document.getElementById("soNgayLam").value;
    const LUONG = 100000;

    let total = soNgayLam * LUONG;

    let numberFormat = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

    let infoLuong = document.getElementById("infoLuong");
    infoLuong.innerHTML = "Tổng lương là : " + numberFormat.format(total);
}

/**
 * Bài 2 : Tính giá trị trung bình 
 * 
 * Đầu vào :
 *      - tạo 5 biến để nhập 5 số thực
 *      - tạo biến tong để tính tổng của 5 số
 *      - tạo biến trungBinh để tính giá trị trung bình
 * 
 * Xử lý :
 *      - tính tongTrungBinh : (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5
 * 
 * Đầu ra :
 *      - log ra màn hình giá trị trung bình của 5 số
 * 
 */

// Bài giải bài 2 //
const btnTrungBinh = document.getElementById("btnTrungBinh");
btnTrungBinh.onclick = function () {
    let soThuc1 = document.getElementById("soThuc1").value * 1;
    let soThuc2 = document.getElementById("soThuc2").value * 1;
    let soThuc3 = document.getElementById("soThuc3").value * 1;
    let soThuc4 = document.getElementById("soThuc4").value * 1;
    let soThuc5 = document.getElementById("soThuc5").value * 1;

    const tongTrungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;

    let infoTrungBinh = document.getElementById("infoTrungBinh");
    infoTrungBinh.innerHTML = "Tổng trung bình là : " + tongTrungBinh;
}

/**
 * Bài 3 : Quy đổi tiền
 * 
 * Đầu vào :
 *      - tạo biến soTienVND để người dùng nhập
 *      - tạo biến tienUSD và gán giá trị là 23.500
 * 
 * Xử lý :
 *      - tạo biến soTienDaQuyDoi 
 *      - dùng numberFormat để có đơn vị VNĐ
 * 
 * Đầu ra :
 *      - log ra số tiền sau quy đổi VNĐ
 * 
 */


// Bài giải bài 3 
const btnDoiTien = document.getElementById("btnDoiTien");
btnDoiTien.onclick = function () {
    let soTienVND = document.getElementById("soTienVND").value;
    const tienUSD = 23500;

    let soTienDaQuyDoi = soTienVND * tienUSD;

    let numberFormat = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

    let infoDoiTien = document.getElementById("infoDoiTien");
    infoDoiTien.innerHTML = "Số tiền sau khi quy đổi : " + numberFormat.format(soTienDaQuyDoi);
}


/**
 * Bài 4 : Tính diện tích , chu vi hình chữ nhật
 * 
 * Đầu vào :
 *      - tạo biến chieuDai
 *      - tạo biến chieuRong
 * 
 * Xử lý :
 *      - tạo biến dienTich để tính diện tích hình chữ nhật: chieuDai * chieuRong
 *      - tạo biến chuVi để tính chu vi hình chữ nhật : (chieuDai + chieuRong) * 2
 * 
 * Đầu ra :
 *      - log ra dienTich
 *      - log ra chuVi
 * 
 */

// Bài giải bài 4
const tinhDienTichChuVi = document.getElementById("tinhDienTichChuVi");
tinhDienTichChuVi.onclick = function () {
    let chieuDai = document.getElementById("chieuDai").value * 1;
    let chieuRong = document.getElementById("chieuRong").value * 1;

    let tinhDienTich = chieuDai * chieuRong;
    let tinhChuVi = (chieuDai + chieuRong) * 2;

    let infoDienTich = document.getElementById("infoDienTich");
    infoDienTich.innerHTML = "Diện tích là : " + tinhDienTich;

    let infoChuVi = document.getElementById("infoChuVi");
    infoChuVi.innerHTML = "Chu vi là : " + tinhChuVi;
}

/**
 * Bài 5: Tính tổng 2 ký số
 *
 * Đầu vào:
 * - Tạo biến kySo để người dùng nhập vào 1 số có 2 chữ số
 *
 * Xử lý:
 * - tạo biến hangDonVi = kySo % 10
 * - tạo biến hangChuc = Math.floor(kySo / 10)
 * - tạo biến tongKySo = hangChuc + hangDonVi
 *
 * Đầu ra:
 * - log ra tổng 2 ký số của số vừa nhập
 */


// Bài giải bài 5 
const btnTinhTong = document.getElementById("btnTinhTong");
btnTinhTong.onclick = function () {
    let kySo = document.getElementById("kySo").value * 1;

    let hangDonVi = kySo % 10;
    let hangChuc = Math.floor(kySo / 10);
    let tongKySo = hangDonVi + hangChuc;

    let infoKySo = document.getElementById("infoKySo");
    infoKySo.innerHTML = "Tổng là : " + tongKySo;
}
