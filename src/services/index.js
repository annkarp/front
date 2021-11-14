import FetchInterceptor from 'fetch-interceptor';
import { getUser } from '../storage'

FetchInterceptor.register({
  onBeforeRequest(request, controller) {
    const user = getUser();
    user && request.headers.set('Authorization', `Bearer ${user.token}`)
  },
});
