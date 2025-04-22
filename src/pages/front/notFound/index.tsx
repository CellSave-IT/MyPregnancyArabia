import { Button, Column, Container } from '../../../components'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const navigate = useNavigate()

  return (
    <>
      <Column
        styleColumn={`
      padding:80px 0px;
      @media(max-width:1024px){
        padding:60px 0px;
      }
      @media(max-width:767px){
        padding:40px 0px;
      }
      `}
      >
        <Container>
          <Column
            styleColumn={`
                align-items: center;
            `}
          >
            <Column
              styleColumn={`
                font-size:60px;
                font-weight:bold;
                color:#3AB8B7;
                @media(max-width:1024px){
                  font-size:40px;
                }
                @media(max-width:1024px){
                    font-size:30px;
                }

            `}
            >
              404 Page Not Found
            </Column>
            <Column styleColumn={`margin-top:40px;`}>
              <Button
                height={50}
                buttonStyle="
                    padding:0px 50px;
                    @media(max-width:1024px){
                        height:40px;
                    }
                "
                onClick={() => {
                  navigate('/')
                }}
              >
                Back To Home Page
              </Button>
            </Column>
          </Column>
        </Container>
      </Column>
    </>
  )
}
export default NotFound
