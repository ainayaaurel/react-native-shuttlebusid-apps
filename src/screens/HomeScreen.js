import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import IconBus from 'react-native-vector-icons/MaterialCommunityIcons'
import { TextInput } from 'react-native-gesture-handler'
import { SearchBar } from 'react-native-elements';
import PickerModal from 'react-native-picker-modal-view';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const list = [
  { Id: 1, Name: 'Test1 Name', Value: 'Test1 Value' },
  { Id: 2, Name: 'Test2 Name', Value: 'Test2 Value' },
  { Id: 3, Name: 'Test3 Name', Value: 'Test3 Value' },
  { Id: 4, Name: 'Test4 Name', Value: 'Test4 Value' },
  { Id: 4, Name: 'Test4 Name', Value: 'Test4 Value' }
]

const { width: WIDTH } = Dimensions.get('window')

export default class HomeScreen extends Component {
  state = {
    search: '',
    selectedItems: {}
  };
  updateSearch = search => {
    this.setState({ search });
  };
  selected = selectedItems => {
    this.setState({ selectedItems })
  }
  render() {
    return (
      <View>
        <View style={styles.header}>
          <IconBus name='bus-side' size={50} color='#fff' />
        </View>
        <Card
          title='HELLO WORLD'
        >
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
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
            chooseText={'Choose one'}
            searchText={'Search...'}
            forceSelect={false}
            autoSort={true}
          />
          <Button
            icon={<Icon name='code' color='#569248' />}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, color: '#569248' }}
            title='VIEW NOW' />
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
    borderColor: '#fff'
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
{/* <View style={styles.inputContainer}>
          <TextInput
            style={styles.input} placeholder='Your name'
          />
          <TextInput
            style={styles.input} placeholder='Your name'
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Tanggal Perjalanan' />
        </View>
        <TouchableOpacity style={styles.btnSignUp}>
          <Text style={styles.textSignUp}>Search</Text>
        </TouchableOpacity> */}

        // <PickerModal
        //   onSelected={this.selected}
        //   value={this.state.selectedItems}
        //   onSelected={(selected) => this.selected(selected)}
        //   onRequestClosed={() => console.warn('closed...')}
        //   onBackRequest={() => console.warn('back key pressed')}
        //   items={list}
        //   sortingLanguage={'tr'}
        //   showToTopButton={true}
        //   defaultSelected={this.state.selectedItem}
        //   autoCorrect={false}
        //   autoGenerateAlphabet={true}
        //   chooseText={'Choose one'}
        //   searchText={'Search...'}
        //   forceSelect={false}
        //   autoSort={true}
        // />

        // <SearchBar
        //   containerStyle={{ backgroundColor: '#fff' }}
        //   inputStyle={{ backgroundColor: '#fff' }}
        //   inputContainerStyle={{ backgroundColor: 'grey', borderRadius: 0 }}
        //   placeholder="Type your destination"
        //   onChangeText={this.updateSearch}
        //   value={this.state.search}
        // />