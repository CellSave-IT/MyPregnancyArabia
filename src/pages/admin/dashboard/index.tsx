import { useEffect } from 'react'
import { Dashboard } from '../../../apis'
import { Column } from '../../../components'
import { StyleGrid, StyleGridItem, StyleGridItemWrapper } from './style'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'

const AdminDashboard = () => {
  const dashboard: any = useSelector(Select.dashboard)
  const fetchData = async () => {
    await Dashboard.get().catch()
  }
  useEffect(() => {
    if (!dashboard?.totalCommunities) {
      fetchData()
    }
  }, [])
  return (
    <Column>
      <Column styleColumn={`padding:20px`}>
        <StyleGrid>
          <StyleGridItem>
            <StyleGridItemWrapper>
              <Column
                styleColumn={`color:#3AB8B7;font-size:18px;font-weight:700`}
              >
                Total Communities
              </Column>
              <Column
                styleColumn={`color:#3AB8B7;font-size:24px;font-weight:700`}
              >
                {dashboard?.totalCommunities}
              </Column>
            </StyleGridItemWrapper>
          </StyleGridItem>
          <StyleGridItem>
            <StyleGridItemWrapper>
              <Column
                styleColumn={`color:#3AB8B7;font-size:18px;font-weight:700`}
              >
                Total Diaries
              </Column>
              <Column
                styleColumn={`color:#3AB8B7;font-size:24px;font-weight:700`}
              >
                {dashboard?.totalDiaries}
              </Column>
            </StyleGridItemWrapper>
          </StyleGridItem>
          <StyleGridItem>
            <StyleGridItemWrapper>
              <Column
                styleColumn={`color:#3AB8B7;font-size:18px;font-weight:700`}
              >
                Total Upcoming Events
              </Column>
              <Column
                styleColumn={`color:#3AB8B7;font-size:24px;font-weight:700`}
              >
                {dashboard?.totalUpcomingEvents}
              </Column>
            </StyleGridItemWrapper>
          </StyleGridItem>
          <StyleGridItem>
            <StyleGridItemWrapper>
              <Column
                styleColumn={`color:#3AB8B7;font-size:18px;font-weight:700`}
              >
                Total Past Events
              </Column>
              <Column
                styleColumn={`color:#3AB8B7;font-size:24px;font-weight:700`}
              >
                {dashboard?.totalPastEvents}
              </Column>
            </StyleGridItemWrapper>
          </StyleGridItem>
        </StyleGrid>
      </Column>
    </Column>
  )
}

export default AdminDashboard
