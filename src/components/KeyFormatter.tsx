import { useState } from 'react';
import KeyInput from './KeyInput';
import KeySingleLineOutput from './KeySingleLineOutput';
import KeyPEMOutput from './KeyPEMOutput';

const KeyFormatter = () => {
  const [originalText, setOriginalText] = useState('');
  return (
    <div className='w-full'>
      <div className='text-center mb-12'>
        <h1 className='text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4'>
          Key Formatter
        </h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Transform your cryptographic keys between different formats with ease. Paste your key and instantly get formatted outputs.
        </p>
      </div>
      
      <div className='space-y-8'>
        <KeyInput setOriginalText={setOriginalText} />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <KeySingleLineOutput originalText={originalText} />
          <KeyPEMOutput originalText={originalText} />
        </div>
      </div>
    </div>
  );
};

export default KeyFormatter;
