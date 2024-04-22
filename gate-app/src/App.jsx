import './App.css'

function App() {
  const handleClick = (value) => {
    var body = JSON.stringify({
      message: 'setState',
      value: value.toString(),
    });

    console.log(body);

    fetch('https://ek4xsyyywe.execute-api.eu-west-2.amazonaws.com/SetGateState', {
      method: 'POST',
      body: body, 
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick(1)}>
          Open
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick(0)}>
          Close
        </button>
      </div>
    </>
  )
}

export default App
