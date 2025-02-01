// Cookie nomlari uchun konstantalar
export const COOKIES = {
  CART: 'shopping-cart',
  AUTH_TOKEN: 'auth-token',
  USER_PREFERENCES: 'user-preferences',
  LANGUAGE: 'selected-language',
  THEME: 'site-theme',
} as const;


export const COOKIE_OPTIONS = {

  maxAge: 30 * 24 * 60 * 60,
  
  httpOnly: true,
  
  secure: process.env.NODE_ENV === 'production',
  
  sameSite: 'strict' as const,
 
  domain: process.env.NODE_ENV === 'production' ? '.yourdomain.com' : 'localhost',
 
  path: '/',
};


export const CookieUtils = {
  
  setCookie: (name: string, value: string) => {
    document.cookie = `${name}=${value}; path=${COOKIE_OPTIONS.path}; max-age=${COOKIE_OPTIONS.maxAge}`;
  },

  
  getCookie: (name: string): string | null => {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  },

  
  deleteCookie: (name: string) => {
    document.cookie = `${name}=; path=${COOKIE_OPTIONS.path}; max-age=0`;
  },
}; 