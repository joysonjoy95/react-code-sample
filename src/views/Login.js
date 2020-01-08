
import React, { useState} from 'react';
import Brand from "./../components/brand/Brand.js";
import HomeContainer from "./../components/containers/HomeContainer.js";
import InputContainer from "./../components/input/InputContainer.js";

import { connect } from 'react-redux'
import { userLogin } from '../actions/auth';

const Login = (props) => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    return (
        <div className="w-100 d-flex flex-wrap">
            <Brand />
            <HomeContainer title="Sign In To Your Account">
                <div className="w-75 pt-3 pb-3">
                    <InputContainer label="Your email address" className="mb-3" required>
                        <input type="text" className="form-control" value={user.email} onChange={(e) => setUser({ ...user,email:e.target.value})}/>
                    </InputContainer>
                    <InputContainer label="Password" className="mb-4" required>
                        <input type="text" className="form-control" onChange={(e) => setUser({ ...user, password: e.target.value })}/>
                    </InputContainer>
                    <button className="btn btn-danger btn-block" onClick={() => props.dispatch(userLogin(user))} disabled={props.is_loading}>{props.loading_text}</button>
                </div>
            </HomeContainer>
        </div>
    );
}

const mapStateToProps = state => state.login;

export default connect(mapStateToProps)(Login);