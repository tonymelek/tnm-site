const { sendMailHelper }=require('./mailer-send-helper.cjs');

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const axios=require('axios');
const fs=require('fs');
const path=require('path');
const compiler = require('./utils/handlebars.cjs');
const feedbackTemplate=fs.readFileSync(path.resolve(__dirname,'templates','feedback.handlebars'),'utf-8')





const handler = async (event) => {
   const { body: eventBody } = event;
  const { name, email, feedback } = JSON.parse(eventBody);
  try {
    const compile = compiler(feedbackTemplate)
    const message = compile({  name, email, feedback });
    await sendMailHelper(message);
    return {
      statusCode: 200,
      body: JSON.stringify({message:'success'}),
      'headers': {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Allow-Origin": "*"
      },
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
