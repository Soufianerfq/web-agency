export default function Nav({ portfolio, reviews, contactus, services }) {
  return (
    <nav className="flex space-x-[50px]">
      <div>Home</div>
      <div
        onClick={() =>
          services.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Our Services
      </div>
      <div
        onClick={() =>
          portfolio.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Portfolio
      </div>
      <div
        onClick={() =>
          reviews.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Testimonial
      </div>
      <div
        onClick={() =>
          contactus.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Contact Us
      </div>
    </nav>
  );
}