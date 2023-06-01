const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
  to: 'melina.shakya@ebpearls.com',
  from: 'melinashakya20@gmail.com',
  subject: 'This is my first creation',
  text: 'I hope this one actually get to you'
})