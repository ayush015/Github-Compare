import React,{useState,useEffect} from "react";
import ListCard from "./ListCard";
import { Form } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css'
const Github = () =>{
   const [userInput,setUserInput] = useState("");  
   const [error,seterror] = useState(null);
    const [github, setGithub] = useState ({
      name : "",
      followers : "",
      following : "",
      username : "",
      publicRepo : "",
      publicGists:"",
      avatarUrl : ""
    });
    console.log(github)
   useEffect(() => {
      fetch(`https://api.github.com/users/example`)
      .then(response => {
         return response.json();
      })
      .then(data => {
         setData(data);
         
      })
      .catch(e => {
         console.log(e);
      })
   }, [])
    const setData = ({
       name,
       avatar_url,
       followers,
       following,
       public_repos,
       public_gists,
       login
      }) => { 
         setGithub({
         name : name,
         followers : followers,
         following : following,
         username : login,
         publicRepo :public_repos,
         publicGists:public_gists,
         avatarUrl : avatar_url

      })
   }
   const handleSearch = (e) => {
      setUserInput(e.target.value)
   };
   
   const handleSubmit = () => {
      fetch(`https://api.github.com/users/${userInput}`)
      .then(response => {
         return response.json();
         
      })
      .then(data => {
         if(data.message){
            seterror(data.message)
         }else{
            setData(data);
            seterror(null);

         }
         
      })
      .catch(e => {
         console.log(e);
      })


   };
   const submitContent = (e) => {


      // e.preventDefault();
   }

   const addGithubCard = (card) => {
      
   }

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
            <Form.Button onClick={submitContent} content='Search' />
          </Form.Group>
        </Form>

   
     </div>  
     {error ?<h1 style={{textAlign:"center"}}>User {error}</h1> : ( <ListCard 
       username = {github.username}
       avatarUrl = {github.avatarUrl}
       name= {github.name}
       followers = {github.followers}
       following = {github.following}
       repo={github.publicRepo}
       gists={github.publicgists}

    />)}
   
    </>
   );
}

export default Github ;