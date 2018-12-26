import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import isecured from '../../assets/icons-secured.png';
import ilock from '../../assets/icons-lock.png';

const validate = values => {
    const errors = {}
        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }

        if (!values.username) {
            errors.username = 'Required'
        }

        if (!values.password) {
            errors.password = 'Required'
        } else if (values.password.length < 6) {
            errors.password = 'Must be 6 characters or more'
        }
      
        return errors
  }
const inputan = ({img, input, type, placeholder, meta: { touched, error } }) => (
    <div className="form-group">
        <div className="input-group">
            <div className="input-group-addon">
                <img src={img} alt="{type}" />
            </div>
            <input className="form-control" 
                {...input}
                type={type} 
                placeholder={placeholder}
                required
            />
        </div>
        {touched && (error && <div class="form-control-feedback" style={{ color:"red" }}>{error}</div>)}
    </div>
)

class RegisterForm extends Component {
  render() {
    return (
        <form onSubmit={this.props.handleSubmit}>
            <div className="">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="form-group">
                            <label> Email :</label>
                            <Field name="email" component={inputan} type="email" placeholder="Email Bos" img={isecured}/>
                        </div>
                        <div className="form-group">
                            <label> Username :</label>
                            <Field name="username" component={inputan} type="text" placeholder="Username gan" img={isecured}/>
                        </div>
                        <div className="form-group">
                            <label> Password :</label>
                            <Field name="password" component={inputan} type="password" placeholder="Password Om" img={ilock}/>
                        </div> 
                        <div className="form-group">
                            <button className="btn btn-custom btn-block" type="submit"> REGISTER </button>
                        </div>   
                    </div>
                </div>
            </div>
        </form>
    )
  }
}

export default reduxForm({
    form: 'register',  // a unique identifier for this form
    validate,          // <--- validation function given to redux-form
})(RegisterForm)
