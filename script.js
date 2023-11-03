document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const toUnitSelect = document.getElementById("toUnit");
    const resultOutput = document.getElementById("result");

    convertBtn.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        let convertedTemperature;

        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            convertedTemperature = (temperature - 32) * 5/9;
        } else if (fromUnit === "celsius" && toUnit === "kelvin") {
            convertedTemperature = temperature + 273.15;
        } else if (fromUnit === "kelvin" && toUnit === "celsius") {
            convertedTemperature = temperature - 273.15;
        } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
            convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        } else {
            // If both units are the same, no conversion is needed.
            convertedTemperature = temperature;
        }

        resultOutput.textContent = `${temperature}°${fromUnit.toUpperCase()} is equal to ${convertedTemperature.toFixed(2)}°${toUnit.toUpperCase()}`;
    });
});
