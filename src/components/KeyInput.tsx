import { useState } from 'react';

const KeyInput = () => {
  const placeHolderText = `Enter your key here..`;
  const [originalText, setOriginalText] = useState('');


  const pasteFromClipboard = () => {
	navigator.clipboard.readText().then(text => {
	  setOriginalText(text);
	});
  };

  return (
    <div className='w-full h-64'>
      <header className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold mb-4'>Key Formatter</h2>
        <button onClick={pasteFromClipboard} className='bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400'>
          Paste
        </button>
      </header>
      <textarea value={originalText} onChange={(e) => setOriginalText(e.target.value)}
        className='w-full h-56 p-2 border-2 border-purple-400 hover:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-600'
        placeholder={placeHolderText}
      />
    </div>
  );
};

export default KeyInput;
