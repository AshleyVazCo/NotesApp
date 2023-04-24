import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, Icon } from 'react-native';
import { Button, ListItem, SpeedDial } from '@rneui/base';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SpeedDialAction } from '@rneui/base/dist/SpeedDial/SpeedDial.Action';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Folder' component={FolderScreen} />
        <Stack.Screen name='Notes' component={NotesScreen} />
        <Stack.Screen name='Market' component={MarketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation}) {
  const [open, setOpen] = useState(false);

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.homeText}>Welcome,</Text> 
      <Text style={styles.homeText2}>Ashley</Text>

      
      <Pressable
      onPress={() => navigation.navigate('Folder')}
      style={styles.pressable}
      ><Text style={styles.pressableText}>Folder</Text>
      </Pressable>


      <Pressable
      onPress={() => navigation.navigate('Notes')}
      style={styles.pressable}
      ><Text style={styles.pressableText}>Notes</Text>
      </Pressable>
     

      <Pressable
      onPress={() => navigation.navigate('Market')}
      style={styles.pressable}
      ><Text style={styles.pressableText}>Market</Text>
      </Pressable>

      </ScrollView>


      <SpeedDial
      isOpen={open}
      icon={{name:'add', color: 'black', overlayColor: '#dda0dd', size: 30}}
      buttonStyle={{
        backgroundColor: '#dda0dd',
        borderRadius: 100,
        width: 90,
        height: 90
      }}
      openIcon={{name: 'close', color: 'black'}}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      >
        <SpeedDialAction 
        icon={{name: 'folder'}}
        buttonStyle={{
          backgroundColor: '#dda0dd',
          borderRadius: 90,
          width: 80,
          height: 80,
        }}
        title="Create Folder"
        onPress={() => navigation.navigate('Folder')}
        />

        <SpeedDialAction
        icon={{name: 'note'}}
        buttonStyle={{
          backgroundColor: '#dda0dd',
          borderRadius: 90,
          width: 80,
          height: 80,
        }}
        title="Add Note"
        onPress={() => navigation.navigate('Notes')}
        />

      </SpeedDial>


    <StatusBar style="auto" />
    </SafeAreaView>
  )
}

function FolderScreen({navigation}) {

  //SpeedDial
  const [open, setOpen] = useState(false);

  //ScrollView
  const [isScrolling, setScrolling] = useState(false);

  return(
    <SafeAreaView style={styles.container}>
    <ScrollView
    onScroll={(event) => {
      setScrolling(event.nativeEvent.contentOffset.y > 0)
    }}
    >
  
    <Text style={styles.folderText}>My Folders</Text>

      <Pressable
      onPress={() => navigation.navigate('Notes')}
      style={styles.folderPressable1}
      ><Text style={styles.pressableText}>Mobile Dev</Text>
      </Pressable>

      <Pressable
      onPress={() => navigation.navigate('Notes')}
      style={styles.folderPressable2}
      ><Text style={styles.pressableText}>Server Side</Text>
      </Pressable>

      <Pressable
      onPress={() => navigation.navigate('Notes')}
      style={styles.folderPressable3}
      ><Text style={styles.pressableText}>Journal</Text>
      </Pressable>

      <Pressable
      onPress={() => navigation.navigate('Notes')}
      style={styles.folderPressable4}
      ><Text style={styles.pressableText}>Art</Text>
      </Pressable>

      <Pressable
      onPress={() => navigation.navigate('Notes')}
      style={styles.folderPressable5}
      ><Text style={styles.pressableText}>Social Media</Text>
      </Pressable>

      <Pressable
      onPress={() => navigation.navigate('Market')}
      style={styles.pressable}
      ><Text style={styles.pressableText}>Market</Text>
      </Pressable>
      </ScrollView>

      {!isScrolling && (

      <SpeedDial
      isOpen={open}
      icon={{name:'add', color: 'black', overlayColor: '#dda0dd', size: 30}}
      buttonStyle={{
        backgroundColor: '#dda0dd',
        borderRadius: 100,
        width: 90,
        height: 90
      }}
      openIcon={{name: 'close', color: 'black'}}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      >
        <SpeedDialAction 
        icon={{name: 'folder'}}
        buttonStyle={{
          backgroundColor: '#dda0dd',
          borderRadius: 90,
          width: 80,
          height: 80,
        }}
        title="Create Folder"
        onPress={() => navigation.navigate('Folder')}
        />

        <SpeedDialAction
        icon={{name: 'edit'}}
        buttonStyle={{
          backgroundColor: '#dda0dd',
          borderRadius: 90,
          width: 80,
          height: 80,
        }}
        title="Edit Folder"
        onPress={() => navigation.navigate('Notes')}
        />

      </SpeedDial>
       )}
     

    <StatusBar style="auto" />
    </SafeAreaView>
  )
}

