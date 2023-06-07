import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen');
const imageBaseUrl = 'https://image.tmdb.org/t/p/w185';

const CastCard = ({ castDetails, navigation }) => {
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('CastDetails', {
      itemId: castDetails.id
    })}>
        <Image
            source={{uri: `${imageBaseUrl}${castDetails.profile_path}`}}
            style={styles.imageStyle}
        />
      <Text numberOfLines={2} style={styles.castTitle}>{castDetails.name}</Text>
    </Pressable>
  )
}

export default CastCard

const styles = StyleSheet.create({
    container: {
        width: width*0.22
    },
    imageStyle: {
        width: width*0.2,
        height: width*0.2,
        resizeMode: 'contain',
        borderRadius: width*0.1
    },
    castTitle: {
        textAlign: 'center'
    }
})