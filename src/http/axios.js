import axios from 'axios'
import _ from 'lodash'

function getConfigs () {
  let accessToken = localStorage.getItem('access_token')
  if (!_.isNull(accessToken)) {
    return {
      headers: { 'Authorization': 'bearer' + accessToken }
    }
  }
  return {}
}

export default axios.create(getConfigs())
