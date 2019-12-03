import React, { Component } from 'react';
import {AppRegistry,Image,FlatList,StyleSheet,Text,View} from 'react-native';


class FlatListItem extends Component{
    render() {
        return(
          <View style ={styles.itemLayout}>
              <Image source={{uri:this.props.item.imageUrl ,width : 300 , height: 300}} style={styles.imageStyle}></Image>
              <View style={styles.itemInfoLayout}>
                <Text style={styles.itemName}>{this.props.item.name}</Text>
                <Text style={styles.itemPrice_Des}>{this.props.item.price}</Text>
                <Text style={styles.itemPrice_Des}>{this.props.item.itemDescription}</Text>
              </View>
              
          </View>

        );
    }
}
class BasicFlatList extends Component {
    render() {
        return (
           <View style={{flex: 1,  marginTop: 22 , justifyContent: 'center'}}>
               <FlatList
                    data ={flatListData}
                    //horizontal = {true}
                    renderItem = {({item,index})=>{
                        // console.log(`Item=${JSON.stringify(item)}, index= ${index}`)
                        return(
                            <FlatListItem item={item} index = {index}/>
                        );
                    }}
               />
           </View>
        );
    }
}


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.itemName}>
                <BasicFlatList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
     itemLayout: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: 20
    },

    itemInfoLayout: {
      flex: 1,
      flexDirection: 'column',
      flexWrap: 1
    },

    itemName: {
      flex: 1,
      fontSize: 30,
      fontWeight: 'bold',
    },

    itemPrice_Des: {
      flex: 1,
      fontSize: 20,
    },

    imageStyle: {
      resizeMode: 'stretch',
      width: 200,
      height: 200,
    }
});

const flatListData = [
    {
        "name" :"청바지",
        "price" :"52,000",
        "itemDescription" : "this is cup of cream tea",
        "imageUrl" : "https://image.msscdn.net/images/goods_img/20190228/969208/969208_2_500.jpg"
    },
    {
        "name" :"코트",
        "price" :"192,000",
        "itemDescription" : "this is blue jean",
        "imageUrl" : "https://image.msscdn.net/images/goods_img/20191203/1241797/1241797_4_500.jpg"
    },
    {
        "name" :"롱패딩",
        "price" :"200,000",
        "itemDescription" : "this is long padding",
        "imageUrl" : "https://image.msscdn.net/images/goods_img/20191203/1241749/1241749_1_500.jpg"
    },
    {
        "name" :"스니커즈",
        "price" :"78,000",
        "itemDescription" : "This is sneakers",
        "imageUrl" : "https://image.msscdn.net/images/goods_img/20170818/605093/605093_1_500.png"

    },
];