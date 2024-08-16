import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const onViaCallSubmit = () => {
    console.log("via call");
  }
  const [name,setName] =useState("name")
  const [email,setEmail] = useState("@gmail.com")
  const [text,setText]=useState("text")
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)

  }


  return (

    <div className="w-3/4 m-auto my-20">
      <h1 className="font-bold text-3xl my-4 mx-[6vw] m-auto">CONTACT US</h1>
      <p className="text-sm w-5/6 m-auto">LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
      <div className="container flex items-center justify-evenly">
        <div className="filling">
          <div className=" buttons gap-5">
            <div className="contact flex gap-4 my-5">
              <button className="bg-black text-white p-2 rounded-md">
                VIA SUPPORT CHAT
              </button>
              <button onClick={onViaCallSubmit} className="bg-black text-white p-2 rounded-md">VIA CALL</button>
            </div>
            <div><button className=" border-zinc-800 border-[1px] w-full">VIA EMAIL FORM</button></div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="inputs my-4 w-full">
              <div className="my-4 w-full">
                Name:<input className="border-[1px] rounded-sm border-black px-5" type="text" name="name" placeholder="Enter your name" />
              </div>
              <div className="my-4">
                Email: <input className="border-[1px] rounded-sm border-black px-5" type="text" name="name" placeholder="Enter your email" />
              </div>
              <div className="my-4 flex items-center">
                <label className="mr-4" htmlFor="text">Text:</label>
                <textarea id="text" className="border-[1px] rounded-sm border-black px-7 " type="text" name="name" placeholder="Enter text" />
              </div>
            </div>
            <div onSubmit={onSubmit} className="submit flex justify-end my-10 ">
              <button className=" bg-black text-white p-2 rounded-md ">Submit</button>
            </div>
            <div>{name + "" + email + "" + text}</div>
          </form>

        </div>
        <div className="image">
          <img className="h-96" src="images\Service 24_7-pana 1.svg" alt="" />
        </div>
      </div>
    </div>

  )
}

export default App
