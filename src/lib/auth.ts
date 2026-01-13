import { cookies } from 'next/headers';

// In production, use environment variables for these
const ADMIN_PASSWORD = 'naityve2026'; // Change this!
const SESSION_SECRET = 'your-secret-key-change-this';

export async function verifyPassword(password: string): Promise<boolean> {
  return password === ADMIN_PASSWORD;
}

export async function createSession(): Promise<string> {
  // Simple session token - in production use a proper JWT or session library
  const token = Buffer.from(`${SESSION_SECRET}-${Date.now()}`).toString('base64');
  return token;
}

export async function verifySession(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin-session');
  
  if (!session?.value) {
    return false;
  }
  
  try {
    const decoded = Buffer.from(session.value, 'base64').toString();
    return decoded.startsWith(SESSION_SECRET);
  } catch {
    return false;
  }
}

export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set('admin-session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });
}

export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('admin-session');
}
