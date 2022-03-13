function sum() {
    var tanggal = parseInt(document.getElementById('num1').value);
    var bulan = parseInt(document.getElementById('num2').value);
    var tahun = parseInt(document.getElementById('num3').value);
    if ((tahun + tanggal + bulan) % 2 != 0) {
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
