import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box';


function DetailsPage(){
    // const person = useSelector(store => store.selectPerson);
    const [personDetail, setPersonDetail ] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchDetails()
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
     

     return(
        <div>
           
            <Card sx={{minWidth: 300}}>
                <CardContent>
                    <Typography variant='h4'>
                        {personDetail.firstname} {personDetail.lastname}
                    </Typography>
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
                            personDetail.death && formatBirthdate(
                                (personDetail.death)
                            )
                        }
                        
                    </Typography>

                    <Typography>
                        Birth Place: {personDetail.birthplace}
                    </Typography>
                    <CardActions>
                        <Box display="flex" justifyContent="flex-end" alignItems="flex-end" >
                            <Button variant="contained">Edit</Button>
                        </Box>
                    </CardActions>
                </CardContent>
                
            </Card>


        </div>
     )
}
export default DetailsPage;