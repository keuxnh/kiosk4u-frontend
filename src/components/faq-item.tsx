interface FAQItemProps {
  question: string;
  answer: string;
  solutions: string[];
  variant: "error" | "warning" | "info";
  icon: string;
}

export default function FAQItem({ question, answer, solutions, variant, icon }: FAQItemProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "error":
        return "bg-red-50 border-3 border-red-200 text-accent";
      case "warning":
        return "bg-yellow-50 border-3 border-yellow-200 text-yellow-700";
      case "info":
        return "bg-blue-50 border-3 border-blue-200 text-primary";
      default:
        return "bg-gray-50 border-3 border-gray-200 text-neutral-dark";
    }
  };

  return (
    <div className={`${getVariantClasses()} rounded-xl p-8`}>
      <h4 className="text-large font-bold mb-4 flex items-center">
        <span className="mr-3 text-3xl" aria-hidden="true">
          {icon}
        </span>
        {question}
      </h4>
      <div className="text-body text-gray-700 space-y-4">
        <p>
          <strong>{answer}</strong>
        </p>
        <ul className="list-disc pl-8 space-y-2">
          {solutions.map((solution, index) => (
            <li key={index}>{solution}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
