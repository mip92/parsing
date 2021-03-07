import {Field, reducer as formReducer, reduxForm} from "redux-form";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {asdasdasd, sendLinkThunk} from "../../redux/actions/resucerAC";
import Reducer from "../../redux/reducers/Reducer";

const sendForm=({handleSubmit})=>{
    return(
        <form onSubmit={handleSubmit}>
            <Field name='URL'component="input" type="text"/>
            <button>Submit</button>
        </form>
    )
}
const SendReduxForm = reduxForm({
    form: "send"
})(sendForm)

const Send=(props)=>{
    const {link,h1,h2,h3,h4}=useSelector(state=>state.Reducer)
    const dispatch =useDispatch();
    const onSubmit = (formData) => {
        dispatch(sendLinkThunk(formData.URL))
        dispatch(asdasdasd("sd"))
    }
    return(
        <div>
            <h1>Вставте ссылку</h1>
            <SendReduxForm onSubmit={onSubmit}/>
            <h1>{link}</h1>
            <h3>H1 всего {h1.length}</h3>
            <h4>{h1.map((h,index)=>{return <div>{`${index+1} ${h}`}</div>})}</h4>
            <h3>H2 всего {h2.length}</h3>
            <h4>{h2.map((h,index)=>{return <div>{`${index+1} ${h}`}</div>})}</h4>
            <h3>H3 всего {h3.length}</h3>
            <h4>{h3.map((h,index)=>{return <div>{`${index+1} ${h}`}</div>})}</h4>
            <h3>H4 всего {h4.length}</h3>
            <h4>{h4.map((h,index)=>{return <div>{`${index+1} ${h}`}</div>})}</h4>
        </div>
    )
}
export default Send