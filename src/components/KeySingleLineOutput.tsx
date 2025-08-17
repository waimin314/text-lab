import KeyOutput from './KeyOutput';
import { formatToSingleLine } from '../utils/keyFormatters';

const KeySingleLineOutput = (props: { originalText: string }) => {
  return (
    <KeyOutput
      originalText={props.originalText}
      title="Single line"
      formatter={formatToSingleLine}
    />
  );
};

export default KeySingleLineOutput;
