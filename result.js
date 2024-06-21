document.addEventListener("DOMContentLoaded", function() {
    const score = localStorage.getItem('score');
    const employeeId = localStorage.getItem('employeeId');

    const employeeNames = {
        "0001": "Oancea Mihnea",
    };

    const employeeName = employeeNames[employeeId] || "Anonim";
    const messageContainer = document.getElementById('score-message');

    let messageText = `Felicitări, ${employeeName}! Ați obținut nota ${score}.`;
    let messageColor = "green";

    if (score <= 4) {
        messageText = `Ne pare rău, ${employeeName}. Ai obținut nota ${score}. Te rugăm să mai încerci o dată cursul.`;
        messageColor = "red";
    } else if (score <= 6) {
        messageText = `Acceptabil, ${employeeName}. Ai obținut nota ${score}.`;
        messageColor = "orange";
    }

    messageContainer.textContent = messageText;
    messageContainer.style.color = messageColor;

    document.getElementById('report-button').addEventListener('click', function() {
        const mailto = `mailto:oanceamihnea@yahoo.com?subject=Rezultat Chestionar ${employeeName}&body=Salut! Tocmai am obtinut nota ${score} la cursul de Livrare și Recepție a Mărfurilor.`;
        window.location.href = mailto;
    });
});
