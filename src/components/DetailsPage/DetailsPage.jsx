import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'


function DetailsPage(){
    // const person = useSelector(store => store.selectPerson);
    const [personDetail, setPersonDetail ] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetchDetails()
    },[id]);
    
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
            <pre>{JSON.stringify({personDetail})}</pre>
            <h2>First Name :{personDetail.id}</h2>
        </div>
     )
}
export default DetailsPage;