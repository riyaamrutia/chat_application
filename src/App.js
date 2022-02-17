import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from './components/LoginForm';
import "./App.css";


const App = () =>{

    if(!localStorage.getItem('username'))
    return <LoginForm />
    return(
        <ChatEngine 
            height="100vh"
            projectID="f0d56635-32b3-4fa7-b63f-dc3a71581317"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    );
}
export default App;

//we will form a login system
//the  main aim is to create login sys so that different ppl can
//communicate together
//main goal is to customize and improve on this chat.
//redesign chat engine