import Reactotron, {
  asyncStorage,
  trackGlobalErrors
} from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron.configure({ name: 'React Native Demo' })
  .use(trackGlobalErrors())
  .useReactNative({ storybook: true }) // add all built-in react native plugins
  .use(reactotronRedux())
  .use(asyncStorage()) //  <- here i am!
  .connect() //Don't forget about me!

if (Reactotron.clear) {
  Reactotron.clear()
}
console.tron = reactotron
reactotron.onCustomCommand('test', () => console.log('This is an example'))
reactotron.clear()
export default reactotron
