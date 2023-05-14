import { AbstractForm } from './AbstractForm.js';

/**
 * Classe de base pour les planètes
 */
export class Planete extends AbstractForm {
  constructor(
    x = 0,
    y = 0,
    radius = 0,
    orbitRadius = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesanteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, radius * 2, radius * 2, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction);
    this.radius = radius;
    this.orbitRadius = orbitRadius;
  }

  draw(ctx) {
    super.draw(ctx);

    const centerX = this.x + this.radius;
    const centerY = this.y + this.radius;

    // Dessin de la planète
    ctx.beginPath();
    ctx.arc(centerX, centerY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.strokeColor;
    ctx.lineWidth = this.strokeWidth;
    ctx.fill();
    ctx.stroke();
  }

  static buildForms(ctx) {
    const numPlanets = 8; // Nombre de planètes dans le système solaire
    const orbitRadius = 250; // Rayon de l'orbite des planètes

    const sun = new Planete(ctx.canvas.width / 2 - 50, ctx.canvas.height / 2 - 50, 50, 0, 'yellow', 'orange', 2, false, 1);
    const planets = [];

    for (let i = 0; i < numPlanets; i++) {
      const angle = (i * 2 * Math.PI) / numPlanets;
      const x = ctx.canvas.width / 2 + Math.cos(angle) * orbitRadius;
      const y = ctx.canvas.height / 2 + Math.sin(angle) * orbitRadius;
      const radius = Math.random() * 15 + 10;
      const fillColor = getRandomColor();
      const strokeColor = 'black';
      const strokeWidth = 1;

      const planet = new Planete(x, y, radius, orbitRadius, fillColor, strokeColor, strokeWidth, false, i + 2);
      planets.push(planet);
    }

    return [sun, ...planets];
  }
}

/**
 * Génère une couleur aléatoire en format hexadécimal
 * @returns {string} Couleur aléatoire
 */
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
