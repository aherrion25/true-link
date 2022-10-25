import { useState } from "react";
import { useDispatch} from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

const AddPerson = () => {
    const dispatch = useDispatch();
    
    const [newPerson, setNewPerson] = useState({
        firstname: "",
        lastname: "",
        lastname_birth: "",
        gender: "",
        birth: "",
        death: "",
        birthpalce: ""
    });

    const handleChange = (event) => {
        setNewPerson({...newPerson, firstname: event.target.value,})
    }

    const addFamilyMember = event => {
        event.preventDefault()
        dispatch({ type:'ADD_MEMBER', payload: newPerson })
        setNewPerson({id:newPerson.id + 1, firstname: '', lastname: '', lastname_birth: '',
    gender: '', birth: '', death: '', birthpalce: ''});
    }
    return(
        <Box 
        component="form"
        sx={{
            width: '520px',
            height: '700px',
            border: '2px solid black',
            '& .MuiTextField-root': { m: 1, width: '25ch' },   
        }}>
            <h3>Add or Edit Family Member</h3>
            <form onSubmit={addFamilyMember}>
            <TextField required id={"firstname"} placeholder="first name" type='text' value={newPerson.firstname} onChange={handleChange}  />
            <br/>
            <TextField required id={"lastname"} placeholder="last name" type='text' value={newPerson.lastname} onChange={handleChange} />
            <br/>
            <TextField id={"lastname_birth"} placeholder="birth last name" type='text' value={newPerson.lastname_birth} onChange={handleChange} />
            <br/>
            <TextField id={"gender"} placeholder="gender" type='text' value={newPerson.gender} onChange={handleChange} />
            <br/>
            <TextField required id={"birth"} placeholder="Date of Birth" type='date' value={newPerson.birth} onChange={handleChange} />
            <br/>
            <TextField id={"death"} placeholder="Date of Death" type='date' value={newPerson.death} onChange={handleChange} />
            <br/>
            <TextField required id={"birthplace"} placeholder="Birthplace" type='text' value={newPerson.birthpalce} onChange={handleChange} />
            <br />
            <Box display="flex" justifyContent="flex-end" alignItems="flex-end" sx={{margin: '25px'}}>
                            <Button onclick={addFamilyMember} variant="contained">Submit</Button>
                        </Box>
            </form>
        </Box>
    )

}
export default AddPerson