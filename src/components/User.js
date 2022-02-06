import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from 'react-redux'
import { fetchUsers } from "../Actions/UserAction";

const User = ({ userData, fetchUsers }) => {

    // const user = useSelector(state => state.user);
    // const dispatch = useDispatch();
    useEffect(() => {
        fetchUsers();
    }, [])

  return  userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users List</h2>
      <div>
        {userData &&
          userData.users &&
          userData.users.map(user => <p>{user.name}</p>)}
      </div>
    </div>
  )
};


const mapStateToProps = state => {
    return {
      userData: state.user
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers())
    }
  }

export default connect( mapStateToProps, mapDispatchToProps)(User)
