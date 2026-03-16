import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SideBiz Navi - 副業診断テスト',
    description: '7つの質問に答えるだけで、あなたにぴったりの副業が見つかる無料診断テスト。',
    openGraph: {
        title: 'SideBiz Navi - 副業診断テスト',
        description: '7つの質問に答えるだけで、あなたにぴったりの副業が見つかる無料診断テスト。',
        type: 'website',
        locale: 'ja_JP',
    },
};

export default function DiagnosisLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
