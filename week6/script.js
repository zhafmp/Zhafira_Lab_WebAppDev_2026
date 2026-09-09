const themes = [
    {bg: "#ffffff", text: "#000000", btn: "#9a9a9a"},
    {bg: "#2d2d2d", text: "#f5f5f5", btn: "#5599ff"}
];

let currentTheme = 0;
const btn = document.getElementById("theme-btn");

btn.addEventListener("click", () => {
    currentTheme = (currentTheme + 1) % themes.length;
const theme = themes[currentTheme];

document.body.style.backgroundColor = theme.bg;
document.body.style.color = theme.text;
btn.style.backgroundColor = theme.btn;
});
