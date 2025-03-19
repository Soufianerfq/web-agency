export default function Nav({ portfolio, reviews, contactus, services }) {
  return (
    <nav className="flex justify-between w-[45%]">
      <button>Home</button>
      <button
        onClick={() =>
          services.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Our Services
      </button>
      <button
        onClick={() =>
          portfolio.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
      Portfolio
      </button>
      <button
        onClick={() =>
          reviews.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Testimonial
      </button>
      <button
        onClick={() =>
          contactus.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Contact Us
      </button>
    </nav>
  );
}