import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';

const Realm = require('realm');

class dataModel extends Component {
 render() {
   let realm = new Realm({
     schema: [{name: 'Dog', properties: {name: 'string'}}]
   });
   realm.write(() => {
     realm.create('Dog', {name: 'Rex'});
   });

   return (
     <View>
       <Text>
         Count of Dogs in Realm: {realm.objects('Dog').length}
       </Text>
     </View>
   );
 }
}
export default dataModel;
