import { OperationGlobalConfigHttp } from '@trayio/cdk-dsl/connector/operation/OperationGlobalConfig';
import { ProductboardTestingAuth } from './ProductboardTestingAuth';

/*
 * IMPORTANT NOTE: DO NOT DELETE THIS FILE
 * This is a global configuration that is used by all operations in the connector.
 * Update the baseUrl to the base url of the API.
 * To configure the auth use the withBearerToken method or use addHeader method to add custom headers.
 *
 * IMPORTANT NOTE: Do not change the name of the variable `globalConfigHttp` as it is used by the internal Raw Http Operation.
 * You can ignore this configuration if you have disabled the Raw Http Operation in connector.json
 */
export const globalConfigHttp =
	OperationGlobalConfigHttp.create<ProductboardTestingAuth>().withBaseUrl(
		(ctx) => 'https://api.productboard.com'
	).withBearerToken((ctx) => ctx.auth!.user.access_token);