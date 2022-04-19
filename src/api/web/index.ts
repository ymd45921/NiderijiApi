import login from "./login";
import diary from "./diary";
import curd from "./curd";

const {write, remove} = curd;

const diaryApi = {
    ...diary,
    write, remove
}

const webApi = {
    login, diary: diaryApi,
}

export default webApi;
