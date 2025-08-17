export const formatToSingleLine = (text: string) => {
  const textWithoutPreAndPostfix = text.replace(
    /-----BEGIN [^-]+-----|-----END [^-]+-----/g,
    ''
  );
  const textWithoutNewLines = textWithoutPreAndPostfix.replace(/\n/g, '');
  return textWithoutNewLines.replace(/\s+/g, ' ').trim();
};

export const formatToPEM = (text: string) => {
  if (!text || text === '') return '';
  const singleLineText = formatToSingleLine(text);
  const formattedText = singleLineText.match(/.{1,64}/g)?.join('\n') || '';
  return `-----BEGIN PRIVATE KEY-----\n${formattedText}\n-----END PRIVATE KEY-----`;
};