type JourneyMoment = {
  title: string;
  time: string;
  description: string;
};

const journey: JourneyMoment[] = [
  {
    title: "नदी किनारे की सुबह",
    time: "भोर",
    description:
      "मंद हवा के बीच मोहन नदी पर पहुँचता है। गीली मिट्टी को हाथों में लेकर वह दिनभर की उम्मीदों को थाम लेता है।",
  },
  {
    title: "चाक पर सपनों का घड़ा",
    time: "सुबह",
    description:
      "कच्ची दीवारों के बीच घूमते चाक पर उसकी उँगलियाँ लय पकड़ती हैं। हर लकीर में अपने सपने जोड़ते हुए वह खास घड़ा बनाता है।",
  },
  {
    title: "शहर की डगर",
    time: "दोपहर",
    description:
      "कंधों पर टोकरी उठाए मोहन शहर की ओर निकल पड़ता है। उसकी उम्मीदें घड़े के भीतर सिमटी, फिर भी चमकती रहती हैं।",
  },
  {
    title: "प्यास बुझाने का क्षण",
    time: "शाम",
    description:
      "भीड़भाड़ वाले बाज़ार में वही घड़ा एक बच्चे के घर पहुँचता है। ठंडे पानी की पहली घूंट उस बच्चे के चेहरे पर मुस्कान खिला देती है।",
  },
];

const reflections = [
  {
    heading: "मेहनत का मान",
    body: "मोहन को पैसे कम मिले, पर उसे पता था कि उसकी मेहनत ने किसी तक राहत पहुँचाई है। यही उसकी सबसे बड़ी पूँजी थी।",
  },
  {
    heading: "सपनों का सफर",
    body: "घड़ा बेचते हुए उसने महसूस किया कि सपने हमेशा रूप नहीं मांगते। कभी-कभी वे सिर्फ किसी की प्यास बुझाने भर से जी उठते हैं।",
  },
  {
    heading: "खुशी का असली मोल",
    body: "गाँव लौटते समय मोहन का दिल हल्का था। उसकी खुशी पैसे में नहीं, एक मुस्कान में थी।",
  },
];

const closingThought =
  "मोहन की कहानी हमें याद दिलाती है कि हमारी छोटी-सी मेहनत भी किसी अजनबी के जीवन में बड़ी बन सकती है।";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-16 px-6 py-12 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10 select-none">
        <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-300/40 blur-3xl" />
      </div>

      <header className="flex flex-col gap-6">
        <span className="w-fit rounded-full bg-orange-200/60 px-4 py-1 text-sm font-semibold text-orange-900 shadow-sm backdrop-blur">
          मिट्टी, मेहनत और मुस्कान
        </span>
        <h1 className="text-display text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
          मोहन और उसका{" "}
          <span className="relative inline-block">
            खास घड़ा
            <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-orange-300/70" />
          </span>
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-stone-700 sm:text-xl">
          गाँव के कुम्हार मोहन की जिंदगी साधारण थी, पर उसके हाथों में मिट्टी
          सपनों की भाषा बोलती थी। एक दिन उसने ऐसा घड़ा गढ़ा जिसके भीतर उसने
          अपनी उम्मीदें समेट दीं। वही घड़ा दूर शहर में पहुँचकर एक बच्चे की प्यास
          बुझाता है और मोहन को एहसास दिलाता है कि सच्ची तसल्ली मेहनत से जन्म लेती
          है।
        </p>
      </header>

      <section className="grid gap-8 rounded-3xl bg-white/80 p-8 shadow-xl shadow-orange-200/40 backdrop-blur-xl sm:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-display text-2xl font-semibold text-stone-900">
            कहानी की लय
          </h2>
          <p className="text-base leading-7 text-stone-600">
            हर दिन मोहन नदी से मिट्टी लेकर आता, और अपने चाक पर घड़े गढ़ता। उसी
            साधारण दिनचर्या के बीच उसने एक ऐसे घड़े को जन्म दिया जिसमें उसने अपने
            सपनों की चमक भर दी। यही घड़ा आगे चलकर किसी और के लिए जीवनदायिनी
            बूंदें लेकर आता है।
          </p>
        </div>
        <div className="flex flex-col justify-center gap-4 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50/70 via-white to-amber-100/70 p-6">
          <blockquote className="text-display text-lg font-medium text-stone-800">
            “मिट्टी की खुशबू में मोहन ने भविष्य की आहट सुन ली थी।”
          </blockquote>
          <p className="text-sm text-stone-600">
            उसकी मेहनत भले साधारण रही हो, लेकिन उसके सपनों का साया हर घड़े में
            दिखाई देता था।
          </p>
        </div>
      </section>

      <section aria-labelledby="journey-heading" className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2
            id="journey-heading"
            className="text-display text-3xl font-semibold text-stone-900"
          >
            मोहन की दिनभर की यात्रा
          </h2>
          <p className="max-w-2xl text-base leading-7 text-stone-600">
            मिट्टी से घड़े तक और घड़े से मुस्कान तक—यह सफर मोहन के श्रम, धैर्य और
            भरोसे से भरा हुआ है। नीचे वही दिनचर्या है जो उस खास दिन को विशेष बना
            देती है।
          </p>
        </div>
        <ol className="space-y-6 border-l-2 border-dashed border-orange-200 pl-6">
          {journey.map((moment, index) => (
            <li key={moment.title} className="relative pl-6">
              <span className="absolute -left-[39px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm font-semibold text-orange-900 shadow ring-2 ring-orange-200">
                {index + 1}
              </span>
              <div className="flex flex-col gap-2 rounded-2xl border border-orange-100/80 bg-white/90 p-5 shadow-sm shadow-orange-200/40">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="text-display text-xl font-semibold text-stone-800">
                    {moment.title}
                  </p>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase text-orange-900 tracking-wider">
                    {moment.time}
                  </span>
                </div>
                <p className="text-base leading-7 text-stone-600">
                  {moment.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="reflections-heading" className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h2
            id="reflections-heading"
            className="text-display text-3xl font-semibold text-stone-900"
          >
            कहानी से सीख
          </h2>
          <p className="max-w-2xl text-base leading-7 text-stone-600">
            शहर से लौटते समय मोहन के पास पैसों से ज्यादा कुछ था—एक गहरी शांति।
            उसी शांति ने उसे अपनी कला से जुड़ा रखा और अगले दिन फिर चाक चलाने की
            शक्ति दी।
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reflections.map((reflection) => (
            <article
              key={reflection.heading}
              className="flex flex-col gap-3 rounded-2xl border border-orange-100 bg-white/90 p-6 shadow-sm shadow-orange-100/60 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-200/60"
            >
              <h3 className="text-display text-xl font-semibold text-stone-800">
                {reflection.heading}
              </h3>
              <p className="text-base leading-7 text-stone-600">
                {reflection.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="closing-heading" className="rounded-3xl bg-gradient-to-br from-orange-600 via-amber-500 to-orange-400 p-[1px]">
        <div className="rounded-3xl bg-white/95 px-8 py-10 text-center shadow-xl shadow-orange-400/40 sm:px-14">
          <h2
            id="closing-heading"
            className="text-display text-2xl font-semibold text-stone-900 sm:text-3xl"
          >
            उम्मीदों का घड़ा
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-700">
            {closingThought}
          </p>
        </div>
      </section>

      <footer className="pb-6 text-center text-sm text-stone-500">
        मिट्टी की यह महकती कहानी मानवीयता की सबसे सरल परत को उजागर करती है।
      </footer>
    </main>
  );
}
