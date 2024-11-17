// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectItem} = props
  const {
    id,
    categoryId,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectItem
  return (
    <div>
      <img src={imageUrl} alt="project" className="projectimage" />
      <div className="header">
        <h1>{projectTitle}</h1>
        <div className="duration">
          <AiFillCalendar className="calendar" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
