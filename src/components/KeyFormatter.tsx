import { useState } from 'react';
import KeyInput from './KeyInput';
import KeySingleLineOutput from './KeySingleLineOutput';

const KeyFormatter = () => {
  const [originalText, setOriginalText] = useState('');
  return (
    <div className='container'>
      <h1 className='p-2 mb-16 text-4xl font-bold text-center text-purple-600 shadow-3xl'>
        Key Formatter
      </h1>
      <KeyInput setOriginalText={setOriginalText} />
      <KeySingleLineOutput originalText={originalText} />
    </div>
  );
};

export default KeyFormatter;
