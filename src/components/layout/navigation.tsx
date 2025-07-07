import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "홈" },
    { href: "/tutorials", label: "배우기" },
    { href: "/scenarios", label: "상황별 가이드" },
    { href: "/troubleshooting", label: "문제해결" }
  ];

  return (
    <nav className="bg-white border-b-2 border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`text-xl font-medium px-8 py-4 block transition-all ${
                  location === item.href 
                    ? 'text-primary bg-soft-blue border-b-4 border-primary' 
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}