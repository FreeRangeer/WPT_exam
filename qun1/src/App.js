import { useState} from "react";

export default function App() {
	const [message,setmessage] = useState("");
  const [messageList,setmessageList] = useState([]);
  const processmessage = (e) => {
    setmessage(e.target.value);
  }

  const handlessend = () => {
    const newList = [...messageList,message];
    setmessageList(newList);
    setmessage("");
  }

  return <div>
    <header className="bg-dark text-light p-3"> 
        MyChatApp by Mayur Dalvi 039_JUHU
    </header>

    <div>
      <input 
      className="Form-control mt-2 w-75" 
      type="text" 
      value={message}placeholder="chat here..." 
      onChange = {processmessage}
      />
      <input 
      className="btn btn-primary w-25 mt-2"
      type="button"
      value="Send"
      onClick={handlessend} 
      />
    </div>

    {messageList.map((item, index) =>(
      <div className="bg-secondary bg-opacity-25 mt-1" key={index}>
            {item}
      </div>
    ))};

  </div>

}