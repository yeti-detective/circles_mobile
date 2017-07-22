import { connect } from 'react-redux'

import ProfileScreen from 'circles/lib/components/ProfileScreen'

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
