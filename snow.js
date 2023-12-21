document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('snow');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const flakes = [];

    function createFlake() {
        return {
            x: Math.random() * canvas.width,
            y: 0,
            radius: Math.random() * 5 + 2,
            speed: Math.random() * 3 + 1,
            opacity: Math.random(),
        };
    }

    function drawFlake(flake) {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();
    }

    function updateFlake(flake) {
        flake.y += flake.speed;

        if (flake.y > canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * canvas.width;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        flakes.forEach((flake) => {
            drawFlake(flake);
            updateFlake(flake);
        });

        requestAnimationFrame(draw);
    }

    function init() {
        for (let i = 0; i < 100; i++) {
            flakes.push(createFlake());
        }

        draw();
    }

    init();
});
