import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, Icon } from 'react-native';
import { PricingCard, SpeedDial } from '@rneui/base';
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
  //SpeedDial
  const [open, setOpen] = useState(false);

  //ScrollView
  const [isScrolling, setScrolling] = useState(false);

  return(
    <SafeAreaView style={styles.container}>
      {/* The ScrollView area. The contents in this area are viewable if you scroll. The SpeedDial is outside of the ScrollView area. The onScroll event will make the SpeedDial disappear if you scroll. */}
      <ScrollView
      onScroll={(event) => {
        setScrolling(event.nativeEvent.contentOffset.y > 0)
      }}
      >
        {/* Welcome Text */}
      <Text style={styles.homeText}>Welcome,</Text> 
      <Text style={styles.homeText2}>Ashley</Text>

      {/* Recently Used Section - Includes route to Mobile Dev notes */}
      <Text style={styles.homeText}>Recently Used</Text>

      <Pressable
      onPress={() => navigation.navigate('Notes')}
      style={styles.recentPressable}
      ><Text style={styles.recentText}>Mobile Dev</Text>
      </Pressable>


      {/* Menu Items/Routes */}
      <Text style={styles.homeText}>Go to:</Text>
      
      <Pressable
      onPress={() => navigation.navigate('Folder')}
      style={styles.pressable}
      ><Text style={styles.pressableText}>Folder</Text>
      </Pressable>
     

      <Pressable
      onPress={() => navigation.navigate('Market')}
      style={styles.pressable}
      ><Text style={styles.pressableText}>Market</Text>
      </Pressable>

      </ScrollView>

      {/* Makes the SpeedDial disappear when you scroll which is the intended action. */}
      {!isScrolling && (

        // SpeedDial in the homeScreen will allow you to either add a new note or create a new folder. For the purpose of this project no screens were created for those options, but is something to be developed in the future.
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
      )}

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
   {/* The ScrollView area. The contents in this area are viewable if you scroll. The SpeedDial is outside of the ScrollView area. The onScroll event will make the SpeedDial disappear if you scroll. */}
    <ScrollView
    onScroll={(event) => {
      setScrolling(event.nativeEvent.contentOffset.y > 0)
    }}
    >
      {/* List of Folders */}
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

      {/* SpeedDial will dissappear when you scroll which is the intended action. */}
      {!isScrolling && (
        
       // SpeedDial in the folderScreen will allow you to either edit a folder or create a new folder. For the purpose of this project no screens were created for those options, but is something to be developed in the future.
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
      {/* List of Notes within the Mobile Dev folder. For the purpose of this project there will only be one Notes Screen. */}
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

    {/* SpeedDial will dissappear when you scroll which is the intended action. */}
    {!isScrolling && (

      // SpeedDial in the NotesScreen will allow you to either edit a note or create a new note. For the purpose of this project no screens were created for those options, but is something to be developed in the future.
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

      {/* Mockup sales listing */}
    <ScrollView>

    <PricingCard
    color='black'
    title= 'Class Notes Package'
    price= '$2'
    info={['Includes 5 Class Notes templates']}
    button={{title: 'Add to Cart'}}
    />

    <PricingCard
    color='black'
    title= 'Project Proposal Package'
    price= '$2'
    info={['Includes 5 Project Proposal templates']}
    button={{title: 'Add to Cart'}}
    />

    <PricingCard
    color='black'
    title= 'Social Media Package'
    price= '$2'
    info={['Includes 5 Social Media planning templates']}
    button={{title: 'Add to Cart'}}
    />

    </ScrollView>

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
  recentPressable: {
    borderRadius: 8,
    borderWidth: 1,
    width: 190,
    height: 200,
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#cb6efa',
  },
  recentText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 30,
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
