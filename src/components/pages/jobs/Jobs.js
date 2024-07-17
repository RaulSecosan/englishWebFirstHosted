import './jobs.css';

import { useState } from 'react';
import useFirestore from '../display/Display';
import { handleNew } from '../../util';
import SearchBar from '../../SearchBar'
import SideMenu from '../../sideMenu/SideMenu';


const Jobs = () => {

    const [input, setInput] = useState('');
    const [displayValueId, setDisplayValueId] = useState(null);

    const jobs = useFirestore('jobs')

    const handleInputChange = (value) => {
        setInput(value);
    };

    const toggleDisplayValue = (id) => {
        if (displayValueId === id) {
            setDisplayValueId(null);
        } else {
            setDisplayValueId(id);
        }
    };

    const filteredJobs = jobs.filter(job => job.name.toLowerCase().includes(input.toLowerCase()));

    return (
        
        <div className='App'>
         <SideMenu color={'menu-button'}/>
         
            <h1>Jobs</h1>
            <SearchBar input={input} onInputChange={handleInputChange} placeholder={'Caută job-uri...'} className={'input'} />
            
            <div className="jobs-container"> 
                {filteredJobs.map((job) => (
                    <div className="display" key={job.id} onClick={() => toggleDisplayValue(job.id)}>
                        <div className="displayDown">
                            {job.name}
                            {displayValueId === job.id && <div className='displayDownValue'>{job.value}</div>}
                        </div>
                        <img  src={job.img} alt="" className="displayUp" />                    

                    </div>
                ))}
            </div>

            <button className="button" onClick={() => handleNew('jobs')}>Add</button>
        </div>
    
    );
}

export default Jobs;
