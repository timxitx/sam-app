const axios = require('axios');
const url = "http://AwsCd-Paysl-6MYZ8GROCH6B-1584510116.us-east-2.elb.amazonaws.com:8080";

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    try {
        const ret = await axios.get(url);
        const response = await ret.data;
        
        // response = {
        //     'statusCode': 200,
        //     'body': JSON.stringify({
        //         message: ret.data
        //     })
        // }
        return response;

    } catch (err) {
        console.log(err);
        return err;
    }
};
