import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SideBiz Navi - あなたに最適な副業が見つかる診断',
  description: '60秒の無料診断で、あなたにぴったりの副業が見つかる。スキル・時間・目標に合わせて、7つの質問でベストな副業を提案します。',
  openGraph: {
    title: 'SideBiz Navi - あなたに最適な副業が見つかる診断',
    description: '60秒の無料診断で、あなたにぴったりの副業が見つかる。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
