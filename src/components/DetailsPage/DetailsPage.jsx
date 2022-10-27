import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function DetailsPage(){
    // const person = useSelector(store => store.selectPerson);
    const [personDetail, setPersonDetail ] = useState({});
    const [connection, setConnection] = useState([]);
    const [connectionType, setConnectionType] = useState(1);
    const [connectionId, setConnectionId ] = useState(4);
    const { id } = useParams();

    useEffect(() => {
        fetchDetails()
        fetchConnection()
    },[id]);
    // formats birthdate
    const formatBirthdate = (birth) => {
        const date = new Date(birth);
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
      }

      // formats date of death
      const formatDeathdate = (death) => {
        const date = new Date(death);
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
      }
    
     const fetchDetails = () => {
        axios.get(`/api/tree/${id}`).then((response) => {
           setPersonDetail((response.data))
        }). catch ((error) => {
            console.log('error in GET Family Tree details', error);
            alert('something went wrong')
        })
     }

     const fetchConnection = () => {
        axios.get(`api/tree/connection/${id}`).then((response) =>{
            setConnection((response.data))
        }).catch((error) => {
            console.log('error in GET connection',error);
            alert('something went wrong')
        })
     }

     const addConnection = (e) => {
        e.preventDefault()
        axios.post('/api/tree/connection',{person_id:connectionId, connection_id:id, connection_type_id: connectionType}).then((response) => {
            fetchConnection()
        }).catch(e => {
            console.log('error in POST connection', e);
            alert('something went wrong')
        })
     }
     

     return(
        <div>
           
            <Card sx={{minWidth: 300}}>
                <CardContent>
                    <Typography variant='h4'>
                        {personDetail.firstname} {personDetail.lastname}
                    </Typography>
                    <CardActions>
                        <Box display="flex" justifyContent="flex-end" alignItems="flex-end" >
                            <Button variant="contained"><Link to={`/edit/${personDetail.id}`}>Edit</Link></Button>
                        </Box>
                    </CardActions>
                    <Typography>
                        First Name: {personDetail.firstname}
                    </Typography>
                    <Typography>
                        Last Name: {personDetail.lastname}
                    </Typography>
                    <Typography>
                        Birth Last Name: {personDetail.lastname_birth}
                    </Typography>
                    <Typography>
                        Gender: {personDetail.gender}
                    </Typography>
                    <Typography>
                        Date of Birth: {formatBirthdate(personDetail.birth)}
                    </Typography>
                    <Typography>
                    Date of Death: {
                            personDetail.death && formatDeathdate(
                                (personDetail.death)
                            )
                        }
                        
                    </Typography>
                        
                    <Typography>
                        Birth Place: {personDetail.birthplace}
                    </Typography>
                    <Typography>
                        Connections: {
                            connection.map(connections =>(
                                <p>{connections.firstname} is the  {connections.type} of {personDetail.firstname}</p>
                            ))
                        }
                    </Typography>
                    <form onSubmit={addConnection}>
                    <FormControl >
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={connectionType}
                        label="Connection Type"
                        onChange={e => setConnectionType(e.target.value)}
                        >
                        <MenuItem value={1}>Father</MenuItem>
                        <MenuItem value={2}>Mother</MenuItem>
                        <MenuItem value={3}>Child</MenuItem>
                        <MenuItem value={4}>Spouse</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl >
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={connectionId}
                        label="Person"
                        onChange={e => setConnectionId(e.target.value)}
                        >
                        <MenuItem value={4}>Aubree</MenuItem>
                        <MenuItem value={5}>Melissa</MenuItem>
                        <MenuItem value={6}>Knox</MenuItem> 
                        </Select>
                    </FormControl>
                    <Button onClick={addConnection} variant='contained' color='success' sx={{padding:'15px', margin:'2px'}}>Save</Button>
                    <Button type='button' variant='contained' color='error' sx={{padding:'15px', margin:'2px'}}>Remove</Button>
                    </form>
                    
                </CardContent>
                
            </Card>


        </div>
     )
}
export default DetailsPage;