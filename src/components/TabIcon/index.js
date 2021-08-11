import React from 'react'
import {
  Image,
  View,
  Text
} from 'react-native'

import Images from 'app/src/Theme/Images';

import styles from './styles'

const TabIcon = props => {
  switch(props.type) {
    case 'Home':
      if (props.focused) {
        return (
          <View
            style={styles.tabWrap}
          >
            <Image
              source={Images.homeActive}
              style={styles.icon}
            />
             <Text style={styles.activeText}>Home</Text>
          </View>
        )
      }
      return (
        <View
            style={styles.tabWrap}
          >
            <Image
              source={Images.homeInActive}
              style={styles.icon}
            />
             <Text style={styles.inActiveText}>Home</Text>
          </View>
      )
    case 'Library':
      if (props.focused) {
        return (
          <View
            style={styles.tabWrap}
          >
            <Image
              source={Images.libraryActive}
              style={styles.icon}
            />
             <Text style={styles.activeText}>My Library</Text>
          </View>
        )
      }
      return (
        <View
          style={styles.tabWrap}
        >
          <Image
          source={Images.libraryInActive}
          style={styles.icon}
        />
           <Text style={styles.inActiveText}>My Library</Text>
        </View>
      )
    case 'Discover':
      if (props.focused) {
        return (
          <View
            style={styles.tabWrap}
          >
            <Image
              source={Images.discoverActive}
              style={styles.icon}
            />
             <Text style={styles.activeText}>Discover</Text>
          </View>
        )
      }
      return (
        <View
          style={styles.tabWrap}
        >
        <Image
          source={Images.discoverInActive}
          style={styles.icon}
        />
           <Text style={styles.inActiveText}>Discover</Text>
        </View>
      )
    case 'Profile':
      if (props.focused) {
        return (
          <View
            style={styles.tabWrap}
          >
            <Image
              source={Images.profileActive}
              style={styles.icon}
            />
             <Text style={styles.activeText}>My Profile</Text>
          </View>
        )
      }
      return (
        <View
          style={styles.tabWrap}
        >
          <Image
            source={Images.profileInActive}
            style={styles.icon}
          />
           <Text style={styles.inActiveText}>Profile</Text>
        </View>
      )
    case 'Center':
      return (
        <Image
          source={Images.navImage}
          style={styles.img}
        />
      )
    default:
      return null
  }
}
export default TabIcon
