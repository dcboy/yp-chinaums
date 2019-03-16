const moment = require('moment');
const querystring =require('querystring');
const axios = require("axios");
import crypto from 'crypto';
const APIURL = {
  commonUrl: 'https://qr-test2.chinaums.com/netpay-route-server/api/',
  payUrl: 'https://qr-test2.chinaums.com/netpay-portal/webpay/pay.do',
}
/**
 * 银联商户类
 */
class Chinaums {
  constructor(config) {
    this.config = config;
    // 基础参数
    this.baseOptions = {
      requestTimestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
      mid: this.config.mid, // 商户号
    }
  }
  md5Sign(data) {
    const md5 = crypto.createHash('md5').update(data).digest('hex');
    return md5;
  }
  objKeySort(arys) {
     // 先用Object内置类的keys方法获取要排序对象的属性名数组，再利用Array的sort方法进行排序
     let newkey = Object.keys(arys).sort();
     let newObj = ''; // 创建一个新的对象，用于存放排好序的键值对
     for (let i = 0; i < newkey.length; i++) {
         // 遍历newkey数组
         if (arys[newkey[i]] === '') {
            continue;
         }
         newObj += [newkey[i]] + '=' + arys[newkey[i]] + '&';
     }
     return newObj.substring(0, newObj.length - 1);
  }
 /**
  * 发送请求到服务器
  * @param {*} params 
  * @param {*} options 
  */
  sendRequest(url, params, resolve, reject) {
    try {
      console.log(params)
      axios.post(url, params).then( body => {
        return resolve(body.data);
    })
    .catch(function (error) {
      throw (new Error(error));
    });
    } catch (ex) {
      return reject(new Error(`请求发生错误:${ex}`));
    }
  }
  /**
   * 3.6
   * 下单请求
   * @param {*} params.msgType
   */
  createOrder(params) {
    return new Promise((resolve, reject) => {
      let options = {
        msgType: 'WXPay.jsPay' , // 消息类型 WXPay.jsPay :微信公众号支付 trade.jsPay :支付宝 qmf.jspay :全民付 qmf.webPay :无卡 acp.jsPay :银联云闪付
        instMid: 'YUEDANDEFAULT', // 业务类型
      };
      params = Object.assign({}, this.baseOptions, options, params);
      const signstr = `${this.objKeySort(params)}${this.config.key}`
      params.sign = this.md5Sign(signstr)
      const link = `${APIURL.payUrl}?${querystring.stringify(params)}`;
      console.log(link)
      return link
    })
  }
  /**
   * 4.0
   * 支付结果查询
   * @param {*} params 配置信息
   * @return Promise<object> 查询的用户数据
   */
  queryOrder(params) {
    return new Promise((resolve, reject) => {
      // 本接口的固定参数
      let options = {
        msgType: 'query',
        instMid: 'YUEDANDEFAULT', // 业务类型
      };
      params = Object.assign({}, this.baseOptions, options, params);
      const signstr = `${this.objKeySort(params)}${this.config.key}`;
      params.sign = this.md5Sign(signstr);
      this.sendRequest(APIURL.commonUrl, params, resolve, reject)
    })
  }
  /**
   * 7.3	银联订单退款请求
   * @param {*} params 
   * @return 订单退款回调结果
   */
  refunds (params) {
    return new Promise((resolve, reject) => {
      let options = {
        msgType: 'refund', // 消息类型
        instMid: 'YUEDANDEFAULT', // 业务类型
      };
      params = Object.assign({}, this.baseOptions, options, params);
      console.log(this.objKeySort(params))
      const signstr = `${this.objKeySort(params)}${this.config.key}`;
      params.sign = this.md5Sign(signstr);
      this.sendRequest(APIURL.commonUrl, params, resolve, reject);
    });
  }
  /**
   * 8.1	银联订单退货请求
   * @param {*} params 
   * @return 退货回调结果
   * 若多次退货，且后续退货上送的merOrderId和refundOrderId字段与之前退货上送的值一致，
   * 将不会走退货逻辑，而是返回已有退货订单的退货信息
   */
  queryBackGoods(params) {
    return new Promise((resolve, reject) => {
      let options = {
        msgType: 'refundQuery', // 消息类型
      };
      params = Object.assign({}, this.baseOptions, options, params);
      const signstr = `${this.objKeySort(params)}${this.config.key}`;
      params.sign = this.md5Sign(signstr);
      this.sendRequest(APIURL.commonUrl, params, resolve, reject)
    });
  }
  /**
   * 9.1	关闭订单请求
   * @param {*} params 
   * @return 结果
   */
  close(params) {
    return new Promise((resolve, reject) => {
      let options = {
        msgType: 'close', // 消息类型
        instMid: 'YUEDANDEFAULT', // 业务类型
      };
      params = Object.assign({}, this.baseOptions, options, params);
      const signstr = `${this.objKeySort(params)}${this.config.key}`;
      params.sign = this.md5Sign(signstr);
      this.sendRequest(APIURL.commonUrl, params, resolve, reject)
    });
  }
  /**
   * * 11.1	支付结果通知
   * @param {*} params 
   * @return 结果
   */
  getPayResult(params) {
    return new Promise((resolve, reject) => {
      let options = {
        instMid: 'YUEDANDEFAULT', // 消息类型
        payTime: moment().format('YYYY-MM-DD HH:mm:ss'),
        settleDate: moment().format('YYYY-MM-DD')
      };
      params = Object.assign({}, this.baseOptions, options, params);
      const signstr = `${this.objKeySort(params)}${this.config.key}`;
      params.sign = this.md5Sign(signstr);
      console.log(params)
      this.sendRequest(APIURL.commonUrl, params, resolve, reject)
    });
  }
}
module.exports = Chinaums;