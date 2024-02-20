type GreetProps={
    name:string,
    messageCount:number ,
    isloggedIn:boolean
}

export const Greet = (props:GreetProps)=>{
    return(
        <div>
        <h2>  {props.isloggedIn?`Welcome to ${props.name}. You have ${props.messageCount} messages`
        :'Welcome Guest'
        }

      </h2> 
        </div>
    )
}