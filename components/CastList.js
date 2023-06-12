import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CastCard from './CastCard';

const CastList = ({ castList, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cast</Text>
        <FlatList 
            data={castList}
            renderItem={({item}) => <CastCard castDetails={{...item}} navigation={navigation}/>}
            keyExtractor={item => item.index}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default CastList

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    }
})