import { useEffect, useState } from 'react';
import { formatToPEM } from '../utils/keyFormatters';

const PEM_TYPES = [
  'PRIVATE KEY',
  'PUBLIC KEY',
  'CERTIFICATE',
  'RSA PRIVATE KEY',
  'RSA PUBLIC KEY',
  'CERTIFICATE REQUEST'
];

const KeyPEMOutput = (props: { originalText: string }) => {
  const [text, setText] = useState(props.originalText);
  const [selectedPemType, setSelectedPemType] = useState('PRIVATE KEY');

  useEffect(() => {
    setText(formatToPEM(props.originalText, selectedPemType));
  }, [props.originalText, selectedPemType]);

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
    <div className='w-full h-64 mb-28'>
      <header className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-bold mb-4'>PEM format</h2>
        <div className='flex gap-2'>
          <select
            value={selectedPemType}
            onChange={(e) => setSelectedPemType(e.target.value)}
            className='bg-gray-100 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-purple-600'
          >
            {PEM_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <button
            onClick={copyToClipboard}
            className='bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400'
          >
            Copy
          </button>
        </div>
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

export default KeyPEMOutput;
