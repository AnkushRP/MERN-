function calculateVolume() {
    var radius = document.getElementById("radius").value;
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(2);
    document.getElementById("result").innerText = "Volume of the sphere is: " + volume;
}

