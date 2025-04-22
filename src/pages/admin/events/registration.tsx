import { useEffect, useState } from 'react'

import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { Column, Row } from '../../../components'
import { Event } from '../../../apis'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import DataTable from '../../../components/DataTable'
import Excel from 'exceljs'
import { saveAs } from 'file-saver'
import moment from 'moment'
import { useParams } from 'react-router-dom'
import Button from '../../../components/Button'
const AdminEventRegistration = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState<boolean>(false)
  const { data, pagination }: any = useSelector(Select.registrations)
  const event: any = useSelector(Select.event)
  const [params, setParams] = useState({
    pageSize: 10,
    page: !!pagination?.currentPage ? parseInt(pagination?.currentPage) : 1,
    event: id,
  })
  const fetchData = async (params: any) => {
    await Event.getRegistered(params).catch(() => {})
  }

  const getEvent = async () => {
    await Event.find(id).then(() => {
      fetchData({
        ...params,
        event: id,
      })
    })
  }

  const handleDownload = async () => {
    setLoading(true)
    await Event.getAllRegistered({
      ...params,
      pageSize: parseInt(pagination?.totalPages) * 10,
    })
      .then(async (resp) => {
        const excelBook = new Excel.Workbook()
        const workSheetName = `Registration for ${event.title.replace(/[*?:\\/[\]]/g, '')}`
        const worksheet = excelBook.addWorksheet(workSheetName)
        const columns = [
          { header: 'S.no', key: 'sno' },
          { header: 'First Name', key: 'fName' },
          { header: 'Last Name', key: 'lName' },
          { header: 'Email', key: 'email' },
          { header: 'Phone No', key: 'phoneNo' },
          { header: 'Nationality', key: 'nationality' },
          { header: 'Is Pregnant', key: 'isPregnant' },
          { header: 'Is Previous Attend', key: 'previousAttend' },
          { header: 'Delivery Hospital', key: 'deliveryHospital' },
          { header: 'Doctor Name', key: 'doctorName' },
          { header: 'Due Date', key: 'dueDate' },
          { header: 'Entry Type', key: 'entryType' },
          { header: 'How did you hear about us?', key: 'description' },
        ]
        worksheet.columns = columns
        worksheet.columns.forEach((column: any, index: number) => {
          column.width = column.header.length + 10
          column.alignment = {
            horizontal: 'left',
            wrapText: true,
            vertical: 'middle',
          }
          worksheet.getRow(1).font = { bold: true }
        })

        resp?.data?.items.forEach((singleData: any, index: number) => {
          worksheet.addRow({ ...singleData, sno: index + 1 })
        })
        const buf = await excelBook.xlsx.writeBuffer()
        saveAs(new Blob([buf]), `${event.title}-registration.xlsx`)
      })
      .catch((err) => {
        console.log(err)
      })

    setLoading(false)
  }

  useEffect(() => {
    getEvent()
  }, [])
  const columns: any[] = [
    {
      title: 'S.No',
      key: 'sno',
      render: (item: any, index: number) => {
        return index + (pagination.currentPage - 1) * params.pageSize
      },
    },
    {
      title: 'Info',
      key: 'fName',
      render: (item) => {
        return (
          <>
            {item.fName} {item?.lName} <br></br>
            <span>Is Pregant : {!!item?.isPregnant ? 'Yes' : 'No'}</span> &nbsp;
            <span>
              Attend Previous : {!!item?.previousAttend ? 'Yes' : 'No'}
            </span>
            <br></br>
            <span>Delivery Hospital : {item?.deliveryHospital}</span>
            <br></br>
            <span>Doctor Name : {item?.doctorName}</span>
          </>
        )
      },
    },

    {
      title: 'Due Date',
      key: 'dueDate',
      render: (item: any) => {
        return <>{moment(item?.dueDate).format('MMM DD, YYYY')}</>
      },
    },

    {
      title: 'Email',
      key: 'email',
    },
    {
      title: 'Phone No',
      key: 'phoneNo',
    },
  ]
  return (
    <Column>
      <AdminInnerPageHeader
        title="Registration"
        buttonLink="/admin/events"
        buttonTitle="Back"
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
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
          }}
        >
          <Column
            styleColumn={{
              fontSize: 21,
              color: '#3AB8B7',
              fontWeight: 'bold',
            }}
          >
            {event?.title}
          </Column>
          <Column>
            <Button
              height={35}
              title="Download Excel"
              loading={loading}
              onClick={handleDownload}
              width={150}
            />
          </Column>
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

export default AdminEventRegistration
