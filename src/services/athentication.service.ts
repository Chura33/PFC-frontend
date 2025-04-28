// import { AutheEndpoints } from './endpoints';

import { SignInI, SignInResI } from '@/types/auth';
import { RequestService } from './request.service';
import { ApiDataResI } from '@/types/api.type';
import { AutheEndpoints } from './endpoints';

class AuthService {
  signIn = async (data: SignInI) => {
    return await RequestService.post<ApiDataResI<SignInResI>>(AutheEndpoints.signIn, data);
  };
}

export default new AuthService();
