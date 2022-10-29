import {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css'
import Icon from '@mui/material/Icon';
import Container  from '@mui/material/Container';
import Button  from '@mui/material/Button';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';







function HomePage() {
const [familytree, setFamilyTree] = useState([])
const [allTree, setAllTree] = useState([])
const history = useHistory();

useEffect(() => {
    fetchTree(),
    fetchAllTree()
},[]);

 const fetchTree = () => {
    axios.get('/api/tree/').then((response) => {
        setFamilyTree((response.data))
    }). catch ((error) => {
        console.log('error in GET Family Tree', error);
        alert('something went wrong')
    })
 }

 const fetchAllTree = () => {
    axios.get('/api/all').then((response) =>{
        setAllTree((response.data))
    } ).catch ((error) => {
        console.log('error in GET all', error)
        alert('something went wrong')
    })
 }
 




    return(
        <div className='items'>
            <Container fixed>
            ADD Family Member
            <br />
            <Link className='addPersonLink' to={'/add-person'}><Icon>add_circle</Icon></Link>
            <br />
        
                    <div className='familytree'>
            <ul>
                <li className='parent'>
                {
                familytree.map(tree => (
                <Link className='detailsLink' to={`/details/${tree.id}`}>{tree.firstname}  {tree.lastname}</Link>
                

                ))
            }
            
                <ul>
                    
                    {
                familytree && familytree.length > 0 && familytree[0].children.map(tree => (
            <li className='child'>
                <Link className='detailsLink' to={`/details/${tree.id}`}>{tree.firstname}  {tree.lastname}</Link>
            </li>


                ))
            }
            
                    
                </ul>
                </li>
            </ul>
             

                    </div>
                    <div>
                        <TableContainer sx={{margin: '10px'}} component={Paper}>
                            <Table sx={{minWidth: 300}} size='small'>
                                <TableHead>
                                    <TableRow style={{background:'grey'}}>
                                        Name
                                    </TableRow>
                                </TableHead>
                                {
                                    allTree.map(all => (
                                        
                                            <TableBody>
                                                <TableCell align='center'>
                                                    <Link className='detailsLink' to={`/details/${all.id}`}>{all.firstname}  {all.lastname}</Link>
                                                </TableCell>
                                            </TableBody>
                                    ))
                                } 
                            </Table>
                        </TableContainer>
                    </div>
               
           
            

            </Container>

        </div>
    )
}
export default HomePage;