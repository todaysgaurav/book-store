import React, {Component} from 'react';

import {Text, View, Image, AsyncStorage, Button } from 'react-native';

class Books extends Component {
 
  constructor(){
    super();
    this.state = {
      arr:[0,0,0,0],
      book: [
        {
          id:1,
          visibilty:false,
          name:"Bad At Math", 
          price:220,
          starCount:0,
          author:"XYZ",
          img:<Image 
            source={require('./img/img1.jpg')}  
            style={{width: 420, height: 570}} 
          />,
        },
        {
          id:2,
          visibilty:false,
          name:"Passion",
          price:230,
          starCount:0,
          author:"ABC",
          img:<Image 
            source={require('./img/img2.jpg')}  
            style={{width: 420, height: 570}} 
          />,
        },
        {
          id:3,
          visibilty:false,
          name:"Fotographias",
          price:340,
          starCount:0,
          author:"RTY",
          img:<Image 
            source={require('./img/img3.jpg')}  
            style={{ width: 420, height: 570 }} 
          />,
        },
        {
          id:4,
          visibilty:false,
          name:"Little Black Book",
          price:323,
          starCount:0,
          author:"IOP",
          img:<Image 
            source={require('./img/img4.jpg')}  
            style={{width: 420, height: 570}} 
          />,
        }
      ]
    }
  }

  setBookVisivility = (id) => {
    const setNewVisivility = this.state.book.map((book) => {
      const newBook = book;
      if(book.id === id){
        newBook.visibilty = !newBook.visibilty;
      }
      else
        newBook.visibilty = false;
      return newBook;
    });
    this.setState({
      setNewVisivility
    });
  }

   componentDidMount = () => {
    const myArray =  AsyncStorage.getItem('myarr');
    return myArray;
  }
    
  resetBook = (id) => {
    const setNewVisivility = this.state.book.map((book) => {
      const newBook = book;
        newBook.visibilty = newBook.visibilty;
      
      return newBook;
    });
    this.setState({
      setNewVisivility
    });
  }

  _storeData = async (id,st) => {
    this.state.arr[id-1] = st;
    try {
      await AsyncStorage.setItem('myarr', JSON.stringify(this.state.arr));
    } catch (error) {

    }
    this.resetBook(id);
  };

  _retrieveData = async (id) => {
    let myArray;
    try {
      myArray = await AsyncStorage.getItem('myarr');
      if (myArray !== null) {
        this.state.arr = JSON.parse(myArray);
      }
    } catch (error) {
     
    }
    this.setBookVisivility(id);
  };

  

  render(){
    return(
      <View>
        <Button title={this.state.book[0].name} onPress={()=>this._retrieveData(1)}/>
        <Button title={this.state.book[1].name} onPress={()=>this._retrieveData(2)}/>
        <Button title={this.state.book[2].name} onPress={()=>this._retrieveData(3)}/>
        <Button title={this.state.book[3].name} onPress={()=>this._retrieveData(4)}/>
        {
          this.state.book.map((book)=>{
            return(
              <View>
                {book.visibilty?
                  <View style={{backgroundColor:'#0004',alignItems:"center"}}>
                    <Text> {book.name}</Text>
                    <Text>Price: {book.price}$</Text>
                    <Text>Book Id: {book.id}</Text>
                    <Text>Author: {book.author}</Text>
                    {book.img}
                    
                    <View style={{alignItems:"center", display:"flex", flexDirection:"row"}}>
                      <Button title = {`${this.state.arr[book.id-1]}` >= 1 ? '⭐' : '☆' } onPress={ () => this._storeData(book.id, 1)}/>
                      <Button title = {`${this.state.arr[book.id-1]}` >= 2 ? '⭐' : '☆' } onPress={ () => this._storeData(book.id, 2)}/>
                      <Button title = {`${this.state.arr[book.id-1]}` >= 3 ? '⭐' : '☆' } onPress={ () => this._storeData(book.id, 3)}/>
                      <Button title = {`${this.state.arr[book.id-1]}` >= 4 ? '⭐' : '☆' } onPress={ () => this._storeData(book.id, 4)}/>
                      <Button title = {`${this.state.arr[book.id-1]}` >= 5 ? '⭐' : '☆' } onPress={ () => this._storeData(book.id, 5)}/>
                    </View>
                  </View>:null
                }       
              </View>
            );
          })       
        }
      </View>
    )
  }
}
export default Books;
