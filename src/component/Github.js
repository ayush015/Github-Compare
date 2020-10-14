import React,{useState,useEffect} from "react";
import ListCard from "./ListCard";
import { Form } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'
const Github = () =>{
   const [userInput,setUserInput] = useState("");  
   const [error,seterror] = useState(null);
   const [gitdata,setGit] = useState([]);
   useEffect(() => {
      fetch(`https://api.github.com/users/example`)
      .then(response => {
         return response.json();
      })
      .then(data => {
         setGit([data]);
         
})
      .catch(e => {
         console.log(e);
      })
   }, []);

   const handleSearch = (e) => {
      setUserInput(e.target.value)
   };

   const compare = (a,b) => {
      if ( a.followers < b.followers ){
         return -1;
      }
      else if ( a.followers > b.followers ){
         return 1;
      }
      return 0;
   }

   const handleSubmit = () => {
      fetch(`https://api.github.com/users/${userInput}`)
      .then(response => {
         return response.json();

      })
      .then(data => {
         if(data.message){
            seterror(data.message)
         }else{
            setGit([...gitdata,data].sort(compare));
          seterror(null);

         }

      })
      .catch(e => {
         console.log(e);
      })


   };
    return (
     <> 
    
     <div className="inputbox">
     <Form 
     onSubmit={handleSubmit} 
     style={{display:"flex"}}
     >
          <Form.Group>
            <Form.Input
              placeholder='Name'
              name='name'
              onChange={handleSearch}
            />
            <Form.Button content='Search' />
          </Form.Group>
        </Form>


     </div>
     <div className="listcard">
     {
      gitdata.map((gits)=>{

        return(

         error ? <h1 style={{textAlign:"center"}}>User {error}</h1> : (  <ListCard
       username = {gits.login}
       avatarUrl = {gits.avatar_url}
       name= {gits.name}
       followers = {gits.followers}
       following = {gits.following}
       repo={gits.public_repo}
       gists={gits.public_gists}
    />)
    )
   })
    }
    </div>
   
    </>
   );
}

export default Github ;