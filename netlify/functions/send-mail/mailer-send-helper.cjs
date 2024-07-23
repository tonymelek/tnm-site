const axios = require('axios');
const sendMailHelper = async message => {
  const axiosData = JSON.stringify({
    from: {
      name: "TNM Website Feedback",
      email: "no-reply@tnmgroup.site"
    },
    to: [
      {
        email: "tnm.investments.group@gmail.com"
      }
    ],
    subject: "You got feedback on TNM",
    html: message
  });

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.mailersend.com/v1/email',
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'Authorization': 'Bearer mlsn.a78e54b9dc9bea7771e05a146fe4b7353aa0acbb511ee8b9387f575c2d07b59e'
    },
    data: axiosData
  };
  try {
    await axios.request(config)
  } catch (error) {
    throw new Error(error)
  };
}

module.exports = { sendMailHelper }