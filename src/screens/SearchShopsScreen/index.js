 import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,ScrollView ,Image,Dimensions,SafeAreaView,StatusBar,TouchableOpacity} from 'react-native';



import Logo from '../../../assets/samaj-images/logo.png';

import styles from "./styles";

import theme from "../../theme";
import Header from "../../components/Header";
import CategoryTitle from "../../components/CategoryTitle";
import GlobalStyles from "../../utils/globalStyles";

import Icon from "react-native-vector-icons/Ionicons";

import { Colors, IconButton } from "react-native-paper";

import NavigationService from "../../utils/NavigationService";


import { Searchbar } from 'react-native-paper';





const SearchShopsScreen = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);







  
 
   const data=[
   {

     key:1,heading:'Shop Keeper / Sales Executives',type:'Balaji Dry Fruits',address:'Begum Bazar, Hyderabad, Telangana',amount:'$1500 a month', apply:'Apply from your phone',urgent:'Urgent Hiring'
   },
   {

     key:2,heading:'Shop Keeper / Sales Executives',type:'Balaji Dry Fruits',address:'Begum Bazar, Hyderabad,Telangana',amount:'$1500 a month', apply:'Apply from your phone',urgent:'Urgent Hiring'

   },
   {

     key:3,heading:'Shop Keeper / Sales Executives',type:'Balaji Dry Fruits',address:'Begum Bazar, Hyderabad,Telangana',amount:'$1500 a month', apply:'Apply from your phone',urgent:'Urgent Hiring'

   },
   {

     key:4,heading:'Shop Keeper / Sales Executives',type:'Balaji Dry Fruits',address:'Begum Bazar, Hyderabad,Telangana',amount:'$1500 a month', apply:'Apply from your phone',urgent:'Urgent Hiring'

   },
   {

     key:5,heading:'Shop Keeper / Sales Executives',type:'Balaji Dry Fruits',address:'Begum Bazar, Hyderabad,Telangana',amount:'$1500 a month', apply:'Apply from your phone',urgent:'Urgent Hiring'

   },
   {

     key:6,heading:'Shop Keeper / Sales Executives',type:'Balaji Dry Fruits',address:'Begum Bazar, Hyderabad,Telangana',amount:'$1500 a month', apply:'Apply from your phone',urgent:'Urgent Hiring'

   },
   {

     key:7,heading:'Shop Keeper / Sales Executives',type:'Balaji Dry Fruits',address:'Begum Bazar, Hyderabad,Telangana',amount:'$1500 a month', apply:'Apply from your phone',urgent:'Urgent Hiring'

   },
   
   ]









	return(
  
 <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />

        

     <View style={{justifyContent:'center',alignItems:'center'}}>

            <View style={{width:Dimensions.get('screen').width-40,flexDirection: 'row',justifyContent:'space-between'}}>


                     <TouchableOpacity
                        onPress={() => NavigationService.goBack()}
                     
                      >
                        <Icon size={30} name="ios-arrow-back-sharp" />
                      </TouchableOpacity>
                  
                
                 
                    <View style={GlobalStyles.rowFlexCenter}>
                      <IconButton
                        icon="share-social"
                        color='#fc8019'
                        size={25}
                        style={{ margin: 0 }}
                        onPress={() => NavigationService.navigate("AnimationScreen")}
                      />
                   
                    </View>
        </View>

      </View>


          <ScrollView contentContainerStyle={styles.searchshops}>

               <View style={styles.contents}>



                           <View style={styles.searchbar}>
                                  <Searchbar
                                    placeholder="Search"
                                    onChangeText={onChangeSearch}
                                    value={searchQuery}
                                    style={{width:Dimensions.get('screen').width-67,borderRadius: 10,}}
                                  />

                           </View>

                           <View style={{justifyContent:'center',alignItems:'center',marginTop: 6,}}>
                                 <View style={{width:Dimensions.get('screen').width-67,justifyContent: 'center',alignItems: 'center' }}> 
                                     
                                     <ScrollView contentContainerStyle={styles.types} horizontal={true} showsHorizontalScrollIndicator={false} >
                                            
                                             <TouchableOpacity style={styles.top}><Text style={styles.remote}>Remote</Text></TouchableOpacity>

                                             <TouchableOpacity style={styles.top}><Text style={styles.date}>Date Posted</Text></TouchableOpacity>

                                             <TouchableOpacity style={styles.top}><Text style={styles.job}>Job Title</Text></TouchableOpacity>

                                        <TouchableOpacity style={styles.top}><Text style={styles.date}>Date Posted</Text></TouchableOpacity>

                                             <TouchableOpacity style={styles.top}><Text style={styles.job}>Job Title</Text></TouchableOpacity>

                                       



                                     </ScrollView>
                              </View>
                           </View>
                             




                            <View style={styles.pagenumbers}>
                            
                               <Text style={styles.pages}>page 1 of 20 pages</Text>


                            </View>    













                            <View style={styles.products}>

   {
                    data.map((products) =>{
                        return(
                                      
                                        <View style={styles.inproducts} key={products.key}>



                                                  <View style={styles.left}> 

                                                      <Text style={styles.heading}>{products.heading}</Text>
                                                      
                                                      <Text style={styles.type}>{products.type}</Text>
                                                      
                                                      <Text style={styles.address}>{products.address}</Text>


                                                      <Text style={styles.amount}>{products.amount}</Text>

                                                      <TouchableOpacity style={{flexDirection: 'row',justifyContent:'flex-start',alignItems:'center',marginTop: 5,}} 
                                                                    onPress={() => NavigationService.navigate("ProductsScreen")}>
                                                      
                                                              <IconButton
                                                                    icon="send"
                                                                    color='#fc8019'
                                                                    size={17}
                                                                    style={{ margin: 0 }}

                                                                    
                                                                  />
                                                           


                                                           <Text style={styles.apply}>{products.apply}</Text>
                                                      
                                                      </TouchableOpacity>
                                                      
                                                     
                                                      <View style={{flexDirection: 'row',justifyContent:'flex-start',alignItems:'center'}}>
                                                      
                                                              <IconButton
                                                                    icon="share-social"
                                                                    color='#fc8019'
                                                                    size={20}
                                                                    style={{ margin: 0 }}
                                                                    
                                                                  />
                                                           


                                                           <Text style={styles.urgent}>{products.urgent}</Text>
                                                      
                                                      </View>




                                                    </View>


                                                  <View style={styles.right}>


                                                      <View style={styles.icons}>
 
                                                                     <IconButton
                                                                    icon="heart"
                                                                    color='#fc8019'
                                                                    size={20}
                                                                    style={{ margin: 0 }}
                                                                    onPress={() => NavigationService.navigate("AnimationScreen")}
                                                                  />
                                                           

                                                             <IconButton
                                                                    icon="share-social"
                                                                    color='#fc8019'
                                                                    size={20}
                                                                    style={{ margin: 0 }}
                                                                    onPress={() => NavigationService.navigate("AnimationScreen")}
                                                                  />
                                                           



                                                      </View>


                                                  </View>

                               


                                         </View>



                             )
                    })
                }

                            </View>







          </View>

          </ScrollView>


















 </SafeAreaView>     

	);
}





export default SearchShopsScreen;






