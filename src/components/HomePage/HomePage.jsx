import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css'
import Icon from '@mui/material/Icon';
import Container  from '@mui/material/Container';
import Button  from '@mui/material/Button';
import axios from 'axios';





function HomePage() {
const [familytree, setFamilyTree] = useState([])

useEffect(() => {
    fetchTree()
},[]);

 const fetchTree = () => {
    axios.get('/api/tree').then((response) => {
        setFamilyTree((response.data))
    }). catch ((error) => {
        console.log('error in GET Family Tree', error);
        alert('something wen wrong')
    })
 }
 




    return(
        <div className='familytree'>
            <Container fixed>
            ADD Family Member
            <br />
            <a href='#'><Icon>add_circle</Icon></a>
            <br />
            <pre>{JSON.stringify(familytree)}</pre>
            
               
                    <div className='items'>
            <ul>
                <li className='parent'>
                {
                familytree.map(tree => (
                <Link treeId={tree.id} className='detailsLink' to="/details">{tree.firstname}  {tree.lastname} {tree.id}</Link>
                

                ))
            }
                   
                   
                
                <ul>
                    
                    {
                familytree && familytree.length > 0 && familytree[0].children.map(tree => (
            <li className='child'>
                <Link className='detailsLink' to="/details">{tree.firstname}  {tree.lastname}</Link>
            </li>


                ))
            }
                    
                </ul>
                </li>
            </ul>
                    </div>
               
           
            

            </Container>

        </div>
    )
}
export default HomePage;