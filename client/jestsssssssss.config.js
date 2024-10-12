module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.jsx$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)'
  ]
}
