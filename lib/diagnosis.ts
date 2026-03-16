import { services, Service } from './services';

export interface Question {
    id: number;
    text: string;
    subtext?: string;
    options: Option[];
}

export interface Option {
    label: string;
    scores: Record<string, number>;
}

export interface DiagnosisResult {
    service: Service;
    score: number;
    matchRate: number;
    reason: string;
}

interface ConditionalReason {
    condition: (answers: number[]) => boolean;
    text: string;
}

export const questions: Question[] = [
    {
        id: 1,
        text: '副業に使える時間は週にどのくらいですか？',
        options: [
            {
                label: '週2〜3時間（スキマ時間だけ）',
                scores: { blog: 3, video: 1, programming: 1, sns: 4, freelance: 2, investment: 5, coaching: 1 },
            },
            {
                label: '週5〜10時間（平日の夜や休日に）',
                scores: { blog: 5, video: 4, programming: 3, sns: 5, freelance: 4, investment: 3, coaching: 3 },
            },
            {
                label: '週10〜20時間（本気で取り組みたい）',
                scores: { blog: 4, video: 5, programming: 5, sns: 4, freelance: 5, investment: 2, coaching: 5 },
            },
            {
                label: '週20時間以上（将来独立も視野に）',
                scores: { blog: 3, video: 5, programming: 5, sns: 3, freelance: 5, investment: 1, coaching: 5 },
            },
        ],
    },
    {
        id: 2,
        text: 'どのくらいの期間で成果を出したいですか？',
        subtext: '理想のペースを選んでください',
        options: [
            {
                label: '1ヶ月以内に収入がほしい',
                scores: { blog: 0, video: 3, programming: 2, sns: 1, freelance: 5, investment: 2, coaching: 2 },
            },
            {
                label: '3ヶ月くらいで軌道に乗せたい',
                scores: { blog: 3, video: 4, programming: 4, sns: 3, freelance: 4, investment: 3, coaching: 3 },
            },
            {
                label: '半年〜1年かけて着実に',
                scores: { blog: 5, video: 4, programming: 5, sns: 5, freelance: 3, investment: 4, coaching: 4 },
            },
            {
                label: '長期的にじっくり育てたい',
                scores: { blog: 5, video: 3, programming: 4, sns: 4, freelance: 2, investment: 5, coaching: 5 },
            },
        ],
    },
    {
        id: 3,
        text: 'あなたの強みに近いのはどれですか？',
        options: [
            {
                label: '文章を書くこと・情報をまとめること',
                scores: { blog: 5, video: 1, programming: 2, sns: 3, freelance: 4, investment: 1, coaching: 3 },
            },
            {
                label: '映像やデザインなどクリエイティブ作業',
                scores: { blog: 2, video: 5, programming: 3, sns: 4, freelance: 4, investment: 0, coaching: 2 },
            },
            {
                label: '論理的に考えること・技術的なこと',
                scores: { blog: 2, video: 2, programming: 5, sns: 1, freelance: 3, investment: 4, coaching: 3 },
            },
            {
                label: '人と話すこと・コミュニケーション',
                scores: { blog: 2, video: 3, programming: 1, sns: 5, freelance: 3, investment: 1, coaching: 5 },
            },
        ],
    },
    {
        id: 4,
        text: '副業で最も重視したいことは？',
        options: [
            {
                label: 'とにかく収入を増やしたい',
                scores: { blog: 3, video: 4, programming: 5, sns: 3, freelance: 5, investment: 4, coaching: 4 },
            },
            {
                label: 'スキルを身につけて市場価値を上げたい',
                scores: { blog: 3, video: 4, programming: 5, sns: 3, freelance: 3, investment: 2, coaching: 4 },
            },
            {
                label: '自分のペースで自由に働きたい',
                scores: { blog: 5, video: 3, programming: 3, sns: 5, freelance: 3, investment: 5, coaching: 3 },
            },
            {
                label: '将来的に独立・起業につなげたい',
                scores: { blog: 4, video: 3, programming: 4, sns: 4, freelance: 3, investment: 2, coaching: 5 },
            },
        ],
    },
    {
        id: 5,
        text: '副業の初期投資はどのくらいできますか？',
        subtext: '学習費用や機材費を含む',
        options: [
            {
                label: 'ほぼゼロ（無料で始めたい）',
                scores: { blog: 4, video: 1, programming: 2, sns: 5, freelance: 4, investment: 1, coaching: 3 },
            },
            {
                label: '月1,000〜5,000円くらい',
                scores: { blog: 5, video: 3, programming: 3, sns: 4, freelance: 3, investment: 3, coaching: 3 },
            },
            {
                label: '月1〜3万円くらい',
                scores: { blog: 3, video: 4, programming: 5, sns: 3, freelance: 3, investment: 4, coaching: 4 },
            },
            {
                label: '3万円以上かけてもOK',
                scores: { blog: 2, video: 5, programming: 5, sns: 2, freelance: 2, investment: 5, coaching: 5 },
            },
        ],
    },
    {
        id: 6,
        text: '今のITスキルレベルは？',
        options: [
            {
                label: 'スマホは使えるがPCは苦手',
                scores: { blog: 2, video: 1, programming: 0, sns: 5, freelance: 2, investment: 3, coaching: 3 },
            },
            {
                label: 'PCで基本的な作業はできる',
                scores: { blog: 4, video: 3, programming: 2, sns: 4, freelance: 4, investment: 3, coaching: 4 },
            },
            {
                label: 'ExcelやPowerPointは得意',
                scores: { blog: 4, video: 3, programming: 3, sns: 3, freelance: 5, investment: 4, coaching: 4 },
            },
            {
                label: 'プログラミングやデザインの経験あり',
                scores: { blog: 3, video: 4, programming: 5, sns: 3, freelance: 5, investment: 3, coaching: 3 },
            },
        ],
    },
    {
        id: 7,
        text: '理想の収入タイプは？',
        options: [
            {
                label: '毎月安定した収入がほしい',
                scores: { blog: 2, video: 4, programming: 4, sns: 2, freelance: 5, investment: 3, coaching: 4 },
            },
            {
                label: '最初は少なくても、どんどん伸びる収入',
                scores: { blog: 5, video: 3, programming: 4, sns: 5, freelance: 2, investment: 4, coaching: 4 },
            },
            {
                label: '作業しなくても入ってくる不労所得',
                scores: { blog: 5, video: 2, programming: 2, sns: 3, freelance: 0, investment: 5, coaching: 2 },
            },
            {
                label: '高単価で大きく稼ぎたい',
                scores: { blog: 2, video: 4, programming: 5, sns: 3, freelance: 4, investment: 3, coaching: 5 },
            },
        ],
    },
];

