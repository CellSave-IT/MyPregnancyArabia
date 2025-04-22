import { StyleColumn, StyleDesc, StyleHeading } from './style'
interface InnerPageHeaderProps {
  title: string
  description?: string
  styleDesc?: string
  type?: 'primary' | 'secondary'
}
const InnerPageHeader = ({
  title,
  description,
  styleDesc,
  type = 'secondary',
}: InnerPageHeaderProps) => {
  return (
    <StyleColumn>
      <StyleHeading type={type}>{title}</StyleHeading>
      {!!description && (
        <StyleColumn
          styleColumn={`
          margin-top:30px;
          @media(max-width:767px){
            margin-top:10px;
          }
        `}
        >
          <StyleDesc type={type} styleDesc={styleDesc}>
            {description}
          </StyleDesc>
        </StyleColumn>
      )}
    </StyleColumn>
  )
}

export default InnerPageHeader
