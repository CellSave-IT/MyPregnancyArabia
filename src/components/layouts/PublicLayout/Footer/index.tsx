import {
  StyleSection,
  StyleRow,
  StyleColumn,
  StyleFooterDesc,
  StyleSubscribeTitle,
  StyleSubscribeInputWrapper,
  StyleInput,
  StyleBottomFooter,
  StyleCopyRightTitle,
  StyleLink,
  StyleFooterContactTitle,
  StyleFooterContactDesc,
  styleRowWrapper,
  styleSecondRowWrapper,
  StyleContactLink,
} from './style'
import Image from '../../../Image'
import Container from '../../../Container'
import Button, { ButtonShadow } from '../../../Button'
import {
  EmailPrimarySvg,
  FacebookPrimarySvg,
  InstagramPrimarySvg,
  LinkdinPrimarySvg,
  LogoSvg,
  PhonePrimarySvg,
} from '../../../../assets'
import { Form, Formik } from 'formik'
import { Subscribe } from '../../../../apis'
import { useSelector } from 'react-redux'
import { Select } from '../../../../store'
import { keyValuePairs } from '../../../../utils/helpers'
const PublicFooter = () => {
  const contactInfos: any[] = useSelector(Select.contactInfos)
  const socialInfos: any[] = useSelector(Select.socialInfos)
  const aboutInfos: any[] = useSelector(Select.aboutInfos)
  const formatContact: any = keyValuePairs(contactInfos)
  const formatSocial: any = keyValuePairs(socialInfos)
  const shortDesc: any = aboutInfos?.find(
    (item) => item?.key === 'aboutShortDesc',
  )
  const items = [
    {
      title: 'About Us',
      path: '/about',
    },
    {
      title: 'Events',
      path: '/events',
    },
    {
      title: 'Testimonials',
      path: '/testimonials',
    },
    {
      title: 'Gallery',
      path: '/gallery',
    },
    {
      title: 'FAQs',
      path: '/faqs',
    },
    {
      title: 'Blogs',
      path: '/diaries',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ]
  const handleSubmit = async (values, { resetForm }) => {
    await Subscribe.create(values).catch(() => {})
    resetForm()
  }
  return (
    <StyleSection>
      <Container>
        <StyleRow styleRow={styleRowWrapper}>
          <StyleRow
            className="foot-left"
            styleRow={{ width: '40%', alignItems: 'flex-start', columnGap: 30 }}
          >
            <Image
              src={LogoSvg}
              styleImage={`@media(max-width:767px){
              height:80px;
            }`}
            />
            <StyleFooterDesc>{shortDesc?.value}</StyleFooterDesc>
          </StyleRow>
          <StyleColumn className="foot-right" styleColumn={{ width: '30%' }}>
            <StyleSubscribeTitle>
              Subscribe to our newsletter
            </StyleSubscribeTitle>
            <StyleColumn>
              <Formik
                onSubmit={handleSubmit}
                initialValues={{
                  email: '',
                }}
              >
                {({ setFieldValue, values }) => {
                  return (
                    <Form>
                      <StyleSubscribeInputWrapper>
                        <StyleInput
                          value={values.email}
                          name="email"
                          required
                          placeholder="Your Email"
                          onChange={(event: any) => {
                            setFieldValue('email', event.target.value)
                          }}
                          type="email"
                        />
                        <ButtonShadow radius={12}>
                          <Button
                            buttonStyle={`padding:0px 25px;`}
                            type="submit"
                            title="Submit"
                            height={40}
                            radius={12}
                          />
                        </ButtonShadow>
                      </StyleSubscribeInputWrapper>
                    </Form>
                  )
                }}
              </Formik>
            </StyleColumn>
            <StyleRow
              styleRow={`
                justify-content: flex-end;
                margin-top: 40px;
                column-gap: 20px;

                a{
                  img{
                    transition: 0.3s ease-in-out;
                  }
                  &:hover{
                    img{

                      transform: scale(1.1);
                    }
                  }
                }
                @media(max-width:1024px){
                  justify-content: flex-start;
                }
                @media(max-width:767px){
                  justify-content: center;
                  margin-top:10px;
                 
                }
              `}
            >
              <StyleLink to={formatSocial?.instagram} target="_blank">
                <Image src={InstagramPrimarySvg} />
              </StyleLink>
              {/* <StyleLink to={formatSocial?.facebook} target="_blank">
                <Image src={FacebookPrimarySvg} />
              </StyleLink>
              <StyleLink to={formatSocial?.linkedin} target="_blank">
                <Image src={LinkdinPrimarySvg} />
              </StyleLink> */}
            </StyleRow>
          </StyleColumn>
        </StyleRow>
        <StyleRow styleRow={styleSecondRowWrapper}>
          <StyleRow
            className="foot-left"
            styleRow={{ width: '50%', columnGap: 70 }}
          >
            <StyleColumn>
              <StyleFooterContactTitle>Phone Number</StyleFooterContactTitle>
              <StyleRow
                styleRow={{
                  alignItems: 'center',
                  columnGap: 10,
                  marginTop: 10,
                }}
              >
                <Image src={PhonePrimarySvg} />
                <StyleFooterContactDesc>
                  <StyleContactLink href={`tel:${formatContact?.phoneNo}`}>
                    {formatContact?.phoneNo}
                  </StyleContactLink>
                </StyleFooterContactDesc>
              </StyleRow>
            </StyleColumn>
            <StyleColumn>
              <StyleFooterContactTitle>Send an Email</StyleFooterContactTitle>
              <StyleRow
                styleRow={{
                  alignItems: 'center',
                  columnGap: 10,
                  marginTop: 10,
                }}
              >
                <Image src={EmailPrimarySvg} />
                <StyleFooterContactDesc>
                  <StyleContactLink href={`mailto:${formatContact?.email}`}>
                    {formatContact?.email}
                  </StyleContactLink>
                </StyleFooterContactDesc>
              </StyleRow>
            </StyleColumn>
          </StyleRow>
          <StyleRow
            className="foot-right last-foot-right"
            styleRow={`
            width: 50%;
            justify-content: flex-end;
            column-gap: 30px;
            align-items: flex-end;
            margin-bottom: 7px;
            @media(max-width:767px){
              display:block;
            
              text-align:center;
              a{
                padding:0px 5px;
              }
            }
            `}
          >
            {items?.map((item, index) => {
              return (
                <StyleLink key={index} to={item.path}>
                  {item.title}
                </StyleLink>
              )
            })}
          </StyleRow>
        </StyleRow>
      </Container>
      <StyleBottomFooter>
        <Container>
          <StyleRow
            styleRow={`
            justify-content: 'space-between';
             widht: 100%;
             @media(max-width:640px){
              flex-direction: column;
              align-items:center;
              row-gap:10px;
              div{
                justify-content: flex-start;
              }
             }
          `}
          >
            <StyleCopyRightTitle style={{ width: '50%' }}>
              Copyrights@2024 All Rights
            </StyleCopyRightTitle>
            <StyleRow
              styleRow={`
              justify-content: flex-end;
              @media(max-width:640px){
                justify-content: center !important;
              }
            `}
            >
              <StyleCopyRightTitle>
                <StyleLink to="/"> Privacy Policy &&nbsp;</StyleLink>
              </StyleCopyRightTitle>
              <StyleCopyRightTitle>
                <StyleLink to="/">Terms & Conditions</StyleLink>
              </StyleCopyRightTitle>
            </StyleRow>
          </StyleRow>
        </Container>
      </StyleBottomFooter>
    </StyleSection>
  )
}

export default PublicFooter
