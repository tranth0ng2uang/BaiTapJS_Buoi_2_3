// bai1

function tinhLuong() {
  const LUONG_MOT_NGAY = 100000;
  let soNgay = parseInt(document.getElementById("soNgay").value);
  if (isNaN(soNgay)) {
    alert("Vui lòng nhập số ngày và lương mỗi ngày.");
    return;
  }
  let tienLuong = soNgay * LUONG_MOT_NGAY;
  document.getElementById("tienLuong").innerText =
    "Tiền Lương: " +
    tienLuong.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  document.getElementById("tienLuong").style.color = "blue";
  document.getElementById("tienLuong").style.fontWeight = "bold";
  document.getElementById("tienLuong").style.display = "block";

  //  document.getElementById("ketQua").style.display = "block";
}

// bai 2

function tinhTrungBinhCong() {
  let so1 = parseFloat(document.getElementById("bai2_so1").value);
  let so2 = parseFloat(document.getElementById("bai2_so2").value);
  let so3 = parseFloat(document.getElementById("bai2_so3").value);
  let so4 = parseFloat(document.getElementById("bai2_so4").value);
  let so5 = parseFloat(document.getElementById("bai2_so5").value);

  if (isNaN(so1) || isNaN(so2) || isNaN(so3) || isNaN(so4) || isNaN(so5)) {
    alert("Vui lòng nhập đủ giá trị.");
    return;
  }

  let trungBinhCong = (so1 + so2 + so3 + so4 + so5) / 5;
  document.getElementById("trungBinhCong").innerText =
    "Kết quả: " + trungBinhCong;

  document.getElementById("trungBinhCong").style.color = "blue";
  document.getElementById("trungBinhCong").style.fontWeight = "bold";
  document.getElementById("trungBinhCong").style.display = "block";
}

function doiTien() {
  const TI_GIA = 23500;
  let usd = parseFloat(document.getElementById("usd").value);
  let tienDaDoi = usd * TI_GIA;
  document.getElementById("ketQuaBai3").innerText =
    "Kết quả: " +
    tienDaDoi.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
  document.getElementById("ketQuaBai3").style.color = "blue";
  document.getElementById("ketQuaBai3").style.fontWeight = "bold";
  document.getElementById("ketQuaBai3").style.display = "block";
}

// bài 4
function tinhBai4() {
  let chieuDai = parseFloat(document.getElementById("chieuDai").value);
  let chieuRong = parseFloat(document.getElementById("chieuRong").value);
  if (isNaN(chieuDai) || isNaN(chieuRong)) {
    alert("Vui lòng nhập đủ giá trị (chiều dài, chiều rộng).");
    return;
  }
  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;
  document.getElementById("chuVi").innerText = "Chu vi: " + chuVi;
  document.getElementById("chuVi").style.color = "blue";
  document.getElementById("chuVi").style.fontWeight = "bold";
  document.getElementById("chuVi").style.display = "block";
  document.getElementById("dienTich").innerText = "Diện tích: " + dienTich;
  document.getElementById("dienTich").style.color = "blue";
  document.getElementById("dienTich").style.fontWeight = "bold";
  document.getElementById("dienTich").style.display = "block";
}

// bài 5

function tinhBai5() {
  let number = parseInt(document.getElementById("randomNumber").value);
  let hang_chuc = parseInt(document.getElementById("randomNumber").value / 10);
  let hang_dv = parseInt(document.getElementById("randomNumber").value % 10);
  let ketQua = hang_chuc + hang_dv;

  if (isNaN(number) || number < 10 || number >= 100) {
    alert("Vui lòng nhập số và số có 2 chữ số");
    return;
  }
  document.getElementById("ketQuaBai5").innerText = "Tổng là: " + ketQua;
  document.getElementById("ketQuaBai5").style.color = "blue";
  document.getElementById("ketQuaBai5").style.fontWeight = "bold";
  document.getElementById("ketQuaBai5").style.display = "block";
}
