import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Scenarios() {
  const scenarios = [
    {
      title: "패스트푸드 주문",
      description: "맥도날드, 버거킹에서 햄버거 주문하기",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f8f9fa'/%3E%3Ctext x='200' y='40' text-anchor='middle' font-size='20' fill='%23333'%3E🍔 햄버거 주문%3C/text%3E%3Crect x='50' y='70' width='100' height='60' fill='%23dc3545' rx='8'/%3E%3Ctext x='100' y='105' text-anchor='middle' font-size='14' fill='white'%3E빅맥%3C/text%3E%3Crect x='170' y='70' width='100' height='60' fill='%23fd7e14' rx='8'/%3E%3Ctext x='220' y='105' text-anchor='middle' font-size='14' fill='white'%3E감자튀김%3C/text%3E%3Crect x='290' y='70' width='100' height='60' fill='%2320c997' rx='8'/%3E%3Ctext x='340' y='105' text-anchor='middle' font-size='14' fill='white'%3E콜라%3C/text%3E%3Crect x='150' y='160' width='100' height='40' fill='%23198754' rx='10'/%3E%3Ctext x='200' y='185' text-anchor='middle' font-size='16' fill='white'%3E결제하기%3C/text%3E%3C/svg%3E",
      steps: [
        "1. 화면을 터치해서 주문 시작",
        "2. 메뉴 선택 (햄버거, 음료, 사이드)",
        "3. 장바구니 확인",
        "4. 결제 방법 선택",
        "5. 주문번호 받기"
      ]
    },
    {
      title: "ATM 현금 인출",
      description: "은행 ATM에서 돈 뽑기",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f0f8ff'/%3E%3Ctext x='200' y='40' text-anchor='middle' font-size='20' fill='%23333'%3E🏦 ATM 사용%3C/text%3E%3Crect x='80' y='70' width='100' height='60' fill='%234caf50' rx='8'/%3E%3Ctext x='130' y='105' text-anchor='middle' font-size='14' fill='white'%3E현금인출%3C/text%3E%3Crect x='200' y='70' width='100' height='60' fill='%232196f3' rx='8'/%3E%3Ctext x='250' y='105' text-anchor='middle' font-size='14' fill='white'%3E잔액조회%3C/text%3E%3Crect x='150' y='160' width='100' height='30' fill='%23333' rx='5'/%3E%3Ctext x='200' y='180' text-anchor='middle' font-size='12' fill='white'%3E카드 삽입%3C/text%3E%3C/svg%3E",
      steps: [
        "1. 카드를 넣기 (앞면이 위로)",
        "2. 비밀번호 4자리 입력",
        "3. 현금인출 선택",
        "4. 금액 선택 (1만원, 5만원 등)",
        "5. 현금과 카드 수령"
      ]
    },
    {
      title: "지하철 승차권 구매",
      description: "지하철역에서 표 사기",
      image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f8f9fa'/%3E%3Ctext x='200' y='40' text-anchor='middle' font-size='20' fill='%23333'%3E🚇 지하철 승차권%3C/text%3E%3Crect x='80' y='70' width='120' height='50' fill='%234caf50' rx='8'/%3E%3Ctext x='140' y='100' text-anchor='middle' font-size='14' fill='white'%3E승차권 구매%3C/text%3E%3Crect x='220' y='70' width='120' height='50' fill='%232196f3' rx='8'/%3E%3Ctext x='280' y='100' text-anchor='middle' font-size='14' fill='white'%3E카드 충전%3C/text%3E%3Crect x='100' y='140' width='80' height='30' fill='%23ff5722' rx='5'/%3E%3Ctext x='140' y='160' text-anchor='middle' font-size='12' fill='white'%3E강남역%3C/text%3E%3Crect x='200' y='140' width='80' height='30' fill='%23ff5722' rx='5'/%3E%3Ctext x='240' y='160' text-anchor='middle' font-size='12' fill='white'%3E홍대입구%3C/text%3E%3Crect x='150' y='190' width='100' height='30' fill='%2354cd4a' rx='5'/%3E%3Ctext x='200' y='210' text-anchor='middle' font-size='12' fill='white'%3E현금결제%3C/text%3E%3C/svg%3E",
      steps: [
        "1. 승차권 구매 선택",
        "2. 목적지 역 선택",
        "3. 매수 선택 (1매, 2매 등)",
        "4. 결제 방법 선택",
        "5. 승차권 받기"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">실전 상황별 가이드</h1>
      <p className="text-2xl text-soft text-center mb-12">
        자주 사용하는 키오스크들의 실제 사용 방법입니다
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {scenarios.map((scenario, index) => (
          <Card key={index} className="hover:shadow-lg transition-all">
            <CardHeader>
              <img 
                src={scenario.image} 
                alt={scenario.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <CardTitle className="text-2xl">{scenario.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xl text-soft mb-4">{scenario.description}</p>
              
              <div className="bg-soft-blue p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">단계별 순서</h4>
                <ul className="space-y-2">
                  {scenario.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-base text-soft">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-soft-orange p-8 rounded-xl">
        <h2 className="text-3xl font-semibold mb-8 text-center">주의사항</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">안전하게 사용하기</h3>
            <ul className="text-xl space-y-3">
              <li>• 비밀번호를 가려서 입력하세요</li>
              <li>• 카드와 영수증을 꼭 가져가세요</li>
              <li>• 현금은 바로 지갑에 넣으세요</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">문제가 생겼을 때</h3>
            <ul className="text-xl space-y-3">
              <li>• 당황하지 말고 천천히 하세요</li>
              <li>• 취소 버튼을 눌러보세요</li>
              <li>• 직원에게 도움을 요청하세요</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}