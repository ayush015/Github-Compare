import React from "react";
import { Card } from 'antd';
import 'antd/dist/antd.css';
import "./styles.css";
function ListCard(props){
 return (
     <>
 
 <div className="listcard">

<Card
 className="mt-3"
 hoverable
 style={{ width:240,padding: "8px 10px"}}
 cover={<img alt={props.username} src={props.avatarUrl}/>}

> 
  <h4>{props.name}</h4>
 <p>Followers:{props.followers}</p>
 <p>Following:{props.following}</p>
 <p>Public Repo:{props.repo}</p>
 <p>Public Gists:{props.gists}</p>
</Card>
 </div>
 
</>
);
}
export default ListCard;