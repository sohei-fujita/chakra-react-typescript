import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
       <Button>ボタン</Button>
    </ChakraProvider>
  );
}

export default App;
