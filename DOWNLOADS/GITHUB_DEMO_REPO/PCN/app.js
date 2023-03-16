var express = require('express');
var FCM = require('fcm-node');

const SERVER_KEY= "AAAAGl9svzE:APA91bHoHAELieKxRCG9s1uNhW4an_XbMhqHGmJs3ijjzxXPkKF0T_nPTwcE5qW6rF5v7nNA_YozYR3arqTDuZIjWerdR1dVIYKc_A4n_VBJAvlhoc-2Hp8o7zmPWXeEpFds9VrF_jL5";
var app =express();
var port = process.env.PORT||3000;

app.listen(port ,()=>{
    console.log("listening on port",port);
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.post('/fcm', async(req,res,next) =>{
        try {
            let fcm = new FCM(SERVER_KEY);
            let message = {
                to: '/topics/' + req.body.topic,
                notification: {
                    title: req.body.title,
                    body: req.body.body,
                    sound: 'default',
                    "click_action": "FCM_PLUGIN_ACTIVITY",
                    "icon": "fcm_push_icon"
                },
                data:req.body.data
            };
            console.log("message",message);

            fcm.send(message, (err, response) => {
                if (err) {
                    next(err);
                }
                else {
                    res.json(response);
                }
            });
        } catch (error) {
            next(error);
        }
    });


