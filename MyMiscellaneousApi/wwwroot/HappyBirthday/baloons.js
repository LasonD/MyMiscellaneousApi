import { getRandomColor } from "../Utils/scripts.js";

const KAPPA = (4 * (Math.sqrt(2) - 1)) / 3;
const WIDTH_FACTOR = 0.0333;
const HEIGHT_FACTOR = 0.4;
const TIE_WIDTH_FACTOR = 0.12;
const TIE_HEIGHT_FACTOR = 0.1;
const TIE_CURVE_FACTOR = 0.13;
const GRADIENT_FACTOR = 0.3;
const GRADIENT_CIRCLE_RADIUS = 3;

export class Baloon {
  constructor(context, centerX, centerY, radius, color) {
    this.gfxContext = context;
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.baseColor = color;
    this.darkColor = getRandomColor();
    this.lightColor = getRandomColor();
  }

  draw() {
    const gfxContext = this.gfxContext;
    const radius = this.radius;
    const centerX = this.centerX;
    const centerY = this.centerY;

    const handleLength = KAPPA * radius;

    const widthDiff = radius * WIDTH_FACTOR;
    const heightDiff = radius * HEIGHT_FACTOR;
  
    const balloonBottomY = centerY + radius + heightDiff;
  
    // Begin balloon path
  
    gfxContext.beginPath();
  
    // Top Left Curve
  
    const topLeftCurveStartX = centerX - radius;
    const topLeftCurveStartY = centerY;
  
    const topLeftCurveEndX = centerX;
    const topLeftCurveEndY = centerY - radius;
  
    gfxContext.moveTo(topLeftCurveStartX, topLeftCurveStartY);
    gfxContext.bezierCurveTo(
      topLeftCurveStartX,
      topLeftCurveStartY - handleLength - widthDiff,
      topLeftCurveEndX - handleLength,
      topLeftCurveEndY,
      topLeftCurveEndX,
      topLeftCurveEndY
    );
  
    // Top Right Curve
  
    const topRightCurveStartX = centerX;
    const topRightCurveStartY = centerY - radius;
  
    const topRightCurveEndX = centerX + radius;
    const topRightCurveEndY = centerY;
  
    gfxContext.bezierCurveTo(
      topRightCurveStartX + handleLength + widthDiff,
      topRightCurveStartY,
      topRightCurveEndX,
      topRightCurveEndY - handleLength,
      topRightCurveEndX,
      topRightCurveEndY
    );
  
    // Bottom Right Curve
  
    const bottomRightCurveStartX = centerX + radius;
    const bottomRightCurveStartY = centerY;
  
    const bottomRightCurveEndX = centerX;
    const bottomRightCurveEndY = balloonBottomY;
  
    gfxContext.bezierCurveTo(
      bottomRightCurveStartX,
      bottomRightCurveStartY + handleLength,
      bottomRightCurveEndX + handleLength,
      bottomRightCurveEndY,
      bottomRightCurveEndX,
      bottomRightCurveEndY
    );
  
    // Bottom Left Curve
  
    const bottomLeftCurveStartX = centerX;
    const bottomLeftCurveStartY = balloonBottomY;
  
    const bottomLeftCurveEndX = centerX - radius;
    const bottomLeftCurveEndY = centerY;
  
    gfxContext.bezierCurveTo(
      bottomLeftCurveStartX - handleLength,
      bottomLeftCurveStartY,
      bottomLeftCurveEndX,
      bottomLeftCurveEndY + handleLength,
      bottomLeftCurveEndX,
      bottomLeftCurveEndY
    );
  
    // Create balloon gradient
  
    const gradientOffset = radius / 3;
  
    const balloonGradient = gfxContext.createRadialGradient(
      centerX + gradientOffset,
      centerY - gradientOffset,
      GRADIENT_CIRCLE_RADIUS,
      centerX,
      centerY,
      radius + heightDiff
    );
    balloonGradient.addColorStop(0, this.lightColor);
    balloonGradient.addColorStop(0.7, this.darkColor);
  
    gfxContext.fillStyle = balloonGradient;
    gfxContext.fill();
  
    // End balloon path
  
    // Create balloon tie
  
    const halfTieWidth = (radius * TIE_WIDTH_FACTOR) / 2;
    const tieHeight = radius * TIE_HEIGHT_FACTOR;
    const tieCurveHeight = radius * TIE_CURVE_FACTOR;
  
    gfxContext.beginPath();
    gfxContext.moveTo(centerX - 1, balloonBottomY);
    gfxContext.lineTo(centerX - halfTieWidth, balloonBottomY + tieHeight);
    gfxContext.quadraticCurveTo(
      centerX,
      balloonBottomY + tieCurveHeight,
      centerX + halfTieWidth,
      balloonBottomY + tieHeight
    );
    gfxContext.lineTo(centerX + 1, balloonBottomY);
    gfxContext.fill();
  }
}