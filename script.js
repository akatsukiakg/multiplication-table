const number = parseInt(prompt('numero'));
const range = parseInt(prompt('multiplo'));
for (let i = 1; i <= range; i++){
    const result = i * number;
    document.write(number + " x " + i + " = "+ (number * i) + "<br>");
}