import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserList from '../components/UserList.jsx';

const mapStateToProps = state => {
	return {
		users: state.users
	}
};

export default connect(mapStateToProps)(UserList);

