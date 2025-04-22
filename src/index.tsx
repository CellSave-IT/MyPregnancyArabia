import ReactDOM from 'react-dom/client'
import { Global, ThemeProvider, css } from '@emotion/react'
import { Provider } from 'react-redux'
import { store } from './store'
import { theme } from './utils'
import App from './App'
import { ToastContainer } from 'react-toastify'
import { ParallaxProvider } from 'react-scroll-parallax'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <App />
        <Global
          styles={css`
            body {
              margin: 0px;
              padding: 0px;
              overflow-x: hidden;
              font-family: 'Poppins';
            }

            p,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              margin: 0px;
            }
            span,
            a,
            strong {
              display: inline-block;
            }
            a {
              text-decoration: none;
            }
            ul,
            ol {
              margin: 0px;
              padding: 0px;
              list-style-type: none;
            }
            .ql-container.ql-snow {
              min-height: 300px;
            }

            .ql-editor {
              height: 300px;
            }
            ul.pagination-wrapper {
              display: flex;
              column-gap: 20px;
              @media (max-width: 767px) {
                column-gap: 10px;
              }
            }
            .pagination-wrapper li {
              font-family: Judson;
              font-size: 16px;
              border: 1px solid #f1f1f1;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 45px;
              padding: 0px 20px;
              border-radius: 8px;
              color: #4c4d4d;
              &.disabled {
                color: #ccc;
              }
              &.selected {
                background: #3ab8b7;
                color: #fff;
              }
              @media (max-width: 767px) {
                height: 30px;
                padding: 0px 10px;
                font-size: 13px;
              }
            }
            .pagination-wrapper.secondary li {
              font-family: Judson;
              font-size: 16px;
              border: 1px solid #f1f1f1;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 45px;
              padding: 0px 20px;
              border-radius: 8px;
              color: #4c4d4d;
              &.disabled {
                color: #ccc;
              }
              &.selected {
                background: #c9a9d1;
                color: #fff;
              }
              @media (max-width: 767px) {
                height: 30px;
                padding: 0px 10px;
                font-size: 13px;
              }
            }
            .gallery-section {
              height: auto !important;
            }
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            @-webkit-keyframes moverX {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-40px);
              }
            }
            @keyframes moverX {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-40px);
              }
            }
            @-webkit-keyframes moverY {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(-40px);
              }
            }
            @keyframes moverY {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(-40px);
              }
            }
            .single-share-social {
              img {
                transition: 0.5s;
                &:hover {
                  transform: scale(1.1);
                }
              }
            }
            .yoga-img-wrapper {
              height: 394px;
              img {
                height: 394px;
              }
              @media (max-width: 768px) {
                height: 300px;

                img {
                  height: 300px;
                }
              }
            }
            input[type='date'] {
              display: block;
              -webkit-appearance: textfield;
              -moz-appearance: textfield;
              min-height: 1.2em;
            }
            #parallax-element {
              transition: opacity 0.2s ease-in-out;
              transform: translateY(0px) !important;
            }
            #parallax-element2 {
              transition: opacity 0.2s ease-in-out;
            }
            #parallax-element3 {
              transition: opacity 0.2s ease-in-out;
            }
            .react-tel-input .form-control {
              width: 100% !important;
              height: 65px;
              border-radius: 12px;
              border: 1px solid #e9dded;
            }
            @media (max-width: 767px) {
              .contact-form-wrapper .react-tel-input .form-control {
                height: 55px;
              }
              .download-wrapper .react-tel-input .form-control {
                height: 55px;
              }
            }
            .react-tel-input .flag-dropdown {
              border: 1px solid #e9dded;
              border-radius: 12px 0 0 12px;
            }
            .react-tel-input .selected-flag {
              border-radius: 12px 0 0 12px;
            }
            .react-tel-input .flag-dropdown.open {
              border-radius: 12px 0 0 12px;
              z-index: 111;
            }
            .react-tel-input .flag-dropdown.open .selected-flag {
              background: #fff;
              border-radius: 12px 0 0 12px;
            }
            .react-tel-input .country-list {
              max-height: 120px;
              border-radius: 8px;
            }
            .contact-info-item:last-child {
              border: 0px;
            }
            .react-datepicker-popper {
              z-index: 111111;
            }
          `}
        />
        <ToastContainer />
      </ParallaxProvider>
    </ThemeProvider>
  </Provider>,
)
