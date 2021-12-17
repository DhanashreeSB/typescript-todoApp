import axios from "axios";
import * as API_URLS from "../Constants/apiLinks";

export const PostAPI = (): any => {
    const requestUrl = API_URLS.postApi;

    try {
        const data = axios({
            method: "get",
            url: requestUrl,
            headers: { "Content-Type": "application/json;" },
            validateStatus: function (status) {
                return status >= 200;
            },
        });
        return data;
    } catch (e) {
        return e;
    }
};
