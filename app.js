import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView, ScrollView, StatusBar, Button, Alert  } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const Separator = () => (
  <View style={styles.separator} />
);
export default function App() {
  return (
       <SafeAreaView style={styles.container}>
      
      <ScrollView style={styles.scrollView}
      
          vertical = {true}
          automaticallyAdjustContentInsets={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={true}
          bounces={true}
          onMomentumScrollEnd={this.onAnimationEnd}>
          
        <Text style={styles.text}>
          We're no strangers to love
You know the rules and so do I
A full commitment's what I'm thinking of
You wouldn't get this from any other guy
I just wanna tell you how I'm feeling
Gotta make you understand
Never gonna give you up
Never gonna let you down
nevewgwg
        </Text>
      
      <View>
      <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={true}>
      </ScrollView>
      </View>
   
      </ScrollView>
       <View style={styles.viewst}>
      <ScrollView>
       <Separator/>
       <Button 
        title="ha-ha"
        color="blue"
        
        onPress={() => Alert.alert('what a story , mark')}
      />
       <Separator />
      </ScrollView>
      </View>
      
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
  },
    separator: {
    textColor: "black",
    borderBottomColor: '#ffffff',
    marginRight:20,
    marginTop:8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

    viewst: {
    flex: 10,
    colora:"red",
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 20
  },    
  scrollView: {
    indicatorStyle: "black",
    minimumZoomScale:6,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    flex: 100,
    fontSize: 40,
  }
});
