import { Container } from 'inversify';
import { AuthService } from '@services/auth.service';
import { MockApiService } from '@services/mock-api.service';
import { SERVICE } from '@core/types/services';

const container = new Container();
console.log("Registering services in container...");

container.bind<AuthService>(SERVICE.AuthService).to(AuthService);
container.bind<MockApiService>(SERVICE.MockApiService).to(MockApiService);

export { container };
