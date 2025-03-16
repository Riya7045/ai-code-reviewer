require('dotenv').config(); //jo hmne key env me rkhi h usko access kr skte h ab
const app = require('./Backend/src/app');



app.listen(3000, () => {
    console.log('server is running');
})//server is started at port 3000 and hum jo bhi is call back () => { } me likhenge voh execute ho jayega