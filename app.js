let result = document.getElementById("results");

try {
    let a = 5, b = 36;
    result.innerHTML = "Somme de a + b: " + (a + b);
}
catch (error) {
    alert("C'est faux mec !");
}