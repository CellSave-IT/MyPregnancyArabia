import { Image } from '../../components'
import { useSelector } from 'react-redux'
import { Select } from '../../store'
const OtherImageSection = () => {
  const aboutInfos: any[] = useSelector(Select.aboutInfos)
  const otherImage = aboutInfos?.find((item) => item?.key === 'otherImage')
  return (
    <>
      {!!otherImage && (
        <Image
          src={`${process.env.APP_IMAGE_URL}${otherImage?.image}`}
          styleImage={`width:100%;height:394px;object-fit:cover;`}
        />
      )}
    </>
  )
}
export default OtherImageSection
