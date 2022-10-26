import { useState } from "react";
import { useDispatch} from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import axios from "axios";


const AddPerson = () => {
    const dispatch = useDispatch();
    
    const [newPerson, setNewPerson] = useState({
        firstname: "",
        lastname: "",
        lastname_birth: "",
        gender: "",
        birth: "",
        death: "",
        birthplace: ""
    });

    const handleChange = (key) => (event) => {
        setNewPerson({...newPerson, [key]: event.target.value,})
    }

    const addFamilyMember = (event) => {
        event.preventDefault()
        dispatch({ type:'ADD_MEMBER', payload: newPerson})
        setNewPerson({id:newPerson.id + 1, firstname: '', lastname: '', lastname_birth: '',
    gender: '', birth: '', death: '', birthplace: ''});
    }
    return(
        <Box 
        component="form"
        sx={{
            width: '520px',
            height: '750px',
            border: '2px solid black',
            '& .MuiTextField-root': { m: 1, width: '25ch' },   
        }}>
            <h3>Add or Edit Family Member</h3>
            <br />
            <form onSubmit={addFamilyMember}>
            <h4>First Name</h4><TextField required id={"firstname"} placeholder="first name" type='text' value={newPerson.firstname} onChange={handleChange('firstname')}  />
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