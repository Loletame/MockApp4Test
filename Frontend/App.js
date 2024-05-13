import Routes from './Routes/index.js';

//En app.js importamos la posibilidad de "scroll"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default App = () => {

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
      </GestureHandlerRootView>
  );
};