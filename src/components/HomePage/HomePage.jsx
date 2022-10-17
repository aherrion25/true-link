import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css'
import Icon from '@mui/material/Icon';
import Container  from '@mui/material/Container';




function HomePage() {





    return(
        <div className='familytree'>
            <Container fixed>
            ADD Family Member
            <br />
            <a href='#'><Icon>add_circle</Icon></a>
            <br />
            <ul>
                <li className='parent'>
                    <a href="#">Parent 1</a>
                    <a href="#">Parent 2</a>
                </li>
                <ul>
                    <li className='child'>
                        <a href='#'>Child 1</a>
                    </li>
                </ul>
            </ul>

            </Container>

        </div>
    )
}
export default HomePage;