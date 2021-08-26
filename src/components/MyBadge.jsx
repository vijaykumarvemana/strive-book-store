import {Badge} from 'react-bootstrap'

const MyBadge=(props)=>{
    return(
<div>
  <h1>
    Books&Books <Badge variant={props.color}>{props.title}</Badge>
  </h1>
</div>
)}

export default MyBadge