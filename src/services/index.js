import FetchInterceptor from 'fetch-interceptor';

export const interceptor = (token) => FetchInterceptor.register({
  onBeforeRequest(request, controller) {
    request.headers.set('Authorization', `Bearer ${token}`)
  },
});
