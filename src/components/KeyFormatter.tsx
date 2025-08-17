import { useState } from 'react';
import KeyInput from './KeyInput';
import KeySingleLineOutput from './KeySingleLineOutput';
import KeyPEMOutput from './KeyPEMOutput';

const KeyFormatter = () => {
  const [originalText, setOriginalText] = useState('');
  return (
    <div className='container'>
      <h1 className='p-2 mb-16 text-4xl font-bold text-center text-purple-600 shadow-3xl text-shadow-sm'>
        Key Formatter
      </h1>
      <KeyInput setOriginalText={setOriginalText} />
      <KeySingleLineOutput originalText={originalText} />
      <KeyPEMOutput originalText={originalText} />
    </div>
  );
};

export default KeyFormatter;
