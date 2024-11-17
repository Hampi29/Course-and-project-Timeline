// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimerLineCard = (item) => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectItem={item} />
    }
    return <CourseTimelineCard key={item.id} courseItem={item} />
  }
  return (
    <div className="timeline-container">
      <div className="responsive">
        <div className="header">
          <h1>
            MY JOURNEY OF <br /> CCBP 4.0
          </h1>
        </div>
        <Chrono theme={{
          secondary:'white',
        }}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(each=> renderTimerLineCard(each))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
