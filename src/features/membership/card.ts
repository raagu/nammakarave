import { downloadBlob } from '../../lib/download';

export interface CardText {
  organization: string;
  faction: string;
  name: string;
  district: string;
  wing: string;
  disclaimer: string;
  motto: string;
}

/** A PNG is generated locally, without a server, personal identifiers, or phone. */
export async function downloadSupporterCard(text: CardText): Promise<void> {
  await document.fonts.ready;
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 760;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Canvas is unavailable');
  context.fillStyle = '#171717';
  context.fillRect(0, 0, 1200, 760);
  context.fillStyle = '#f4c430';
  context.fillRect(0, 0, 1200, 12);
  context.fillStyle = '#d32f2f';
  context.fillRect(0, 12, 1200, 6);
  const draw = (value: string, y: number, size: number, color: string, weight = 500) => {
    context.fillStyle = color;
    let fitted = size;
    context.font = `${weight} ${fitted}px "Inter Variable", "Noto Sans Kannada Variable", sans-serif`;
    while (context.measureText(value).width > 1050 && fitted > 15) {
      fitted -= 1;
      context.font = `${weight} ${fitted}px "Inter Variable", "Noto Sans Kannada Variable", sans-serif`;
    }
    context.fillText(value, 70, y);
  };
  draw(text.organization, 110, 38, '#f4c430', 700);
  draw(text.faction, 163, 23, '#ccc');
  context.strokeStyle = '#414141';
  context.beginPath();
  context.moveTo(70, 205);
  context.lineTo(1130, 205);
  context.stroke();
  draw(text.disclaimer, 270, 23, '#f4c430', 600);
  draw(text.name, 375, 54, '#fff', 700);
  draw(text.district, 447, 29, '#ddd');
  draw(text.wing, 503, 27, '#ccc');
  context.fillStyle = '#f4c430';
  context.fillRect(0, 620, 1200, 140);
  draw(text.motto, 695, 32, '#111', 700);
  const blob = await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob(
      (value) => (value ? resolve(value) : reject(new Error('Card encoding failed'))),
      'image/png',
    ),
  );
  downloadBlob(blob, 'namma-karave-supporter-preview.png');
}
