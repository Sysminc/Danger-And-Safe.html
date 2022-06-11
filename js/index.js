function sum() {
    var tanggal = parseInt(document.getElementById('num1').value);
    var bulan = parseInt(document.getElementById('num2').value);
    var tahun = parseInt(document.getElementById('num3').value);

    if (document.getElementById('num1').value.length == 0 || document.getElementById('num2').value.length == 0 || document.getElementById('num3').value.length == 0) {
        alert("Tanggal, Bulan, dan Tahun tidak boleh kosong");
        return false;
    } 
    else if (tanggal < 1 || tanggal > 31) {
        alert("Tanggal tidak valid");
        return false;
    }
    else if (bulan < 1 || bulan > 12) {
        alert("Bulan tidak valid");
        return false;
    }
    else if (tahun < 1000 || tahun > 3000) {
        alert("Tahun tidak valid");
        return false;
    }
    else if ((tahun + tanggal + bulan) % 2 == 0) {
        window.location.href = "gak.html";
    } else {
        window.location.href = "iya.html";
    }
}
/* Kalo Mau Pake Loading page
$(window).on("load", function() {
    $(".loader-wrapper").fadeOut(2000);
})
*/
