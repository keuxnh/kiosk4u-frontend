import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface SimulatorStep {
  id: string;
  type: "menu" | "input" | "confirmation" | "payment" | "complete";
  title: string;
  instruction: string;
  options?: { id: string; label: string; price?: string }[];
  nextStep?: string;
}

interface KioskSimulatorProps {
  type: "fastfood" | "atm" | "subway";
  onComplete: () => void;
}

export default function KioskSimulator({ type, onComplete }: KioskSimulatorProps) {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState("start");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  const fastfoodSteps: Record<string, SimulatorStep> = {
    start: {
      id: "start",
      type: "menu",
      title: "매장에서 드시겠어요?",
      instruction: "주문 방법을 선택해주세요",
      options: [
        { id: "dine_in", label: "매장에서 먹기" },
        { id: "takeout", label: "포장해가기" }
      ],
      nextStep: "menu"
    },
    menu: {
      id: "menu",
      type: "menu",
      title: "메뉴를 선택하세요",
      instruction: "원하는 메뉴를 터치해주세요",
      options: [
        { id: "bigmac", label: "빅맥", price: "5,900" },
        { id: "quarter", label: "1955 버거", price: "6,400" },
        { id: "chicken", label: "맥치킨", price: "4,800" },
        { id: "fries", label: "후렌치 후라이", price: "2,500" }
      ],
      nextStep: "cart"
    },
    cart: {
      id: "cart",
      type: "confirmation",
      title: "주문 확인",
      instruction: "주문 내용이 맞나요?",
      nextStep: "payment"
    },
    payment: {
      id: "payment",
      type: "payment",
      title: "결제 방법 선택",
      instruction: "어떻게 결제하시겠어요?",
      options: [
        { id: "card", label: "카드 결제" },
        { id: "cash", label: "현금 결제" },
        { id: "mobile", label: "모바일 페이" }
      ],
      nextStep: "complete"
    },
    complete: {
      id: "complete",
      type: "complete",
      title: "주문 완료!",
      instruction: "주문번호를 기억해주세요. 음식이 준비되면 호출하겠습니다."
    }
  };

  const atmSteps: Record<string, SimulatorStep> = {
    start: {
      id: "start",
      type: "input",
      title: "카드를 넣어주세요",
      instruction: "카드를 아래 버튼으로 넣어보세요",
      options: [{ id: "insert_card", label: "카드 넣기" }],
      nextStep: "pin"
    },
    pin: {
      id: "pin",
      type: "input",
      title: "비밀번호를 입력하세요",
      instruction: "4자리 비밀번호를 입력해주세요",
      options: [{ id: "enter_pin", label: "비밀번호 입력 (••••)" }],
      nextStep: "service"
    },
    service: {
      id: "service",
      type: "menu",
      title: "업무를 선택하세요",
      instruction: "원하는 업무를 선택해주세요",
      options: [
        { id: "withdraw", label: "현금인출" },
        { id: "balance", label: "잔액조회" },
        { id: "transfer", label: "계좌이체" }
      ],
      nextStep: "amount"
    },
    amount: {
      id: "amount",
      type: "menu",
      title: "금액을 선택하세요",
      instruction: "인출할 금액을 선택해주세요",
      options: [
        { id: "10000", label: "1만원" },
        { id: "50000", label: "5만원" },
        { id: "100000", label: "10만원" },
        { id: "other", label: "직접입력" }
      ],
      nextStep: "complete"
    },
    balance_result: {
      id: "balance_result",
      type: "complete",
      title: "잔액 조회 결과",
      instruction: "계좌 잔액: 1,250,000원입니다.",
      nextStep: "complete"
    },
    transfer_account: {
      id: "transfer_account",
      type: "input",
      title: "받는 계좌번호 입력",
      instruction: "이체할 계좌번호를 입력하세요",
      options: [{ id: "enter_account", label: "계좌번호 입력 (123-456-789)" }],
      nextStep: "transfer_amount"
    },
    transfer_amount: {
      id: "transfer_amount",
      type: "menu",
      title: "이체 금액 선택",
      instruction: "이체할 금액을 선택해주세요",
      options: [
        { id: "50000", label: "5만원" },
        { id: "100000", label: "10만원" },
        { id: "200000", label: "20만원" },
        { id: "other", label: "직접입력" }
      ],
      nextStep: "complete"
    },
    complete: {
      id: "complete",
      type: "complete",
      title: "거래 완료!",
      instruction: "현금과 카드, 영수증을 가져가세요."
    }
  };

  const subwaySteps: Record<string, SimulatorStep> = {
    start: {
      id: "start",
      type: "menu",
      title: "원하는 서비스를 선택하세요",
      instruction: "승차권 구매 또는 교통카드 충전을 선택해주세요",
      options: [
        { id: "ticket", label: "승차권 구매" },
        { id: "card_charge", label: "교통카드 충전" }
      ]
    },
    destination: {
      id: "destination",
      type: "menu",
      title: "목적지를 선택하세요",
      instruction: "가고 싶은 역을 선택해주세요",
      options: [
        { id: "gangnam", label: "강남역", price: "1,500" },
        { id: "hongdae", label: "홍대입구", price: "1,200" },
        { id: "sinchon", label: "신촌역", price: "1,000" },
        { id: "jamsil", label: "잠실역", price: "1,800" }
      ],
      nextStep: "quantity"
    },
    quantity: {
      id: "quantity",
      type: "menu",
      title: "매수를 선택하세요",
      instruction: "몇 장을 구매하시겠어요?",
      options: [
        { id: "1", label: "1매" },
        { id: "2", label: "2매" },
        { id: "3", label: "3매" },
        { id: "4", label: "4매" }
      ],
      nextStep: "payment"
    },
    charge_amount: {
      id: "charge_amount",
      type: "menu", 
      title: "충전 금액을 선택하세요",
      instruction: "교통카드에 충전할 금액을 선택해주세요",
      options: [
        { id: "5000", label: "5,000원" },
        { id: "10000", label: "10,000원" },
        { id: "20000", label: "20,000원" },
        { id: "50000", label: "50,000원" }
      ],
      nextStep: "charge_payment"
    },
    charge_payment: {
      id: "charge_payment",
      type: "payment",
      title: "결제 방법 선택",
      instruction: "충전 결제는 어떻게 하시겠어요?",
      options: [
        { id: "cash", label: "현금 결제" },
        { id: "card", label: "카드 결제" }
      ],
      nextStep: "charge_complete"
    },
    charge_complete: {
      id: "charge_complete",
      type: "complete",
      title: "교통카드 충전 완료!",
      instruction: "충전이 완료되었습니다. 교통카드를 받아가세요."
    },
    payment: {
      id: "payment",
      type: "payment",
      title: "결제 방법 선택",
      instruction: "어떻게 결제하시겠어요?",
      options: [
        { id: "cash", label: "현금 결제" },
        { id: "card", label: "카드 결제" },
        { id: "mobile", label: "모바일 페이" }
      ],
      nextStep: "complete"
    },
    complete: {
      id: "complete",
      type: "complete",
      title: "승차권 발권 완료!",
      instruction: "승차권을 받아가세요. 개찰구에서 찍고 들어가시면 됩니다."
    }
  };

  const steps = type === "fastfood" ? fastfoodSteps : type === "atm" ? atmSteps : subwaySteps;
  const step = steps[currentStep];

  const handleOptionSelect = (optionId: string, label: string, price?: string) => {
    if (type === "fastfood" && step.id === "menu") {
      setSelectedItems([...selectedItems, label]);
      if (price) {
        const numPrice = parseInt(price.replace(",", ""));
        setTotal(total + numPrice);
      }
      toast({
        title: "메뉴 추가됨",
        description: `${label}이(가) 장바구니에 추가되었습니다.`,
      });
      // 메뉴 추가 후 자동으로 장바구니로 이동
      setTimeout(() => {
        setCurrentStep("cart");
      }, 1000);
      return;
    }

    // ATM에서 서비스 선택에 따라 다른 경로로 진행
    if (type === "atm" && step.id === "service") {
      if (optionId === "withdraw") {
        setCurrentStep("amount");
      } else if (optionId === "balance") {
        setCurrentStep("balance_result");
      } else if (optionId === "transfer") {
        setCurrentStep("transfer_account");
      }
      return;
    }

    // 지하철에서 서비스 선택에 따라 다른 경로로 진행
    if (type === "subway" && step.id === "start") {
      if (optionId === "ticket") {
        setCurrentStep("destination");
      } else if (optionId === "card_charge") {
        setCurrentStep("charge_amount");
      }
      return;
    }

    if (step.nextStep) {
      setCurrentStep(step.nextStep);
      if (step.id === "payment") {
        toast({
          title: "결제 처리중",
          description: `${label}(으)로 결제를 진행합니다.`,
        });
      }
    }
  };

  const handleNext = () => {
    if (step.nextStep) {
      setCurrentStep(step.nextStep);
    } else if (step.type === "complete") {
      toast({
        title: "축하합니다!",
        description: "시뮬레이터를 완료했습니다. 이제 실제로 사용해보세요!",
      });
      onComplete();
    }
  };

  const handleAddMore = () => {
    // 패스트푸드에서 메뉴 더 추가하기
    setCurrentStep("menu");
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-6 text-center">
        <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-lg font-medium">
          {type === "fastfood" ? "🍔 패스트푸드 키오스크" : type === "atm" ? "🏦 ATM 기계" : "🚇 지하철 발권기"}
        </div>
      </div>

      <Card className="min-h-[500px] border-2">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
            <p className="text-xl text-soft mb-6">{step.instruction}</p>
          </div>

          {/* 메뉴 선택 화면 */}
          {step.type === "menu" && step.options && (
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              {step.options.map((option) => (
                <Button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id, option.label, option.price)}
                  className="h-20 text-lg bg-card border-2 border-soft text-foreground hover:bg-accent hover:scale-105"
                  variant="outline"
                >
                  <div className="text-center">
                    <div className="font-semibold">{option.label}</div>
                    {option.price && (
                      <div className="text-sm text-muted-foreground">{option.price}원</div>
                    )}
                  </div>
                </Button>
              ))}
            </div>
          )}

          {/* 입력 화면 */}
          {step.type === "input" && step.options && (
            <div className="text-center">
              {step.options.map((option) => (
                <Button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id, option.label)}
                  className="h-16 px-8 text-lg bg-primary hover:bg-primary/90"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          )}

          {/* 확인 화면 */}
          {step.type === "confirmation" && (
            <div className="text-center space-y-6">
              <div className="bg-soft-blue p-6 rounded-lg max-w-md mx-auto">
                <h3 className="text-xl font-semibold mb-4">주문 내역</h3>
                {selectedItems.map((item, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <span>{item}</span>
                  </div>
                ))}
                <div className="border-t pt-2 mt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>총 금액</span>
                    <span>{total.toLocaleString()}원</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={handleAddMore}
                  variant="outline"
                  className="px-6 py-3"
                >
                  메뉴 더 추가
                </Button>
                <Button
                  onClick={handleNext}
                  className="px-6 py-3 bg-primary hover:bg-primary/90"
                >
                  결제하기
                </Button>
              </div>
            </div>
          )}

          {/* 결제 화면 */}
          {step.type === "payment" && step.options && (
            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
              {step.options.map((option) => (
                <Button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id, option.label)}
                  className="h-16 text-lg bg-card border-2 border-soft text-foreground hover:bg-accent"
                  variant="outline"
                >
                  {option.label}
                </Button>
              ))}
            </div>
          )}

          {/* 완료 화면 */}
          {step.type === "complete" && (
            <div className="text-center space-y-6">
              <div className="text-6xl mb-4">✅</div>
              <div className="bg-soft-green p-6 rounded-lg max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {type === "fastfood" ? "주문번호: 147" : "거래완료"}
                </h3>
                <p className="text-green-600">
                  {type === "fastfood" 
                    ? "음식이 준비되면 호출해드리겠습니다." 
                    : "거래내역서와 현금을 확인하세요."}
                </p>
              </div>
              <Button
                onClick={onComplete}
                className="px-8 py-3 bg-primary hover:bg-primary/90"
              >
                학습 완료
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}