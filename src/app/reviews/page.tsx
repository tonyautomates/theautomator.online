const reviews = [
  {
    name: "Maya Turner",
    role: "Founder, Local Studio",
    image: "https://i.pravatar.cc/120?img=32",
    text: "The Automator helped us remove repetitive admin work in two weeks. We now spend more time with clients and less time chasing manual tasks.",
  },
  {
    name: "Ethan Brooks",
    role: "Operations Lead, Apex Retail",
    image: "https://i.pravatar.cc/120?img=13",
    text: "Clear process, clean handoff, and strong communication. Every workflow that was delivered has been reliable and easy for our team to run.",
  },
  {
    name: "Sofia Ramirez",
    role: "Marketing Manager, Bright Lane",
    image: "https://i.pravatar.cc/120?img=47",
    text: "Fast turnaround and thoughtful implementation. We cut hours from our weekly campaign setup and got a system that feels simple to maintain.",
  },
];

function StarIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 text-amber-500"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <main className="min-h-screen bg-[#f3f3f3] px-4 py-20">
      <section className="mx-auto w-full max-w-3xl">
        <h1 className="mb-8 text-center text-2xl font-semibold text-gray-900">Reviews</h1>
        <div className="space-y-5">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl bg-[#e6e6e6] p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    alt={`${review.name} profile`}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-600">{review.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">{review.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
