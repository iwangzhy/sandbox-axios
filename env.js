import dotenv from 'dotenv'
dotenv.config();

const baseUrl = process.env.API_URL

const env = {
  token: process.env.API_TOKEN,
  url: {
    baseUrl,
    models: baseUrl + '/v1/models'
  }
}
export default env;