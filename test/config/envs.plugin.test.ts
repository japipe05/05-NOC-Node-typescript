import { test,describe,expect ,jest} from '@jest/globals';
import { envs } from '../../src/config/plugins/envs.plugin';
describe('envs.plugin.ts',()=>{
    test('should return env options',()=>{
        //console.log(envs);
        expect(envs).toEqual({
                PORT: 3000,
                MAILER_SERVICE: 'gmail',
                MAILER_EMAIL: 'felipehuchija@gmail.com',
                MAILER_SECRET_KEY: 'pitekqefwcwmlpvd',
                PROD: false,
                MONGO_URL: 'mongodb://testfelipe:123456@localhost:27017',
                MONGO_DB_NAME: 'NOC-test',
                MONGO_USER: 'testfelipe',
                MONGO_PASS: '123456'
              });
    });
    test('should return error if not found environment', async()=>{
        jest.resetModules();
        process.env.PORT='ABC';
        try {
            await import('../../src/config/plugins/envs.plugin');
            expect(true).toEqual(false);
        } catch (error) {
            //console.log(error)
            expect(`${error}aa`).toContain('EnvVarError: env-var: \"PORT\" should be a valid integer');
        }
    });
});