
// import Chatbot from "./component/ChatBot";
import CBot from "./component/cBot";
const Home = ()=> {


    let imageStyle = {
        
        height: "100vh",
        width: "100%",
        backgroundImage:
        'url("./earth-img.jpg")',
        backgroundSize: "cover",
         backgroundRepeat: "no-repeat",
        color: "white", 
        
       
     };

    return(
        <>
          
                    {/* <img src="./earth-img.jpg" className="image" alt="earth" /> */}
                
            <div className="image" style={imageStyle}>
                 <div style={{
                    fontSize: '4rem',
                    fontWeight: '600',
                   
                  }}>
                    SciAstra
                 </div>
                <div style={ { 
                    fontSize: '2rem',
                    fontWeight: '600',}}>
                For the love of science

                </div>
                  
                

            </div>

            <CBot/>
              
        


        </>

    );

};



export default Home;