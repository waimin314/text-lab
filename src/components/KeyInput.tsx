import { useState } from 'react';

const KeyInput = (props: { setOriginalText: (text: string) => void }) => {
  const placeHolderText = `Enter your key here..`;
  const [text, setText] = useState('');

  const pasteFromClipboard = () => {
    navigator.clipboard.readText().then((text) => {
      setText(text);
      props.setOriginalText(text);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setText(text);
    props.setOriginalText(text);
  };

  return (
    <div className='w-full h-64 mb-32'>
      <header className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold mb-4'>Original Key</h2>
        <button
          onClick={pasteFromClipboard}
          className='bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400'
        >
          Paste
        </button>
      </header>
      <textarea
        value={text}
        onChange={handleChange}
        className='w-full h-full p-2 border-2 border-purple-400 hover:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-600'
        placeholder={placeHolderText}
      />
    </div>
  );
};

export default KeyInput;
