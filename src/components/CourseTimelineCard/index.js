// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseItem} = props
  const {courseTitle, description, duration, tagsList} = courseItem
  return (
    <div className="course-container">
      <div className="header">
        <h1>{courseTitle}</h1>
        <div className="duration">
          <AiFillClockCircle className="clock" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="taglist">
        {tagsList.map(each => (
          <li key={each.id} className="tagitem">
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
