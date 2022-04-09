import api from "./api";
import logger from "./util/logger";
require('dotenv').config();

api.login().then(res => {
    if (res) {
        logger.msg('Login successful, now show latest diary.');
        api.diary.latest().then(res => {
            const diary = res.data.diary;
            logger.ok(`Got latest diary id: ${diary.id}`)
            logger.msg(`Date: ${diary.createddate} ${diary.weekday} - ${diary.date_word}`);
            logger.log(`Content: ${diary.content}`);
        }).catch(err => logger.err(`Get diary failed.`))
    } else logger.err('Login unsuccessful.')
})

