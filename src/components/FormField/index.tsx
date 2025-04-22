import { forwardRef } from 'react'
import Column from '../Column'
import { Field } from 'formik'
import {
  StyleInput,
  StyleLabel,
  StyleError,
  StyleTextArea,
  StyleSelect,
  StyleOption,
} from './style'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
interface SelectProps {
  titleAsKey: string
  valueAsKey: string
}
interface FormFieldProps {
  label?: string
  placeholder?: string
  type: 'text' | 'file' | 'dropdown' | 'textarea' | 'number' | 'editor'
  data: any[]
  selectProps?: SelectProps
  onChange?: (value: any) => void
  name: string
  styleForm?: string
  styleWrapper?: string
}
const FormField = forwardRef<FormFieldProps, any>(
  (
    {
      label,
      type,
      name,
      data,
      onChange,
      selectProps,
      styleWrapper,
      isSet = true,
      ...restProps
    },
    ref,
  ) => {
    return (
      <Field name={name}>
        {({ field, meta, form }) => {
          return (
            <Column styleColumn={`row-gap:10px;${styleWrapper}`}>
              {!!label && <StyleLabel>{label}</StyleLabel>}
              {type === 'dropdown' ? (
                <StyleSelect
                  value={field?.value}
                  onChange={(event) => {
                    onChange && onChange(event.target.value)
                    form.setFieldValue(name, event.target.value)
                  }}
                  {...restProps}
                >
                  <StyleOption value="">
                    {restProps?.placeholder || 'Select One'}
                  </StyleOption>
                  {!!data?.length &&
                    !!selectProps &&
                    data?.map((item: any, index: number) => {
                      return (
                        <StyleOption
                          key={index}
                          value={item[selectProps?.valueAsKey]}
                        >
                          {item[selectProps?.titleAsKey]}
                        </StyleOption>
                      )
                    })}
                </StyleSelect>
              ) : type == 'textarea' ? (
                <StyleTextArea
                  rows={10}
                  onChange={(event) => {
                    onChange && onChange(event.target.value)
                    form.setFieldValue(name, event.target.value)
                  }}
                  {...restProps}
                  defaultValue={field.value}
                />
              ) : type === 'file' ? (
                <StyleInput
                  type={type}
                  onChange={(event) => {
                    onChange && onChange(event)
                    if (!!isSet) {
                      form.setFieldValue(name, event.currentTarget.files[0])
                    }
                  }}
                  {...restProps}
                />
              ) : type === 'editor' ? (
                <ReactQuill
                  theme="snow"
                  value={field.value}
                  onChange={(text: string) => form.setFieldValue(name, text)}
                />
              ) : (
                <StyleInput
                  type={type}
                  onChange={(event) => {
                    onChange && onChange(event.target.value)
                    form.setFieldValue(name, event.target.value)
                  }}
                  {...restProps}
                  defaultValue={field.value}
                />
              )}
              {meta.touched && meta.error ? (
                <StyleError>{meta.error}</StyleError>
              ) : null}
            </Column>
          )
        }}
      </Field>
    )
  },
)

export default FormField
