import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import KioskSimulator from "@/components/kiosk-simulator";
import { useToast } from "@/hooks/use-toast";

export default function Tutorials() {
  const { toast } = useToast();
  const [activeSimulator, setActiveSimulator] = useState<"fastfood" | "atm" | "subway" | null>(null);

  const handleCompleteSimulator = () => {
    toast({
      title: "축하합니다!",
      description: "시뮬레이터를 완료했습니다. 이제 실제로 사용해보세요!",
    });
    setActiveSimulator(null);
  };

  const simulators = [
    {
      id: "fastfood" as const,
      title: "패스트푸드 주문 체험",
      description: "실제 키오스크처럼 햄버거를 주문해보세요",
      icon: "🍔",
      color: "bg-soft-orange"
    },
    {
      id: "atm" as const,
      title: "ATM 사용 체험",
      description: "실제 ATM처럼 현금을 인출해보세요",
      icon: "🏦",
      color: "bg-soft-blue"
    },
    {
      id: "subway" as const,
      title: "지하철 승차권 체험",
      description: "지하철역에서 승차권을 구매해보세요",
      icon: "🚇",
      color: "bg-soft-green"
    }
  ];

  // 시뮬레이터 실행 중이면 해당 컴포넌트 표시
  if (activeSimulator) {
    return (
      <KioskSimulator
        type={activeSimulator}
        onComplete={handleCompleteSimulator}
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">키오스크 실전 체험</h1>
        <p className="text-xl text-soft">실제 키오스크처럼 작동하는 시뮬레이터로 연습해보세요</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {simulators.map((simulator) => (
          <Card key={simulator.id} className="hover:shadow-lg transition-all">
            <CardHeader className={`${simulator.color} rounded-t-lg`}>
              <div className="text-center">
                <div className="text-6xl mb-4">{simulator.icon}</div>
                <CardTitle className="text-2xl">{simulator.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <p className="text-xl text-soft text-center">{simulator.description}</p>
              <Button 
                onClick={() => setActiveSimulator(simulator.id)}
                className="w-full h-16 text-xl font-medium bg-primary hover:bg-primary/90 transition-all"
              >
                체험 시작하기
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-soft-green p-8 rounded-xl">
        <h3 className="text-2xl font-semibold mb-6 text-center">체험 안내</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-3">👆</div>
            <h4 className="font-semibold mb-2">실제처럼 터치</h4>
            <p className="text-soft">버튼을 눌러서 실제 키오스크처럼 사용해보세요</p>
          </div>
          <div>
            <div className="text-3xl mb-3">🔄</div>
            <h4 className="font-semibold mb-2">반복 연습</h4>
            <p className="text-soft">여러 번 반복해서 익숙해질 때까지 연습하세요</p>
          </div>
          <div>
            <div className="text-3xl mb-3">✅</div>
            <h4 className="font-semibold mb-2">안전한 환경</h4>
            <p className="text-soft">실제 돈이나 카드 없이 안전하게 연습할 수 있습니다</p>
          </div>
        </div>
      </div>
    </div>
  );
}