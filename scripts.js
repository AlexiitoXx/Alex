document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    const p = document.createElement('p');
    p.textContent = 'Hola desde JavaScript';
    app.appendChild(p);
});