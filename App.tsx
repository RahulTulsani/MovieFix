/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Appbar} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { appBarStyles } from './src/styles/Styles';
import GenresView, { genresType } from './src/components/Genres';
import Movies from './src/components/MovieList';

function App(): React.JSX.Element {
  const [selectedGenre,setSelectedGenre] = useState<genresType | null>(null);

  useEffect(()=>{
    StatusBar.setBackgroundColor('#000000')
    StatusBar.setBarStyle('light-content')
  },[])
  return (
    <SafeAreaProvider>
      <Appbar.Header style={appBarStyles.header}>
        <Appbar.Content title="MovieFix" titleStyle={appBarStyles.title}/>
      </Appbar.Header>
      <SafeAreaView>
        <GenresView selectedGenre = {selectedGenre} setSelectedGenre = {setSelectedGenre}/>
        <Movies selectedGenre={selectedGenre}/>
      </SafeAreaView>
    </SafeAreaProvider>);
}

export default App;
