import { Formik, Form } from 'formik'
import { Button, Column, FormField, Image, Row } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { GeneralSetting } from '../../../apis'
const AdminAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const [loading, setLoading] = useState<boolean>(false)
  const [oneInitialValues, setOneInitialValues] = useState({
    title: '',
    description: '',
  })
  const [twoInitialValues, setTwoInitialValues] = useState({
    title: '',
    description: '',
    imagePath: '',
  })
  const [threeInitialValues, setThreeInitialValues] = useState({
    title: '',
    description: '',
    imagePath: '',
  })
  const [fourInitialValues, setFourInitialValues] = useState({
    title: '',
    description: '',
    imagePath: '',
  })
  const [fiveInitialValues, setFiveInitialValues] = useState({
    title: '',
    description: '',
  })
  const [shortDesc, setShortDesc] = useState({
    description: '',
  })
  const [babySizeDesc, setBabySizeDesc] = useState({
    description: '',
  })
  const [otherImage, setOtherImage] = useState({
    imagePath: '',
  })
  const fetchData = async () => {
    await GeneralSetting.getByGroup('about')
      .then((res) => {
        if (!!res?.data?.length) {
          const aboutSectionOne = res?.data?.find(
            (item) => item?.key === 'aboutSectionOne',
          )
          const aboutSectionTwo = res?.data?.find(
            (item) => item?.key === 'aboutSectionTwo',
          )
          const aboutSectionThree = res?.data?.find(
            (item) => item?.key === 'aboutSectionThree',
          )
          const aboutSectionFour = res?.data?.find(
            (item) => item?.key === 'aboutSectionFour',
          )
          const aboutSectionFive = res?.data?.find(
            (item) => item?.key === 'aboutSectionFive',
          )
          const aboutShortDesc = res?.data?.find(
            (item) => item?.key === 'aboutShortDesc',
          )
          const aboutBabySizeDesc = res?.data?.find(
            (item) => item?.key === 'aboutBabySizeDesc',
          )
          const otherImage = res?.data?.find(
            (item) => item?.key === 'otherImage',
          )
          if (!!aboutSectionOne) {
            setOneInitialValues({
              ...oneInitialValues,
              title: aboutSectionOne?.title,
              description: aboutSectionOne?.value,
            })
          }
          if (!!aboutSectionTwo) {
            setTwoInitialValues({
              ...twoInitialValues,
              title: aboutSectionTwo?.title,
              description: aboutSectionTwo?.value,
              imagePath: aboutSectionTwo?.image,
            })
          }
          if (!!aboutSectionThree) {
            setThreeInitialValues({
              ...threeInitialValues,
              title: aboutSectionThree?.title,
              description: aboutSectionThree?.value,
              imagePath: aboutSectionThree?.image,
            })
          }
          if (!!aboutSectionFour) {
            setFourInitialValues({
              ...fourInitialValues,
              title: aboutSectionFour?.title,
              description: aboutSectionFour?.value,
              imagePath: aboutSectionFour?.image,
            })
          }
          if (!!aboutSectionFive) {
            setFiveInitialValues({
              ...oneInitialValues,
              title: aboutSectionFive?.title,
              description: aboutSectionFive?.value,
            })
          }

          if (!!aboutShortDesc) {
            setShortDesc({
              ...shortDesc,
              description: aboutShortDesc?.value,
            })
          }
          if (!!aboutBabySizeDesc) {
            setBabySizeDesc({
              ...babySizeDesc,
              description: aboutBabySizeDesc?.value,
            })
          }
          if (!!otherImage) {
            setOtherImage({
              imagePath: otherImage?.image,
            })
          }
        }
      })
      .catch(() => {})
  }
  const handleSectionOneSubmit = async (values) => {
    setLoading(true)
    await GeneralSetting.store({
      key: 'aboutSectionOne',
      group: 'about',
      title: values?.title,
      value: values?.description,
    }).catch(() => {})
    setLoading(false)
  }
  const handleSectionTwoSubmit = async (values) => {
    setLoading(true)
    const formData = new FormData()
    formData.append('group', 'about')
    formData.append('key', 'aboutSectionTwo')
    formData.append('title', values?.title)
    formData.append('value', values?.description)

    if (!!values?.image) {
      formData.append('image', values?.image)
    }
    await GeneralSetting.store(formData).catch(() => {})
    setLoading(false)
  }
  const handleSectionThreeSubmit = async (values) => {
    setLoading(true)
    const formData = new FormData()
    formData.append('group', 'about')
    formData.append('key', 'aboutSectionThree')
    formData.append('title', values?.title)
    formData.append('value', values?.description)
    if (!!values?.image) {
      formData.append('image', values?.image)
    }
    await GeneralSetting.store(formData).catch(() => {})
    setLoading(false)
  }
  const handleSectionFourSubmit = async (values) => {
    setLoading(true)
    const formData = new FormData()
    formData.append('group', 'about')
    formData.append('key', 'aboutSectionFour')
    formData.append('title', values?.title)
    formData.append('value', values?.description)

    if (!!values?.image) {
      formData.append('image', values?.image)
    }
    await GeneralSetting.store(formData).catch(() => {})
    setLoading(false)
  }
  const handleSectionFiveSubmit = async (values) => {
    setLoading(true)
    await GeneralSetting.store({
      key: 'aboutSectionFive',
      group: 'about',
      title: values?.title,
      value: values?.description,
    }).catch(() => {})
    setLoading(false)
  }

  const handleShortDescSubmit = async (values) => {
    setLoading(true)
    await GeneralSetting.store({
      key: 'aboutShortDesc',
      group: 'about',
      value: values?.description,
    }).catch(() => {})
    setLoading(false)
  }

  const handleBabySizeDescSubmit = async (values) => {
    setLoading(true)
    await GeneralSetting.store({
      key: 'aboutBabySizeDesc',
      group: 'about',
      value: values?.description,
    }).catch(() => {})
    setLoading(false)
  }

  const handleOtherImageSubmit = async (values) => {
    setLoading(true)
    const formData = new FormData()
    formData.append('key', 'otherImage')
    if (!!values?.image) {
      formData.append('group', 'about')
      formData.append('image', values?.image)
    }
    await GeneralSetting.store(formData).catch(() => {})
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Column>
      <AdminInnerPageHeader title={`About Setting`} />
      <Column styleColumn="padding:30px 20px;">
        <Column styleColumn={{ rowGap: 20 }}>
          <Column
            styleColumn={{
              border: '1px solid #ddd',
              borderRadius: 4,
            }}
          >
            <Row
              styleRow={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px;',
              }}
            >
              <Column>Section One</Column>
              <Column
                styleColumn={{
                  background: '#3AB8B7',
                  padding: 5,
                  borderRadius: 4,
                }}
                onClick={() => {
                  if (activeIndex === 0) {
                    setActiveIndex(null)
                  } else {
                    setActiveIndex(0)
                  }
                }}
              >
                <FaChevronDown color={'#fff'} />
              </Column>
            </Row>
            {activeIndex === 0 && (
              <Formik
                initialValues={oneInitialValues}
                onSubmit={handleSectionOneSubmit}
                enableReinitialize
              >
                {() => {
                  return (
                    <Form style={{ padding: 20 }}>
                      <Column styleColumn={{ rowGap: 20 }}>
                        <FormField
                          label="Title"
                          type="text"
                          name="title"
                          placeholder="Title"
                          required
                        />
                        <FormField
                          label="Description"
                          type="textarea"
                          name="description"
                          placeholder="Description"
                          required
                        />
                        <Row styleRow={{ justifyContent: 'flex-end' }}>
                          <Button loading={loading} height={50} width={150}>
                            Submit
                          </Button>
                        </Row>
                      </Column>
                    </Form>
                  )
                }}
              </Formik>
            )}
          </Column>
          <Column
            styleColumn={{
              border: '1px solid #ddd',
              borderRadius: 4,
            }}
          >
            <Row
              styleRow={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px;',
              }}
            >
              <Column>Section Two</Column>
              <Column
                styleColumn={{
                  background: '#3AB8B7',
                  padding: 5,
                  borderRadius: 4,
                }}
                onClick={() => {
                  if (activeIndex === 1) {
                    setActiveIndex(null)
                  } else {
                    setActiveIndex(1)
                  }
                }}
              >
                <FaChevronDown color={'#fff'} />
              </Column>
            </Row>
            {activeIndex === 1 && (
              <Formik
                initialValues={twoInitialValues}
                onSubmit={handleSectionTwoSubmit}
                enableReinitialize
              >
                {() => {
                  return (
                    <Form style={{ padding: 20 }}>
                      <Column styleColumn={{ rowGap: 20 }}>
                        <FormField
                          label="Title"
                          type="text"
                          name="title"
                          placeholder="Title"
                          required
                        />
                        <FormField
                          label="Image"
                          type="file"
                          name="image"
                          placeholder="Image"
                          required={
                            !!twoInitialValues?.imagePath ? false : true
                          }
                        />
                        {!!twoInitialValues?.imagePath && (
                          <Image
                            width={50}
                            height={50}
                            src={`${process.env.APP_IMAGE_URL}${twoInitialValues?.imagePath}`}
                          />
                        )}
                        <FormField
                          label="Description"
                          type="textarea"
                          name="description"
                          placeholder="Description"
                          required
                        />
                        <Row styleRow={{ justifyContent: 'flex-end' }}>
                          <Button loading={loading} height={50} width={150}>
                            Submit
                          </Button>
                        </Row>
                      </Column>
                    </Form>
                  )
                }}
              </Formik>
            )}
          </Column>
          <Column
            styleColumn={{
              border: '1px solid #ddd',
              borderRadius: 4,
            }}
          >
            <Row
              styleRow={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px;',
              }}
            >
              <Column>Section Three</Column>
              <Column
                styleColumn={{
                  background: '#3AB8B7',
                  padding: 5,
                  borderRadius: 4,
                }}
                onClick={() => {
                  if (activeIndex === 2) {
                    setActiveIndex(null)
                  } else {
                    setActiveIndex(2)
                  }
                }}
              >
                <FaChevronDown color={'#fff'} />
              </Column>
            </Row>
            {activeIndex === 2 && (
              <Formik
                initialValues={threeInitialValues}
                onSubmit={handleSectionThreeSubmit}
                enableReinitialize
              >
                {() => {
                  return (
                    <Form style={{ padding: 20 }}>
                      <Column styleColumn={{ rowGap: 20 }}>
                        <FormField
                          label="Title"
                          type="text"
                          name="title"
                          placeholder="Title"
                          required
                        />
                        <FormField
                          label="Image"
                          type="file"
                          name="image"
                          placeholder="Image"
                          required={
                            !!threeInitialValues?.imagePath ? false : true
                          }
                        />
                        {!!threeInitialValues?.imagePath && (
                          <Image
                            width={50}
                            height={50}
                            src={`${process.env.APP_IMAGE_URL}${threeInitialValues?.imagePath}`}
                          />
                        )}
                        <FormField
                          label="Description"
                          type="textarea"
                          name="description"
                          placeholder="Description"
                          required
                        />
                        <Row styleRow={{ justifyContent: 'flex-end' }}>
                          <Button loading={loading} height={50} width={150}>
                            Submit
                          </Button>
                        </Row>
                      </Column>
                    </Form>
                  )
                }}
              </Formik>
            )}
          </Column>
          <Column
            styleColumn={{
              border: '1px solid #ddd',
              borderRadius: 4,
            }}
          >
            <Row
              styleRow={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px;',
              }}
            >
              <Column>Section Four</Column>
              <Column
                styleColumn={{
                  background: '#3AB8B7',
                  padding: 5,
                  borderRadius: 4,
                }}
                onClick={() => {
                  if (activeIndex === 3) {
                    setActiveIndex(null)
                  } else {
                    setActiveIndex(3)
                  }
                }}
              >
                <FaChevronDown color={'#fff'} />
              </Column>
            </Row>
            {activeIndex === 3 && (
              <Formik
                initialValues={fourInitialValues}
                onSubmit={handleSectionFourSubmit}
                enableReinitialize
              >
                {() => {
                  return (
                    <Form style={{ padding: 20 }}>
                      <Column styleColumn={{ rowGap: 20 }}>
                        <FormField
                          label="Title"
                          type="text"
                          name="title"
                          placeholder="Title"
                          required
                        />
                        <FormField
                          label="Image"
                          type="file"
                          name="image"
                          placeholder="Image"
                          required={
                            !!fourInitialValues?.imagePath ? false : true
                          }
                        />
                        {!!fourInitialValues?.imagePath && (
                          <Image
                            width={50}
                            height={50}
                            src={`${process.env.APP_IMAGE_URL}${fourInitialValues?.imagePath}`}
                          />
                        )}
                        <FormField
                          label="Description"
                          type="textarea"
                          name="description"
                          placeholder="Description"
                          required
                        />
                        <Row styleRow={{ justifyContent: 'flex-end' }}>
                          <Button loading={loading} height={50} width={150}>
                            Submit
                          </Button>
                        </Row>
                      </Column>
                    </Form>
                  )
                }}
              </Formik>
            )}
          </Column>
          <Column
            styleColumn={{
              border: '1px solid #ddd',
              borderRadius: 4,
            }}
          >
            <Row
              styleRow={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px;',
              }}
            >
              <Column>Section Five</Column>
              <Column
                styleColumn={{
                  background: '#3AB8B7',
                  padding: 5,
                  borderRadius: 4,
                }}
                onClick={() => {
                  if (activeIndex === 4) {
                    setActiveIndex(null)
                  } else {
                    setActiveIndex(4)
                  }
                }}
              >
                <FaChevronDown color={'#fff'} />
              </Column>
            </Row>
            {activeIndex === 4 && (
              <Formik
                initialValues={fiveInitialValues}
                onSubmit={handleSectionFiveSubmit}
                enableReinitialize
              >
                {() => {
                  return (
                    <Form style={{ padding: 20 }}>
                      <Column styleColumn={{ rowGap: 20 }}>
                        <FormField
                          label="Title"
                          type="text"
                          name="title"
                          placeholder="Title"
                          required
                        />
                        <FormField
                          label="Description"
                          type="textarea"
                          name="description"
                          placeholder="Description"
                          required
                        />
                        <Row styleRow={{ justifyContent: 'flex-end' }}>
                          <Button loading={loading} height={50} width={150}>
                            Submit
                          </Button>
                        </Row>
                      </Column>
                    </Form>
                  )
                }}
              </Formik>
            )}
          </Column>
          <Column
            styleColumn={{
              border: '1px solid #ddd',
              borderRadius: 4,
            }}
          >
            <Row
              styleRow={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px;',
              }}
            >
              <Column>Short Description</Column>
              <Column
                styleColumn={{
                  background: '#3AB8B7',
                  padding: 5,
                  borderRadius: 4,
                }}
                onClick={() => {
                  if (activeIndex === 5) {
                    setActiveIndex(null)
                  } else {
                    setActiveIndex(5)
                  }
                }}
              >
                <FaChevronDown color={'#fff'} />
              </Column>
            </Row>
            {activeIndex === 5 && (
              <Formik
                initialValues={shortDesc}
                onSubmit={handleShortDescSubmit}
                enableReinitialize
              >
                {() => {
                  return (
                    <Form style={{ padding: 20 }}>
                      <Column styleColumn={{ rowGap: 20 }}>
                        <FormField
                          label="Description"
                          type="textarea"
                          name="description"
                          placeholder="Description"
                          required
                        />
                        <Row styleRow={{ justifyContent: 'flex-end' }}>
                          <Button loading={loading} height={50} width={150}>
                            Submit
                          </Button>
                        </Row>
                      </Column>
                    </Form>
                  )
                }}
              </Formik>
            )}
          </Column>
          <Column
            styleColumn={{
              border: '1px solid #ddd',
              borderRadius: 4,
            }}
          >
            <Row
              styleRow={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px;',
              }}
            >
              <Column>Baby Size Description</Column>
              <Column
                styleColumn={{
                  background: '#3AB8B7',
                  padding: 5,
                  borderRadius: 4,
                }}
                onClick={() => {
                  if (activeIndex === 6) {
                    setActiveIndex(null)
                  } else {
                    setActiveIndex(6)
                  }
                }}
              >
                <FaChevronDown color={'#fff'} />
              </Column>
            </Row>
            {activeIndex === 6 && (
              <Formik
                initialValues={babySizeDesc}
                onSubmit={handleBabySizeDescSubmit}
                enableReinitialize
              >
                {() => {
                  return (
                    <Form style={{ padding: 20 }}>
                      <Column styleColumn={{ rowGap: 20 }}>
                        <FormField
                          label="Description"
                          type="textarea"
                          name="description"
                          placeholder="Description"
                          required
                        />
                        <Row styleRow={{ justifyContent: 'flex-end' }}>
                          <Button loading={loading} height={50} width={150}>
                            Submit
                          </Button>
                        </Row>
                      </Column>
                    </Form>
                  )
                }}
              </Formik>
            )}
          </Column>
          <Column
            styleColumn={{
              border: '1px solid #ddd',
              borderRadius: 4,
            }}
          >
            <Row
              styleRow={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px;',
              }}
            >
              <Column>Other Image</Column>
              <Column
                styleColumn={{
                  background: '#3AB8B7',
                  padding: 5,
                  borderRadius: 4,
                }}
                onClick={() => {
                  if (activeIndex === 7) {
                    setActiveIndex(null)
                  } else {
                    setActiveIndex(7)
                  }
                }}
              >
                <FaChevronDown color={'#fff'} />
              </Column>
            </Row>
            {activeIndex === 7 && (
              <Formik
                initialValues={otherImage}
                onSubmit={handleOtherImageSubmit}
                enableReinitialize
              >
                {() => {
                  return (
                    <Form style={{ padding: 20 }}>
                      <Column styleColumn={{ rowGap: 20 }}>
                        <FormField
                          label="Image"
                          type="file"
                          name="image"
                          placeholder="Image"
                          required={!!otherImage?.imagePath ? false : true}
                        />
                        {!!otherImage?.imagePath && (
                          <Image
                            width={50}
                            height={50}
                            src={`${process.env.APP_IMAGE_URL}${otherImage?.imagePath}`}
                          />
                        )}

                        <Row styleRow={{ justifyContent: 'flex-end' }}>
                          <Button loading={loading} height={50} width={150}>
                            Submit
                          </Button>
                        </Row>
                      </Column>
                    </Form>
                  )
                }}
              </Formik>
            )}
          </Column>
        </Column>
      </Column>
    </Column>
  )
}

export default AdminAbout
