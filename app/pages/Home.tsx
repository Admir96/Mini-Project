import '../globals.css'
import React from 'react';
import Login from '../components/Login';
import Register from '../components/Register';



const Home: React.FC = () =>{
    const [showLogin, setShowLogin] = React.useState(true);


return( 
  <>
 <div className="lg:w-1/2 xl:w-5/12 p-8 sm:p-12">
            {showLogin ? (<Login onToggle ={() => setShowLogin(false)}></Login>)
          :
                     (<Register onToggle ={() => setShowLogin(true)}></Register>)
          }
        </div> 
</>
)}

export default Home