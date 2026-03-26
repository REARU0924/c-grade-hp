const worries = [
  "数学のやり方が分からない",
  "模試で点が取れない",
  "何をやればいいか分からない",
  "周りに受験の情報がない",
];

const solutions = [
  "週1回の指導だけでなく、1週間の学習を設計",
  "解いた問題から課題を分析",
  "次にやるべきことを具体的に提示",
];

const services = [
  "週1回90分のオンライン指導",
  "個別学習プラン作成",
  "模試・問題の分析",
  "チャットサポート（任意）",
];

export default function Page() {
  return (
    <main className="min-h-screen text-slate-900">
      <section className="px-6 pb-20 pt-24 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            オンライン数学塾
          </span>

          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              数学で、模試の判定を
              <span className="text-blue-600">Cまで引き上げる</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              非進学校でも、やることが分かれば伸びる
            </p>
          </div>

          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-7 py-4 text-base font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            無料体験に申し込む
          </a>

          <div className="grid w-full gap-4 pt-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">対象</p>
              <p className="mt-2 font-semibold">非進学校に通う大学受験生</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">料金</p>
              <p className="mt-2 font-semibold">月額15,000円（税込）</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-500">形式</p>
              <p className="mt-2 font-semibold">週1回90分のオンライン指導</p>
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
              数学が苦手な受験生ほど、努力不足ではなく「やり方が分からない」状態で止まっていることが多いです。
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {worries.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-3 w-3 rounded-full bg-rose-400" />
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
              指導だけで終わらせず、
              <br className="hidden sm:block" />
              1週間の勉強まで設計します
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              ただ教えるだけではなく、どこでつまずいているかを見つけ、次にやるべきことを明確にします。
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
                  <p className="text-base font-medium leading-7 text-slate-800 sm:text-lg">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              サービス内容
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              C判定を目指すための学習を、シンプルに整理
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
                  必要なことを整理し、迷わず取り組める状態をつくります。
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              料金
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              はじめやすい月額制
            </h2>
          </div>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-8 text-center shadow-sm sm:p-10">
            <p className="text-base font-medium text-slate-600">月額</p>
            <p className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
              15,000円
              <span className="ml-2 text-lg font-medium text-slate-600">（税込）</span>
            </p>
            <p className="mt-4 text-base text-slate-700">無料体験あり</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div className="flex items-center justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-900 text-3xl font-bold text-white">
              M
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              プロフィール
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              大学生が運営する、
              <br className="hidden sm:block" />
              数学特化のオンライン指導
            </h2>
            <div className="mt-5 space-y-3 text-base leading-7 text-slate-600 sm:text-lg">
              <p>大学生が運営</p>
              <p>数学指導経験あり（シンプルでOK）</p>
              <p>
                難しいことを増やすのではなく、今の状態から必要な勉強を整理して伴走します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="px-6 pb-24 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 px-8 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            数学の「何をやればいいか分からない」を終わらせる
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            まずは無料体験で、今の課題とこれからの勉強の進め方を整理します。
          </p>
          <a
            href="#cta"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-4 text-base font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            無料体験に申し込む
          </a>
        </div>
      </section>
    </main>
  );
}
