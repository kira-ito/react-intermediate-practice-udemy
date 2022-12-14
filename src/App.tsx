import { Button, ChakraProvider } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import theme from "./theme/theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Router } from './routes/Router';
import { HeaderLayout } from './components/templates/HeaderLayout';
import { LoginUserProvider } from './providers/LoginUserProvider';


function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <LoginUserProvider>
          <Router />
        </LoginUserProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;