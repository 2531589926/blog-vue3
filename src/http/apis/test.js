import { get, post, put, del, uploader } from '../interceptors'

export const testApi = {
    login(params) {
        return get('service-core/wechat/serviceAccount/qrCode/create', params, false)
    }
}