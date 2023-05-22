import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [index, setIndex] = useState(0)

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setJobs(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  })

  if (isLoading) {
    return <h2>Loading ...</h2>
  }

  const { title, company, dates, duties } = jobs[index]

  return (
    <section className='container'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='tabs'>
        <aside className='container-btns'>
          {jobs.map((item, jobIndex) => {
            const { id, company } = item
            return (
              <button
                key={id}
                className={jobIndex === index ? 'btn active' : 'btn'}
                onClick={() => setIndex(jobIndex)}
              >
                {company}
              </button>
            )
          })}
        </aside>
        <div className='job-info'>
          <h2 className='job-title'>{title}</h2>
          <h4 className='job-company'>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((item, dutiesIndex) => {
            return (
              <div key={dutiesIndex} className='job-desc'>
                <span className='desc-icon'>
                  <FaAngleDoubleRight />
                </span>
                <p>{item}</p>
              </div>
            )
          })}
        </div>
      </div>
      <button className='info-btn'>More Info</button>
    </section>
  )
}

export default App
