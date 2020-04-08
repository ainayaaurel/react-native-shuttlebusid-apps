import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import IconBus from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-gesture-handler'
import { SearchBar } from 'react-native-elements';
import PickerModal from 'react-native-picker-modal-view';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const list = [
  { Id: 1, Name: 'Jakarta - Bandung', Value: 'Jakarta - Bandung' },
  { Id: 2, Name: 'Bandung - Bogor', Value: 'Bandung - Bogor' },
  { Id: 3, Name: 'Jakarta - Purwokerto', Value: 'Jakarta - Purwokerto' },
  { Id: 4, Name: 'Malang - Surabaya', Value: 'Malang - Surabaya' }
]

const { width: WIDTH } = Dimensions.get('window')

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.changeScreenToBus = () => {
      this.props.navigation.navigate('Select Bus')
    }
  }
  state = {
    search: '',
    selectedItems: {}
  };
  updateSearch = search => {
    this.setState({ search });
  };
  selected = selectedItems => {
    this.setState({ selectedItems })
  };
  render() {
    return (
      <View>
        <View style={styles.header}>
          <IconBus name='bus-side' size={50} color='#fff' />
        </View>
        <Card>
          <Text style={{ marginBottom: 10 }}>
            Departure - Arrival
          </Text>
          <PickerModal
            onSelected={this.selected}
            value={this.state.selectedItems}
            onSelected={(selected) => this.selected(selected)}
            onRequestClosed={() => console.warn('closed...')}
            onBackRequest={() => console.warn('back key pressed')}
            items={list}
            sortingLanguage={'tr'}
            showToTopButton={true}
            defaultSelected={this.state.selectedItem}
            autoCorrect={false}
            autoGenerateAlphabet={true}
            chooseText={'Select departure - arrival'}
            searchText={'Search...'}
            forceSelect={false}
            autoSort={true}
          />
          <Text style={{ marginBottom: 10, fontSize: 18 }}>
            Date
          </Text>
          <PickerModal
            onSelected={this.selected}
            value={this.state.selectedItems}
            onSelected={(selected) => this.selected(selected)}
            onRequestClosed={() => console.warn('closed...')}
            onBackRequest={() => console.warn('back key pressed')}
            items={list}
            sortingLanguage={'tr'}
            showToTopButton={true}
            defaultSelected={this.state.selectedItem}
            autoCorrect={false}
            autoGenerateAlphabet={true}
            chooseText={'Select departure - arrival'}
            searchText={'Search...'}
            forceSelect={false}
            autoSort={true}
          />
          <TouchableOpacity style={styles.btnSearch}>
            <Text style={styles.textSearch} onPress={this.changeScreenToBus}>SEARCH</Text>
          </TouchableOpacity>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#15B105',
    justifyContent: 'center',
    paddingLeft: 25,
    height: 50,
  },
  btnSearch: {
    width: WIDTH - 55,
    height: 45,
    backgroundColor: '#42A845',
    justifyContent: 'center',
    marginTop: 20
  },
  textSearch: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  },
  input: {
    width: WIDTH - 50,
    height: 60,
    fontSize: 16,
    marginTop: 10,
    backgroundColor: 'rgb(255,255,255)',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    shadowOpacity: 0.7,
    borderColor: '#fff',
    color: '#000'
  },
  inputContainer: {
    position: 'relative',
    marginTop: 10,
    alignItems: 'center'
  },
  search: {
    backgroundColor: '#fff'
  }
})

// {/* <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input} placeholder='Your name'
//           />
//           <TextInput
//             style={styles.input} placeholder='Your name'
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput style={styles.input} placeholder='Tanggal Perjalanan' />
//         </View>
//         <TouchableOpacity style={styles.btnSignUp}>
//           <Text style={styles.textSignUp}>Search</Text>
//         </TouchableOpacity> */}

//         // <PickerModal
//         //   onSelected={this.selected}
//         //   value={this.state.selectedItems}
//         //   onSelected={(selected) => this.selected(selected)}
//         //   onRequestClosed={() => console.warn('closed...')}
//         //   onBackRequest={() => console.warn('back key pressed')}
//         //   items={list}
//         //   sortingLanguage={'tr'}
//         //   showToTopButton={true}
//         //   defaultSelected={this.state.selectedItem}
//         //   autoCorrect={false}
//         //   autoGenerateAlphabet={true}
//         //   chooseText={'Choose one'}
//         //   searchText={'Search...'}
//         //   forceSelect={false}
//         //   autoSort={true}
//         // />

//         // <SearchBar
//         //   containerStyle={{ backgroundColor: '#fff' }}
//         //   inputStyle={{ backgroundColor: '#fff' }}
//         //   inputContainerStyle={{ backgroundColor: 'grey', borderRadius: 0 }}
//         //   placeholder="Type your destination"
//         //   onChangeText={this.updateSearch}
//         //   value={this.state.search}
//         // />


// import React, { Component } from 'react'
// import { Text } from 'react-native'

// export default class HomeScreen extends Component {
//   render() {
//     return (
//       <Text>Hola</Text>
//     )
//   }
// }
