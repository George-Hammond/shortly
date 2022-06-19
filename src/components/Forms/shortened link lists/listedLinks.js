import { useState, useEffect } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './listedLinks.css';
// , toggle_linkBar

const ListedLinks = ({value}) => {
    console.log(value)
    const [copied, setCopied] = useState(false);
    // console.log(toggle_linkBar);
    

    useEffect(()=>{
        const timer =setTimeout(()=>{
            setCopied(false);
        }, 2000);

        return ()=> clearTimeout(timer)
    }, [copied])
    

  return (
    <div>
    <div className='listedLinks-container'>
            <div className='listedLink'>
            <p id='url-link'>{value.value_input}</p>
                 <div className='right'>     
                    <p id='link'>{value.shorten_url}</p>
                     <CopyToClipboard text={value.shorten_url} onCopy={()=> setCopied(true)}>
                         <button id={copied ? 'copied' : 'copy'} >{copied ? 'Copied!' : 'Copy'}</button>     
                     </CopyToClipboard>                                    
                 </div>     
            </div>         
    </div>           
    </div>
  )
}

export default ListedLinks;
