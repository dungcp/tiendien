function cal() {
    let electricity = +document.getElementById('amount_elec').value;
    bill = electricity*2000;
    document.getElementById('result').innerHTML = "result" + bill + "tr VND";
}