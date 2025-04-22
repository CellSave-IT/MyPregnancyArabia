import { Row } from '../../../components'
import styled from '@emotion/styled'
import { Button } from '../../../components'
import { useNavigate } from 'react-router-dom'
const StyleTitle = styled.h3`
  font-size: 21px;
  color: ${(props: any) => props.theme.colors.primary};
  text-transform: uppercase;
`
interface AdminInnerPageHeaderProps {
  title: string
  buttonLink?: string
  buttonTitle?: string
}
const AdminInnerPageHeader = ({
  title,
  buttonTitle,
  buttonLink,
}: AdminInnerPageHeaderProps) => {
  const navigate = useNavigate()
  return (
    <Row styleRow="justify-content:space-between;border-bottom:1px solid #f5f5f5;padding:10px 20px;">
      <StyleTitle>{title}</StyleTitle>
      {buttonTitle && (
        <Button
          height={35}
          width={120}
          radius={4}
          onClick={() => {
            navigate(buttonLink)
          }}
          title={buttonTitle}
        />
      )}
    </Row>
  )
}

export default AdminInnerPageHeader
