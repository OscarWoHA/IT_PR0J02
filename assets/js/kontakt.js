function sendMelding(){
    event.preventDefault();
    const inpNavn = document.querySelector("#navn");
    const inpEpost = document.querySelector("#epost");
    const inpMelding = document.querySelector("#melding");

    const db = firebase.database();

    db.ref('meldinger/' + ( +new Date() )).set({
        navn: inpNavn.value,
        epost: inpEpost.value,
        melding: inpMelding.value
    }).then(
        alert("Du har sendt meldingen til oss, vi kommer tilbake til deg så fort så mulig!")
    );
}

function sendEvaluering(){
    event.preventDefault();
    const inpNavn = document.querySelector("#navn");
    const inpEpost = document.querySelector("#epost");
    const inpMelding = document.querySelector("#melding");
    const inpNumber = document.querySelector("#score");

    const db = firebase.database();

    db.ref('evaluering/' + ( +new Date() )).set({
        navn: inpNavn.value,
        epost: inpEpost.value,
        melding: inpMelding.value,
        score: inpNumber.value
    }).then(
        alert("Du har sendt en evalueringen, takk for tilbakemeldingen!")
    );
}
