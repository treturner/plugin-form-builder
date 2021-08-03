import { Block, CollectionConfig } from 'payload/types';

type BlockConfig = {
  block: Block
  validate?: (value: unknown) => boolean | string
}

export function isValidBlockConfig(blockConfig: BlockConfig | string): blockConfig is BlockConfig {
  return typeof blockConfig !== 'string'
    && typeof blockConfig?.block?.slug === 'string'
    && Array.isArray(blockConfig?.block?.fields);
}

export type FieldType = 'select' | 'text' | 'email' | 'state' | 'country' | 'checkbox'

export type IncomingOptions = {
  fields?: FieldType[]
  formSubmissionsOverrides?: CollectionConfig
  formsOverrides?: CollectionConfig
}

export type SanitizedOptions = {
  fields: (FieldType | BlockConfig)[]
  formSubmissionsOverrides?: CollectionConfig
  formsOverrides?: CollectionConfig
}

export type TextField = {
  blockType: 'text'
  blockName?: string
  width?: string
  name: string
  label?: string
  defaultValue?: string
  required?: boolean
}

export type SelectFieldOption = {
  label: string
  value: string
}

export type SelectField = {
  blockType: 'select'
  blockName?: string
  width?: string
  name: string
  label?: string
  defaultValue?: string
  required?: boolean
  options: SelectFieldOption[]
}

export type EmailField = {
  blockType: 'email'
  blockName?: string
  width?: string
  name: string
  label?: string
  defaultValue?: string
  required?: boolean
}

export type StateField = {
  blockType: 'state'
  blockName?: string
  width?: string
  name: string
  label?: string
  defaultValue?: string
  required?: boolean
}

export type CountryField = {
  blockType: 'country'
  blockName?: string
  width?: string
  name: string
  label?: string
  defaultValue?: string
  required?: boolean
}

export type CheckboxField = {
  blockType: 'checkbox'
  blockName?: string
  width?: string
  name: string
  label?: string
  defaultValue?: boolean
  required?: boolean
}

export type MessageField = {
  blockType: 'message'
  blockName?: string
  message: string
}

export type FormFieldBlock = TextField | SelectField | EmailField | StateField | CountryField | CheckboxField | MessageField

export type Form = {
  title: string
  fields: FormFieldBlock[]
}

export type SubmissionValue = {
  field: string
  value: unknown
}

export type FormSubmission = {
  form: string | Form
  submissionData: SubmissionValue[]
}