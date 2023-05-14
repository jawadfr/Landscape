import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une étoile
 */
export class Etoile extends AbstractForm {
  // Ajoute des valeurs par défaut pour éviter les erreurs avec des arguments vides
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesanteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesanteur, ordreConstruction);
  }

  /**
   * Dessine la forme spécifique à cette classe (ici une "étoile")
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    super.draw(ctx);

    let ox = this.x;
    let oy = this.y;

    // Dessin de l'étoile
    ctx.beginPath();
    ctx.moveTo(ox, oy - this.height / 2); // Point supérieur

    const spikes = 5; // Nombre de pointes
    const outerRadius = this.width / 2; // Rayon extérieur
    const innerRadius = outerRadius * 0.4; // Rayon intérieur

    for (let i = 0; i < spikes; i++) {
      const angle = (i * 2 * Math.PI) / spikes;
      const outerX = ox + Math.cos(angle) * outerRadius;
      const outerY = oy + Math.sin(angle) * outerRadius;
      ctx.lineTo(outerX, outerY);

      const innerAngle = ((i + 0.5) * 2 * Math.PI) / spikes;
      const innerX = ox + Math.cos(innerAngle) * innerRadius;
      const innerY = oy + Math.sin(innerAngle) * innerRadius;
      ctx.lineTo(innerX, innerY);
    }

    ctx.closePath();
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.strokeColor;
    ctx.lineWidth = this.strokeWidth;
    ctx.fill();
    ctx.stroke();
  }

  /**
   * Obtient un tableau d'objets de type Etoile
   * @param ctx Contexte 2D du canvas
   * @returns {[Etoile,...]}
   */
  static buildForms(ctx) {
    const numStars = 50; // Nombre d'étoiles à générer
    const forms = [];

    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * ctx.canvas.width;
      const y = Math.random() * ctx.canvas.height;
      const size = Math.random() * 30 + 10;
      const fillColor = 'White';
      const strokeColor = 'orange';
      const strokeWidth = 2;

      forms.push(new Etoile(x, y, size, size, fillColor, strokeColor, strokeWidth, false, i + 1));
    }

    return forms;
  }
}
