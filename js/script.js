function tempConvert() {
    
    var celcius  = document.getElementById("celcius").value;
    var fahrenheit  = document.getElementById("fahrenheit").value;

    if (celcius !== '') {
        fahrenheit = (parseFloat(celcius) *1.8) +32;
    } else if (fahrenheit !== '') {
        celcius =(parseFloat(fahrenheit) -32) /1.8;
    }

    document.getElementById('celcius').value = parseFloat(celcius).toFixed(1);
    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);

}

function clearForm() {
    document.getElementById('celcius').value = '';
    document.getElementById('fahrenheit').value = '';
}

document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;