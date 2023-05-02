// QUẢN LÝ TUYỂN SINH

document.getElementById('btnTinh').onclick = 
function Tinh_diem(){
    var diemchuan = document.getElementById('chuan').value;
    var khuvuc = document.getElementById('khuvuc').value;
    var doituong = document.getElementById('doituong').value;
    var mon1 = Number(document.getElementById('mon1').value);
    var mon2 = Number(document.getElementById('mon2').value);
    var mon3 = Number(document.getElementById('mon3').value);

    var Ket_qua = ket_qua(diemchuan, khuvuc, doituong, mon1, mon2, mon3);
    document.getElementById('Ketqua').innerHTML = 'Tổng: ' + Ket_qua;

}

function ket_qua(diem_chuan, khu_vuc, doi_tuong, mon_1, mon_2, mon_3){
    var diem = 0;
    if(khu_vuc === 'A' && doi_tuong === '1'){
        diem = mon_1 + mon_2 + mon_3 + 2 + 2.5;
    }
    else if(khu_vuc === 'A' && doi_tuong === '2'){
        diem = mon_1 + mon_2 + mon_3 + 2 + 1.5;
    }
    else if(khu_vuc === 'A' && doi_tuong === '3'){
        diem = mon_1 + mon_2 + mon_3 + 2 + 1;
    }
    else if(khu_vuc === 'B' && doi_tuong === '1'){
        diem = mon_1 + mon_2 + mon_3 + 1 + 2.5;
    }
    else if(khu_vuc === 'B' && doi_tuong === '2'){
        diem = mon_1 + mon_2 + mon_3 + 1 + 1.5;
    }
    else if(khu_vuc === 'B' && doi_tuong === '3'){
        diem = mon_1 + mon_2 + mon_3 + 1 + 1;
    }
    else if(khu_vuc === 'C' && doi_tuong === '1'){
        diem = mon_1 + mon_2 + mon_3 + 0.5 + 2.5;
    }
    else if(khu_vuc === 'C' && doi_tuong === '2'){
        diem = mon_1 + mon_2 + mon_3 + 0.5 + 1.5;
    }
    else{
        diem = mon_1 + mon_2 + mon_3 + 0.5 + 1;
    }

    if(diem >= diem_chuan && (mon_1 > 0 && mon_2 > 0 && mon_3 > 0)){
        diem += ' -> Bạn đã ĐẬU';
    }
    else{
        diem += ' -> Bạn đã RỚT';
    }
    return diem ;
}

// TÍNH TIỀN ĐIỆN
document.getElementById('btnTinh_td').onclick = 
function Tinh_tien_dien(){
    var ho_ten = document.getElementById('hoten').value;
    var Kw = Number(document.getElementById('Kw').value);

    var Ketqua = bat_dau_tinh(Kw);
    document.getElementById('Tien_dien').innerHTML = ho_ten + ' -> ' + Ketqua.toLocaleString();
    
}

function bat_dau_tinh(Kw){
    var tien = 0;
    if(Kw <= 50){
        tien = Kw*500;
    }
    else if(Kw > 50 && Kw <= 100){
        tien = (Kw - 50)*650 + 50*500;
    }
    else if(Kw > 100 && Kw <= 200){
        tien = (Kw-100)*850 + (100-50)*650 + 50*500;
    }
    else if(Kw > 200 && Kw <= 350){
        tien = (Kw - 200)*1100 + (200-100)*850 + (100-50)*650 + 50*500;
    }
    else{
        tien = (Kw - 350)*1300 + (350 - 200)*1100 + (200-100)*850 + (100-50)*650 + 50*500;
    }
    return tien;
}

// TÍNH THUẾ 
document.getElementById('btnTinh_thue').onclick = 
function Tinh_tien_thue(){
    var ho_ten = document.getElementById('ho_ten').value;
    var thunhap_nam = Number(document.getElementById('year').value);
    var nguoi_phu_thuoc = Number(document.getElementById('So_nguoi').value);

    var thue = tien_thue(thunhap_nam, nguoi_phu_thuoc);
    document.getElementById('Tinh_thue').innerHTML = 'Họ tên: ' + ho_ten + ' -> ' + thue.toLocaleString() + ' VND';
}

function tien_thue(thunhap_nam, nguoi_phu_thuoc){
    var Thu_nhap_chiu_thue = thunhap_nam - 4000000 - nguoi_phu_thuoc*1600000;
    if(Thu_nhap_chiu_thue <= 60000000){
        Thu_nhap_chiu_thue = Thu_nhap_chiu_thue*5/100;
    }
    else if(Thu_nhap_chiu_thue > 60000000 && Thu_nhap_chiu_thue <= 120000000){
        Thu_nhap_chiu_thue = Thu_nhap_chiu_thue*10/100;
    }
    else if(Thu_nhap_chiu_thue > 120000000 && Thu_nhap_chiu_thue <= 210000000){
        Thu_nhap_chiu_thue = Thu_nhap_chiu_thue*15/100;
    }
    else if(Thu_nhap_chiu_thue > 210000000 && Thu_nhap_chiu_thue <= 384000000){
        Thu_nhap_chiu_thue = Thu_nhap_chiu_thue*20/100;
    }
    else if(Thu_nhap_chiu_thue > 384000000 && Thu_nhap_chiu_thue <= 624000000){
        Thu_nhap_chiu_thue = Thu_nhap_chiu_thue*25/100;
    }
    else if(Thu_nhap_chiu_thue > 624000000 && Thu_nhap_chiu_thue <= 960000000){
        Thu_nhap_chiu_thue = Thu_nhap_chiu_thue*30/100;
    }
    else {
        Thu_nhap_chiu_thue = Thu_nhap_chiu_thue*35/100;
    }
    
    
    return Thu_nhap_chiu_thue;

}

// TÍNH TIỀN CÁP
document.getElementById('btnTinh_cap').onclick = 
function Tinh_tien_cap(){
    var khach_hang = document.getElementById('luachon').value;
    var maso = document.getElementById('ma_so').value;
    var kenh_cao_cap = Number(document.getElementById('So_kenh').value);
    var so_ket_noi = Number(document.getElementById('so_ket_noi').value);

    var tien_nha_dan = nha_dan(kenh_cao_cap);
    var tien_doanh_nghiep = doanh_nghiep(kenh_cao_cap, so_ket_noi);
    if(khach_hang == 'nhadan'){
        document.getElementById('Tinh_cap').innerHTML = 'Mã số: ' + maso + ' -> Tổng tiền: $ ' + tien_nha_dan.toLocaleString();
    }
    else{
        document.getElementById('Tinh_cap').innerHTML = 'Mã số: ' + maso + ' -> Tổng tiền: $ ' + tien_doanh_nghiep.toLocaleString();
    }
}

function nha_dan(kenh_cao_cap){
    var tien =  4.5 + 20.5 + (7.5)*kenh_cao_cap;
    return tien;
}

function doanh_nghiep(kenh_cao_cap, so_ket_noi){
    var tien = 0;
    if(so_ket_noi <= 10){
        tien = 15 + 75 + kenh_cao_cap*50;
    }
    else{
        tien = 15 + 75 + kenh_cao_cap*50 + (so_ket_noi - 10)*5;
    }
    return tien;
}
