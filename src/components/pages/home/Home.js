import { useEffect, useState } from 'react';
import SideMenu from '../../sideMenu/SideMenu';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [advice, setAdvice] = useState('');

    // Aducere date API
    async function getAdvice(){
        // fetch data
        const res = await fetch("	https://api.adviceslip.com/advice");
        // convertire json pentru a fi citibile
        const data = await res.json();
        // adaugare in variabila pentru a fi folosite
        setAdvice(data.slip.advice);
    }

    // pentru a afisa un sfat la fiecare accesare a paginii
    useEffect(function(){
        getAdvice();
    },[])
    return (  
        <div className="App1">
         <SideMenu color={'menuHome'} buttonColorOpen={'menuHomeOpen'}/>
            <h1>Homee</h1>
            <div className="advice">{advice}</div>
            <h2>Invata despre: </h2>
            
            <div className="learn">
             
                <Link to="/jobs" className='txt'>
                    <img src={require('../../../assets/img/jobss.jpg')} alt="net" className="jobUp" />
                    <div className="jobText">Jobs</div>
                </Link> 
                
                <Link to="/animals" className='txt' >
                    <img src={require('../../../assets/img/animals.jpg')} alt="net" className="jobUp" />
                    <div className="jobText">Animals</div>
                </Link>

                <Link to="/words" className='txt' >
                    <img src={require('../../../assets/img/word.jpg')} alt="net" className="jobUp" />
                    <div className="wordText">Words</div>
                </Link> 

                <Link to="/list" className='txt'>
                <img src={require('../../../assets/img/shoppingList.jpg')} alt="net" className="jobUp" />
                    <div className="jobText">Lista</div>
                </Link> 
        
            </div>

        </div>
    );
}
 
export default Home;