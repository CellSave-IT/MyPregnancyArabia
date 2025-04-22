import Row from '../Row'
import { FaPencilAlt } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa'
import Button from '../Button'
interface ActionsProps {
  onClickEdit?: () => void
  onClickDelete?: () => void
  isDelete?: boolean
}
const Actions = ({
  onClickEdit,
  onClickDelete,
  isDelete = true,
}: ActionsProps) => {
  return (
    <Row styleRow="column-gap:10px">
      <Button
        onClick={onClickEdit}
        background={'primary400'}
        height={30}
        width={40}
      >
        <FaPencilAlt color="white" size={14} />
      </Button>
      {!!isDelete && (
        <Button
          onClick={onClickDelete}
          background={'danger'}
          height={30}
          width={40}
        >
          <FaTrash color="white" size={14} />
        </Button>
      )}
    </Row>
  )
}
export default Actions
