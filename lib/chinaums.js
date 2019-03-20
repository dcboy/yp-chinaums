'use strict';

const moment = require('moment');
const querystring = require('querystring');
const axios = require('axios');
<<<<<<< HEAD
=======
const crypto = require('crypto');

>>>>>>> 9de2734ec49ce4e73def1f6c1e80f2c90d761ab8
/**
 * 银联商户类
 */
class Chinaums {
  constructor(config) {
    this.config = config;

    // 基础参数
    this.baseOptions = {
      requestTimestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
      mid: this.config.mid // 商户号
    };
    this.APIURL = {
      commonUrl: this.config.sandbox ? 'https://qr-test2.chinaums.com/netpay-route-server/api/' : 'https://qr.chinaums.com/netpay-route-server/api/',
      payUrl: this.config.sandbox ? 'https://qr-test2.chinaums.com/netpay-portal/webpay/pay.do' : 'https://qr.chinaums.com/netpay-portal/webpay/pay.do'
    };
  }

<<<<<<< HEAD
  md5Sign(data) {
    const md5 = _crypto2.default.createHash('md5').update(data).digest('hex');
    return md5;
  }

  objKeySort(arys) {
    // 先用Object内置类的keys方法获取要排序对象的属性名数组，再利用Array的sort方法进行排序
    const newkey = Object.keys(arys).sort();
    let newObj = ''; // 创建一个新的对象，用于存放排好序的键值对
    for (let i = 0; i < newkey.length; i++) {
      // 遍历newkey数组
      if (arys[newkey[i]] === '') {
        continue;
      }
      newObj += `${[newkey[i]]}=${arys[newkey[i]]}&`;
    }
    return newObj.substring(0, newObj.length - 1);
  }

=======
  static md5Sign(data) {
    const md5 = crypto.createHash('md5').update(data).digest('hex');
    return md5;
  }