function NotesScreen({navigation}) {

  //SpeedDial
  const [open, setOpen] = useState(false);

  //ScrollView
  const [isScrolling, setScrolling] = useState(false);


  return(
    <SafeAreaView style={styles.container}>

    <ScrollView
    onScroll={(event) => {
      setScrolling(event.nativeEvent.contentOffset.y > 0)
    }}
    >
    <Text style={styles.notesText}>Mobile Dev</Text>

      <Pressable
      onPress={() => navigation.navigate('Notes')}
      style={styles.notePressable}
      ><Text style={styles.pressableText}>App Idea</Text>
      </Pressable>
    
      <Pressable
      onPress={() => navigation.navigate('Notes')}
      style={styles.notePressable}
      ><Text style={styles.pressableText}>Class Notes</Text>
      </Pressable>

      <Pressable
      onPress={() => navigation.navigate('Notes')}
      style={styles.notePressable}
      ><Text style={styles.pressableText}>Resources</Text>
      </Pressable>

      <Pressable
      onPress={() => navigation.navigate('Notes')}
      style={styles.notePressable}
      ><Text style={styles.pressableText}>Final Project</Text>
      </Pressable>

      <Pressable
      onPress={() => navigation.navigate('Market')}
      style={styles.notePressable}
      ><Text style={styles.pressableText}>Market</Text>
      </Pressable>

    
    </ScrollView>

    {!isScrolling && (

    <SpeedDial
      isOpen={open}
      icon={{name:'add', color: 'black', overlayColor: '#dda0dd', size: 30}}
      buttonStyle={{
        backgroundColor: '#dda0dd',
        borderRadius: 100,
        width: 90,
        height: 90
      }}
      openIcon={{name: 'close', color: 'black'}}
      onOpen={() => setOpen(!open)}
      onClose={() => setOpen(!open)}
      >
        <SpeedDialAction 
        icon={{name: 'edit'}}
        buttonStyle={{
          backgroundColor: '#dda0dd',
          borderRadius: 90,
          width: 80,
          height: 80,
        }}
        title="Edit Note"
        onPress={() => navigation.navigate('Folder')}
        />

        <SpeedDialAction
        icon={{name: 'note'}}
        buttonStyle={{
          backgroundColor: '#dda0dd',
          borderRadius: 90,
          width: 80,
          height: 80,
        }}
        title="Add Note"
        onPress={() => navigation.navigate('Notes')}
        />
      </SpeedDial>
    )}

    <StatusBar style="auto" />
    </SafeAreaView>
  )
}

function MarketScreen({navigation}) {
  return(
    <SafeAreaView style={styles.container}>

    <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 45,
    fontWeight: 'bold',
  },
  homeText2: {
    fontSize: 45,
    marginBottom: 20,
  },
  pressable: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 30,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#2b2a28',
  },
  pressableText: {
    textAlign: 'left',
    fontSize: 35,
    fontWeight: 'bold',
    height: 40,
    width: 250,
    marginTop: 10,
    color: 'white',
  },
  folderText: {
    fontSize: 45,
    marginRight: 150,
    marginBottom: 20,
    marginTop: -10,
  },
  folderPressable1: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 30,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#cb6efa',
  },
  folderPressable2: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 30,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#6383ff',
  },
  folderPressable3: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 30,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#5adba5',
  },
  folderPressable4: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 30,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#e4aae6',
  },
  folderPressable5: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 30,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#676391',
  },
  notesText: {
    fontSize: 45,
    marginRight: 150,
    marginBottom: 20,
    marginTop: -10,
  },
  notePressable: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 30,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#cb6efa',
  },
});
