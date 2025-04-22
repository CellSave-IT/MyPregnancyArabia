import { useEffect, useState } from 'react'

import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { Column, Row } from '../../../components'
import { Download } from '../../../apis'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import DataTable from '../../../components/DataTable'
import { Button } from '../../../components'
import moment from 'moment'
import Excel from 'exceljs'
import { saveAs } from 'file-saver'
const AdminDownloads = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [downloadLoading, setDownloadLoading] = useState<boolean>(false)
  const { data, pagination }: any = useSelector(Select.downloads)
  const [activeEvent, setActiveEvent] = useState<any>({})
  const [params, setParams] = useState({
    pageSize: 10,
    page: !!pagination?.currentPage ? parseInt(pagination?.currentPage) : 1,
    event: activeEvent?.value,
  })
  const fetchData = async (params: any) => {
    setLoading(true)
    await Download.get(params).catch(() => {})
    setLoading(false)
  }

  const handleDownload = async () => {
    setDownloadLoading(true)
    await Download.getAll({
      ...params,
      pageSize: parseInt(pagination?.totalPages) * 10,
    })
      .then(async (resp) => {
        const excelBook = new Excel.Workbook()
        const workSheetName = `Baby Size`
        const worksheet = excelBook.addWorksheet(workSheetName)
        const columns = [
          { header: 'S.no', key: 'sno' },
          { header: 'First Name', key: 'fName' },
          { header: 'Last Name', key: 'lName' },
          { header: 'Email', key: 'email' },
          { header: 'Phone No', key: 'phoneNo' },
          { header: 'Country Code', key: 'countryCode' },
          { header: 'Delivery Hospital', key: 'deliveryHospital' },
          { header: 'Due Date', key: 'date' },
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
        saveAs(new Blob([buf]), `baby-size.xlsx`)
      })
      .catch(() => {})

    setDownloadLoading(false)
  }

  useEffect(() => {
    fetchData(params)
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
            <br />
            <span>Delivery Hospital : {item?.deliveryHospital}</span>
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
    {
      title: 'Country Code',
      key: 'countryCode',
    },
  ]
  return (
    <Column>
      <AdminInnerPageHeader title="Downloads" />
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
          ></Column>
          <Column>
            <Button
              height={35}
              title="Download Excel"
              loading={downloadLoading}
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
export default AdminDownloads
