import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Color, FontFamily, FontSize } from '../GlobalStyles'

const CommentsMuro = ({ comment }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.comments}>{comment.content} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    borderRadius: 10
  },
  comments: {
    flexDirection: 'row',
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size
  }
})

export default CommentsMuro
