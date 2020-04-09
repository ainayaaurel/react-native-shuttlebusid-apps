// import { SearchBar } from 'react-native-elements';

// export default class App extends React.Component {
//   state = {
//     search: '',
//   };

//   updateSearch = search => {
//     this.setState({ search });
//   };

//   render() {
//     const { search } = this.state;

//     return (
//       <SearchBar
//         placeholder="Type Here..."
//         onChangeText={this.updateSearch}
//         value={search}
//       />
//     );
//   }
// }

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Button, Header, Avatar } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Account extends Component {
  render() {
    return (
      <View>
        <View>
          <Header
            containerStyle={{ backgroundColor: '#15B105', marginTop: -30 }}
            centerComponent={{ text: 'MY ACCOUNT', style: { color: '#fff' } }}
            rightComponent={{ icon: 'menu', color: '#fff' }}
          />
          <Card style={{ height: 80 }}
          >
            <Avatar
              size='large'
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}
              showEditButton
            />
            <Text style={{ position: 'absolute', marginTop: 15, paddingLeft: 100 }}>
              Dinda Ayu
          </Text>
            <TouchableOpacity style={styles.touchedit}>
              <Text style={styles.textEdit}>
                EDIT PROFILE
            </Text>
            </TouchableOpacity>
            {/* <Button
              // icon={<Icon name='code' color='#ffffff' />}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 20 }}
              title='Edit Profile' /> */}
          </Card>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  touchedit: {
    marginTop: 20
  },
  textEdit: {
    color: '#569248',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})