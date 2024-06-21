document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        { question: "Care este rolul principal al porturilor în comerțul global?", answers: ["Facilitarea turismului", "Transportul eficient al mărfurilor", "Producția de bunuri", "Gestionarea rezervelor de energie"], correct: "Transportul eficient al mărfurilor" },
        { question: "Cum contribuie porturile la lanțurile de aprovizionare internaționale?", answers: ["Reduc prin păstrarea mărfurilor pe termen lung", "Facilitează transportul rapid și eficient al mărfurilor", "Limitează importul de produse din alte țări", "Impun taxe mari asupra comerțului"], correct: "Facilitează transportul rapid și eficient al mărfurilor" },
        { question: "Care este caracteristica principală a porturilor de mărfuri generale?", answers: ["Sunt dedicate transportului de persoane", "Gestionază o varietate largă de produse", "Se specializează în mărfuri vrac", "Sunt folosite doar pentru transportul de petrol"], correct: "Gestionază o varietate largă de produse" },
        { question: "Ce tip de port este utilizat pentru redistribuirea mărfurilor către alte destinații?", answers: ["Port de mărfuri generale", "Port specializat", "Port de tranzit", "Port comercial"], correct: "Port de tranzit" },
        { question: "Ce activitate este inclusă în procesul de livrare a mărfurilor?", answers: ["Producția mărfurilor", "Planificarea rutei de transport", "Construcția de nave", "Proiectarea depozitelor"], correct: "Planificarea rutei de transport" },
        { question: "De ce este importantă planificarea rutei în procesul de livrare a mărfurilor?", answers: ["Pentru a economisi combustibil", "Pentru a maximiza timpul de transport", "Pentru a evita inspecțiile vamale", "Pentru a respecta regulile de navigație și securitate"], correct: "Pentru a respecta regulile de navigație și securitate" },
        { question: "Ce tip de marfă este transportată în containere standardizate?", answers: ["Mărfuri vrac", "Produse chimice", "Produse containerizate", "Petrol"], correct: "Produse containerizate" },
        { question: "Care este un exemplu de marfă bulk?", answers: ["Electronice", "Petrol", "Cereale", "Echipamente medicale"], correct: "Cereale" },
        { question: "Ce document oferă detalii despre încărcătura transportată?", answers: ["Certificate of Origin", "Polița de încărcare", "Cargo Manifest", "Permisul de conducere"], correct: "Manifestul de marfă" },
        { question: "Ce document atestă originea geografică a mărfii?", answers: ["Manifestul de marfă", "Polița de încărcare", "Certificatul de origine", "Factura comercială"], correct: "Certificatul de origine" },
        { question: "Ce se verifică în timpul inspecției mărfurilor la sosire?", answers: ["Conformitatea cu regulamentele de transport", "Planificarea descărcării", "Documentația de transport", "Starea bunurilor"], correct: "Starea bunurilor" },
        { question: "Ce activitate include coordonarea echipelor și echipamentelor pentru descărcare?", answers: ["Verificarea documentației", "Planificarea descărcării", "Transportul maritim", "Inspecția mărfurilor"], correct: "Planificarea descărcării" },
        { question: "Ce echipament este utilizat pentru manipularea rapidă a containerelor?", answers: ["Macarale de container", "Benzi transportoare", "Camioane specializate", "Vehicule autonome"], correct: "Macarale de container" },
        { question: "Pentru ce tip de mărfuri sunt utilizate benzile transportoare?", answers: ["Containere", "Mărfuri bulk", "Mărfuri lichide", "Echipamente grele"], correct: "Mărfuri bulk" },
        { question: "Ce poate cauza întârzieri în porturi datorită volumului mare de marfă?", answers: ["Probleme tehnice", "Congestia portuară", "Factori economici", "Legislația națională"], correct: "Congestia portuară" },
        { question: "Ce provocări tehnice pot apărea în timpul manipulării mărfurilor în porturi?", answers: ["Probleme de siguranță", "Fluctuații economice", "Defecțiuni ale echipamentelor", "Probleme de documentație"], correct: "Defecțiuni ale echipamentelor" },
        { question: "De ce este importantă verificarea documentației înainte de descărcarea mărfurilor?", answers: ["Pentru a asigura conformitatea cu regulamentele de import", "Pentru a planifica descărcarea", "Pentru a inspecta starea mărfurilor", "Pentru a optimiza depozitarea"], correct: "Pentru a asigura conformitatea cu regulamentele de import" },
        { question: "Ce echipamente sunt utilizate pentru transportul intern al mărfurilor în porturi?", answers: ["Macarale de container", "Vehicule specializate", "Benzi transportoare", "Echipamente de monitorizare"], correct: "Vehicule specializate" },
        { question: "Care dintre următoarele nu este un tip de port?", answers: ["Port de mărfuri generale", "Port specializat", "Port de tranzit", "Port de producție"], correct: "Port de producție" }
    ];

    const employees = {
        "0001": "Oancea Mihnea",
    };

    let shuffledQuestions;
    let storedQuestions = localStorage.getItem('quizQuestions');
    let storedAnswers = localStorage.getItem('quizAnswers');

    if (storedQuestions && storedAnswers) {
        shuffledQuestions = JSON.parse(storedQuestions);
        storedAnswers = JSON.parse(storedAnswers);
    } else {
        shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
        storedAnswers = shuffledQuestions.map(q => q.answers.sort(() => 0.5 - Math.random()));
        localStorage.setItem('quizQuestions', JSON.stringify(shuffledQuestions));
        localStorage.setItem('quizAnswers', JSON.stringify(storedAnswers));
    }

    const questionContainer = document.getElementById('questions-container');

    shuffledQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = `Întrebarea ${index + 1}: ${q.question}`;
        questionDiv.appendChild(questionTitle);

        const answers = storedAnswers[index];

        answers.forEach((answer, i) => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = answer;
            label.appendChild(input);
            label.appendChild(document.createTextNode(answer));
            questionDiv.appendChild(label);
        });

        questionContainer.appendChild(questionDiv);
    });

    const employeeIdInput = document.getElementById('employee-id');
    const submitButton = document.querySelector('button[type="submit"]');
    const errorMessage = document.createElement('div');
    errorMessage.id = 'error-message';
    errorMessage.style.display = 'none';
    const idContainer = document.createElement('div');
    idContainer.id = 'employee-id-container';
    employeeIdInput.parentNode.replaceChild(idContainer, employeeIdInput);
    idContainer.appendChild(employeeIdInput);
    idContainer.appendChild(errorMessage);
    submitButton.disabled = true;

    // Validare ID angajat
    employeeIdInput.addEventListener('input', function() {
        const employeeId = employeeIdInput.value;
        if (employeeId.length === 4 && employees.hasOwnProperty(employeeId)) {
            submitButton.disabled = false;
            errorMessage.style.display = 'none';
        } else {
            submitButton.disabled = true;
            errorMessage.textContent = "ID-ul angajatului nu este valid.";
            errorMessage.style.display = 'inline-block';
        }
    });

    const form = document.getElementById('quiz-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const employeeId = employeeIdInput.value;
        if (!employeeId || employeeId.length !== 4 || !employees.hasOwnProperty(employeeId)) {
            alert("Introduceți un ID valid al angajatului!");
            return;
        }

        let allAnswered = true;
        const answers = [];
        shuffledQuestions.forEach((q, index) => {
            const selected = document.querySelector(`input[name="question-${index}"]:checked`);
            if (selected) {
                answers.push(selected.value);
            } else {
                allAnswered = false;
            }
        });

        if (!allAnswered) {
            alert("Trebuie să răspundeți la toate întrebările!");
            return;
        }

        const correctAnswers = shuffledQuestions.filter((q, index) => q.correct === answers[index]).length;
        localStorage.setItem('score', correctAnswers);
        localStorage.setItem('employeeId', employeeId);

        // Curăță întrebările și răspunsurile din localStorage
        localStorage.removeItem('quizQuestions');
        localStorage.removeItem('quizAnswers');
        localStorage.removeItem('remainingTime');

        window.location.href = "result1.html";
    });

    // Timer
    let timeLeft = localStorage.getItem('remainingTime') ? parseInt(localStorage.getItem('remainingTime'), 10) : 300;
    const timerElement = document.getElementById('timer');

    const updateTimer = () => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Timpul a expirat!");

            const employeeId = employeeIdInput.value;
            if (!employeeId || employeeId.length !== 4 || !employees.hasOwnProperty(employeeId)) {
                localStorage.removeItem('quizQuestions');
                localStorage.removeItem('quizAnswers');
                localStorage.removeItem('remainingTime');
                window.location.href = "index.html";
            } else {
                // Calculează scorul chiar dacă timpul a expirat și nu toate răspunsurile sunt completate
                const answers = [];
                shuffledQuestions.forEach((q, index) => {
                    const selected = document.querySelector(`input[name="question-${index}"]:checked`);
                    if (selected) {
                        answers.push(selected.value);
                    } else {
                        answers.push(null); // Adaugă null pentru răspunsurile necompletate
                    }
                });

                const correctAnswers = shuffledQuestions.filter((q, index) => q.correct === answers[index]).length;
                localStorage.setItem('score', correctAnswers);
                localStorage.setItem('employeeId', employeeId);

                // Curăță întrebările și răspunsurile din localStorage
                localStorage.removeItem('quizQuestions');
                localStorage.removeItem('quizAnswers');
                localStorage.removeItem('remainingTime');

                window.location.href = "result1.html";
            }
        } else {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
            timeLeft--;
            localStorage.setItem('remainingTime', timeLeft);
        }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    document.getElementById('exit-button').addEventListener('click', function() {
        if (confirm("Sunteți sigur că doriți să părăsiți chestionarul?")) {
            window.location.href = "index.html";
        }
    });

    // Previne refresh-ul paginii
    document.addEventListener('keydown', function(event) {
        if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
            event.preventDefault();
        }
    });

    window.addEventListener('beforeunload', function(event) {
        event.preventDefault();
        event.returnValue = ''; 
    });
});

