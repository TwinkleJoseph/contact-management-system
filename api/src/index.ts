const express = require('express');
const cors = require('cors');
import { App } from './app'

require('dotenv').config()

const app = new App().app

const PORT = process.env.PORT

app.listen(PORT,()=> {
  console.log('listen port ',PORT);
})
