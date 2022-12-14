import { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useParams,useHistory } from "react-router-dom";

const AddPerson = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // id is used for editing an existing person
    const {id} = useParams();

    useEffect(() => {
        if(id){
            axios.get(`/api/tree/${id}`).then(response => {
                const person = response.data;
                setNewPerson(person)
   
            }).catch((error) => {
                console.log(error);
                alert('Something went wrong')
            })
        } else {
            // Adding a new person, nothing to fetch
        }
    },[id])

    // Default properties for a new person
    const defaultPerson = {
        firstname: "",
        lastname: "",
        lastname_birth: "",
        gender: "",
        birth: "",
        death: "",
        birthplace: ""
    }
    
    const [newPerson, setNewPerson] = useState(defaultPerson);

    const handleChange = (key) => (event) => {
        setNewPerson({...newPerson, [key]: event.target.value,})
    }

    const addFamilyMember = (event) => {
        event.preventDefault()
        if(id){
            dispatch({type:'EDIT_PERSON', payload: newPerson, history, clearForm})
        } else {
            dispatch({ type: 'ADD_MEMBER', payload: newPerson, history, clearForm})
        }
    }

    const clearForm = () => {
        setNewPerson(defaultPerson);
    }

    return(
        <Box 
        component="form"
        display="flexbox"
        sx={{
            flexGrow: 1,
            width:'45%',
            border: '2px solid black',
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            background:'white', 
        }}>
            <h3>{id ? 'Edit Family Member' : 'Add Family Member'}</h3>
            <br />
            <form onSubmit={addFamilyMember}>
                <h4>First Name</h4>
                <TextField
                    required
                    id={"firstname"}
                    placeholder="first name"
                    type='text'
                    value={newPerson.firstname}
                    onChange={handleChange('firstname')}
                />
                <br/>
                <h4>Last Name</h4> <TextField required id={"lastname"} placeholder="last name" type='text' value={newPerson.lastname} onChange={handleChange('lastname')} />
                <br/>
                <h4>Birth Last Name</h4> <TextField id={"lastname_birth"} placeholder="birth last name" type='text' value={newPerson.lastname_birth} onChange={handleChange('lastname_birth')} />
                <br/>
                <h4>Gender</h4> <TextField id={"gender"} placeholder="gender" type='text' value={newPerson.gender} onChange={handleChange('gender')} />
                <br/>
                <h4>Date of Birth</h4> <TextField required id={"birth"} placeholder="Date of Birth" type='date' value={newPerson.birth} onChange={handleChange('birth')} />
                <br/>
                <h4>Date of Death</h4> <TextField id={"death"} placeholder="Date of Death"  type='date' value={newPerson.death} onChange={handleChange('death')} />
                <br/>
                <h4>Birthplace</h4> <TextField required id={"birthplace"} placeholder="Birthplace" type='text' value={newPerson.birthplace} onChange={handleChange('birthplace')} />
                <br />
                
                <Box display="flex" justifyContent="flex-end" alignItems="flex-end" sx={{margin: '15px'}}>
                    <Button type="submit" onClick={addFamilyMember} variant="contained">Submit</Button>
                </Box>
            </form>

        </Box>
    )

}
export default AddPerson