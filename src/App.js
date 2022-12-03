import { useState } from 'react';
import { CreateNote, NavBar, NoteUICollection, UpdateNote } from './ui-components'

import { withAuthenticator } from '@aws-amplify/ui-react'
import { DataStore } from 'aws-amplify'

function App({ signOut }) {
  const [showCreateModal, setshowCreateModal] = useState(false)
  const [showUpdateModal, setshowUpdateModal] = useState(false)
  const [updateNote, setupdateNote] = useState()
  return (
    <>
      <NavBar width='100%' marginBottom='20px' overrides={{
          Button31632483: { onClick: () => setshowCreateModal(true)},
          Button31632487: { onClick: async () => {
              await DataStore.clear()
              signOut()
            }
          }
        }}
      />
      <div className='container'>
      <NoteUICollection overrideItems={({item, idx}) => {
        return {
          overrides: {
            Vector31472745: {
              onClick: () => {
                setshowUpdateModal(true)
                setupdateNote(item)
              }
            }
          }
        }
      }}/>
      </div>
      <div className='modal' style={{display: showCreateModal === false && 'none'}}>
        <CreateNote overrides={{
          MyIcon: {as: 'button', onClick: () => setshowCreateModal(false)}
        }}/>
      </div>
      <div className='modal' style={{display: showUpdateModal === false && 'none'}}>
        <UpdateNote 
          note={updateNote} overrides={{
            MyIcon: {
              as: 'button',
              onClick: () => setshowUpdateModal(false)
            }
        }}/>
      </div>
    </>
  );
}

export default withAuthenticator(App);
