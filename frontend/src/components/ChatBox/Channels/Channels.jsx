import { useState } from 'react'
import { Nav } from 'react-bootstrap'
import Channel from './Channel'

const Channels = ({
  activeChannel,
  channels,
  onChannelChange,
  onChannelDelete,
  onChannelRename,
}) => {
  const [currentChannel, setCurrentChannel] = useState(activeChannel)
  if (channels.length === 0) return 'No channels'
  const handleChannelChange = (e) => {
    const id = Number(e.target.dataset.id)
    if (!id) return
    setCurrentChannel(id)
    onChannelChange(id)
  }
  const handleDeleteChannel = (id) => () => {
    console.log('delete', id)
    onChannelDelete(id)
  }
  const handleRenameChannel = (id) => () => {
    console.log('rename', id)
    onChannelRename(id)
  }
  return (
    <Nav
      onClick={handleChannelChange}
      as="ul"
      variant="pills"
      className="nav-fill px-1 pb-2 h-100 d-block overflow-auto"
    >
      {channels.concat({ id: 3, name: 'custom_channel', removable: true }).map((channel) => (
        <Channel
          key={channel.id}
          id={channel.id}
          active={currentChannel === channel.id}
          name={channel.name}
          removable={channel.removable}
          onDelete={handleDeleteChannel(channel.id)}
          onRename={handleRenameChannel(channel.id)}
        />
      ))}
    </Nav>
  )
}
Channels.defaultProps = {
  activeChannel: 1,
  channels: [],
  onChannelChange: () => {},
  onChannelDelete: () => {},
  onChannelRename: () => {},
}

export default Channels
