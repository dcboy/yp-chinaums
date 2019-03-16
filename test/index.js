// const Config = require('../config/');
const Chinaums = require('../src/chinaums');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
/**
{ accessType: '0',
  bizType: '000000',
  currencyCode: '156',
  encoding: 'UTF-8',
  merId: '898440353313553',
  orderId: '1547629517352',
  queryId: '151901161705179895688',
  respCode: '00',
  respMsg: '成功[0000000]',
  settleAmt: '1',
  settleCurrencyCode: '156',
  settleDate: '0116',
  signMethod: '01',
  signPubKeyCert: '-----BEGIN CERTIFICATE-----\r\nMIIEIDCCAwigAwIBAgIFEDRVM3AwDQYJKoZIhvcNAQEFBQAwITELMAkGA1UEBhMC\r\nQ04xEjAQBgNVBAoTCUNGQ0EgT0NBMTAeFw0xNTEwMjcwOTA2MjlaFw0yMDEwMjIw\r\nOTU4MjJaMIGWMQswCQYDVQQGEwJjbjESMBAGA1UEChMJQ0ZDQSBPQ0ExMRYwFAYD\r\nVQQLEw1Mb2NhbCBSQSBPQ0ExMRQwEgYDVQQLEwtFbnRlcnByaXNlczFFMEMGA1UE\r\nAww8MDQxQDgzMTAwMDAwMDAwODMwNDBA5Lit5Zu96ZO26IGU6IKh5Lu95pyJ6ZmQ\r\n5YWs5Y+4QDAwMDE2NDkzMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\r\ntXclo3H4pB+Wi4wSd0DGwnyZWni7+22Tkk6lbXQErMNHPk84c8DnjT8CW8jIfv3z\r\nd5NBpvG3O3jQ/YHFlad39DdgUvqDd0WY8/C4Lf2xyo0+gQRZckMKEAId8Fl6/rPN\r\nHsbPRGNIZgE6AByvCRbriiFNFtuXzP4ogG7vilqBckGWfAYaJ5zJpaGlMBOW1Ti3\r\nMVjKg5x8t1/oFBkpFVsBnAeSGPJYrBn0irfnXDhOz7hcIWPbNDoq2bJ9VwbkKhJq\r\nVz7j7116pziUcLSFJasnWMnp8CrISj52cXzS/Y1kuaIMPP/1B0pcjVqMNJjowooD\r\nOxID3TZGfk5V7S++4FowVwIDAQABo4HoMIHlMB8GA1UdIwQYMBaAFNHb6YiC5d0a\r\nj0yqAIy+fPKrG/bZMEgGA1UdIARBMD8wPQYIYIEchu8qAQEwMTAvBggrBgEFBQcC\r\nARYjaHR0cDovL3d3dy5jZmNhLmNvbS5jbi91cy91cy0xNC5odG0wNwYDVR0fBDAw\r\nLjAsoCqgKIYmaHR0cDovL2NybC5jZmNhLmNvbS5jbi9SU0EvY3JsMjI3Mi5jcmww\r\nCwYDVR0PBAQDAgPoMB0GA1UdDgQWBBTEIzenf3VR6CZRS61ARrWMto0GODATBgNV\r\nHSUEDDAKBggrBgEFBQcDAjANBgkqhkiG9w0BAQUFAAOCAQEAHMgTi+4Y9g0yvsUA\r\np7MkdnPtWLS6XwL3IQuXoPInmBSbg2NP8jNhlq8tGL/WJXjycme/8BKu+Hht6lgN\r\nZhv9STnA59UFo9vxwSQy88bbyui5fKXVliZEiTUhjKM6SOod2Pnp5oWMVjLxujkk\r\nWKjSakPvV6N6H66xhJSCk+Ref59HuFZY4/LqyZysiMua4qyYfEfdKk5h27+z1MWy\r\nnadnxA5QexHHck9Y4ZyisbUubW7wTaaWFd+cZ3P/zmIUskE/dAG0/HEvmOR6CGlM\r\n55BFCVmJEufHtike3shu7lZGVm2adKNFFTqLoEFkfBO6Y/N6ViraBilcXjmWBJNE\r\nMFF/yA==\r\n-----END CERTIFICATE-----',
  traceNo: '989568',
  traceTime: '0116170557',
  txnAmt: '1',
  txnSubType: '01',
  txnTime: '20190116170517',
  txnType: '01',
  version: '5.1.0',
  signature: 'CJTXVcykQ6Jp8n1xW99V3OSLn4itycTWLHMaNtEVHRXy+iD3yLPTWRwCA23V5BJgAIuY7MuSZIWmi7b7/F8mG+8SwPLZFtaE5AZzDt4U6qh9HpYnoqSmB3me3XsqxfOnuX7UWMiCxTiydrfdk9Cso5Voims1vWuMysrlIHtpXKe5qXojzF8oJqp9zFNaLPOm9jk88W+CtxsQX+tVbu989pWDetVSrUDOM5T2agPlOzj7dz+3BisbVRImYroDboFSrm4D4wHQcaSZBWPOhv6e481SbZ5/kv+TF7U/o0xY/b0vU+1fWYKpOkOvtCu6ZPsEUK/CxIASFHG0GGy6J71f+w==' }
 */
