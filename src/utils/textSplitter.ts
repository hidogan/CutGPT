export function splitText(text: string, maxLength: number): string[] {
  if (!text || maxLength <= 0) return [];
  
  const chunks: string[] = [];
  let remainingText = text;

  while (remainingText.length > 0) {
    let chunk = remainingText.slice(0, maxLength);
    
    if (remainingText.length > maxLength) {
      const lastPeriod = chunk.lastIndexOf('.');
      const lastNewline = chunk.lastIndexOf('\n');
      const lastSpace = chunk.lastIndexOf(' ');
      
      let breakPoint = Math.max(lastPeriod, lastNewline, lastSpace);
      if (breakPoint === -1) breakPoint = maxLength;
      
      chunk = chunk.slice(0, breakPoint + 1);
    }

    const totalParts = Math.ceil(text.length / maxLength);
    const currentPart = chunks.length + 1;
    const isLastPart = currentPart === totalParts;

    let prefix = 'Do not answer yet. This is just another part of the text I want to send you. ';
    prefix += `Just receive and acknowledge as "Part ${currentPart}/${totalParts} received" and wait for the next part.\n\n`;
    prefix += `[START PART ${currentPart}/${totalParts}]\n`;

    let suffix = `\n[END PART ${currentPart}/${totalParts}]\n`;
    if (isLastPart) {
      suffix += '\nALL PARTS SENT. Now you can continue processing the request.';
    } else {
      suffix += `Remember not answering yet. Just acknowledge you received this part with the message "Part ${currentPart}/${totalParts} received" and wait for the next part.`;
    }

    chunks.push(prefix + chunk.trim() + suffix);
    remainingText = remainingText.slice(chunk.length).trim();
  }

  return chunks;
}