import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine un soleil
 */
export class Soleil extends AbstractForm {
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
   * Dessine la forme spécifique à cette classe (ici un "soleil")
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    super.draw(ctx);

    let ox = this.x;
    let oy = this.y;

    // Dessin du cercle principal du soleil
    ctx.beginPath();
    ctx.arc(ox, oy, this.width / 2, 0, Math.PI * 2, true);
    ctx.fillStyle = this.fillColor;
    ctx.fill();

    // Dessin des rayons du soleil
    const rayon = this.width / 2;
    const nbRayons = 120;
    const angleIncrement = (Math.PI * 2) / nbRayons;

    ctx.beginPath();
    for (let i = 0; i < nbRayons; i++) {
      const angle = i * angleIncrement;
      const endX = ox + Math.cos(angle) * rayon;
      const endY = oy + Math.sin(angle) * rayon;
      ctx.moveTo(ox, oy);
      ctx.lineTo(endX, endY);
    }
    ctx.strokeStyle = this.strokeColor;
    ctx.lineWidth = this.strokeWidth;
    ctx.stroke();
  }

  /**
   * Obtient un tableau d'objets de type Soleil
   * @param ctx Contexte 2D du canvas
   * @returns {[Soleil,...]}
   */
  static buildForms(ctx) {
    const cx = ctx.canvas.width / 2;
    const cy = ctx.canvas.height / 2;
    const minSize = Math.min(ctx.canvas.width, ctx.canvas.height);
    const size = minSize / 4;

    const forms = [
      new Soleil(cx, cy, size, size, 'yellow', 'orange', 1, false, 1)
    ];
    return forms;
  }
}
