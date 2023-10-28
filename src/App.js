import './App.css';

function App() {

  return (
    <>
    <div id='body'style={{width:'100%',height:'100vh'}} className='flex justify-center items-center'>
     
       <div className='flex flex-col justify-center w-4/5 h-1/2 border-double border-4 border-indigo-600  items-center static'>
          <h1 className='text-4xl bg-slate-200 m-6 w-96 h-14 text-center font-bold rounded-3xl text-rose-700 tracking-normal'>TODO LIST</h1>
          <input className='w-1/2 h-14 rounded-full' type="text"  /><i className="fa-solid fa-plus absolute top-96 mt-5 bg-white rounded-full w-9 h-9 text-center font-bold text-xl font-bold bg-red-500 text-gray-50 right-1/3 ml-9  "></i>
       
       </div>
      
    </div>
    </>
  );
}

export default App;
