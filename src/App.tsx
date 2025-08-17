import KeyFormatter from './components/KeyFormatter';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  return (
    <ToastProvider>
      <main className='min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'>
        <div className='container mx-auto max-w-6xl px-6 py-12'>
          <KeyFormatter />
        </div>
      </main>
    </ToastProvider>
  );
}

export default App;
