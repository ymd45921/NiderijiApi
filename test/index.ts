import Nideriji from "../src";
import {IDiaryParams} from "../src/configs/types";
require('dotenv').config();

Nideriji.config({
    apiServerURL: 'https://nideriji.cn/api'
});
// Nideriji.setHost('https://nideriji-api.vercel.app/api');

const testDiary: IDiaryParams = {
    date: '2019-02-01',
    content: 'A test request sent by nideriji-api on Node.js.',
    title: 'nideriji-api test',
    weather: 'sunny',
    mood: 'happy'
}

const main = async () => {
    if (!process.env.EMAIL || !process.env.PASSWORD)
        return 'No login information';
    const ticket = await Nideriji.login(process.env.EMAIL, process.env.PASSWORD);
    if (!ticket.data.token) return 'Login failed';
    const resp = await Nideriji.diary.write(testDiary);
    console.log(resp.data);
};

main()
    .then(res => console.info('Process exit with ', res))
    .catch(e => console.error('Error has occurred ', e))
    .finally(() => console.log('Process exited.'));


