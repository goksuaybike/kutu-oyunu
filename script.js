let score = 0;
const catchBox = document.getElementById('catchMe');
const scoreDisplay = document.getElementById('score');

// Bu fonksiyon kutuyu rastgele bir pozisyona yerleştirir
function moveBox() {
    const maxX = window.innerWidth - 100;  // Ekran genişliği - kutu genişliği
    const maxY = window.innerHeight - 100;  // Ekran yüksekliği - kutu yüksekliği
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    catchBox.style.left = `${randomX}px`;
    catchBox.style.top = `${randomY}px`;
}

// Kutuya tıklama olayını dinler
catchBox.addEventListener('click', function() {
    score++;
    scoreDisplay.textContent = `Puan: ${score}`;
    moveBox();  // Kutu hareket ettirilir
});

// Başlangıçta kutuyu rastgele bir yere yerleştir
moveBox();
