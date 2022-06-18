const jwt = require("jsonwebtoken");
require("dotenv").config();

const {SECRET_KEY} = process.env;

const payload = {
    id: "62ab77eb99931c576fb147e8"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const wrongToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWI3N2ViOTk5MzFjNTc2ZmIxNDdlOCIsImlhdCI6MTY1NTU0MDgyMSwiZXhwIjoxNjU1NTQ0NDIxfQ.9ybSGKizihjNrPq1hx8toFR1rZYlAmugFBUYM1BCtr3"
    const verifyResult = jwt.verify(wrongToken, SECRET_KEY);
    console.log(verifyResult);
} catch (error) {
    console.log(error.message);
}


