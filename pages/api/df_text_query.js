const chatbot = require('../../chatbot/chatbot');

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      res.status(200).send('Got it!');
      break
    case 'POST':
      let responses = await chatbot.textQuery(req.body.text, req.body.parameters);

      res.send(responses[0].queryResult);
      break
    default:
      res.status(405).end() //Method Not Allowed
      break
  }
}
