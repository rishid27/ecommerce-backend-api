// This is a mock email sender for assignment purposes.
// In a real app you would integrate Nodemailer or a 3rd-party email service.

const sendEmailMock = async ({ to, subject, text }) => {
  console.log('--- Mock Email ---');
  console.log('To:', to);
  console.log('Subject:', subject);
  console.log('Text:', text);
  console.log('------------------');
  return true;
};

module.exports = sendEmailMock;
