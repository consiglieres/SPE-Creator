import { CanActivateFn } from '@angular/router';

export const logInGuard: CanActivateFn = (route, state) => {
  const TOCKEN: string | null = localStorage.getItem('tocken')

  if(TOCKEN === null){
    return false
  }
  else{
    return true
  }
};
