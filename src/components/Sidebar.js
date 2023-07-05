import {AiTwotoneCloud} from 'react-icons/ai'
import {GrCube} from 'react-icons/gr'

const Sidebar = () => {
    
  const logos = [1,2,3,4,5].map(() => (
    <GrCube size={25} color="white" />
  ))
  return (
    <div className="sidebar" >
    <div className="logos" >
      <AiTwotoneCloud size={50} color="blue" />
      {
        logos
      }
    </div>
    <div className="name">DK</div>
  </div>
  )
}

export default Sidebar