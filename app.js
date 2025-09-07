document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const container = document.querySelector('.container');
    let score = 0;
    let questions = [
        {
            text: "¿Sientes que tus dientes superiores sobresalen mucho?",
            id: 'q1',
            value: 1
        },
        {
            text: "¿Notas espacios entre tus dientes?",
            id: 'q2',
            value: 1
        },
        // Aquí irían más preguntas
    ];

    startButton.addEventListener('click', () => {
        // Oculta el botón de inicio y muestra la primera pregunta
        container.innerHTML = '';
        showQuestion(0);
    });

    function showQuestion(index) {
        if (index < questions.length) {
            const question = questions[index];
            const questionElement = document.createElement('div');
            questionElement.innerHTML = `
                <h2>${question.text}</h2>
                <button onclick="handleAnswer(${index}, true)">Sí</button>
                <button onclick="handleAnswer(${index}, false)">No</button>
            `;
            container.appendChild(questionElement);
        } else {
            // Si no hay más preguntas, muestra los resultados
            showResults();
        }
    }

    window.handleAnswer = (index, answer) => {
        if (answer) {
            score += questions[index].value;
        }
        // Limpia la pantalla y muestra la siguiente pregunta
        container.innerHTML = '';
        showQuestion(index + 1);
    };

    function showResults() {
        container.innerHTML = `
            <h2>¡Es hora de agendar una cita!</h2>
            <p>Basado en tus respuestas, te recomendamos que agendes una cita con nuestros profesionales para una evaluación completa.</p>
            <h3>Aviso Importante</h3>
            <p>Esta evaluación es solo una guía. Te recomendamos encarecidamente que pidas una cita para una consulta profesional.</p>
            <br>
            <a href="URL_DE_TU_SISTEMA_DE_AGENDAMIENTO" target="_blank" class="appointment-button">Agendar una cita en nuestra clínica</a>
        `;
    }
});
