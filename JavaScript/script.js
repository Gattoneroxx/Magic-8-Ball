document.getElementById('btnpreguntar').addEventListener('click', function() {
    const pregunta = document.getElementById('pregunta').value;
    const respuesta = [
        "Yo digo no",
        "Yo digo si",
        "Claro que SÍ, reina",
        "No lo veo claro, pregunta de nuevo...",
        "Yo no contaría con ello...",
        "Puede ser, el límite es tu imaginación...",
        "Por supuesto que SÍ"
    ];
    if(pregunta.trim() !== '') {
        const respuestaRandom = respuesta[Math.floor(Math.random() * respuesta.length)];
        document.getElementById('respuesta').innerText = respuestaRandom;
        document.getElementById('pregunta').value = '';
    } else {
        alert('Tienes que preguntar algo...');
    }
});