import { useState, useEffect } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './listedLinks.css';
import axios from 'axios';

const ListedLinks = ({valueInput, toggle_linkBar}) => {
    console.log(valueInput)
    const [shortenLink, setShortenLink]= useState([]);
    console.log(shortenLink)
    const [copied, setCopied] = useState(false);
    console.log(toggle_linkBar);
    

    useEffect(()=>{
        const timer =setTimeout(()=>{
            setCopied(false);
        }, 2000);

        return ()=> clearTimeout(timer)
    }, [copied])
    const getShortenLinkData = async () =>{
        try{
            const response = await axios(`https://api.shrtco.de/v2/shorten?url=${valueInput}`);

            setShortenLink([response.data.result.full_short_link]);

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(valueInput.length){
            getShortenLinkData();
        }
    }, [])

  return (
    <div>
    <div className='listedLinks-container'>
        <div className={toggle_linkBar ? 'listedLink' : 'listedLinkDisappear'}>
            <p id='url-link'>{valueInput}</p>
                 <div className='right'>     
                    <p id='link'>{shortenLink}</p>
                     <CopyToClipboard text={shortenLink} onCopy={()=> setCopied(true)}>
                         <button id={copied ? 'copied' : 'copy'} >{copied ? 'Copied!' : 'Copy'}</button>     
                     </CopyToClipboard>                                    
                 </div>     
        </div>                              
    </div>           
    </div>
  )
}

export default ListedLinks;
