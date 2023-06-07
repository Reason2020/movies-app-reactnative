import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import colors from '../constants/colors';

const StarRating = ({ rating }) => {
    const stars = [];
    const getStarCounts = (rating) => {
        const numFullFilled = Math.floor(rating);
        const numNotFilled = Math.floor(5 - rating);
        const numHalfFilled = 5 - numFullFilled - numNotFilled;
        return [numFullFilled, numHalfFilled, numNotFilled];
    }

    const [ fullStarCount, halfStarCount, emptyStarCount ] = getStarCounts(rating);
    for (let i = 0; i < fullStarCount; i++) {
        stars.push(<FontAwesome name='star' size={24} color={colors.star} />);
    }
    for (let i = 0; i < halfStarCount; i++) {
        stars.push(<FontAwesome name='star-half-o' size={24} color={colors.star} />);
    }
    for (let i = 0; i < emptyStarCount; i++) {
        stars.push(<FontAwesome name="star-o" size={24} color={colors.star} />)
    }
  return (
    <View style={styles.container}>
      <View style={styles.starsContainer}>
        {stars}
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
    </View>
  )
}

export default StarRating

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 0
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1
    },
    ratingText: {
        fontWeight: 'bold'
    }
})