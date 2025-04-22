import { useEffect, useState } from 'react'

import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { Button, Column, Row } from '../../../components'
import { Event, GeneralSetting } from '../../../apis'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import DataTable from '../../../components/DataTable'
import Actions from '../../../components/Actions'
import { useNavigate } from 'react-router-dom'
import { FaImage, FaUser } from 'react-icons/fa'
import { StyleActiveCard, StyleMakeActiveButton } from './style'

const AdminEvents = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { data, pagination }: any = useSelector(Select.events)
  const [activeEvent, setActiveEvent] = useState<any>({})
  const [params, setParams] = useState({
    pageSize: 10,
    page: !!pagination?.currentPage ? parseInt(pagination?.currentPage) : 1,
    type: 'All',
  })
  const navigate = useNavigate()
  const fetchData = async (params: any) => {
    setLoading(true)
    await Event.get(params).catch(() => {})
    setLoading(false)
  }
  const deleteData = async (id: string) => {
    await Event.delete(id).catch(() => {})
  }
  const getActiveEvent = async () => {
    await GeneralSetting.getByKey('activeEvent')
      .then((res: any) => {
        if (!!res?.data?.key) {
          setActiveEvent(res.data)
        }
      })
      .catch(() => {})
  }
  const storeActiveEvent = async (id) => {
    await GeneralSetting.store({
      key: 'activeEvent',
      value: id,
    })
      .then(() => {
        setActiveEvent({
          key: 'activeEvent',
          value: id,
        })
      })
      .catch(() => {})
  }
  useEffect(() => {
    if (!data.length) {
      fetchData(params)
    }
    getActiveEvent()
  }, [])
  const filterItems = [
    {
      title: 'All',
    },
    {
      title: 'Upcoming',
    },
    {
      title: 'Past',
    },
  ]
  const columns: any[] = [
    {
      title: 'S.No',
      key: 'sno',
      render: (item: any, index: number) => {
        return index + (pagination.currentPage - 1) * params.pageSize
      },
    },
    {
      title: 'Title',
      key: 'title',
      render: (item) => {
        return (
          <Column
            styleColumn={`
          width:150px;
          white-space:break-spaces;
          `}
          >
            {item?.title}
            {item?._id === activeEvent.value ? (
              <StyleActiveCard>Active</StyleActiveCard>
            ) : (
              <>
                {new Date(item?.date) > new Date() && (
                  <Row>
                    <StyleMakeActiveButton
                      onClick={() => {
                        storeActiveEvent(item?._id)
                      }}
                    >
                      Make Active
                    </StyleMakeActiveButton>
                  </Row>
                )}
              </>
            )}
          </Column>
        )
      },
    },
    {
      title: 'Location',
      key: 'location',
      render: (item: any) => {
        return (
          <Column
            styleColumn={`
        width:150px;
        white-space:break-spaces;
        `}
          >
            {item?.location}
          </Column>
        )
      },
    },
    {
      title: 'Type',
      key: 'type',
    },
    {
      title: 'Date',
      key: 'date',
      render: (item: any) => {
        return (
          <>
            {new Date(item.date).toDateString()} <br />
            {item?.startTime} - {item?.endTime}
          </>
        )
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (item: any) => {
        return (
          <Row styleRow={`column-gap:10px`}>
            {new Date(item.date) < new Date() ? (
              <Button
                onClick={() => {
                  navigate(`/admin/events/gallery/${item._id}`, {
                    state: item,
                  })
                }}
                background={'secondary'}
                height={30}
                width={40}
              >
                <FaImage color="white" size={14} />
              </Button>
            ) : (
              <Button
                onClick={() => {
                  navigate(`/admin/events/registrations/${item._id}`, {
                    state: item,
                  })
                }}
                background={'secondary'}
                height={30}
                width={40}
              >
                <FaUser color="white" size={14} />
              </Button>
            )}
            <Actions
              onClickDelete={() => {
                deleteData(item._id)
              }}
              onClickEdit={() => {
                navigate(`/admin/events/edit/${item._id}`, {
                  state: item,
                })
              }}
            />
          </Row>
        )
      },
    },
  ]
  return (
    <Column>
      <AdminInnerPageHeader
        title="Events"
        buttonLink="/admin/events/create"
        buttonTitle="Create"
      />
      <Column
        styleColumn={{
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Row
          styleRow={{
            columnGap: 10,
            justifyContent: 'flex-end',
            marginBottom: 20,
          }}
        >
          {filterItems?.map((item) => {
            return (
              <Button
                key={item.title}
                outline={params.type === item.title ? false : true}
                titleColor={params.type === item.title ? 'white' : 'primary'}
                borderColor={'primary'}
                buttonStyle="min-width:80px;padding:0px 10px;"
                onClick={() => {
                  fetchData({
                    ...params,
                    page: 1,
                    type: item.title,
                  })
                  setParams((prev) => {
                    return {
                      ...prev,
                      page: 1,
                      type: item.title,
                    }
                  })
                }}
              >
                {item.title}
              </Button>
            )
          })}
        </Row>
        <DataTable
          columns={columns}
          data={data}
          paginationProps={{
            totalPages: pagination.totalPages,
            perPage: params.pageSize,
            activePage: params.page,
            handleOnClick: (pageNumber: number) => {
              const updateParams = { ...params, page: pageNumber }
              setParams(updateParams)
              fetchData(updateParams)
            },
          }}
        />
      </Column>
    </Column>
  )
}

export default AdminEvents
