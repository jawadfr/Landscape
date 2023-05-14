import { AbstractForm } from './AbstractForm.js';

export class Lune extends AbstractForm {
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

  draw(ctx) {
    super.draw(ctx);

    let ox = this.x;
    let oy = this.y;

    // Dessin du cercle de la lune
    ctx.beginPath();
    ctx.arc(ox, oy, this.width / 2, 0, Math.PI * 2, true);
    ctx.fillStyle = this.fillColor;
    ctx.fill();

    // Dessin des cratères de la lune
    const nbCraters = 15;
    const craterRadius = this.width / 10;

    for (let i = 0; i < nbCraters; i++) {
      const angle = (i / nbCraters) * Math.PI * 2;
      const cx = ox + Math.cos(angle) * (this.width / 2 - craterRadius);
      const cy = oy + Math.sin(angle) * (this.width / 2 - craterRadius);

      ctx.beginPath();
      ctx.arc(cx, cy, craterRadius, 0, Math.PI * 2, true);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.fill();
    }
  }

  static buildForms(ctx) {
    const size = Math.min(ctx.canvas.width, ctx.canvas.height) / 6;

    const forms = [
      new Lune(size, size, size, size, 'lightgray', '', 1, false, 1)
    ];

    return forms;
  }
}
