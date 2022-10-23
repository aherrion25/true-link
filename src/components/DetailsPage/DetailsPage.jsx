import { useState, useEffect } from 'react';
import axios from 'axios';


function DetailsPage(){
    // const person = useSelector(store => store.selectPerson);
    const [personDetail, setPersonDetail ] = useState([]);

    useEffect(() => {
        fetchDetails()
    },[]);
    
     const fetchDetails = () => {
        axios.get(`/api/tree/${personDetail}`).then((response) => {
           setPersonDetail((response.data))
        }). catch ((error) => {
            console.log('error in GET Family Tree details', error);
            alert('something went wrong')
        })
     }
     

     return(
        <div>
            <pre>{JSON.stringify(personDetail)}</pre>
            <h2>First Name :{personDetail.firstname}</h2>
        </div>
     )
}
export default DetailsPage;