const conditionalReasons: Record<string, ConditionalReason[]> = {
    blog: [
        { condition: (a) => a[6] === 1 || a[6] === 2, text: '伸びる収入や不労所得を望むあなたには、ブログ・アフィリエイトが最適です。一度書いた記事が24時間365日集客し続ける「資産型」のビジネス。月1,000円程度の低コストで始められ、着実に積み上げれば月10万円以上も目指せます。' },
        { condition: (a) => a[2] === 0, text: '文章力を活かせるブログ・アフィリエイトがぴったりです。あなたの知識や経験を記事にまとめることで、読者に価値を届けながら収益化できます。書けば書くほど資産が積み上がる、ストック型の副業です。' },
        { condition: (a) => a[3] === 2, text: '自分のペースで自由に働きたいというご希望に、ブログは最適です。締め切りに追われることなく、好きな時間に好きな場所で記事を書けます。続ければ続けるほどアクセスと収益が伸びていきます。' },
        { condition: () => true, text: 'ブログ・アフィリエイトは、低コストで始められるストック型の副業です。記事を資産として積み上げることで、長期的に安定した収入源を構築できます。' },
    ],
    video: [
        { condition: (a) => a[2] === 1, text: 'クリエイティブな強みを持つあなたには、動画編集がぴったりです。YouTubeやSNSの動画需要は右肩上がりで、スキルを身につければ案件に困ることはありません。1本5,000〜50,000円の報酬が目安です。' },
        { condition: (a) => a[1] === 0 || a[1] === 1, text: '早く収入を得たいとのこと。動画編集は案件数が豊富で、スキルを身につければ比較的早く収入につなげられます。クラウドソーシングで案件を受注し、実績を積めば単価もどんどん上がります。' },
        { condition: (a) => a[3] === 1, text: 'スキルアップを重視するなら、動画編集は市場価値の高いスキルが身につく副業です。映像制作スキルは今後もニーズが高まる一方で、本業への転職にも活かせるキャリア資産になります。' },
        { condition: () => true, text: '需要急増中の動画編集スキルを身につけることで、副業として安定した収入を得ながら、将来的なキャリアの選択肢も広がります。' },
    ],
    programming: [
        { condition: (a) => a[3] === 0 || a[6] === 3, text: '高収入を目指すあなたには、プログラミング・Web制作が最適です。案件単価が他の副業と比べて圧倒的に高く、月10〜50万円以上も十分狙えます。学習期間は必要ですが、投資に見合うリターンがあります。' },
        { condition: (a) => a[5] === 3, text: 'プログラミングやデザインの経験をお持ちなら、すぐにWeb制作の副業を始められます。クラウドソーシングやエージェント経由で高単価案件を受注し、既存スキルを収入に変えましょう。' },
        { condition: (a) => a[2] === 2, text: '論理的思考が得意なあなたにはプログラミングが向いています。コードを書く作業は論理的思考力の延長線上にあり、新しいスキルを効率的に習得できるでしょう。' },
        { condition: () => true, text: 'プログラミング・Web制作は、高単価案件が多く、スキルが蓄積されるほど収入が伸びる副業です。将来の独立やキャリアチェンジにもつながります。' },
    ],
    sns: [
        { condition: (a) => a[4] === 0, text: '初期費用ゼロで始めたいあなたには、SNS運用がぴったりです。スマホ1台で今日から始められ、フォロワーが増えればPR案件や自社商品の販売で収益化できます。' },
        { condition: (a) => a[2] === 3, text: 'コミュニケーション力を活かせるSNS運用があなたに最適です。フォロワーとの交流を楽しみながら影響力を蓄積し、企業案件やアフィリエイトで安定した収益源を作れます。' },
        { condition: (a) => a[3] === 3, text: '将来の独立を見据えるなら、SNSでの発信は最強の武器になります。個人ブランドを構築することで、あらゆるビジネスの集客基盤として機能します。' },
        { condition: () => true, text: 'SNS運用は初期費用ゼロで始められ、影響力が資産として蓄積される副業です。他の副業との相乗効果も高く、ビジネスの入口として最適です。' },
    ],
    freelance: [
        { condition: (a) => a[1] === 0, text: '1ヶ月以内に収入がほしいあなたには、フリーランス・スキル販売が最適です。今持っているスキルをすぐに収入に変えられる即効性の高い副業。クラウドソーシングに登録すれば、今日から案件を探せます。' },
        { condition: (a) => a[6] === 0, text: '毎月安定した収入を望むなら、フリーランスとしてのスキル販売がおすすめです。納品すれば確実に報酬が入るフロー型収入で、実績を積めば継続案件やリピーターがつきます。' },
        { condition: (a) => a[5] >= 2, text: 'PCスキルを活かせるフリーランス副業があなたに最適です。デザイン・ライティング・事務作業など、幅広い案件から自分に合った仕事を選んで取り組めます。' },
        { condition: () => true, text: '今あるスキルをすぐに収入に変えられるフリーランス・スキル販売。確実に報酬が入る安心感があり、実績を積めば単価もアップしていきます。' },
    ],
    investment: [
        { condition: (a) => a[0] === 0 && a[6] === 2, text: 'スキマ時間しかなく不労所得を望むあなたには、投資・資産運用が最適解です。一度仕組みを作れば、作業なしで資産が増えていきます。NISAやiDeCoを活用すれば税制優遇も受けられます。' },
        { condition: (a) => a[3] === 2, text: '自分のペースで自由に進めたいというご希望に、投資は最適です。日々の作業は不要で、本業に全くとしないのが最大の魅力。長期運用で複利の力を味方につけましょう。' },
        { condition: (a) => a[4] === 3, text: 'しっかり投資できる余裕があるなら、資産運用で「お金に働いてもらう」のが最も効率的です。株式・投資信託・不動産など、分散投資でリスクを抑えながら資産を増やせます。' },
        { condition: () => true, text: '投資・資産運用は、時間を使わずに資産を増やせる不労所得型の副収入です。長期的な視点で複利の力を活かすことで、着実に資産を成長させられます。' },
    ],
    coaching: [
        { condition: (a) => a[2] === 3 && a[3] === 3, text: 'コミュニケーション力が強みで独立も視野に入れているあなたには、コーチング・教える系副業が最適です。あなたの経験を必要としている人は必ずいます。高単価で感謝されるやりがいのある副業です。' },
        { condition: (a) => a[6] === 3, text: '高単価で大きく稼ぎたいなら、コーチング・講座ビジネスが最適です。1対1のコーチングなら月額5〜20万円、オンライン講座なら受講人数に応じてスケールも可能です。' },
        { condition: (a) => a[0] >= 2, text: '週10時間以上の時間を確保できるあなたなら、コーチングや講座で本格的に収益化できます。自分の経験や知識をカリキュラムにまとめ、売上を伸ばしていきましょう。' },
        { condition: () => true, text: '自分の知識や経験を他の人に教えるコーチング・教える系副業。高単価になりやすく、人の成長を支援するやりがいも大きい、充実感のある副業です。' },
    ],
};

