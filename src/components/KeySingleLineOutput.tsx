import { useEffect, useState } from 'react';

const KeySingleLineOutput = (props: { originalText: string }) => {
  const [text, setText] = useState(props.originalText);

  useEffect(() => {
    setText(formateToSingleLine(props.originalText));
  }, [props.originalText]);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Text copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  // Format the text to a single line
  const formateToSingleLine = (text: string) => {
    const textWithoutPreAndPostfix = text.replace(
      /-----BEGIN [^-]+-----|-----END [^-]+-----/g,
      ''
    );
    const textWithoutNewLines = textWithoutPreAndPostfix.replace(/\n/g, '');
    return textWithoutNewLines.replace(/\s+/g, ' ').trim();
  };

  return (
    <div className='w-full h-64 mb-20'>
      <header className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold mb-4'>Single line</h2>
        <button
          onClick={copyToClipboard}
          className='bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400'
        >
          Copy
        </button>
      </header>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='w-full h-full p-2 border-1 border-gray-300 bg-gray-100  focus:outline-none focus:ring-1 focus:ring-purple-600'
        disabled={true}
      />
    </div>
  );
};

export default KeySingleLineOutput;
