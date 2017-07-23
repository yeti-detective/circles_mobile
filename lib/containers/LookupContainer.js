import { connect } from 'react-redux'

import ProfileScreen from 'circles/lib/components/LookupScreen'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     storeUser: (user) => dispatch(storeUser(user))
//   }
// }

export default connect(mapStateToProps, {})(ProfileScreen)
