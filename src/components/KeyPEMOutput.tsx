import KeyOutput from './KeyOutput';
import { formatToPEM } from '../utils/keyFormatters';

const KeyPEMOutput = (props: { originalText: string }) => {
  return (
    <KeyOutput
      originalText={props.originalText}
      title='PEM format'
      formatter={formatToPEM}
    />
  );
};

export default KeyPEMOutput;
