import React from 'react'

const BasicsCurriculumSection = ({ curriculum }) => {
  return (
    <div className='container basics-curriculum-container'>
        <div className='basics-curriculum-heading' id={curriculum.sidebarlabel.replace(/ /g, "-").toLowerCase()} >
            {curriculum.heading}
        </div>
        <div className='row basics-curriculum-row'>
                {curriculum.topics.map(topic => {
                    return (
                        <div className='basics-curriculum-topic'>
                            {topic.topic}
                        </div>
                    )
                })}
        </div>
    </div>

  )
}

export default BasicsCurriculumSection