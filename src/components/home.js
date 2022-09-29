import React, { useEffect }  from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom'
import './loading.css';


const Home= ()=> {
    // const navigate = useNavigate()
  
    // useEffect(() => {
    //   setTimeout(() => {
    //     navigate('www.clickup.com')
    //   }, 6000)
    // }, [])

// const Home = () => {

//     useEffect(()=>{

//         // chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//         //     let url = tabs[0].url;
//         // });

        
//         let searchParams = new URLSearchParams(window.location.search);
//         // alert(searchParams)
//         if(searchParams.has('code'))
//         {
//             let param = searchParams.get('code')
//             localStorage.setItem('code',JSON.stringify(param));

//             //extension local storage
//             // chrome.storage.local.set({ "chrome-code": JSON.stringify(param) }, function(){
//                 //  Data's been saved boys and girls, go on home
//             // });

//         }
//         else{
//             localStorage.setItem('code',JSON.stringify("param_not_set"));
//         }

  

//     },[])

    // var neturl = "https://app.clickup.com/api?client_id=KAEZK7PJ5BC3EW7TFY5XO8FD7MDYHV5F&redirect_uri=clickup-react-cli-working.netlify.app";
   
    class Header extends React.Component {
        render() {
          return (

            <html>
                <body id='bodys'>
                    <div class="lds-dual-ring"></div>
                    <script src="close.js"></script>
                </body>
                
            </html>
            
          );
        }
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<Header />);

      
    
    // return ( 
    //         <html>
    //             <head>
    //                 <style>
    //                     .loader{
                            
    //                     }
    //                 </style>
    //             </head>
    //             <div class="loader">
    //              Home
    //             </div>

    //         </html>
            
        
    //  );
}
 
export default Home;