import { useEffect, useState } from 'react';

interface KeyOutputProps {
  originalText: string;
  title: string;
  formatter: (text: string) => string;
}

const KeyOutput = ({ originalText, title, formatter}: KeyOutputProps) => {
  const [text, setText] = useState(originalText);

  useEffect(() => {
    setText(formatter(originalText));
  }, [originalText, formatter]);

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

  return (
    <div className={`w-full h-64 mb-28`}>
      <header className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold mb-4'>{title}</h2>
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

export default KeyOutput;