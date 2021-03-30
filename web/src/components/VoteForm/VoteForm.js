import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const VoteForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.vote?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="choice"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Choice
        </Label>
        <TextField
          name="choice"
          defaultValue={props.vote?.choice}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="choice" className="rw-field-error" />

        <Label
          name="dateTime"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date time
        </Label>
        <DatetimeLocalField
          name="dateTime"
          defaultValue={formatDatetime(props.vote?.dateTime)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="dateTime" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default VoteForm
