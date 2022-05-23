import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  state = {
    files: [],
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <mp-uploader files={this.state.files} upload={()=>console.log('Uploading...')}></mp-uploader>
      </View>
    )
  }
}
