import { StyleSheet, Text, View, Pressable, ScrollView, Dimensions, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons';
import colors from '../constants/colors';
import MovieList from '../components/MovieList';

const {height, width} = Dimensions.get('screen');

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
        <StatusBar />
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* headerbar */}
            <View style={styles.headerBar}>
                {/* todo */}
                <Pressable onPress={() => null}>
                    <Feather name="align-left" size={24} color="black" />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Search')}>
                    <FontAwesome name="search" size={24} color="black" />
                </Pressable>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Movies</Text>
                <View style={styles.separator}></View>
            </View>
            {/* Popular Movies List */}
            <MovieList title="Popular" />

            {/* Top Rated Movies List */}
            <MovieList title="Top Rated" />

            {/* Upcoming Movies List */}
            <MovieList title="Upcoming" />
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContainer: {
        marginVertical: 15
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    separator: {
        height: 6,
        width: width*0.1,
        backgroundColor: colors.orange,
        borderRadius: 5  
    }
})