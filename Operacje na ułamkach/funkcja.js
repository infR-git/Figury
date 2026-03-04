// Funkcja NWD (działa też dla liczb ujemnych)
function nwd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// =========================
// SKRACANIE
// =========================
function skroc() {
    let licznik = Number(document.getElementById("num1").value);
    let mianownik = Number(document.getElementById("den1").value);

    if (!licznik && licznik !== 0 || !mianownik && mianownik !== 0) {
        alert("Wpisz licznik i mianownik!");
        return;
    }

    if (mianownik === 0) {
        alert("Mianownik nie może być zerem!");
        return;
    }

    let dzielnik = nwd(licznik, mianownik);

    licznik = licznik / dzielnik;
    mianownik = mianownik / dzielnik;

    // Jeśli mianownik ujemny → przenieś minus do licznika
    if (mianownik < 0) {
        licznik *= -1;
        mianownik *= -1;
    }

    document.getElementById("wynikNum").value = licznik;
    document.getElementById("wynikDen").value = mianownik;
}

// =========================
// DODAWANIE
// =========================
function dodaj() {
    let n1 = Number(document.getElementById("num2").value);
    let d1 = Number(document.getElementById("den2").value);
    let n2 = Number(document.getElementById("num3").value);
    let d2 = Number(document.getElementById("den3").value);

    if (
        (!n1 && n1 !== 0) ||
        (!d1 && d1 !== 0) ||
        (!n2 && n2 !== 0) ||
        (!d2 && d2 !== 0)
    ) {
        alert("Wypełnij wszystkie pola!");
        return;
    }

    if (d1 === 0 || d2 === 0) {
        alert("Mianownik nie może być zerem!");
        return;
    }

    // wspólny mianownik
    let nowyLicznik = n1 * d2 + n2 * d1;
    let nowyMianownik = d1 * d2;

    // skracanie wyniku
    let dzielnik = nwd(nowyLicznik, nowyMianownik);

    nowyLicznik = nowyLicznik / dzielnik;
    nowyMianownik = nowyMianownik / dzielnik;

    // przenoszenie minusa
    if (nowyMianownik < 0) {
        nowyLicznik *= -1;
        nowyMianownik *= -1;
    }

    document.getElementById("wynikNum2").value = nowyLicznik;
    document.getElementById("wynikDen2").value = nowyMianownik;
}