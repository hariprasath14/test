import react from "react"
import { Field, reduxForm} from "redux-form"

const Myform =({ handleSubmit, pristine, reset, submitting })=>{
    const submit =(values)=>{
        console.log(values);
    }

return(
    <div> 
    <div>
    <label>First Name</label>
    <div>
      <Field
        name="firstName"
        component="input"
        type="text"
        placeholder="First Name"
      />
    </div>
  </div>
  <div>
    <label>Last Name</label>
    <div>
      <Field
        name="lastName"
        component={CustomInput}
        type="text"
        placeholder="Last Name"
      />
    </div>
  </div>
  <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{' '}
            Female
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="other" />{' '}
            Other
          </label>
        </div>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit(submit)} disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </div>
    )
}
const CustomInput = ({input})=>{
    return(
        <>
        <h1>form</h1>
        <input onChange={input.onChange} type="text" value={input.value}/>
        </>
    )
}
export default reduxForm({
    form: 'simple' // a unique identifier for this form
  })(Myform)
  