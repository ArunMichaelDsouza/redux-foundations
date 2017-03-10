import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserList from '../components/UserList.jsx';
import { selectUser } from '../actions/userActions';

const mapStateToProps = state => {
	return {
		users: state.users
	}
};

const matchDispatchToProps = dispatch => {
	return bindActionCreators({
		selectUser
	}, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(UserList);

