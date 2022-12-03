import { CreateNote, NavBar, NoteUICollection, UpdateNote } from './ui-components'

function App() {
  return (
    <>
      <NavBar width='100%' marginBottom='20px'/>
      <div className='container'>
        <NoteUICollection />
      </div>
      <div className='modal' style={{display: 'none'}}>
        <CreateNote />
      </div>
      <div className='modal' style={{display: 'none'}}>
        <UpdateNote />
      </div>
    </>
  );
}

export default App;
