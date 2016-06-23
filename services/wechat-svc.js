/**
 * Created by mymac on 16/4/1.
 */
import * as WeChat from 'react-native-wechat';

export default class WechatSvc {

    static ready = false;

    static async initialize(appId) {
        try {
            await WeChat.registerApp('wx88d32d390c8519f6');
            let isWXAppSupportApi = await WeChat.isWXAppSupportApi();
            let isWXAppInstalled = await WeChat.isWXAppInstalled();

            console.log(JSON.stringify({isWXAppSupportApi, isWXAppInstalled}));

            if (isWXAppSupportApi && isWXAppInstalled) {
                this.ready = true;
            }
        } catch (e) {
            console.log('wechat initialize', e);
        }
    }

    static async shareToSession(imageUri) {
        if (!this.ready) return;

        try {
            await WeChat.shareToSession({
                type: 'imageResource',
                title: 'resource image',
                description: 'share resource image to time line',
                mediaTagName: 'email signature',
                messageAction: undefined,
                messageExt: undefined,
                imageUrl: imageUri,
            });
        } catch (e) {
            console.log('wechat share', e);
        }
    }

    static async shareToTimeline(imageUri) {
        if (!this.ready) return;

        try {
            await WeChat.shareToTimeline({
                type: 'imageResource',
                title: 'resource image',
                description: 'share resource image to time line',
                mediaTagName: 'email signature',
                messageAction: undefined,
                messageExt: undefined,
                imageUrl: imageUri,
            });
        } catch (e) {
            console.log('wechat share', e);
        }
    }
}