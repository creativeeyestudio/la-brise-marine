import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  // Exclure les chemins publics, les fichiers Next.js internes et les API
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  // Si la locale actuelle est "default", déterminer la langue à utiliser
  if (req.nextUrl.locale === 'default') {
    // Obtenir la langue depuis le cookie NEXT_LOCALE ou l'en-tête Accept-Language
    const locale =
      req.cookies.get('NEXT_LOCALE')?.value ||
      req.headers.get('accept-language')?.split(',')[0]?.toLowerCase() ||
      'en'; // Par défaut en anglais

    // Construire la nouvelle URL avec la locale détectée
    const redirectUrl = new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url);

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}
