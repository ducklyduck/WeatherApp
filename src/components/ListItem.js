import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import moment from 'moment'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, dateTextWrapper, date, temp } = styles
  return (
    <View style={item}>
      <Feather name={weatherType[condition]?.icon} size={50} color={'white'} />
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
        <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 2,
    backgroundColor: 'indianred'
  },
  dateTextWrapper: {
    flexDirection: 'column'
  },
  date: {
    color: '#E5DFED',
    fontSize: 15
  },
  temp: {
    color: '#E5DFED',
    fontSize: 20
  }
})
export default ListItem
