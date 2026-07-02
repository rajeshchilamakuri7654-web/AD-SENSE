interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQSection({ items, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      <h2>{title}</h2>
      {items.map((item, i) => (
        <div className="faq-item" key={i}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </section>
  );
}
