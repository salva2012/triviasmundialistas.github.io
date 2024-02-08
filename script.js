function setHighscore() {
    const playerName = document.getElementById("player-name").value;
    // Aquí podrías guardar el puntaje en una base de datos o realizar cualquier otra operación necesaria
    alert(`¡Hola ${playerName}! Tu puntaje más alto es: ¡Buena suerte en la trivia!`);
}

function submitComment() {
    const comment = document.getElementById("comment").value;
    const commentsDiv = document.getElementById("comments");
    const p = document.createElement("p");
    p.textContent = comment;
    commentsDiv.appendChild(p);
    document.getElementById("comment").value = ""; // Limpiar el campo de comentario después de enviarlo
}
