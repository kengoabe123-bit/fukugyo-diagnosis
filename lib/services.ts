export interface Service {
    id: string;
    slug: string;
    name: string;
    nameEn: string;
    tagline: string;
    description: string;
    category: string;
    target: string;
    targetAge: string[];
    features: string[];
    pros: string[];
    cons: string[];
    recommended: string[];
    affiliateUrl: string;
    ctaText: string;
    color: string;
}

export const services: Service[] = [
    {
        id: 'blog',
        slug: 'blog',
        name: 'ブログ・アフィリエイト',
        nameEn: 'Blog & Affiliate',
        tagline: '知識や経験を記事にして、資産型の収入を作る',
        description: '自分の得意分野や体験をブログ記事にまとめ、広告やアフィリエイトで収益化。初期費用が少なく、記事が資産として蓄積されるストック型の副業。',
        category: 'コンテンツ制作',
        target: '文章を書くのが好きな方・専門知識を活かしたい方',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            '初期費用が月1,000円程度と低コスト',
            '書いた記事が資産として蓄積される',
            '自分のペースで作業できる',
            '専門知識や体験を収益化できる',
        ],
        pros: [
            'ストック型で寝ている間も収益が生まれる',
            '場所・時間を選ばず作業可能',
            'スキルが他の副業にも応用できる',
        ],
        cons: [
            '成果が出るまで3〜6ヶ月かかる',
            'SEOやライティングの学習が必要',
        ],
        recommended: ['文章を書くのが好き', '長期的な資産を作りたい', 'コツコツ継続できる'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#4CAF50',
    },
    {
        id: 'video',
        slug: 'video',
        name: '動画編集・YouTube',
        nameEn: 'Video Editing & YouTube',
        tagline: '映像スキルで稼ぐ、需要急増の注目副業',
        description: 'YouTube動画やSNSリール、企業プロモーション動画の編集を請け負う副業。需要が右肩上がりで、スキルを身につければ安定した収入が見込める。',
        category: 'クリエイティブ',
        target: '動画や映像に興味がある方・クリエイティブな仕事がしたい方',
        targetAge: ['20代', '30代', '40代'],
        features: [
            '需要が急増中で案件が豊富',
            '1本あたり5,000〜50,000円の報酬が目安',
            'ポートフォリオを作れば単価が上がる',
            '在宅で完結する仕事がほとんど',
        ],
        pros: [
            '需要が高く仕事を見つけやすい',
            'スキルアップで単価がどんどん上がる',
            '自分のYouTubeチャンネルにも応用可能',
        ],
        cons: [
            '編集ソフトの習得に時間がかかる',
            'PCスペックがある程度必要',
        ],
        recommended: ['映像制作に興味がある', 'クリエイティブな作業が好き', '即収入を得たい'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#F44336',
    },
    {
        id: 'programming',
        slug: 'programming',
        name: 'プログラミング・Web制作',
        nameEn: 'Programming & Web Development',
        tagline: '高単価案件が狙える、IT時代の王道スキル',
        description: 'Webサイト制作やアプリ開発を副業として行う。学習コストはあるが、高単価案件が多く、スキルが身につけば安定した収入源になる。',
        category: 'IT・テクノロジー',
        target: 'IT・テクノロジーに興味がある方・論理的思考が得意な方',
        targetAge: ['20代', '30代', '40代'],
        features: [
            '案件単価が他の副業と比べて高い',
            'リモートワーク案件が豊富',
            'スキルが本業の転職にも活きる',
            'クラウドソーシングで案件を見つけやすい',
        ],
        pros: [
            '月10〜50万円以上も可能な高収入',
            '将来的なキャリアチェンジにもつながる',
            '場所を選ばず働ける',
        ],
        cons: [
            '学習期間が3〜6ヶ月必要',
            '技術の進化に合わせて学び続ける必要がある',
        ],
        recommended: ['高収入を目指したい', 'IT業界に興味がある', '論理的に考えるのが好き'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#2196F3',
    },
    {
        id: 'sns',
        slug: 'sns',
        name: 'SNS運用・インフルエンサー',
        nameEn: 'SNS Marketing & Influencer',
        tagline: 'フォロワーを資産に変える、SNS時代の副業',
        description: 'Instagram、X(Twitter)、TikTokなどで情報発信し、フォロワーを獲得して収益化。PR案件やアフィリエイト、自社商品販売など収益化の方法が多彩。',
        category: 'マーケティング',
        target: '情報発信が好きな方・SNSをよく使う方',
        targetAge: ['20代', '30代', '40代'],
        features: [
            'スマホ1台で始められる手軽さ',
            'フォロワーが増えるとPR案件が来る',
            '自分のブランドを構築できる',
            '他の副業との相乗効果が高い',
        ],
        pros: [
            '初期費用ゼロで始められる',
            '影響力が資産として蓄積される',
            '企業案件で高単価も狙える',
        ],
        cons: [
            'フォロワー獲得まで時間がかかる',
            '継続的な発信が必要',
        ],
        recommended: ['発信するのが好き', 'SNSをよく使う', '自分のブランドを持ちたい'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#E91E63',
    },
    {
        id: 'freelance',
        slug: 'freelance',
        name: 'フリーランス・スキル販売',
        nameEn: 'Freelance & Skill Selling',
        tagline: '今あるスキルで、すぐに収入を得る',
        description: 'ココナラやクラウドワークスなどのプラットフォームで、デザイン・ライティング・翻訳・コンサルなど、自分のスキルを販売して収益化する副業。',
        category: 'スキル販売',
        target: '何かしらの専門スキルを持っている方',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            '既存スキルをそのまま活かせる',
            'クラウドソーシングで案件を見つけやすい',
            '実績を積めば単価が上がる',
            '納品完了で確実に報酬が入る',
        ],
        pros: [
            '今のスキルですぐに始められる',
            '確実に報酬を得られるフロー型収入',
            '実績がポートフォリオになる',
        ],
        cons: [
            '時間の切り売りになりがち',
            'プラットフォーム手数料がかかる',
        ],
        recommended: ['すぐに収入がほしい', '専門スキルがある', '確実に稼ぎたい'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#FF9800',
    },
    {
        id: 'investment',
        slug: 'investment',
        name: '投資・資産運用',
        nameEn: 'Investment & Asset Management',
        tagline: 'お金に働いてもらう、不労所得型の副収入',
        description: '株式投資、投資信託、不動産投資、仮想通貨など、お金を運用して利益を得る方法。時間をかけずに資産を増やせるが、リスク管理が重要。',
        category: '投資・金融',
        target: '余剰資金がある方・長期的に資産を増やしたい方',
        targetAge: ['20代', '30代', '40代', '50代'],
        features: [
            '作業時間がほぼ不要の不労所得',
            '複利の力で資産が雪だるま式に増える',
            'NISAやiDeCoで税制優遇あり',
            '少額から始められるサービスも充実',
        ],
        pros: [
            '時間を使わず資産を増やせる',
            '長期運用で複利効果が大きい',
            '本業に影響が少ない',
        ],
        cons: [
            '元本割れのリスクがある',
            '投資の知識を学ぶ必要がある',
        ],
        recommended: ['時間をかけたくない', '余剰資金がある', '長期的に資産を増やしたい'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#009688',
    },
    {
        id: 'coaching',
        slug: 'coaching',
        name: 'コーチング・教える系副業',
        nameEn: 'Coaching & Teaching',
        tagline: '経験を教えることで、感謝されながら稼ぐ',
        description: 'オンライン講座、個別コーチング、セミナー開催など、自分の知識や経験を他の人に教える副業。高単価になりやすく、やりがいも大きい。',
        category: '教育・コーチング',
        target: '人に教えるのが好きな方・専門性を活かしたい方',
        targetAge: ['30代', '40代', '50代'],
        features: [
            '高単価のサービスを作りやすい',
            'オンラインで全国・海外にも届けられる',
            '自分の経験がそのまま商品になる',
            'リピーターがつきやすいビジネスモデル',
        ],
        pros: [
            '1対1なら月額5万〜20万円も可能',
            '人の成長を支援するやりがいがある',
            '自分自身のスキルも向上する',
        ],
        cons: [
            'ある程度の実績や専門性が必要',
            '集客の仕組みを作る必要がある',
        ],
        recommended: ['人に教えるのが好き', '豊富な経験がある', '高単価で稼ぎたい'],
        affiliateUrl: '#',
        ctaText: '詳細を見る',
        color: '#9C27B0',
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((s) => s.slug === slug);
}
