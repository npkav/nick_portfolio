const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-36 text-white">
      <motion className="div"></motion>
      <h1 className="text-4xl opacity-80">Send me an email!</h1>
      <form className="flex flex-col items-right justify-center gap-4 bg-transparent p-10 rounded-lg">
        <input type="text" placeholder="Name" className="bg-transparent border-2 border-white p-2 rounded-lg" />
        <input type="email" placeholder="Email" className="bg-transparent border-2 border-white p-2 rounded-lg" />
        <textarea placeholder="Message" className="bg-transparent border-2 border-white p-2 rounded-lg" />
        <button type="submit" className="bg-transparent border-2 border-white p-2 rounded-lg">Send</button> 
    </form>
    </div>
  )
}

export default Contact