function selectReason(serviceId: string, answers: number[], fallbackReason: string): string {
    const reasons = conditionalReasons[serviceId];
    if (reasons) {
        for (const r of reasons) {
            if (r.condition(answers)) return r.text;
        }
    }
    return fallbackReason;
}

export function calculateResults(answers: number[]): DiagnosisResult[] {
    const scoreMap: Record<string, number> = {};
    services.forEach((s) => { scoreMap[s.id] = 0; });
    answers.forEach((optionIndex, questionIndex) => {
        const question = questions[questionIndex];
        if (question && question.options[optionIndex]) {
            Object.entries(question.options[optionIndex].scores).forEach(([serviceId, score]) => {
                if (scoreMap[serviceId] !== undefined) { scoreMap[serviceId] += score; }
            });
        }
    });
    const results: DiagnosisResult[] = services
        .map((service) => ({ service, score: scoreMap[service.id] || 0, matchRate: 0, reason: selectReason(service.id, answers, service.tagline) }))
        .sort((a, b) => b.score - a.score);
    const top3 = results.slice(0, 3);
    const topScore = top3[0]?.score || 1;
    return top3.map((r, i) => {
        const scoreRatio = topScore > 0 ? r.score / topScore : 0.5;
        let displayRate: number;
        if (i === 0) displayRate = 73 + Math.round(scoreRatio * 12);
        else if (i === 1) displayRate = 67 + Math.round(scoreRatio * 11);
        else displayRate = 60 + Math.round(scoreRatio * 12);
        return { ...r, matchRate: displayRate };
    });
}
