const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const contacts = [
  { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', phone: '1-770-736-8031 x56442' },
  { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', phone: '010-692-6593 x09125' },
];

app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