  static objKeySort(arys) {
    // 先用Object内置类的keys方法获取要排序对象的属性名数组，再利用Array的sort方法进行排序
    const newkey = Object.keys(arys).sort();
    let newObj = ''; // 创建一个新的对象，用于存放排好序的键值对
    newkey.forEach((item, i) => {
      // 遍历newkey数组
      if (arys[newkey[i]] !== '' && [newkey[i]] !== 'sign') {
        newObj += `${[newkey[i]]}=${arys[newkey[i]]}&`;
      }
    });
    return newObj.substring(0, newObj.length - 1);
  }
  /**
  * @param {*} parmas
  * 验证获取回来的签名
  * @teturn boolean
  */
  verifyNotify(parmas) {
    if (parmas.sign) {
      const { sign } = parmas;
      delete parmas.sign;
      const md5Sign = Chinaums.md5Sign(`${Chinaums.objKeySort(parmas)}${this.config.key}`);
      if (md5Sign.toLocaleUpperCase() === sign.toLocaleUpperCase()) {
        return true;
      }
      return false;
    }
    return false;
  }
>>>>>>> 9de2734ec49ce4e73def1f6c1e80f2c90d761ab8
  /**
  * 发送请求到服务器
  * @param {Object} params
  * @return {*} options
  */
<<<<<<< HEAD
  sendRequest(url, params, resolve, reject) {
    try {
      axios.post(url, params).then(body => resolve(body.data)).catch(error => {
        throw new Error(error);
      });
    } catch (ex) {
      return reject(new Error(`请求发生错误:${ex}`));
=======
  static async sendRequest(url, params) {
    try {
      return await axios.post(url, params);
    } catch (ex) {
      return new Error(`请求发生错误:${ex}`);
>>>>>>> 9de2734ec49ce4e73def1f6c1e80f2c90d761ab8
    }
  }

  /**
  * 3.6
  * 下单请求
  * @param {Object} params
  * @param {string} params.msgSrc - 消息来源
  * @param {string} params.merOrderId - 商户订单号
  * @param {string} params.totalAmount - 总价格
  * @param {string} params.tid - 终端号
  * @return Url
  */
  createOrderUrl(params) {
    const options = {
      msgType: 'WXPay.jsPay', // 消息类型 WXPay.jsPay :微信公众号支付 trade.jsPay :支付宝 qmf.jspay :全民付 qmf.webPay :无卡 acp.jsPay :银联云闪付
      instMid: 'YUEDANDEFAULT' // 业务类型
    };
    params = Object.assign({}, this.baseOptions, options, params);
<<<<<<< HEAD
    const signstr = `${this.objKeySort(params)}${this.config.key}`;
    params.sign = this.md5Sign(signstr);
=======
    const signstr = `${Chinaums.objKeySort(params)}${this.config.key}`;
    params.sign = Chinaums.md5Sign(signstr);
>>>>>>> 9de2734ec49ce4e73def1f6c1e80f2c90d761ab8
    const link = `${this.APIURL.payUrl}?${querystring.stringify(params)}`;
    return link;
  }

  /**
  * 4.0
  * 支付结果查询
  * @param {*} params 配置信息
  * @param {string} params.msgSrc - 消息来源
  * @param {string} params.merOrderId - 商户订单号
  * @param {string} params.tid - 终端号
  * @return {Promise<object>} 查询的用户数据
  */
<<<<<<< HEAD
  queryOrder(params) {
    return new Promise((resolve, reject) => {
      // 本接口的固定参数
      const options = {
        msgType: 'query',
        instMid: 'YUEDANDEFAULT' // 业务类型
      };
      params = Object.assign({}, this.baseOptions, options, params);
      const signstr = `${this.objKeySort(params)}${this.config.key}`;
      params.sign = this.md5Sign(signstr);
      this.sendRequest(this.APIURL.commonUrl, params, resolve, reject);
    });
=======
  async queryOrder(params) {
    const options = {
      msgType: 'query',
      instMid: 'YUEDANDEFAULT' // 业务类型
    };
    params = Object.assign({}, this.baseOptions, options, params);
    const signstr = `${Chinaums.objKeySort(params)}${this.config.key}`;
    params.sign = Chinaums.md5Sign(signstr);
    const result = await Chinaums.sendRequest(this.APIURL.commonUrl, params);
    return result;
>>>>>>> 9de2734ec49ce4e73def1f6c1e80f2c90d761ab8
  }

  /**
  * 7.3	银联订单退款请求
  * @param {*} params
  * @param {string} params.msgSrc - 消息来源
  * @param {string} params.merOrderId - 商户订单号
  * @param {string} params.tid - 终端号
  * @param {string} params.refundAmount - 要退货的金额
  * @return {Promise<object>} 订单退款回调结果
  */
<<<<<<< HEAD
  refunds(params) {
    return new Promise((resolve, reject) => {
      const options = {
        msgType: 'refund', // 消息类型
        instMid: 'YUEDANDEFAULT' // 业务类型
      };
      params = Object.assign({}, this.baseOptions, options, params);
      const signstr = `${this.objKeySort(params)}${this.config.key}`;
      params.sign = this.md5Sign(signstr);
      this.sendRequest(this.APIURL.commonUrl, params, resolve, reject);
    });
=======
  async refunds(params) {
    const options = {
      msgType: 'refund', // 消息类型
      instMid: 'YUEDANDEFAULT' // 业务类型
    };
    params = Object.assign({}, this.baseOptions, options, params);
    const signstr = `${Chinaums.objKeySort(params)}${this.config.key}`;
    params.sign = Chinaums.md5Sign(signstr);
    const result = await Chinaums.sendRequest(this.APIURL.commonUrl, params);
    return result;
>>>>>>> 9de2734ec49ce4e73def1f6c1e80f2c90d761ab8
  }

  /**
  * 9.1	关闭订单请求
  * @param {*} params
  * @param {string} params.msgSrc - 消息来源
  * @param {string} params.merOrderId - 商户订单号
  * @param {string} params.tid - 终端号
  */
<<<<<<< HEAD
  closeOrder(params) {
    return new Promise((resolve, reject) => {
      const options = {
        msgType: 'close', // 消息类型
        instMid: 'YUEDANDEFAULT' // 业务类型
      };
      params = Object.assign({}, this.baseOptions, options, params);
      const signstr = `${this.objKeySort(params)}${this.config.key}`;
      params.sign = this.md5Sign(signstr);
      this.sendRequest(this.APIURL.commonUrl, params, resolve, reject);
    });
=======
  async closeOrder(params) {
    const options = {
      msgType: 'close', // 消息类型
      instMid: 'YUEDANDEFAULT' // 业务类型
    };
    params = Object.assign({}, this.baseOptions, options, params);
    const signstr = `${Chinaums.objKeySort(params)}${this.config.key}`;
    params.sign = Chinaums.md5Sign(signstr);
    const result = await Chinaums.sendRequest(this.APIURL.commonUrl, params);
    return result;
>>>>>>> 9de2734ec49ce4e73def1f6c1e80f2c90d761ab8
  }
}

// export
module.exports = Chinaums;