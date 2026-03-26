const worries = [
  "数学のやり方が分からない",
  "模試で点が取れない",
  "何をやればいいか分からない",
  "周りに受験の情報がない",
  "参考書が進まない",
];

const solutions = [
  "1週間ごとに『何を・どこまでやるか』を具体的に設計",
  "解いた問題から『できない原因』を特定",
  "次にやる参考書・問題を明確に指定",
];

const services = [
  "週1回90分：学習状況の分析＋次週の戦略設計",
  "個別学習プラン作成",
  "模試・問題の分析",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="px-6 pb-20 pt-24 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
            オンライン数学塾
          </span>

          <div className="space-y-6">
            <p className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              C判数学塾
            </p>

            <div className="max-w-5xl space-y-5">
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                数学で模試の判定を
                  <span className="text-blue-600">E・D判定 → C判定 → 合格レベルへ</span>
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                「やる順番」と「やる問題」が分かれば
                数学は伸びる
              </p>

              <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                まずはC判定へ。その先にA・B判定、そして合格まで見据えて、
                数学の伸ばし方を一緒に整理するオンライン数学塾です。
              </p>
            </div>
          </div>

          <a
            href="https://lin.ee/opSJ4rD"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-4 text-base font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            「今やるべきこと」を明確にする
          </a>

          <div className="grid w-full gap-4 pt-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">対象</p>
              <p className="mt-2 font-semibold">入試に数学を使う高校生</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">料金</p>
              <p className="mt-2 font-semibold">月額15,000円（税込）</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">目標</p>
              <p className="mt-2 font-semibold">C判定→A・B判定→合格</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              悩み
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              こんな悩みはありませんか？
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              数学が伸びない原因の多くは、
              「努力不足」ではなく「やり方が分からないこと」です。
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {worries.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-red-400" />
                  <p className="text-lg font-medium leading-7">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              解決策
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              
              <br className="hidden sm:block" />
              いつまでに何をやるかを設計する塾です
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              ただ教えるだけではなく、どこでつまずいているかを見つけ、
              C判定に必要な課題を整理し、その先の合格までつながる学習を明確にします。
            </p>
          </div>

          <div className="space-y-4">
            {solutions.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-blue-100 bg-blue-50 p-6"
              >
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-base font-medium leading-7 sm:text-lg">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="px-6 py-20 sm:px-8 lg:px-12">
  <div className="mx-auto max-w-6xl">
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        授業
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        「わかる」で終わらせない、
        <br className="hidden sm:block" />
        解けるようになる授業
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
        数学が苦手な人ほど、
        「なんとなく分かった」で止まっています。
        C判数学塾では、理解だけで終わらせず、
        自力で解ける状態まで持っていきます。
      </p>
    </div>

    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-lg font-semibold">
          つまずいているポイントから解説
        </p>
        <p className="mt-3 text-sm text-slate-600">
          基礎から分かっていない部分を特定し、
          そこから丁寧に説明します。
        </p>
      </div>


      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-lg font-semibold">
          苦手でも理解できる説明
        </p>
        <p className="mt-3 text-sm text-slate-600">
          数学が苦手な人でも分かるように、
          シンプルに分解して解説します。
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-lg font-semibold">
          解ける状態まで徹底的にサポート
        </p>
        <p className="mt-3 text-sm text-slate-600">
          正しい復習方法を指導し、理解が定着するまでサポートします。
        </p>
    </div>
    </div>
  </div>
</section>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              サービス内容
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              C判定から、合格までのルートを作る
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-semibold leading-7">{item}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  今やるべきことを明確にし、迷わず進める状態をつくります。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            プロフィール
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            塾長プロフィール
          </h2>

          <div className="mt-5 space-y-3 text-base leading-7 text-slate-600 sm:text-lg">
            <p>大阪大学 基礎工学部 情報科学科 在籍</p>
            <p>数学偏差値75以上</p>
            <p>阪大数学 本番7.5割</p>
            <p>
              数学が苦手な状態からでも伸ばすための、
              「理解」と「定着」を重視した指導を行っています。
            </p>
          </div>
        </div>
      </section>

      <section id="cta" className="px-6 pb-24 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 px-8 py-12 text-center text-white sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            C判数学塾
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            C判定から、合格へ。
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            無料体験で、今の課題を整理し、
            合格までの具体的な勉強ルートを明確にします。
          </p>
          <a
            href="https://lin.ee/opSJ4rD"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-4 text-base font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            無料体験で勉強ルートを知る
          </a>
        </div>
      </section>
    </main>
  );
}