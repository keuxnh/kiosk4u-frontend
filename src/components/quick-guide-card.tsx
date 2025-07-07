import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface QuickGuideCardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  variant: "primary" | "secondary" | "accent";
  href?: string;
}

export default function QuickGuideCard({
  icon,
  title,
  description,
  buttonText,
  variant,
  href = "/tutorials",
}: QuickGuideCardProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case "secondary":
        return "bg-secondary text-white hover:bg-green-700";
      case "accent":
        return "bg-accent text-white hover:bg-red-700";
      default:
        return "bg-primary text-white hover:bg-blue-700";
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case "secondary":
        return "text-secondary";
      case "accent":
        return "text-accent";
      default:
        return "text-primary";
    }
  };

  return (
    <div className="bg-white card-accessible rounded-xl p-8 hover:shadow-xl transition-shadow">
      <div className="text-center mb-6">
        <div className={`text-6xl mb-4 ${getIconColor()}`} aria-hidden="true">
          {icon}
        </div>
        <h4 className="text-large font-bold mb-4">{title}</h4>
      </div>
      <p className="text-body text-gray-600 mb-6">{description}</p>
      <Link href={href}>
        <Button className={`w-full btn-large focus-visible transition-colors ${getVariantClasses()}`}>
          {buttonText}
        </Button>
      </Link>
    </div>
  );
}