(async () => {
  // let pfxBuffer = fs.readFileSync(path.resolve(`./config/898440353313553.pfx`));
  // console.log(pfxBuffer.toString('base64'))
  // const config = await UnionPay.processPfx(pfxBuffer, Config.password);
  // config.merId = "898440353313553";
  // let pfxBuffer = fs.readFileSync(path.resolve('/Users/mac/test.txt'),'utf-8');
  // console.log(pfxBuffer)
  const chinaums = new Chinaums({
    mid: '898340149000005',
    key:'fcAmtnx7MwismjWNhNKdHC44mNXtnEQeJkRrhKJwyrW2ysRR',
  });
  // const data = { 
  //   accessType: '0',
  //   bizType: '000000',
  //   currencyCode: '156',
  //   encoding: 'UTF-8',
  //   merId: '898440353313553',
  //   orderId: '1547644575226',
  //   queryId: '251901162116153598228',
  //   respCode: '00',
  //   respMsg: '成功[0000000]',
  //   settleAmt: '1',
  //   settleCurrencyCode: '156',
  //   settleDate: '0116',
  //   signMethod: '01',
  //   signPubKeyCert: '-----BEGIN CERTIFICATE-----\r\nMIIEIDCCAwigAwIBAgIFEDRVM3AwDQYJKoZIhvcNAQEFBQAwITELMAkGA1UEBhMC\r\nQ04xEjAQBgNVBAoTCUNGQ0EgT0NBMTAeFw0xNTEwMjcwOTA2MjlaFw0yMDEwMjIw\r\nOTU4MjJaMIGWMQswCQYDVQQGEwJjbjESMBAGA1UEChMJQ0ZDQSBPQ0ExMRYwFAYD\r\nVQQLEw1Mb2NhbCBSQSBPQ0ExMRQwEgYDVQQLEwtFbnRlcnByaXNlczFFMEMGA1UE\r\nAww8MDQxQDgzMTAwMDAwMDAwODMwNDBA5Lit5Zu96ZO26IGU6IKh5Lu95pyJ6ZmQ\r\n5YWs5Y+4QDAwMDE2NDkzMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\r\ntXclo3H4pB+Wi4wSd0DGwnyZWni7+22Tkk6lbXQErMNHPk84c8DnjT8CW8jIfv3z\r\nd5NBpvG3O3jQ/YHFlad39DdgUvqDd0WY8/C4Lf2xyo0+gQRZckMKEAId8Fl6/rPN\r\nHsbPRGNIZgE6AByvCRbriiFNFtuXzP4ogG7vilqBckGWfAYaJ5zJpaGlMBOW1Ti3\r\nMVjKg5x8t1/oFBkpFVsBnAeSGPJYrBn0irfnXDhOz7hcIWPbNDoq2bJ9VwbkKhJq\r\nVz7j7116pziUcLSFJasnWMnp8CrISj52cXzS/Y1kuaIMPP/1B0pcjVqMNJjowooD\r\nOxID3TZGfk5V7S++4FowVwIDAQABo4HoMIHlMB8GA1UdIwQYMBaAFNHb6YiC5d0a\r\nj0yqAIy+fPKrG/bZMEgGA1UdIARBMD8wPQYIYIEchu8qAQEwMTAvBggrBgEFBQcC\r\nARYjaHR0cDovL3d3dy5jZmNhLmNvbS5jbi91cy91cy0xNC5odG0wNwYDVR0fBDAw\r\nLjAsoCqgKIYmaHR0cDovL2NybC5jZmNhLmNvbS5jbi9SU0EvY3JsMjI3Mi5jcmww\r\nCwYDVR0PBAQDAgPoMB0GA1UdDgQWBBTEIzenf3VR6CZRS61ARrWMto0GODATBgNV\r\nHSUEDDAKBggrBgEFBQcDAjANBgkqhkiG9w0BAQUFAAOCAQEAHMgTi+4Y9g0yvsUA\r\np7MkdnPtWLS6XwL3IQuXoPInmBSbg2NP8jNhlq8tGL/WJXjycme/8BKu+Hht6lgN\r\nZhv9STnA59UFo9vxwSQy88bbyui5fKXVliZEiTUhjKM6SOod2Pnp5oWMVjLxujkk\r\nWKjSakPvV6N6H66xhJSCk+Ref59HuFZY4/LqyZysiMua4qyYfEfdKk5h27+z1MWy\r\nnadnxA5QexHHck9Y4ZyisbUubW7wTaaWFd+cZ3P/zmIUskE/dAG0/HEvmOR6CGlM\r\n55BFCVmJEufHtike3shu7lZGVm2adKNFFTqLoEFkfBO6Y/N6ViraBilcXjmWBJNE\r\nMFF/yA==\r\n-----END CERTIFICATE-----',
  //   traceNo: '359822',
  //   traceTime: '0116211643',
  //   txnAmt: '1',
  //   txnSubType: '01',
  //   txnTime: '20190116211615',
  //   txnType: '01',
  //   version: '5.1.0',
  //   signature: 'EZ2rewkvaKzzTFwzo2BWeKBZS9LaI7VKdDwh95Gz7Ar/s135ysVJlpk103ejYwK2F21ACsNpn+nIUJ3HGpjKeu3UWA75zqV1sNhf6345SheVSObVRMwqQx+Q7jv6wkndZRhZSlmeIEWpoCNofPHRvCN41QW82Ksfyp8YPcuqybRfyMvxfr+hJVlybLpnMum5HhUvCMmZkNP6+FAEbNdr+QnjTwd+/hKGoSP0qBtkLb9LcjRMxVQxFmBOdxLnYfaLrFqVAqd57dFyUHDmSr6PYQPAP7u3Z1za9hK364fMiVXvOOUbsTZ8uWmB9Gb+rbfxEfW3GsFCyO5GpImtDyK8EQ=='
  // }

  // const response = Chinaums.verifyTest(data);
  // console.log(`验证信息---verify:${response}`);
  /**
   * 退款流程
   * { requestTimestamp: '2019-03-16 04:15:25',
      mid: '898340149000005',
      msgType: 'refund',
      instMid: 'YUEDANDEFAULT',
      msgSrc: 'WWW.TEST.COM',
      refundAmount: 1,
      platformAmount: 0,
      refundOrderId: '3194201806141508441197500',
      totalAmount: 1,
      merOrderId: '319420180614150753183991',
      tid: '88880001',
      sign: '767b8e6910aebdbf9bb368ee6f523704' }
   * 返回参数结果...{"msgType":"wx.refund","payTime":"2019-03-16 04:15:26","connectSys":"OPENCHANNEL","msgSrc":"WWW.TEST.COM","merName":"仲晶晶二维码测试2","mid":"898340149000005","refundStatus":"SUCCESS","settleDate":"2019-03-16","settleRefId":"00466201244N","tid":"88880001","refundOrderId":"3194201806141508441197500","refundTargetOrderId":"50000710102019031608746652929","totalAmount":1,"targetMid":"265540495","responseTimestamp":"2019-03-16 04:15:29","errCode":"SUCCESS","targetStatus":"SUCCESS","seqId":"00466201245N","merOrderId":"319420180614150753183991","status":"TRADE_SUCCESS","targetSys":"WXPay","sign":"B0ED127DE3A60A881CF7672BEC683EFD"}
   */
  console.log('测试接口开始....')
  const res = await chinaums.getPayResult({
    msgSrc: 'WWW.TEST.COM',
    billNo: '31940000201700002',
    totalAmount: 1,
    refundAmount: 1,
    "goods": JSON.stringify([
      {
          "body": "微信二维码测试",
          "price": "1",
          "goodsName": "微信二维码测试",
          "goodsId": "1",
          "quantity": "1",
          "goodsCategory": "TEST"
      }
  ]),
  //   subOrders: JSON.stringify([
  //     {
  //         totalAmount: 1,
  //         mid: "988460101800203"
  //     }
  //  ]),
    // platformAmount: 0,
    refundOrderId: "3194201806141508441197500",
   // merOrderId: '319420180614150753183991',
    totalAmount: '1',
    // merOrderId: '319420180614150753183991',
    tid: '88880001', // 终端号
  });
  console.log(`返回参数结果...${JSON.stringify(res)}`)
  // 测试接口开始...
  /**
    * {
    * 	accessType: '0',
    * 	bizType: '000000',
    * 	encoding: 'UTF-8',
    * 	merId: '898440353313553',
    * 	orderId: '1547632524375',
    * 	origQryId: '151901161705179895688',
    * 	queryId: '151901161755249910108',
    * 	respCode: '00',
    * 	respMsg: '成功[0000000]',
    * 	signMethod: '01',
    * 	txnAmt: '1',
    * 	txnSubType: '00',
    * 	txnTime: '20190116175524',
    * 	txnType: '04',
    * 	version: '5.1.0',
    * 	signPubKeyCert: '-----BEGIN CERTIFICATE-----\r\nMIIEIDCCAwigAwIBAgIFEDRVM3AwDQYJKoZIhvcNAQEFBQAwITELMAkGA1UEBhMC\r\nQ04xEjAQBgNVBAoTCUNGQ0EgT0NBMTAeFw0xNTEwMjcwOTA2MjlaFw0yMDEwMjIw\r\nOTU4MjJaMIGWMQswCQYDVQQGEwJjbjESMBAGA1UEChMJQ0ZDQSBPQ0ExMRYwFAYD\r\nVQQLEw1Mb2NhbCBSQSBPQ0ExMRQwEgYDVQQLEwtFbnRlcnByaXNlczFFMEMGA1UE\r\nAww8MDQxQDgzMTAwMDAwMDAwODMwNDBA5Lit5Zu96ZO26IGU6IKh5Lu95pyJ6ZmQ\r\n5YWs5Y+4QDAwMDE2NDkzMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\r\ntXclo3H4pB+Wi4wSd0DGwnyZWni7+22Tkk6lbXQErMNHPk84c8DnjT8CW8jIfv3z\r\nd5NBpvG3O3jQ/YHFlad39DdgUvqDd0WY8/C4Lf2xyo0+gQRZckMKEAId8Fl6/rPN\r\nHsbPRGNIZgE6AByvCRbriiFNFtuXzP4ogG7vilqBckGWfAYaJ5zJpaGlMBOW1Ti3\r\nMVjKg5x8t1/oFBkpFVsBnAeSGPJYrBn0irfnXDhOz7hcIWPbNDoq2bJ9VwbkKhJq\r\nVz7j7116pziUcLSFJasnWMnp8CrISj52cXzS/Y1kuaIMPP/1B0pcjVqMNJjowooD\r\nOxID3TZGfk5V7S++4FowVwIDAQABo4HoMIHlMB8GA1UdIwQYMBaAFNHb6YiC5d0a\r\nj0yqAIy+fPKrG/bZMEgGA1UdIARBMD8wPQYIYIEchu8qAQEwMTAvBggrBgEFBQcC\r\nARYjaHR0cDovL3d3dy5jZmNhLmNvbS5jbi91cy91cy0xNC5odG0wNwYDVR0fBDAw\r\nLjAsoCqgKIYmaHR0cDovL2NybC5jZmNhLmNvbS5jbi9SU0EvY3JsMjI3Mi5jcmww\r\nCwYDVR0PBAQDAgPoMB0GA1UdDgQWBBTEIzenf3VR6CZRS61ARrWMto0GODATBgNV\r\nHSUEDDAKBggrBgEFBQcDAjANBgkqhkiG9w0BAQUFAAOCAQEAHMgTi+4Y9g0yvsUA\r\np7MkdnPtWLS6XwL3IQuXoPInmBSbg2NP8jNhlq8tGL/WJXjycme/8BKu+Hht6lgN\r\nZhv9STnA59UFo9vxwSQy88bbyui5fKXVliZEiTUhjKM6SOod2Pnp5oWMVjLxujkk\r\nWKjSakPvV6N6H66xhJSCk+Ref59HuFZY4/LqyZysiMua4qyYfEfdKk5h27+z1MWy\r\nnadnxA5QexHHck9Y4ZyisbUubW7wTaaWFd+cZ3P/zmIUskE/dAG0/HEvmOR6CGlM\r\n55BFCVmJEufHtike3shu7lZGVm2adKNFFTqLoEFkfBO6Y/N6ViraBilcXjmWBJNE\r\nMFF/yA==\r\n-----END CERTIFICATE-----',
    * 	signature: 'hJdB17OMvw2XfwyprXtsaTR5A35q/FdAzvqy0sATK+aZTmHdqTQDe/buz8gAlXf4FGibgr/2aYusRXSkaLHd7GTHpkFkLsqgjWWKSQDr+o/SvLjN8YrgEr4VYv2SOM9yKDjdTlIn+E0BpbVAX1VeD+aeYolDJXbSbCdM3KiPSyW07ofHfDZREzl2AA6zyY6Nc1uheS/GhpwA51cLd5QOsEL0/B+PqQPxpXjHIeGZTTMt9R5j7FRjdX2qH+F8XFML0auAHNdRcjTCUnH1GSoNPbyGzhPcnzBqkhChX1adyMc4HtdAfH4jOdAV4Oji9cvTFuWzg7R88ugF8VOobgLzvQ=='
    * }
  */
  // const response = await unionPay.refunds({
  //   txnAmt: 1,
  //   orderId: (new Date()).getTime().toString(),
  //   backUrl: 'http://6a3fdecd.ngrok.yopoint.cc:81/unionpay/gateway/notify/5c3eeaeccb2e21b9b64f35e0',
  //   origQryId: '151901161705179895688',
  // });

  /** 退款回调
{
	"accessType": "0",
	"bizType": "000000",
	"currencyCode": "156",
	"encoding": "UTF-8",
	"merId": "898440353313553",
	"orderId": "1547632524375",
	"origQryId": "151901161705179895688",
	"queryId": "151901161755249910108",
	"respCode": "00",
	"respMsg": "成功[0000000]",
	"settleAmt": "1",
	"settleCurrencyCode": "156",
	"settleDate": "0116",
	"signMethod": "01",
	"signPubKeyCert": "-----BEGIN CERTIFICATE-----\r\nMIIEIDCCAwigAwIBAgIFEDRVM3AwDQYJKoZIhvcNAQEFBQAwITELMAkGA1UEBhMC\r\nQ04xEjAQBgNVBAoTCUNGQ0EgT0NBMTAeFw0xNTEwMjcwOTA2MjlaFw0yMDEwMjIw\r\nOTU4MjJaMIGWMQswCQYDVQQGEwJjbjESMBAGA1UEChMJQ0ZDQSBPQ0ExMRYwFAYD\r\nVQQLEw1Mb2NhbCBSQSBPQ0ExMRQwEgYDVQQLEwtFbnRlcnByaXNlczFFMEMGA1UE\r\nAww8MDQxQDgzMTAwMDAwMDAwODMwNDBA5Lit5Zu96ZO26IGU6IKh5Lu95pyJ6ZmQ\r\n5YWs5Y+4QDAwMDE2NDkzMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\r\ntXclo3H4pB+Wi4wSd0DGwnyZWni7+22Tkk6lbXQErMNHPk84c8DnjT8CW8jIfv3z\r\nd5NBpvG3O3jQ/YHFlad39DdgUvqDd0WY8/C4Lf2xyo0+gQRZckMKEAId8Fl6/rPN\r\nHsbPRGNIZgE6AByvCRbriiFNFtuXzP4ogG7vilqBckGWfAYaJ5zJpaGlMBOW1Ti3\r\nMVjKg5x8t1/oFBkpFVsBnAeSGPJYrBn0irfnXDhOz7hcIWPbNDoq2bJ9VwbkKhJq\r\nVz7j7116pziUcLSFJasnWMnp8CrISj52cXzS/Y1kuaIMPP/1B0pcjVqMNJjowooD\r\nOxID3TZGfk5V7S++4FowVwIDAQABo4HoMIHlMB8GA1UdIwQYMBaAFNHb6YiC5d0a\r\nj0yqAIy+fPKrG/bZMEgGA1UdIARBMD8wPQYIYIEchu8qAQEwMTAvBggrBgEFBQcC\r\nARYjaHR0cDovL3d3dy5jZmNhLmNvbS5jbi91cy91cy0xNC5odG0wNwYDVR0fBDAw\r\nLjAsoCqgKIYmaHR0cDovL2NybC5jZmNhLmNvbS5jbi9SU0EvY3JsMjI3Mi5jcmww\r\nCwYDVR0PBAQDAgPoMB0GA1UdDgQWBBTEIzenf3VR6CZRS61ARrWMto0GODATBgNV\r\nHSUEDDAKBggrBgEFBQcDAjANBgkqhkiG9w0BAQUFAAOCAQEAHMgTi+4Y9g0yvsUA\r\np7MkdnPtWLS6XwL3IQuXoPInmBSbg2NP8jNhlq8tGL/WJXjycme/8BKu+Hht6lgN\r\nZhv9STnA59UFo9vxwSQy88bbyui5fKXVliZEiTUhjKM6SOod2Pnp5oWMVjLxujkk\r\nWKjSakPvV6N6H66xhJSCk+Ref59HuFZY4/LqyZysiMua4qyYfEfdKk5h27+z1MWy\r\nnadnxA5QexHHck9Y4ZyisbUubW7wTaaWFd+cZ3P/zmIUskE/dAG0/HEvmOR6CGlM\r\n55BFCVmJEufHtike3shu7lZGVm2adKNFFTqLoEFkfBO6Y/N6ViraBilcXjmWBJNE\r\nMFF/yA==\r\n-----END CERTIFICATE-----",
	"traceNo": "464074",
	"traceTime": "0116175524",
	"txnAmt": "1",
	"txnSubType": "00",
	"txnTime": "20190116175524",
	"txnType": "04",
	"version": "5.1.0",
	"signature": "dewRNymSV8xSidMrY2/q0wuQpvmkSZIWhD1C4HXQYPyg6bDzCAiAKFlacEY7IR9fw3mnNU+W5opO6SwZ59fsiOWovbwpiFhNQmPdNImA+5gk6swWNW2KsHdkcWvG5WMIYscTF7beC0Dk2AfmyrqNxCptfC2H1xWuId57KD50j6PbXkEpxP/O+P+rsbfIFjB8mcEospyeI6cBjGnN3n1WCxD/FhIu7mpx2rSt1E+nbCOMu4x7kFFGtc+CAJtIJLhfn3k8Y9MpTV3stS1bfotxocjwh6xt9jqS1VCbEigV8byI7SD1ffG7xQEyG69ix2hpthgOVKKateTujXvSoj/E0A=="
}
  */
})();