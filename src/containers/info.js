import { useState, useEffect  } from 'react' 
import { withShortcut } from 'react-keybind'

const Info = (props) => {

  const [savedTimes, setSavedTimes] = useState(0)
  const [newTimes, setNewTimes] = useState(0)

  const save = e => {
    e.preventDefault()

    setSavedTimes(times => times +1)
  }
  
  const create = e => {
    e.preventDefault()

    setNewTimes(times => times +1)
  }
 useEffect(() => {
    const { shortcut } = props
 
    shortcut.registerShortcut(save, ['ctrl+s', 'cmd+s'], 'Save', 'Save a file')
    shortcut.registerShortcut(create, ['ctrl+n', 'cmd+n'], 'New', 'Create a new file')
    return () => {
      const { shortcut } = props
      shortcut.unregisterShortcut(['ctrl+n', 'cmd+n'])
      shortcut.unregisterShortcut(['ctrl+s', 'cmd+s'])
    }
  }, [props])


  return (
    <section>
      <h3>Saved {savedTimes} times.</h3>

      <h3>Created New {newTimes} times.</h3>
    </section>
  
  )
}


export default withShortcut(Info)
