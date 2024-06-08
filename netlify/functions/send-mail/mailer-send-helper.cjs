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
      'Authorization': 'Bearer mlsn.bc79835f088b8b097475c364d435ef1b254f6a1104c1cbc8d6a11624ea4eee24'
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