import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const GenreCard = ({genre}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.genreText}>{genre}</Text>
    </View>
  )
}

export default GenreCard

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor: colors.black,
        padding: 4,
        borderRadius: 4,
        marginRight: 4
    },
    genreText: {
        fontWeight: '100',
        fontSize: 10
    }
})