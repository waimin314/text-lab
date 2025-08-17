import { useEffect, useState } from 'react';
import { formatToPEM } from '../utils/keyFormatters';
import { useToast } from '../contexts/ToastContext';

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
  const { showToast } = useToast();

  useEffect(() => {
    setText(formatToPEM(props.originalText, selectedPemType));
  }, [props.originalText, selectedPemType]);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showToast('Copied to clipboard!', 'success');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
        showToast('Failed to copy text', 'error');
      });
  };

  return (
    <div className='w-full mb-8'>
      <div className='bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-xl'>
        <header className='flex justify-between items-center p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border-b border-gray-100'>
          <h2 className='text-xl font-semibold text-gray-800 flex items-center gap-2'>
            <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
            PEM format
          </h2>
          <div className='flex gap-3'>
            <div className='relative'>
              <select
                value={selectedPemType}
                onChange={(e) => setSelectedPemType(e.target.value)}
                className='appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-10 text-sm font-medium text-gray-700 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200 cursor-pointer shadow-sm'
              >
                {PEM_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                <svg className='w-4 h-4 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </div>
            </div>
            <button
              onClick={copyToClipboard}
              className='bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2.5 rounded-lg font-medium hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md'
            >
              <span className='flex items-center gap-2'>
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' />
                </svg>
                Copy
              </span>
            </button>
          </div>
        </header>
        <div className='p-6'>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='w-full h-64 p-4 border border-gray-200 rounded-lg bg-gray-50 font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200'
            disabled={true}
            placeholder='PEM formatted output will appear here...'
          />
        </div>
      </div>
    </div>
  );
};

export default KeyPEMOutput;
