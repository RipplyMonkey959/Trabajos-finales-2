// Obtenemos el elemento canvas del documento HTML
var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");

// Creamos un objeto para el jugador, con su posición inicial y tamaño
var player = { x: canvas.width / 2, y: canvas.height / 2, size: 40 };

// Creamos un array para las balas
var bullets = [];

// Creamos un array para los enemigos
var enemies = [];

// Creamos 10 enemigos con posiciones aleatorias
for (var i = 0; i < 10; i++) {
    enemies.push({
        x: Math.random() * canvas.width,
        y: (Math.random() * canvas.height) / 2,
        size: 40
    });
}

// Iniciamos el puntaje a 0
var score = 0;

// Creamos una nueva imagen para la nave del jugador
var naveImg = new Image();
naveImg.src = "/IMG/nave.png";

// Creamos una nueva imagen para el enemigo
var enemyImg = new Image();
enemyImg.src = "/IMG/nave1.png";

// Esperamos a que la imagen de la nave del jugador se cargue antes de iniciar el juego
naveImg.onload = function () {
    requestAnimationFrame(gameLoop);
};

// Esperamos a que la imagen del enemigo se cargue antes de iniciar el juego
enemyImg.onload = function () {
    requestAnimationFrame(gameLoop);
};

// Definimos la función gameLoop que controla la lógica del juego
function gameLoop() {
    player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(naveImg, player.x, player.y, player.size, player.size);

    // Dibujamos las balas
    for (var i = 0; i < bullets.length; i++) {
        bullets[i].y -= 5;
        ctx.fillRect(bullets[i].x, bullets[i].y, bullets[i].size, bullets[i].size);
    }

    // Dibujamos los enemigos
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].y += 1;
        if (enemies[i].y >= canvas.height) {
            enemies[i] = { x: Math.random() * canvas.width, y: 0, size: 40 };
        }
        ctx.drawImage(
            enemyImg,
            enemies[i].x,
            enemies[i].y,
            enemies[i].size,
            enemies[i].size
        );
    }

    // Detectamos colisiones entre balas y enemigos
    for (var i = 0; i < bullets.length; i++) {
        for (var j = 0; j < enemies.length; j++) {
            if (
                bullets[i].x < enemies[j].x + enemies[j].size &&
                bullets[i].x + bullets[i].size > enemies[j].x &&
                bullets[i].y < enemies[j].y + enemies[j].size &&
                bullets[i].y + bullets[i].size > enemies[j].y
            ) {
                bullets.splice(i, 1);
                enemies.splice(j, 1);
                score++;
                break;
            }
        }
    }

    // Detectamos colisiones entre la nave del jugador y los enemigos
    for (var i = 0; i < enemies.length; i++) {
        if (
            player.x < enemies[i].x + enemies[i].size &&
            player.x + player.size > enemies[i].x &&
            player.y < enemies[i].y + enemies[i].size &&
            player.y + player.size > enemies[i].y
        ) {
            gameOver();
            return;
        }
    }

    // Dibujamos el puntaje en la pantalla
    ctx.font = "30px Rubik";
    ctx.fillText("Score: " + score, 10, 50);
    ctx.fillStyle = "#fff";

    requestAnimationFrame(gameLoop);
}

// Función para terminar el juego
function gameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "50px Rubik";
    ctx.fillText("Game Over", canvas.width / 2 - 150, canvas.height / 2);
    ctx.fillStyle = "#fff";
    cancelAnimationFrame(gameLoop);
}

// Iniciamos el bucle del juego
gameLoop();

// Event listener para controlar el movimiento del jugador con las teclas
window.addEventListener("keydown", function (event) {
    switch (event.code) {
        case "ArrowUp":
            player.y -= 10;
            break;
        case "ArrowDown":
            player.y += 10;
            break;
        case "ArrowLeft":
            player.x -= 10;
            break;
        case "ArrowRight":
            player.x += 10;
            break;
        case "Space":
            bullets.push({ x: player.x, y: player.y, size: 20 });
            break;
    }
}, false);