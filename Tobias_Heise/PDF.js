window.jsPDF = window.jspdf.jsPDF;

const formularelement = document.getElementById("formu").elements;
console.log(formularelement)
const doc = new jsPDF()
loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id eros turpis. Vivamus tempor urna vitae sapien mollis molestie. Vestibulum in lectus non enim bibendum laoreet at at libero. Etiam malesuada erat sed sem blandit in varius orci porttitor. Sed at sapien urna. Fusce augue ipsum, molestie et adipiscing at, varius quis enim. Morbi sed magna est, vel vestibulum urna. Sed tempor ipsum vel mi pretium at elementum urna tempor. Nulla faucibus consectetur felis, elementum venenatis mi mollis gravida. Aliquam mi ante, accumsan eu tempus vitae, viverra quis justo.\n\nProin feugiat augue in augue rhoncus eu cursus tellus laoreet. Pellentesque eu sapien at diam porttitor venenatis nec vitae velit. Donec ultrices volutpat lectus eget vehicula. Nam eu erat mi, in pulvinar eros. Mauris viverra porta orci, et vehicula lectus sagittis id. Nullam at magna vitae nunc fringilla posuere. Duis volutpat malesuada ornare. Nulla in eros metus. Vivamus a posuere libero.'
// inches on a 8.5 x 11 inch sheet.
;

const downloadpdf = event => {
    doc.text(20, 20, formularelement.vName.value + ' ' + formularelement.nName.value)
    doc.text(20, 30, formularelement.str.value + ' '+formularelement.hausnummer.value)
    doc.text(20, 40, formularelement.plz.value + ' '+formularelement.Wohnort.value)

    doc.text(20, 70, 'Christkinddorf')
    doc.text(20, 80, 'An das Christkind')
    doc.text(20, 90, '21709 Himmelpforten')

    doc.text(20, 110, 'Mein Wunsch an den Weihnachtsmann')

    lines = doc.splitTextToSize(formularelement.nachricht.value, 170)
    doc.text(20, 120, lines)
    doc.save(`Brief.pdf`);
};

