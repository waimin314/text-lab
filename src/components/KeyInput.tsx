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
    <div className='w-full mb-8'>
      <div className='bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-xl'>
        <header className='flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-100'>
          <h2 className='text-xl font-semibold text-gray-800 flex items-center gap-2'>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
            Original Key in Single Line or PEM format
          </h2>
          <button
            onClick={pasteFromClipboard}
            className='bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2.5 rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md'
          >
            <span className='flex items-center gap-2'>
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' />
              </svg>
              Paste
            </span>
          </button>
        </header>
        <div className='p-6'>
          <textarea
            value={text}
            onChange={handleChange}
            className='w-full h-64 p-4 border border-gray-200 rounded-lg bg-white font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200 placeholder-gray-400'
            placeholder={placeHolderText}
          />
        </div>
      </div>
    </div>
  );
};

export default KeyInput;
