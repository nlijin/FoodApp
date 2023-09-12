const Contact = () => {
  return (
    <div className="">
      <h1 className="text-center font-bold text-2xl">This is contact page</h1>
      <input
        placeholder="name"
        className="border-blue-400 border-2 m-4 p-4 rounded-lg"
      />
      <input
        placeholder="country"
        className="border-blue-400 border-2 m-4 p-4 rounded-lg"
      />
      <input
        placeholder="email"
        className="border-blue-400 border-2 m-4 p-4 rounded-lg"
      />
      <button className="bg-blue-400 m-4 p-4 rounded-md w-64">Submit</button>
    </div>
  );
};

export default Contact;
