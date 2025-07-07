import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Step {
  number: number;
  description: string;
}

interface ScenarioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  steps: Step[];
  variant: "primary" | "secondary";
  icon: string;
  href?: string;
}

export default function ScenarioCard({
  title,
  description,
  imageUrl,
  imageAlt,
  steps,
  variant,
  icon,
  href = "/tutorials",
}: ScenarioCardProps) {
  const getVariantClasses = () => {
    return variant === "secondary"
      ? "bg-gradient-to-br from-green-50 to-white border-3 border-green-200"
      : "bg-gradient-to-br from-blue-50 to-white border-3 border-blue-200";
  };

  const getIconColor = () => {
    return variant === "secondary" ? "text-secondary" : "text-primary";
  };

  const getStepColor = () => {
    return variant === "secondary" ? "bg-secondary" : "bg-primary";
  };

  return (
    <div className={`${getVariantClasses()} rounded-xl p-8 shadow-lg`}>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-48 object-cover rounded-lg mb-6 border-2 border-gray-200"
      />

      <h4 className="text-large font-bold mb-4 flex items-center text-neutral-dark">
        <span className={`mr-3 text-3xl ${getIconColor()}`} aria-hidden="true">
          {icon}
        </span>
        {title}
      </h4>
      
      <p className="text-body text-gray-600 mb-6">{description}</p>
      
      <div className="space-y-3 mb-6">
        {steps.map((step) => (
          <div key={step.number} className="flex items-start space-x-3">
            <span
              className={`${getStepColor()} text-white rounded-full w-8 h-8 flex items-center justify-center text-body font-bold flex-shrink-0`}
            >
              {step.number}
            </span>
            <span className="text-body text-neutral-dark">{step.description}</span>
          </div>
        ))}
      </div>
      
      <Link href={href}>
        <Button
          className={`w-full btn-large focus-visible transition-colors ${
            variant === "secondary"
              ? "bg-secondary text-white hover:bg-green-700"
              : "bg-primary text-white hover:bg-blue-700"
          }`}
        >
          상세 가이드 보기
        </Button>
      </Link>
    </div>
  );
}
