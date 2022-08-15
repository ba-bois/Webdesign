window.jsPDF = window.jspdf.jsPDF;

const formEl = document.getElementById("formPDF").elements;
const doc = new jsPDF();

const savePDF = event => {
    doc.text(
        `Hey, ich bin ${formEl.prefix.value} ${formEl.surname.value} ${formEl.lastName.value}. \nIch möchte Euch gerne mein Werk "${formEl.title.value} aus dem Bereich ${formEl.genre.value} zeigen.\nDas hier ist die Beschreibung: \n\n${formEl.description.value}. \n\nHier könnt ihr mich erreichen: \n${formEl.telephonenumber.value} oder ${formEl.email.value}.`,
        10,
        10
    );
    doc.save(`Kontaktformular_${formEl.surname.value}_${formEl.lastName.value}.pdf`);

    event.preventDefault();
};

document.getElementById("submitPDF").addEventListener("click", event => savePDF(event));
