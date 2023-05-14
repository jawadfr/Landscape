import { AbstractForm } from './AbstractForm.js';

/**
 * Dessine une fusée
 */
export class Fusee extends AbstractForm {
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 100
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction);
  }

  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    super.draw(ctx);

    let ox = this.x;
    let oy = this.y;

    // Dessin du corps de la fusée
    ctx.fillStyle = this.fillColor;
    ctx.fillRect(ox + 20, oy, 40, 80); // Corps central
    ctx.fillRect(ox, oy + 80, 80, 20); // Base

    // Dessin de la pointe de la fusée
    ctx.beginPath();
    ctx.moveTo(ox + 20, oy);
    ctx.lineTo(ox + 40, oy - 40);
    ctx.lineTo(ox + 60, oy);
    ctx.closePath();
    ctx.fillStyle = this.strokeColor;
    ctx.fill();

    // Dessin des ailettes de la fusée
    ctx.beginPath();
    ctx.moveTo(ox + 10, oy + 20);
    ctx.lineTo(ox + 30, oy + 60);
    ctx.lineTo(ox + 10, oy + 60);
    ctx.closePath();
    ctx.moveTo(ox + 70, oy + 20);
    ctx.lineTo(ox + 50, oy + 60);
    ctx.lineTo(ox + 70, oy + 60);
    ctx.closePath();
    ctx.fillStyle = this.strokeColor;
    ctx.fill();
  }

  /**
   * Obtient un tableau d'objets de type Fusee
   * @param ctx Contexte 2D du canvas
   * @returns {[Fusee,...]}
   */
  static buildForms(ctx) {
    const w = ctx.canvas.height / 5;
    let forms = [];
    forms.push(new Fusee(~~(Math.random() * 500), ~~(Math.random() * 500), w * 2, w * 4, 'gray', 'white', 2, false, 50));
    forms.push(new Fusee(~~(Math.random() * 500), ~~(Math.random() * 700), w * 2, w * 3, 'silver', 'white', 2, false, 50));
    return forms;
  }
}
