import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Color, FontFamily, FontSize } from '../GlobalStyles'

const CommentsMuro = ({ comment }) => {
  return (
    <View
      style={{
        flexDirection: 'row',

        padding: 5,
        borderRadius: 10
      }}
    >
      <Text style={styles.comments}>{comment.name}: </Text>
      <Text style={styles.comments}>{comment.comment}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
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
