document.addEventListener("DOMContentLoaded", function() {
    // Пример данных, которые будут обновляться каждые 5 секунд
    setInterval(() => {
        // Эти данные можно получить из API или симулировать
        const inputPressure = (Math.random() * (5.2 - 4.8) + 4.8).toFixed(2);
        const outputPressure = (Math.random() * (0.42 - 0.38) + 0.38).toFixed(2);
        const gasFlow = (Math.random() * (2000 - 1800) + 1800).toFixed(0);

        // Обновляем данные на странице
        document.getElementById('input-pressure').innerText = `${inputPressure} МПа`;
        document.getElementById('output-pressure').innerText = `${outputPressure} МПа`;
        document.getElementById('gas-flow').innerText = `${gasFlow} куб. м/час`;
    }, 5000); // Обновление каждые 5 секунд
});

