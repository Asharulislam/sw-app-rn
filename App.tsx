import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DashboardScreen from './src/views/dashboard/DashboardScreen';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F7F7" />
      <DashboardScreen />
    </SafeAreaProvider>
  );
}

export default App;
