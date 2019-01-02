import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import isecured from '../../assets/icons-secured.png';
import ilock from '../../assets/icons-lock.png';
import validate from './loginValidation/validate';
 

const inputan = ({img, input, type, placeholder, label, meta: { touched, error } }) => (
    
    <div className="form-group">
        <label className="form-control-label"> {label} : </label>
        <div className="input-group">
            <div className="input-group-addon">
                <img src={img} />
            </div>
            <input className={(touched && error) ? "form-control is-invalid" : "form-control"}
                {...input}
                type={type} 
                placeholder={placeholder}
                required
            />
            
        </div>
        {touched  && (error && <div className="form-control-feedback text-danger"> {error}</div>)}
    </div>
    
)

const LoginForm = props => {
    const { handleSubmit, pristine, reset, submitting, invalid } = props
    //console.log(props)
    return (
        
        <form onSubmit={handleSubmit}>
        
            <div className="">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <Field name="email" component={inputan} type="email" placeholder="Email Bos" label="Email" img={isecured}/>
                        <Field name="password" component={inputan} type="password" placeholder="Password Om" label="Password" img={ilock}/>
                        <div className="form-group">
                            <button className="btn btn-custom btn-block" type="submit" disabled={pristine || invalid}> LOGIN </button>
                        </div>   
                    </div>
                </div>
            </div>
        </form>
    )
}


export default reduxForm({
    form: 'login',  // a unique identifier for this form
    validate,          // <--- validation function given to redux-form
})(LoginForm)