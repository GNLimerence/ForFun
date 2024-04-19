function calculateHeight() {
    var height = document.getElementById("heightInput").value;

    if (height === "") {
        alert("Vui lòng nhập chiều cao của bạn!");
        return;
    }

    var result = "Chiều cao của bạn là " + height + " cm.";
    document.getElementById("result").textContent = result;
}
