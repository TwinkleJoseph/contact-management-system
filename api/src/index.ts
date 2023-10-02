const express = require('express');
const cors = require('cors');
import { App } from './app'

const app = new App().app

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
