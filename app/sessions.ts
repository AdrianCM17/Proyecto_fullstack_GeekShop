// app/sessions.ts
import { createCookieSessionStorage, Session } from '@remix-run/node'; // or cloudflare/deno

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // a Cookie from `createCookie` or the CookieOptions to create one
    cookie: {
      name: '__session',

      // all of these are optional
      domain: 'localhost',
      // Expires can also be set (although maxAge overrides it when used in combination).
      // Note that this method is NOT recommended as `new Date` creates only one date on each server deployment, not a dynamic date in the future!
      //
      // expires: new Date(Date.now() + 60_000),
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
      sameSite: 'lax',
      secrets: ['s3cret1'],
      secure: true,
    },
  });

  export const getSessionSimplified = async (request :Request):Promise<Session> => {
    const session = await getSession(request.headers.get('Cookie'));
    return session;
  };
  
export { getSession, commitSession, destroySession };
